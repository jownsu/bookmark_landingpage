document.addEventListener("DOMContentLoaded", () => {

    const accordion_trigger_btns = document.querySelectorAll("#faq_accordion > div > button");
    const nav_trigger_open = document.querySelector("#nav_trigger_open");
    const nav_trigger_close = document.querySelector("#nav_trigger_close");
    const mobile_nav = document.querySelector("#mobile_nav");
    const mobile_nav_links = document.querySelectorAll("#mobile_nav a");

    accordion_trigger_btns.forEach(accordion_trigger => {
        accordion_trigger.addEventListener("click", (event) => {
            toggleAccordionContent(event.target);
        });
    });

    nav_trigger_open.addEventListener("click", () => {
        openMobileNav();
    });

    nav_trigger_close.addEventListener("click", () => {
        closeMobileNav();
    });

    mobile_nav_links.forEach(links => {
        links.addEventListener("click", () => {
            closeMobileNav();
        })
    });

    const toggleAccordionContent = (target) => {
        const paragraph = target.closest("div").querySelector("p");
        const arrow_icon = target.querySelector("svg");

        arrow_icon.classList.toggle("rotate-180");
        arrow_icon.classList.toggle("stroke-secondary");
        arrow_icon.classList.toggle("stroke-primary");
        paragraph.classList.toggle("hidden");
    }

    const openMobileNav = () => {
        mobile_nav.classList.remove("hidden");
        mobile_nav.classList.add("flex");
    };

    const closeMobileNav = () => {
        mobile_nav.classList.add("hidden");
        mobile_nav.classList.remove("flex");
    }

})

