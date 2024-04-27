document.addEventListener("DOMContentLoaded", () => {

    const accordion_trigger_btns = document.querySelectorAll("#faq_accordion > div > button");

    accordion_trigger_btns.forEach(accordion_trigger => {
        accordion_trigger.addEventListener("click", (event) => {
            const paragraph = event.target.closest("div").querySelector("p");
            const arrow_icon = event.target.querySelector("svg");

            arrow_icon.classList.toggle("rotate-180");
            arrow_icon.classList.toggle("stroke-secondary");
            arrow_icon.classList.toggle("stroke-primary");
            paragraph.classList.toggle("hidden");
        });
    });
})

