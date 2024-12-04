import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className={styles.registrationPage}>
        <div className={styles.background}>
          <img
            src="/src/assets/reg-cat-mob.png"
            alt="Registration Cat"
            className={styles.image}
          />
          <div className={styles.formContainer}>
            <h2 className={styles.title}>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className={styles.input}
              />
              <p className={styles.error}>{errors.name?.message}</p>

              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={styles.input}
              />
              <p className={styles.error}>{errors.email?.message}</p>

              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={styles.input}
              />
              <p className={styles.error}>{errors.password?.message}</p>

              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className={styles.input}
              />
              <p className={styles.error}>{errors.confirmPassword?.message}</p>

              <button type="submit" className={styles.registrationButton}>
                REGISTRATION
              </button>
            </form>
            <p className={styles.loginText}>
              Already have an account?{" "}
              <Link href="/login" className={styles.loginLink}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
