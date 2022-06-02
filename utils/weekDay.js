export function weekDay(date) {
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Lunes",
  ]
  return days[new Date(date).getDay()]
}
