// src/components/FilterBar.tsx
interface FilterBarProps {
  categories: { id: number; name: string }[];
  selected: number | null;
  onChange: (id: number | null) => void;
}

export default function FilterBar({ categories, selected, onChange }: FilterBarProps) {
  return (
    <div className="mb-4 flex gap-2 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-1 rounded ${selected === null ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-3 py-1 rounded ${selected === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
