import React from "react";

export interface CardProps {
    img: string;
    label: string;
}

const Card: React.FC<CardProps> = ({ img, label }) => {
    return (
        <div
            className={`w-[19rem] md:w-[17.5rem] lg:w-[24.1rem] xl:w-[31rem] relative`}
        >
            <img
                className={`w-[19rem] md:w-[17.5rem] lg:w-[24.1rem] xl:w-[31rem]`}
                src={img}
                alt={label}
            />
            <span className="z-10 text-white absolute bottom-4 pl-8 text-xs md:text-base">
                {label}
            </span>
        </div>
    );
};

export default Card;
