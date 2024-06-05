interface FilterTabProps {
    selected: boolean;
    onClick: () => void;
    label: string;
}

const FilterTab: React.FC<FilterTabProps> = ({ selected, onClick, label }) => {
    return (
        <button className={`rounded-md m-1 px-3 border text-sm ${selected ? "bg-white" : "bg-transparent border-zinc-300"}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default FilterTab;