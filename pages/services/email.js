import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const email = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Email - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>Email services</p>
                </>
            }/>
        </div>
    );

}

export default email;
