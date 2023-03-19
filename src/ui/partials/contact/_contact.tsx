import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="w-full flex items-center px-16 pb-24 justify-center">
            <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col items-start justify-start gap-12">
                <h4 className="text-2xl">Contact</h4>
                <p className="text-sm md:text-base">
                    Let us book your next trip!
                </p>
                <div>
                    <div className="flex items-baseline gap-16">
                        <i className="fa-solid fa-location-dot text-xs"></i>
                        <p className="text-sm md:text-base">Chicago, US</p>
                    </div>
                    <div className="flex items-center gap-16">
                        <i className="fa-solid fa-phone text-xs"></i>
                        <p className="text-sm md:text-base">
                            Phone: +00 151515
                        </p>
                    </div>
                    <div className="flex items-center gap-16">
                        <i className="fa-solid fa-envelope text-xs"></i>
                        <p className="text-sm md:text-base">
                            Email: mail@mail.com
                        </p>
                    </div>
                </div>

                <form className="w-full flex flex-col gap-12">
                    <input
                        className="w-full px-12 py-8 border border-solid border-gray-400 text-sm"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                    <input
                        className="w-full px-12 py-8 border border-solid border-gray-400 text-sm"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        className="w-full px-12 py-8 border border-solid border-gray-400 text-sm"
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Message"
                    />

                    <input
                        className="bg-black w-190 px-16 py-8 text-sm text-white uppercase"
                        type="submit"
                        value="SEND MESSAGE"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;
