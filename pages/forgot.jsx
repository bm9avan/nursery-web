import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../public/favicon.png'

const forgot = () => {
    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Image
                            className="mx-auto h-12 w-auto"
                            src={icon}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Enter e-mail to continue
                        </h2>
                        <div className=' mt-6 text-center text-gray-500'>or <Link href='/login' className='underline hover:text-g-900'>login</Link> if you remember password </div>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-g-500 focus:outline-none focus:ring-g-500 sm:text-sm" placeholder="Email address" />
                            </div>

                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default forgot
