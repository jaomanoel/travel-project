import React from "react";
import { ExplorerProps, useExplorer } from "../../../data/hooks/useExplorer";
import CardExplorer from "../../components/data-display/CardExplorer/CardExplorer";

const Explorer: React.FC = () => {
    const explorers: ExplorerProps[] = useExplorer().getExplorers();

    return (
        <div className="w-full flex items-center px-16 pb-24 justify-center">
            <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col items-start justify-start">
                <h3 className="w-full pb-8 text-base text-left md:text-lg">
                    Explorer Nature
                </h3>
                <p className="w-full pb-4 text-gray-600 text-sm md:text-base">
                    Travel with us and see nature at its finest
                </p>

                <div className="flex w-full flex-col gap-12 md:flex-row justify-between">
                    {explorers.map((item, index) => (
                        <CardExplorer
                            key={index}
                            title={item.title}
                            subtitle={item.subTitle}
                            description={item.description}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explorer;
