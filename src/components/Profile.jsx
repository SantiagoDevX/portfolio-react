import styles from "./Header.module.css";

function Profile() {
  return (
    <>
      <h1 className={styles.name}>Santiago Castillo</h1>
      <h2 className={styles.comercialName}>&lt;SantiagoDevX/&gt;</h2>
      <p>
        <b>Desarrollador Web</b>
      </p>
      <p className={styles.basicDescription}>
        Apasionado por la creación y colaboración de proyectos y soluciones
        tecnológicas
      </p>
    </>
  );
}

export default Profile;

