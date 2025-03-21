"use client"

import { FormEvent } from "react"
import { RegisterFormSchema } from "@/types"

export default function RegisterForm() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="firstName" />
            <input type="text" name="lastName" />
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Register</button>
        </form>
    )
}



