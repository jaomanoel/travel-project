import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="w-full flex items-center pb-24 justify-center">
            <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col items-center gap-16">
                <h4 className="text-base text-gray-500">Find Us On</h4>

                <div className="flex items-center gap-4">
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="text-xl text-gray-600" href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>

                <p className="text-base text-gray-500">
                    Powered by{" "}
                    <a className="underline" href="#">
                        w3.css
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
