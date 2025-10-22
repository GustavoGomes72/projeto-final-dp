import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function CategoryFilter({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="categories">
      {categories.map((c) => (
        <button key={c} onClick={() => onSelect(c)}>
          {c}
        </button>
      ))}
      <button onClick={() => onSelect("all")}>Todas</button>
    </div>
  );
}
