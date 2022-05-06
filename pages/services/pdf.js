import React from "react";

import Head from "next/head";

import NavigationDrawer from "../../components/NavigationDrawer";

const pdf = () => {

    const Views = () => {

        return (
            <>
                <h1>Output PDF</h1>
                <p>This is the template</p>
                <div className="overflow-x-auto mt-5">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th/>
                            <th>Template Name</th>
                            <th>Paper Size</th>
                            <th>Print Orientation</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>INVOICE TEMPLATE A</td>
                            <td>A4</td>
                            <td>Portrait</td>
                            <td/>
                        </tr>
                        </tbody>
                    </table>
                    <div className="btn-group">
                        <button className="btn">1</button>
                        <button className="btn btn-active">2</button>
                        <button className="btn">3</button>
                        <button className="btn">4</button>
                    </div>
                </div>
            </>
        )

    }

    return (
        <div data-theme="winter">
            <Head>
                <title>PDF - Anywhere2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationDrawer ContentBody={<Views/>}/>
        </div>
    )

}

export default pdf;
