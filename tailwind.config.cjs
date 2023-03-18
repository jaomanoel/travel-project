/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            xs: "1.2rem", // 12px
            sm: "1.4rem", // 14px
            base: "1.6rem", // 16px
            lg: "1.8rem", // 18px
            xl: "2rem", // 20px
            "2xl": "2.4rem", // 24px
            "3xl": "3rem", // 30px
            "4xl": "3.6rem", // 36px
            "5xl": "4.8rem", // 48px
            "6xl": "6rem", // 60px
            "7xl": "7.2rem", // 72px
            "8xl": "9.6rem", // 96px
            "9xl": "12.8rem", // 128px
        },
        extend: {
            spacing: {
                2: ".2rem",
                20: "2rem",
                30: "3rem",
                36: "3.6rem",
                48: "4.8rem",
                60: "6rem",
                100: "10rem",
                120: "12rem",
                190: "19rem",
                200: "20rem",
                240: "24rem",
                250: "25rem",
                280: "28rem",
                293: "29.3rem",
                300: "30rem",
                350: "35rem",
                400: "40rem",
                408: "40.8rem",
                410: "41rem",
                450: "45rem",
                500: "50rem",
                600: "60rem",
                620: "62rem",
                650: "65rem",
                623: "62.3rem",
                920: "92rem",
                1280: "128rem",
            },
            lineHeight: {
                "10px": "1rem",
                "15px": "1.5rem",
                "20px": "2rem",
                "25px": "2.5rem",
                "30px": "3rem",
                "35px": "3.5rem",
                "37px": "3.7rem",
                "40px": "4rem",
            },
        },
    },
    plugins: [],
};
