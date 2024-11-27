// components/NewsList.jsx
import React from "react";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";

const NewsList = ({ news }) => {
  return (
    <div className={styles.newsList}>
      {news.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
