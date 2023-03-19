import React from "react";

const newsletter: React.FC = () => {
    return (
        <div className="w-full px-16 flex pb-24 md:pb-48 items-center justify-center">
            <div className="w-full flex flex-col px-16 pt-20 pb-12 lg:max-w-screen-lg xl:max-w-screen-xl bg-gray-600 gap-16">
                <h4 className="text-white text-2xl">
                    Get the best offers first!
                </h4>
                <p className="text-white text-sm">join our newsletter</p>

                <form className="flex flex-col">
                    <label className="text-white text-base" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="mb-12 px-12 py-8 w-full text-sm"
                        placeholder="Your Email address"
                    />

                    <input
                        className="text-white text-sm w-100 px-16 py-4 bg-red-600 hover:opacity-90s"
                        type="submit"
                        value="Subscribe"
                    />
                </form>
            </div>
        </div>
    );
};

export default newsletter;
