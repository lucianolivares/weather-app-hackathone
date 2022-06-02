import Head from "next/head"

import Banner from "components/Banner"
import HourlySection from "components/HourlySection"

import styles from "styles/Home.module.css"
import DailySection from "components/DailySection"

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
        <HourlySection hours={forecastToday.hour} />
        <DailySection forecast={forecast} />
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
