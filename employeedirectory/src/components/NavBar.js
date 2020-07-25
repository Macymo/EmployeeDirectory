import React from "react";
import SearchBox from "./SearchBox.js";

function NavBar({ handleInputChange }) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                <SearchBox handleInputChange={handleInputChange} />
            </div>
        </nav>
    )
}

export default NavBar;