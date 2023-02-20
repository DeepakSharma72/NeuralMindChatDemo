import React, { useEffect, useState } from "react";

const sideBarCSS = {
    normal: {
        minHeight: '100vh',
        margin: 0,
        padding: 0
    },
    mobile: {
        position: 'absolute',
        width: '200px',
        right: '0px',
        minHeight: '100vh',
        zIndex: '5',
        backgroundColor: 'white',
        transition: 'all 0.3s'
    },
    hide: {
        display: 'none'
    }
}

const navItemCSS = {
    normal: {
        fontFamily: 'verdana',
        fontWeight: 'bold',
        transition: '0.3s all',
        borderRadius: '15px'
    },
    hover: {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#1d1d83'
    }
}

function Sidebar({ activeSection, setActiveSection, windowWidth, mobActiveSide }) {
    const [hover, setHover] = useState({ one: false, two: true, three: false });
    return (
        <>
            <div className="col-md-2 col-12 shadow order-sm-2 order-1" style={{...((windowWidth > 778) ? sideBarCSS.normal : sideBarCSS.mobile),  ...((windowWidth < 778) && mobActiveSide == false ? sideBarCSS.hide : null)}}>
                <div className="sidebar-head text-center p-2">
                    <img width='100%' src="./logo.jpg"></img>
                </div>
                <div
                    style={{ ...navItemCSS.normal, ...(hover.one ? navItemCSS.hover : null), ...(activeSection === 1 ? navItemCSS.hover : null) }}
                    className="nav-bar-item my-2 p-2 mt-4"
                    onClick={() => setActiveSection(1)}
                    onMouseEnter={() => setHover({ one: true, two: false, three: false })}
                    onMouseLeave={() => setHover({ one: false, two: false, three: false })}>
                    Train <i className="bi bi-sign-railroad-fill"></i>
                </div>
                <div
                    style={{ ...navItemCSS.normal, ...(hover.two ? navItemCSS.hover : null), ...(activeSection === 2 ? navItemCSS.hover : null) }}
                    className="nav-bar-item my-2 p-2 mt-2"
                    onClick={() => setActiveSection(2)}
                    onMouseEnter={() => setHover({ one: false, two: true, three: false })}
                    onMouseLeave={() => setHover({ one: false, two: false, three: false })}>
                    Chat <i className="bi bi-chat-dots-fill"></i>
                </div>
                <div
                    style={{ ...navItemCSS.normal, ...(hover.three ? navItemCSS.hover : null), ...(activeSection === 3 ? navItemCSS.hover : null) }}
                    className="nav-bar-item my-2 p-2 mt-2"
                    onClick={() => setActiveSection(3)}
                    onMouseEnter={() => setHover({ one: false, two: false, three: true })}
                    onMouseLeave={() => setHover({ one: false, two: false, three: false })}>
                    Admin <i className="bi bi-person-circle"></i>
                </div>
            </div>
        </>
    )
}

export default Sidebar;