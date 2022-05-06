import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const qr = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>QR - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>QR services</p>
                </>
            }/>
        </div>
    )

}

export default qr;
