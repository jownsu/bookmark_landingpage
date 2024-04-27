document.addEventListener("DOMContentLoaded", () => {

    const accordion_trigger_btns = document.querySelectorAll("#faq_accordion > div > button");
    const nav_trigger_open = document.querySelector("#nav_trigger_open");
    const nav_trigger_close = document.querySelector("#nav_trigger_close");
    const mobile_nav = document.querySelector("#mobile_nav");
    const mobile_nav_links = document.querySelectorAll("#mobile_nav a");
    const feature_tabs_btns = document.querySelectorAll("#features_tab button");
    const features = document.querySelectorAll("#features_container > div");
    const contact_form = document.querySelector("#contact_form");
    const email_input_container = document.querySelector("#email_input");
    const email_input = document.querySelector("#email_input > input");

    accordion_trigger_btns.forEach(accordion_trigger => {
        accordion_trigger.addEventListener("click", (event) => {
            toggleAccordionContent(event.target);
        });
    });

    feature_tabs_btns.forEach(tab_btn => {
        tab_btn.addEventListener("click", () => {
            toggleFeatureContent(tab_btn)
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

    contact_form.addEventListener("submit", (event) => handleContactFormSubmit(event));

    const handleContactFormSubmit = (event) => {
        event.preventDefault();

        const is_invalid_email = validateEmail(email_input.value) === null;

        if(is_invalid_email){
            email_input_container.classList.add("bg-secondary");
            email_input_container.querySelector("div").classList.remove("hidden");
            email_input_container.querySelector("div").classList.add("block");
        }
        else{
            email_input_container.classList.remove("bg-secondary");
            email_input_container.querySelector("div").classList.add("hidden");
            email_input_container.querySelector("div").classList.remove("block");
            alert("Email Sent");
            email_input.value = "";
        }
    }

    const toggleFeatureContent = (tab_btn) => {
        const trigger_id = tab_btn.getAttribute("data-feature-id");

        feature_tabs_btns.forEach(tabBtn => {
            tabBtn.querySelector("p span").classList.add("hidden");
        });

        tab_btn.querySelector("p span").classList.remove("hidden");
        tab_btn.querySelector("p span").classList.add("block");

        features.forEach(feature => {
            const id = feature.getAttribute("data-feature-id");

            if(trigger_id === id){
                feature.classList.remove("hidden");
                feature.classList.add("flex");
                return;
            }
            feature.classList.add("hidden");
        });
    }

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

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

})

