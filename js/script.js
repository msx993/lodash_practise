const input = document.querySelector(".name-input")
const text = document.querySelector(".greet-modal")
const onInput = (event) => {
    const value = event.target.value
    console.log(value);
    text.textContent = `Вітаємо ${value}`
}
input.addEventListener("input", _.debounce(onInput, 250))
console.dir(_.debounce(onInput, 250))








// 2
// Створіть блок на сторінці, який реагує на рух миші.
// Кожен раз, коли користувач рухає мишкою, змінюються координати точки
// на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash
// для того, щоб координати оновлювалися не занадто часто та
// не затримували користувача. Встановіть час затримки в мілісекундах,
// наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const graph = document.querySelector("#graph");
const coord = document.querySelector("#coord");
const point = document.querySelector("#point");
const onMouseMove = (event) => {

coord.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`
point.style.top = event.offsetY
point.style.left = event.offsetX
}
graph.addEventListener("mousemove", _.throttle(onMouseMove, 50))






