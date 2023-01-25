import React from "react";

function Starter() {
    return (
        <div className="w-100 flex h-screen flex-col items-center justify-center gap-5">
            <span className="text-8xl font-black text-[#f8385c]">
                <a
                    target="_blank"
                    href="https://vitejs.dev/"
                    className="cursor-pointer hover:text-9xl hover:text-[#38bdf8]"
                >
                    Vite
                </a>{" "}
                +{" "}
                <a
                    target="_blank"
                    href="https://reactjs.org/"
                    className="cursor-pointer hover:text-9xl hover:text-[#38bdf8]"
                >
                    React
                </a>{" "}
                +{" "}
                <a
                    target="_blank"
                    href="https://tailwindcss.com"
                    className="cursor-pointer hover:text-9xl hover:text-[#38bdf8]"
                >
                    Tailwind
                </a>
            </span>
            <div className="font-semibold">
                Starter for Vite + React + Tailwind + Zustand
            </div>
        </div>
    );
}

export default Starter;
