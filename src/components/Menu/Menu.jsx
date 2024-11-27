import styles from "./Menu.module.css";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const Menu = ({ isAuthenticated }) => {
  return (
    <div className={styles.menu}>
      <Nav />
      <div className={styles.authSection}>
        {isAuthenticated ? <UserNav /> : <AuthNav />}
      </div>
    </div>
  );
};

export default Menu;
