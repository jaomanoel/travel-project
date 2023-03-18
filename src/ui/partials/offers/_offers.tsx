import React from "react";
import { CardProps, useCard } from "../../../data/hooks/useCard";
import Card from "../../components/surface/Card/Card";

import cinqueTerre from "../../../assets/images/cinqueterre.jpg";

const Offers: React.FC = () => {
    const card: CardProps[] = useCard().getCards();

    return (
        <div className="w-full px-16 pt-36 pb-24 flex justify-center items-center">
            <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col items-center justify-center">
                <h3 className="w-full pb-8 text-base text-left md:text-lg">
                    Good Offers Right Now
                </h3>
                <p className="w-full pb-4 text-gray-600 md:text-base">
                    Up to <span className="font-bold">50%</span> discount
                </p>

                <div className="flex flex-col w-full md:flex-row justify-between gap-12">
                    <div className="w-[19rem] md:w-[36.2rem] lg:w-[49rem] xl:w-[63.4rem] relative">
                        <img
                            className="w-[19rem] md:w-[36.2rem] lg:w-[49rem] xl:w-[63.4rem]"
                            src={cinqueTerre}
                            alt="Cinque Terre"
                        />
                        <span className="z-10 text-white absolute bottom-4 pl-8 text-xs md:text-base">
                            Cinque Terre
                        </span>
                    </div>

                    <div className="flex flex-col md:w-[36.2rem] lg:w-2/4 justify-end gap-12 md:flex-row flex-wrap">
                        {card.map((item, index) => (
                            <Card
                                key={index}
                                img={item.img}
                                label={item.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
