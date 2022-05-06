import React from "react";

import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <label htmlFor="my-drawer" className="btn btn-outline drawer-button">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </label>
                <Link href="/dashboard">
                    <a className="ml-5">Anywhere2</a>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered"/>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="example" src="https://api.lorem.space/image/face?hash=33791"/>
                        </div>
                    </label>
                    <ul tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
