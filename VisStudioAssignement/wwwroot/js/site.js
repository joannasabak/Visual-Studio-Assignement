const button = document.getElementById("imgButton");
const pop = document.getElementById("pop");
const popImg = document.getElementById("popImg");

button.addEventListener("click", () => {
    button.hidden = true;
    pop.hidden = false;
});

popImg.addEventListener("click", () => {
    pop.hidden = true;
    button.hidden = false;
});