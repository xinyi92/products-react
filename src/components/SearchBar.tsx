interface Props {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

function SearchBar({ value, onChange, placeholder = 'Search products...' }: Props) {
    return (
        <input type="text" value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default SearchBar