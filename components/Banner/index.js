import styles from "./Banner.module.css"
function Banner({ location, current }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{location.name}</h1>
        <img
          className={styles.img}
          src={current.condition.icon}
          layout="fill"
          alt="icono condicion actual"
        />
      </header>
      <h2 className={styles.h2}>{current.temp_c}°</h2>
      <p>
        {current.condition.text} <br />
        <span>Humedad {current.humidity}% </span>
        <br />
        <span>Vientos de {current.wind_kph} km/h</span>
      </p>
    </section>
  )
}

export default Banner
