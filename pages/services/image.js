import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const image = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Image - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>Image services</p>
                </>
            }/>
        </div>
    )

}

export default image;
