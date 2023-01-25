import React from "react";
import { Link } from "react-router-dom";
import { useToggleStore } from "../app/store";

function About() {
    const state = useToggleStore((state) => state.toggle);
    return (
        <>
            <Link to="/">
                <span className="absolute top-5 left-5 text-6xl font-black">
                    Go Back
                </span>
            </Link>
            <div className="w-100 flex h-screen items-center justify-center text-9xl font-black">
                <p>{state.toString()}</p>
            </div>
        </>
    );
}

export default About;
