import React from "react";
import {useSession, signIn, signOut} from "next-auth/react"

import Head from "next/head";

const Index = () => {

    const {data: session, status} = useSession();

    return (
        <>
            <Head>
                <title>Welcome - Anywhere2</title>
                <link rel="icon" href="/img/floors-icon-50.png"/>
            </Head>

            {session
                ?
                <>
                    Signed in as {session.user.email} {status}<br/>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
                :
                <>
                    Not signed in {status}<br/>
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            }

            <nav className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <img src="/img/floors-icon-50.png" alt="Anywhere2 Logo"/>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                        <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Carers</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Community</a>
                    </div>
                    <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" href="">
                        Get Started
                    </a>
                    <button id="menu-btn" className="open block hamburger md:hidden focus:outline-none">
                        <span className="hamburger-top"/>
                        <span className="hamburger-middle"/>
                        <span className="hamburger-bottom"/>
                    </button>
                </div>

                <div className="md:hidden">
                    <div id="menu" className="absolute flex flex-col hidden items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <a href="">Pricing</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Community</a>
                    </div>
                </div>
            </nav>

            <section id="hero">
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex">
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Bring Everyone Together to build better products
                        </h1>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan day-to-day tasks
                            while keeping the larger teams goals in view.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a className="md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" href="">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/img/floors-icon-300.png" alt="Anywhere2 Logo"/>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            Whats different about Manage?
                        </h2>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan day-to-day tasks
                            while keeping the larger teams goals in view.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-8 md:w-1/2">
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        01
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track company-wide progress
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Track company-wide progress
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view.
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view. Example text.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        02
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Faster development time
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Faster development time
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view.
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view. Example text.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        03
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        See reports and statistics
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    See reports and statistics
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view.
                                    Manage makes it simple for software teams to plan day-to-day tasks
                                    while keeping the larger teams goals in view. Example text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl font-bold text-center">
                        Whats different about manage?
                    </h2>
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                            <img className="w-16 -mt-14 rounded-full" src="/img/avatar1.png" alt="Avatar1"/>
                            <h5 className="text-lg font-bold">Didit Velliz</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Wonderfull tools makes development rapid and easy
                            </p>
                        </div>
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img className="w-16 -mt-14 rounded-full" src="/img/avatar2.jpg" alt="Avatar1"/>
                            <h5 className="text-lg font-bold">User Anonymous</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Wonderfull tools makes development rapid and easy
                            </p>
                        </div>
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img className="w-16 -mt-14 rounded-full" src="/img/avatar3.jpg" alt="Avatar1"/>
                            <h5 className="text-lg font-bold">First Users</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Wonderfull tools makes development rapid and easy
                            </p>
                        </div>
                    </div>
                    <div className="my-16">
                        <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" href="">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            <section id="cta" className="bg-brightRed">
                <div className="container flex flex-col items-center justify-between px-6 pt-24 pb-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                    <a className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900" href="">
                        Get Started 2
                    </a>
                </div>
            </section>

            <footer className="bg-veryDarkBlue">
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                    <div className="flex-flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div>
                            <img className="h-8 mb-10" src="/img/floors-icon-300.png" alt="Avatar1"/>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <a href="#">
                                <img src="/img/floors-icon-50.png" alt="" className="h-8"/>
                            </a>
                            <a href="#">
                                <img src="/img/floors-icon-50.png" alt="" className="h-8"/>
                            </a>
                            <a href="#">
                                <img src="/img/floors-icon-50.png" alt="" className="h-8"/>
                            </a>
                            <a href="#">
                                <img src="/img/floors-icon-50.png" alt="" className="h-8"/>
                            </a>
                            <a href="#">
                                <img src="/img/floors-icon-50.png" alt="" className="h-8"/>
                            </a>
                        </div>
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; 2022 All Right Reserved
                        </div>
                    </div>
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="" className="hover:text-brightRed">Home</a>
                            <a href="" className="hover:text-brightRed">Pricing</a>
                            <a href="" className="hover:text-brightRed">Products</a>
                            <a href="" className="hover:text-brightRed">About</a>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="" className="hover:text-brightRed">Career</a>
                            <a href="" className="hover:text-brightRed">Community</a>
                            <a href="" className="hover:text-brightRed">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <form>
                            <div className="flex space-x-3">
                                <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="updates in your inbox"/>
                                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">
                            Copyright &copy; 2022 All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Index;
