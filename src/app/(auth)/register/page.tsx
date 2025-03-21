import RegisterForm from "./form";

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Register</h1>
            <RegisterForm />
        </div>
    )
}

