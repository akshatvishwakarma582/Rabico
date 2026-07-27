// ===========================
// Rabico v0.1
// ===========================

console.log("🐰 Rabico Loaded!");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);

        console.log(`${button.innerText} clicked`);
    });
});
