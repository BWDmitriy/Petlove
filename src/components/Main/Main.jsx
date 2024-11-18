import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css'; 

const Main = () => {
  const [loading, setLoading] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.mainContainer} onClick={handleClick}>
      <div className={styles.overlay}></div>
      {loading < 100 ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <div className={styles.loadingText}>{loading}%</div>
        </div>
      ) : (
        <img src="/src/assets/logo.svg" alt="Logo" className={styles.logo} />
      )}
    </div>
  );
};

export default Main;