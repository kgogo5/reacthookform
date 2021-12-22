import { Checkbox } from "@mui/material";
import { useState } from "react";

const options = ["Selected Item 1", "Selected Item 2", "Selected Item 3"];

export default function App() {
  const [selected, setSelected] = useState<any>([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    if (value === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    if (selected.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selected.filter((s: any) => s !== value);
      setSelected(newSelected);
    } else {
      // if value not present
      setSelected([...selected, value]);
    }
  };

  const listItem = options.map((option: any) => {
    return (
      <div key={option}>
        <Checkbox
          value={option}
          onChange={handleChange}
          checked={selected.includes(option)}
        />
        <span>{option}</span>
      </div>
    );
  });

  return (
    <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
      <Checkbox value="all" onChange={handleChange} checked={isAllSelected} />
      <span> Select All</span>
      {listItem}
    </div>
  );
}
