// pages/NewsPage.jsx
import React, { useState, useEffect } from "react";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./NewsPage.module.css";
import Title from "../../components/Title/Title";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch news from backend using query and page
  }, [query, page]);

  return (
    <div className={styles.newsPage}>
      <Title text="Latest News" />
      <SearchField onSearch={setQuery} />
      <NewsList news={news} />
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default NewsPage;
