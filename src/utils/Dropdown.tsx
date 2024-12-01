import React, { useRef } from 'react'
import Select, { Props as SelectProps, ActionMeta } from 'react-select'

interface OptionType {
    id: string; // Assuming id is a number
    language: string; // Language is a string
}
interface CustomDropdownProps extends SelectProps<any> {
    options: OptionType[]
    onChange: (value: string) => void
    title: string
    value: string
}

const CustomDropdown = React.forwardRef<HTMLInputElement, CustomDropdownProps>(({
    options,
    onChange,
    title,
    value,
    ...rest
}, ref) => {
    const selectRef = useRef<any>(null);

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: '#FDFDFF', // Tailwind bg-secondary-200 equivalent
            borderColor: '#CCCCCC', // Tailwind border-gray-400 equivalent
            color: '#666666', // Tailwind text-gray-700 equivalent
            borderRadius: '0.375rem', // Tailwind rounded-2xl equivalent
            padding: '0.4rem',
            fontFamily: 'var(--font-noto-sans)',
            fontWeight: 400,
            boxShadow: state.isFocused ? '0 0 0 1px #012279' : null, // Tailwind focus:ring-primary equivalent
            '&:hover': {
                borderColor: '#012279', // Tailwind focus:border-primary equivalent
            },
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            color: '#666666', // Tailwind text-gray-700 equivalent
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: '#FDFDFF', // Tailwind bg-white equivalent
            color: '#666666',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            fontFamily: 'var(--font-noto-sans)',
            fontWeight: 400,
            backgroundColor: state.isSelected
                ? '#012279'
                : state.isFocused
                    ? '#EBF8FF'
                    : '#FDFDFF', // Tailwind primary color equivalent
            color: state.isSelected ? '#FDFDFF' : '#666666', // Tailwind text-gray-900 equivalent
            '&:hover': {
                backgroundColor: '#EBF8FF', // Tailwind bg-primary-100 equivalent
            },
        }),
    }

    const selectOptions = options.map((option) => ({
        value: option?.id,
        label: option?.language,
    }))

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    const capitalizedOptions = selectOptions.map((opt) => ({
        ...opt,
        label: capitalizeFirstLetter(opt.label),
    }))

    return (
        <div className="w-full flex flex-col space-y-3" ref={ref}>
            <div
                onClick={() => {
                    if (selectRef.current) {
                        selectRef.current.focus();
                    }
                }}
            >
                <Select

                    instanceId={title}
                    {...rest}
                    ref={selectRef}
                    value={capitalizedOptions.find((opt) => opt.value === value)}
                    onChange={(opt: any, actionMeta: ActionMeta<any>) => onChange(opt.value)}
                    options={capitalizedOptions}
                    styles={customStyles}
                    className="w-full cursor-pointer "
                    components={{
                        IndicatorSeparator: () => null, // Remove the default indicator separator
                        DropdownIndicator: (props) => (
                            <div {...props.innerProps} className="mr-5">
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.67724 0.421348L5.97302 5.46286L10.8658 0.403237L12.1883 1.95532L5.79167 8.58363L0.164004 1.97902L1.67724 0.421348Z" fill="white" />
                                </svg>

                            </div>
                        ),
                    }}
                />
            </div>
        </div>
    )
});
CustomDropdown.displayName = 'CustomDropdown'

export default CustomDropdown
