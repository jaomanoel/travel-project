import React from "react";

export interface CardExplorerProps {
    title: string;
    subtitle: string;
    description: string;
    img: string;
}

const CardExplorer: React.FC<CardExplorerProps> = ({
    title,
    subtitle,
    img,
    description,
}) => {
    return (
        <div className="w-[28.8rem] md:w-[36.2rem] lg:w-[49rem] xl:w-[63.4rem] flex flex-col gap-12 pb-12 bg-white">
            <img src={img} alt={title} />
            <h4 className="px-12 text-base">{title}</h4>
            <h5 className="px-12 text-sm text-gray-400">{subtitle}</h5>
            <p className="px-12 text-sm">{description}</p>
            <a className="px-24 text-sm" href="#">
                Buy Tickets
            </a>
        </div>
    );
};

export default CardExplorer;
