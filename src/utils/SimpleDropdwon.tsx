'use client';

import { dropdownOptions } from "@/types/dropdown";

interface SimpleDropdownProps {
    options: dropdownOptions[]; // Array of dropdown options
    handleChange: any
    title: string
    selectedOption: string

}

export default function SimpleDropdown({ options, handleChange, selectedOption, title }: SimpleDropdownProps) {

    return (
        <div className="w-full max-w-xs mx-auto mt-10">
            <label
                htmlFor="options"
                className="block  text-white text-[16px] font-medium mb-2"
            >
                {title}
            </label>
            <select
                id="options"
                value={selectedOption}
                onChange={handleChange}
                className="w-full  flex mt-1 p-2 border outline-none border-gray-300 rounded-md shadow-sm text-sm  bg-white"
            >
                <option value="" disabled>
                    Choose an option
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </div>
    );
}
