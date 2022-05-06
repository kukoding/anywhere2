import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const excel = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Excel - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <p>Excel services</p>
                </>
            }/>
        </div>
    )

};

export default excel;
