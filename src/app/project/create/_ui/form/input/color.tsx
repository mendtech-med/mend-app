'use client';
import React, { use, useEffect } from "react";
import { MdColorLens } from "react-icons/md";
import { cn } from "@/lib/utils";
interface ColorInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputColor = ({
    value,
    onChange,
}: ColorInputProps) => {

    const [color, setColor] = React.useState("#000000");

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setColor(e.target.value);
        onChange(e);
    }


    useEffect(() => {
        console.log("color", color);
    }, [color]);

    return (
        <div className="relative w-20 border-white border-2 grid place-items-center h-20 rounded-full bordne" style={{ backgroundColor: color }}>
            <div className="flex items-center relative pointer-events-none bg-none">
                <MdColorLens size={30} className="text-white" />
            </div>
            <input
                type="color"
                value={color}
                className={"w-16 h-16 absolute rounded-full opacity-0 cursor-pointer border-none outline-none appearance-none bg-transparent"}
                onChange={hanldeChange}
            />
        </div>
    );
}

export default InputColor;