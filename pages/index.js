import Head from "next/head"

import Banner from "components/Banner"
import HourlySection from "components/HourlySection"

import styles from "styles/Home.module.css"
import DailySection from "components/DailySection"
import getForecast from "services/getForecast"

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
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getForecast("La Serena")
  return {
    props: {
      data,
    },
  }
}
