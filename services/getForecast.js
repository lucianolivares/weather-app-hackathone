import { forecastPath, options } from "./apiSettings"

async function getForecast(search) {
  const res = await fetch(`${forecastPath}?q=${search}&days=3&lang=es`, options)
  const data = await res.json()
  return data
}

export default getForecast
