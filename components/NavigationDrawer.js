import React from "react";

import Link from "next/link";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const NavigationDrawer = ({ContentBody}) => {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center">
                <NavBar/>
                {ContentBody}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay">Main Menu</label>
                <SideBar/>
            </div>
        </div>
    );

}

export default NavigationDrawer;
