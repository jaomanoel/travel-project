import { useState } from "react";
import Search from "./ui/components/inputs/Search/Search";
import Header from "./ui/components/surface/Header/Header";
import Explorer from "./ui/partials/explorer/_explorer";
import Offers from "./ui/partials/offers/_offers";
import Newsletter from "./ui/partials/newsletter/_newsletter";
import Contact from "./ui/partials/contact/_contact";
import Footer from "./ui/components/surface/Footer/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="h-full flex justify-between flex-col bg-slate-200">
            <Header />
            <Search />
            <Offers />
            <Explorer />
            <Newsletter />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
