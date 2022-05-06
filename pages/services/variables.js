import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const variables = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Variables - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>Variables services</p>
                </>
            }/>
        </div>
    )

}

export default variables;
