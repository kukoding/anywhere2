import React from "react";

import Link from "next/link";

const SideBar = () => {

    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
                <Link href="/services/pdf">
                    <a>Output PDF</a>
                </Link>
            </li>
            <li>
                <Link href="/services/email">
                    <a>Send Email</a>
                </Link>
            </li>
            <li>
                <Link href="/services/excel">
                    <a>Output Excel</a>
                </Link>
            </li>
            <li>
                <Link href="/services/qr">
                    <a>QR Code</a>
                </Link>
            </li>
            <li>
                <Link href="/services/image">
                    <a>Image</a>
                </Link>
            </li>
            <li>
                <Link href="/services/signing">
                    <a>Signing</a>
                </Link>
            </li>
            <li>
                <Link href="/services/variables">
                    <a>Variables</a>
                </Link>
            </li>
        </ul>
    )

}

export default SideBar;
