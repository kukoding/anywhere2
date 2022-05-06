import React from "react";

import Head from "next/head";
import NavigationDrawer from "../components/NavigationDrawer";

import Hero from "../components/Hero";
import DashboardStats from "../components/DashboardStats";

const dashboard = () => {

    return (
        <div data-theme="winter">
            <Head>
                <title>Dashboard - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={
                <>
                    <Hero/>
                    <DashboardStats/>
                </>
            }/>
        </div>
    )

}

export default dashboard
