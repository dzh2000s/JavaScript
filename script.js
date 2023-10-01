const title = "Мой проект"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 1000
let rollback = 50
let fullPrice = 100000
let adaptive = false

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)

console.log(screens.length)
console.log("Стоимость верстки экранов " + screenPrice + " рублей")
console.log("Стоимость разработки сайта " + fullPrice + " рублей")

console.log(screens.toLowerCase())
console.log(screens.split(", "))

console.log("Процент отката посреднику за работу " + fullPrice * (rollback / 100))