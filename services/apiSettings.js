export const URL_BASE = "https://weatherapi-com.p.rapidapi.com"

export const forecastPath = `${URL_BASE}/forecast.json`

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": "1715fa436bmsh52f239e30da0e95p1e5c23jsn282838ce24bb",
  },
}
