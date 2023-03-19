import React, { useState, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../public/favicon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const signup = ({user}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let router = useRouter()

    useEffect(() => {
        if (user.val) {
            router.push('/')
        }
    }, [])

    function handlerChange(e) {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name == "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            userId: name,
            email: email,
            password: password
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/signup'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        toast.success(result.success, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        setName("")
        setEmail("")
        setPassword("")

    }
    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Image className="mx-auto h-12 w-auto" src={icon} alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create new account
                        </h2>
                        <div className=' mt-6 text-center text-gray-500'>or <Link href='/login' className='underline hover:text-g-900'>login</Link> if you have accont already </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input id="name" value={name} onChange={handlerChange} name="name" type="name" autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-g-500 focus:outline-none focus:ring-g-500 sm:text-sm" placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input id="email" value={email} onChange={handlerChange} name="email" type="email" autoComplete="email" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-g-500 focus:outline-none focus:ring-g-500 sm:text-sm" placeholder="Email address" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input id="password" value={password} onChange={handlerChange} name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-g-500 focus:outline-none focus:ring-g-500 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>



                        <button
                            type="submit"
                            // onClick={handleSubmit}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2" >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-g-500 group-hover:text-g-400" aria-hidden="true" />
                            </span>
                            Sign up
                        </button>
                    </form>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    )
}

export default signup