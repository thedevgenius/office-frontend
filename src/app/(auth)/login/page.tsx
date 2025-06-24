'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
    password: z.string().min(6, 'Password is required')
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: LoginFormData) => {
        console.log(data);
    }

    return (
        <>
            <main className="min-h-screen w-full flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">
                            Sign In
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;