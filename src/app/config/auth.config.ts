import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma.config";
import { verify } from "argon2";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email! },
                });

                if (!user || !user.password) {
                    throw new Error("User not found or invalid credentials.");
                }

                const isValid = await verify(user.password, credentials?.password!);
                if (!isValid) {
                    throw new Error("Invalid credentials.");
                }

                return {
                    id: user.id,
                    email: user.email,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 60, // 30 minutes
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                email: token.email,
            };
            return session;
        },
    },
};