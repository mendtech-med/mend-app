

import React from 'react';

interface InputTextProps {
    name: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
}


const InputText = (props: InputTextProps) => {
    const { name, label, placeholder, value, onChange, error } = props;
    return (
        <div className="flex-1 max-w-fit">
            <input
                type="text"
                name={name}
                id={name}
                value={value}
                placeholder="Agent's name"
                onChange={onChange}
                className="text-2xl max-w-52 font-bold bg-transparent outline-none"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default InputText;