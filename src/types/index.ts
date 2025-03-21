import { z } from "zod";

export const registerFormSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

