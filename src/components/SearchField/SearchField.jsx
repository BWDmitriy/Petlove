// components/SearchField.jsx
import React, { useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        🔍
      </button>
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearButton}
        >
          ❌
        </button>
      )}
    </form>
  );
};

export default SearchField;
