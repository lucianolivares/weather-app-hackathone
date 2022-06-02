import React from "react"
import { weekDay } from "utils/weekDay"
import styles from "./DailySection.module.css"

const DailySection = ({ forecast }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Pronostico diario</h3>
      <div>
        {forecast.forecastday.map((day) => {
          return (
            <div key={day.date} className={styles.card}>
              <p>
                {weekDay(day.date)}: mín <strong>{day.day.mintemp_c}° </strong>
                máx <strong> {day.day.maxtemp_c}°</strong>
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DailySection
