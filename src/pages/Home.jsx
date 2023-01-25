import React from "react";
import { Link } from "react-router-dom";
import { useToggleStore } from "../app/store";
import Starter from "../components/Starter";

function Home() {
    const set100 = useToggleStore((state) => state.set100);
    const set200 = useToggleStore((state) => state.set200);
    return (
        <>
            <Starter />
            <Link to="/about">
                <span className="absolute top-5 left-5 text-6xl font-black">
                    About
                </span>
            </Link>
            <div className="absolute right-5 top-5 flex flex-col gap-5">
                <button className="bg-green-200" onClick={set100}>
                    set100
                </button>
                <button className="bg-red-200" onClick={set200}>
                    set200
                </button>
            </div>
        </>
    );
}

export default Home;
