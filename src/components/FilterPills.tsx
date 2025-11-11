interface FilterPillsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterPills({ filters, activeFilter, onFilterChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
