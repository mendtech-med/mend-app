import React from "react";

export interface IOpt {
    label: string;
    value: string;
}

interface SelectProps {
    options: IOpt[]; // Options for the dropdown
    onChange?: (value: string) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (onChange) {
            onChange(value); // Notify the parent if onChange is provided
        }
    };
    console.log("value", value);

    return (
        <select
            value={value} // Bind to internal state
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
            <option value="" disabled>
                Select an option
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
