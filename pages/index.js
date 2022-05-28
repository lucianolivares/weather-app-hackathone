import Head from "next/head"
import HourlySection from "../components/HourlySection"
import Banner from "../components/Banner"
import styles from "../styles/Home.module.css"

export default function Home({ data }) {
  const { current, location, forecast } = data
  const forecastToday = forecast.forecastday[0]
  return (
    <>
      <Head>
        <title>Weather App Hackathone</title>
        <meta name="description" content="Aplicación para hackathone midudev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner location={location} current={current} />
        <HourlySection {...forecastToday} />

        <p>
          Fecha <strong>Min </strong> <strong>Max</strong>
        </p>
        <div>
          {forecast.forecastday.map((day) => {
            return (
              <div key={day.date} className={styles.card}>
                <p>
                  {day.date}: <strong>{day.day.mintemp_c}° </strong>
                  <strong> {day.day.maxtemp_c}°</strong>
                </p>
              </div>
            )
          })}
        </div>
      </main>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "1715fa436bmsh52f239e30da0e95p1e5c23jsn282838ce24bb",
    },
  }

  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=La%20Serena&days=3&lang=es",
    options
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
