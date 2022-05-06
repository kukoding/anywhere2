import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const Signing = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Signing - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>Signing services</p>
                </>
            }/>
        </div>
    )

}

export default Signing;
