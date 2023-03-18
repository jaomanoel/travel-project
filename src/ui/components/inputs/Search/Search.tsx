import React from "react";

import plane from "../../../../assets/icons/plane.svg";
import london from "../../../../assets/images/london.jpg";

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
    return (
        <div className="w-full flex justify-center py-0 sm:py-24 md:py-48 relative items-center">
            <img className="w-full h-full absolute" src={london} alt="london" />

            <div className="w-full z-10 sm:max-w-screen-sm xl:max-w-screen-lg flex flex-col items-center">
                <nav className="w-full">
                    <ul className="flex w-full justify-between items-center">
                        <li className="text-white w-full flex items-center justify-center bg-black hover:bg-red-500">
                            <a
                                className="flex items-center w-full gap-8 justify-center px-8 py-2 sm:py-4"
                                href="#"
                            >
                                <img
                                    className="rotate-45"
                                    src={plane}
                                    alt="plane"
                                />
                                <span>Fight</span>
                            </a>
                        </li>
                        <li className="text-white w-full flex items-center justify-center bg-black hover:bg-red-500">
                            <a
                                className="flex items-center w-full gap-8 justify-center px-8 py-2 sm:py-4"
                                href="#"
                            >
                                <i className="fa-solid fa-bed"></i>
                                <span>Hotel</span>
                            </a>
                        </li>
                        <li className="text-white w-full justify-center flex items-center px-8 bg-black hover:bg-red-500">
                            <a
                                className="flex items-center w-full gap-8 justify-center px-8 py-2 sm:py-4"
                                href="#"
                            >
                                <i className="fa-solid fa-car"></i>
                                <span>Rental</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="w-full bg-white px-16 py-20">
                    <h2 className="pb-12 text-lg">Travel the world with us</h2>

                    <form className="flex flex-col w-full gap-12 items-start">
                        <div className="flex flex-col gap-12 md:flex-row w-full">
                            <div className="flex flex-col w-full">
                                <label htmlFor="from">From</label>
                                <input
                                    className="px-8 w-full border border-solid border-gray-400 py-8"
                                    type="text"
                                    name="from"
                                    id="from"
                                    placeholder="Departing from"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="to">To</label>
                                <input
                                    className="px-8 w-full border border-solid border-gray-400 py-8"
                                    type="text"
                                    name="to"
                                    id="to"
                                    placeholder="Arriving at"
                                />
                            </div>
                        </div>

                        <input
                            className="bg-gray-600 px-16 p-4 text-white text-sm"
                            type="submit"
                            value="Search and dates"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
