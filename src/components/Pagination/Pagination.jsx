// components/Pagination.jsx
import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);
  const handleLastPage = () => onPageChange(totalPages);

  return (
    <div className={styles.pagination}>
      <button onClick={handleFirstPage} disabled={currentPage === 1}>
        &lt;&lt;
      </button>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        &lt;
      </button>
      {/* Render page numbers here */}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
      <button onClick={handleLastPage} disabled={currentPage === totalPages}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
