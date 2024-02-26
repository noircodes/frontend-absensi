"use client"
import Image from "next/image"
import { handleSubmit } from "./login"
import { useEffect, useRef, useState } from "react"
import { Button, Input } from "@nextui-org/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation"

export const LoginPage = () => {
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const count = useRef(0);
    console.log(`PREFIX PATH : ${process.env.NEXT_PUBLIC_PREFIX_PATH}`)

    useEffect(() => {
        count.current = count.current + 1
    });
    return (
        <>
            <main className="bg-[#3c4859] h-screen flex items-center justify-center p-10">
                <div className='grid w-full h-full grid-cols-1 bg-white md:grid-cols-2 rounded-xl overflow-hidden'>
                    <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
                        <div className="my-4">
                            <h1 className="text-3xl font-semibold">Login</h1>
                            <p className="mt-2 text-xs text-slate-400">
                                {' '}
                                See Your Growth and get consulting growth
                            </p>
                        </div>

                        <form>
                            <label htmlFor="username">Username</label>
                            <Input
                                className='mt-2 mb-4'
                                variant="bordered"
                                type="username"
                                id="username"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                            <Input
                                className='mt-2 mb-4'
                                variant="bordered"
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button
                                type='submit'
                                className='w-full mt-6 rounded-full bg-indigo-600 hover:bg-indigo-700'
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default form submission
                                    handleSubmit({
                                    username: username,
                                    password: password,
                                    router:router
                                    });
                                }}
                            >
                                Login
                            </Button>
                        </form>
                        <p className="mt-4 text-xs text-slate-200">
                            @2024 All rights reserved
                        </p>
                    </div>
                    <div className="relative hidden md:block">
                        <Image className="object-cover"
                        fill={true}
                        src="/bg.jpg"
                        alt="background image"
                        />
                    </div>
                </div>
            </main>
            <ToastContainer
                theme="dark"
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}