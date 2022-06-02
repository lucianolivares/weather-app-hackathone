import styles from "./HourlySection.module.css"

function HourlySection({ hours }) {
  // Pendiente agregar horas del próximo día cuando sean menos
  // de 5 horas restantes del día actual
  const elements = hours.map((hourly) => {
    const show = new Date(hourly.time) >= new Date(Date.now())
    const hora = new Date(hourly.time).toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    })
    return (
      show && (
        <div key={hora} className={styles.card}>
          <p className={styles.label}>{hora}</p>
          <p className={styles.label}>
            Temp: <strong>{hourly.temp_c}°</strong>
          </p>
        </div>
      )
    )
  })
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Próximas Horas</h3>
      <div className={styles.div}>{elements}</div>
    </section>
  )
}

export default HourlySection
