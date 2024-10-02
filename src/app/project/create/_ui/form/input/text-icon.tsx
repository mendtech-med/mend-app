import React from 'react';
import { TbPrompt } from "react-icons/tb";


interface InputWithIconProps {
    label: string;
    placeholder: string;
}

const InputWithIcon = ({ label, placeholder }: InputWithIconProps) => {
    return (
        <div className="w-full">
            <div className="relative flex px-3 min-h-14 bg-white rounded-sm">
                <div className="w-14 grid place-items-center pointer-events-none">
                    <TbPrompt className=" text-black" size={28} />
                </div>
                <div className='flex-1 pt-4 space-y-1 pb-4' >
                    <label className=" text-md font-bold text-black w-full pt-2 pb-0 mb-0">
                        {label}
                    </label>
                    <input
                        className="block w-full pr-2 flex-1  outline-none bg-transparent text-md mt-0 pt-0"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputWithIcon;