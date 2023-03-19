import { useState } from "react";
import Search from "./ui/components/inputs/Search/Search";
import Header from "./ui/components/surface/Header/Header";
import Explorer from "./ui/partials/explorer/_explorer";
import Offers from "./ui/partials/offers/_offers";
import Newsletter from "./ui/partials/newsletter/_newsletter";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="h-full flex justify-between flex-col bg-slate-200">
            <Header />
            <Search />
            <Offers />
            <Explorer />
            <Newsletter />
        </div>
    );
}

export default App;
