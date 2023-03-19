import { useState } from "react";

import ocean from "../../assets/images/ocean.jpg";
import mountains from "../../assets/images/mountains.jpg";

export type ExplorerProps = {
    title: string;
    subTitle: string;
    description: string;
    img: string;
};

export const useExplorer = () => {
    const [explorers, setExplorers] = useState<ExplorerProps[]>([
        {
            title: "West Coast, Norway",
            subTitle: "Roundtrip from $79",
            description:
                "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
            img: ocean,
        },
        {
            title: "Mountains, Austria",
            subTitle: "One-way from $39",
            description:
                "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
            img: mountains,
        },
    ]);

    function getExplorers() {
        return explorers;
    }

    function setExplorer(item: ExplorerProps) {
        var newExplorers = [...explorers];
        newExplorers.push(item);
        setExplorers(newExplorers);
    }

    return {
        setExplorer,
        getExplorers,
    };
};
