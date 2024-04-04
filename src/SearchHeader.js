import React, { useState } from "react";

export default function SearchHeader({ search }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(term);
  };

  return (
    <div className="header">
      <form onSubmit={handleFormSubmit}>
        <label>Search</label>
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
