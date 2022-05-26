import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const { current, location, forecast } = data;
  const forecast_today = forecast.forecastday[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App Hackathone</title>
        <meta name="description" content="Aplicación para hackathone midudev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>{location.name}</h3>
        <h1 className={styles.title}>{current.temp_c}°</h1>
        <p>
          {current.condition.text} <span>Humedad: {current.humidity}% </span>
          <span>Viento:{current.wind_kph} km/h</span>
        </p>
        <img
          src={current.condition.icon}
          layout="fill"
          alt="icono condicion actual"
        />

        <h4>Hoy {forecast_today.date}</h4>
        <div className="forecast">
          {forecast_today.hour.map((hour) => {
            const hora = new Date(hour.time).toLocaleTimeString("default", {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div key={hour.time}>
                <p>{hora}</p>
                <p>{hour.temp_c}</p>
              </div>
            );
          })}
        </div>
        <p>
          Fecha <strong>Min </strong> <strong>Max</strong>
        </p>
        <div>
          {forecast.forecastday.map((day) => {
            return (
              <p key={day.date}>
                {day.date}: <strong>{day.day.mintemp_c}° </strong>
                <strong> {day.day.maxtemp_c}°</strong>
              </p>
            );
          })}
        </div>

        <pre className="pre">{JSON.stringify(current, null, 2)}</pre>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "1715fa436bmsh52f239e30da0e95p1e5c23jsn282838ce24bb",
    },
  };

  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=La%20Serena&days=3&lang=es",
    options
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
