import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/config/prisma.config";
import { hash } from "argon2";
import { registerFormSchema } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate using Zod schema
    const validatedData = registerFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.issues },
        { status: 400 }
      );
    }

    // Hash password and create user
    const hashedPassword = await hash(validatedData.data.password);
    const user = await prisma.user.create({
      data: {
        firstName: validatedData.data.firstName,
        lastName: validatedData.data.lastName,
        email: validatedData.data.email,
        password: hashedPassword,
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);

    // Handle unique constraint violation
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
