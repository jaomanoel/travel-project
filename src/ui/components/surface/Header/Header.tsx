import React from "react";

import search from "../../../../assets/icons/search.svg";
import loc from "../../../../assets/icons/loc.svg";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="w-full h-40 px-16 flex items-center justify-center">
            <div className="w-full sm:max-w-screen-sm xl:max-w-screen-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-16 h-16" src={loc} alt="logo" />
                    <h1 className="text-red-600 font-medium text-base">Logo</h1>
                </div>

                <img
                    className="hover:cursor-pointer w-16 h-16"
                    src={search}
                    alt="Buscar"
                />
            </div>
        </div>
    );
};

export default Header;
