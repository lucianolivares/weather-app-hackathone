import styles from "./HourlySection.module.css"

function HourlySection({ hour }) {
  const elements = hour.map((hourly) => {
    const show = new Date(hourly.time) >= new Date(Date.now())
    const hora = new Date(hourly.time).toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    })
    return (
      <>
        {show && (
          <div key={hourly.time} className={styles.card}>
            <p className={styles.label}>{hora}</p>
            <p className={styles.label}>
              Temp: <strong>{hourly.temp_c}°</strong>
            </p>
          </div>
        )}
      </>
    )
  })
  return (
    <section>
      <h1 className={styles.h1}>Hoy</h1>
      <div className={styles.div}>{elements}</div>
    </section>
  )
}

export default HourlySection
