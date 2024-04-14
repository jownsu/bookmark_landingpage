/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        fontFamily: {
            sans: ["Rubik", "ui-sans-serif"]
        },
        container: {
            center: true,
            screens: {
                lg: "110.4em"
            },
            padding: {
                DEFAULT: "3.2rem",
                lg: 0
            }
        },
        extend: {
            boxShadow: {
                "card": "0 1rem 2rem -.5rem rgba(73, 93, 207, .2)"
            },
            colors: {
                primary: "#5267DF",
                secondary: "#FA5959",
                dark: "#242A45",
                grey: "#9194A2",
                light_grey: "#F7F7F7"
            }
        }
    },
    plugins: []
};
