let selectedColor = "blue"

const painting = document.querySelector(".painting");

painting.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor
})

const color = document.querySelector(".palette");

color.addEventListener("click", function (e) {
    console.log("red selected", e.target.id)
    selectedColor = e.target.id
})

