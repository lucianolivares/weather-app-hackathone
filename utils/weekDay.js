export function weekDay(date) {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ]
  const today = Date.now()
  const day = new Date(date).getDay() + 1
  if (day === new Date(today).getDay()) {
    return "Hoy"
  }
  console.log(day)
  return days[day]
}
