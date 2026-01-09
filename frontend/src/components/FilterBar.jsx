const FilterBar = ({ setFilter }) => (
  <div className="flex gap-2 mb-4">
    {["All", "Pending", "Completed"].map((f) => (
      <button
        key={f}
        onClick={() => setFilter(f)}
        className="px-3 py-1 border rounded bg-violet-300 hover:cursor-pointer hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
      >
        {f}
      </button>
    ))}
  </div>
);

export default FilterBar;
