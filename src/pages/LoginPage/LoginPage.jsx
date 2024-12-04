import React, { useState } from "react";
import Header from "../../components/Header/Header"; // Make sure to import your Header component
import styles from "./LoginPage.module.css"; // Import the CSS module
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className={styles.background}></div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Log in</h2>
        <p className={styles.welcomeText}>
          Welcome! please enter your credentials to login to the platform:
        </p>
        <input type="email" placeholder="Email" className={styles.input} />
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.input}
          />
          <svg className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            <use
              xlinkHref={`/src/assets/icons.svg#icon-${
                showPassword ? "eye" : "eye-off"
              }`}
            />
          </svg>
        </div>
        <button className={styles.loginButton}>LOG IN</button>
        <p className={styles.registerText}>
          Don't have an account?{" "}
          <Link className={styles.registerLink} to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
