import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",

            // Brand palette
            primary: "#1AB6F9",
            secondary: "#1AD0A8",
            footer: "#001520",

            // Neutrals
            white: "#FFFFFF",
            black: "#000000",
            charcoal: "#222230",
            red: "#FF2D1E",
            yellow: "#FCC61A",
            green: "#1AD0A8",
            grey: "#F3F4F6",
            "light-grey": "#A6A6A6",

            // Semantic actions
            warning: "#FBC02D",
            error: "#E53835",
            success: "#2E7D31",
        },
        extend: {
            spacing: {
                24: "24px",
                144: "144px",
            },
            screens: {
                "mobile-lg": "29.25rem",
                tablet: "48rem",
                laptop: "64rem",
                desktop: "80rem",
                wide: "96rem",
            },
            boxShadow: {
                'lg-primary': '0 12px 20px -5px rgba(26, 182, 249, 0.2), 0 5px 8px -5px rgba(26, 182, 249, 0.2)',
            },
            fontFamily: {
                roboto: ["var(--font-roboto)", "sans-serif"],
                "noto-sans-tamil": ["var(--font-noto-sans-tamil)", "sans-serif"],
                heading: ["var(--font-roboto)", "sans-serif"],
                text: ["var(--font-noto-sans-tamil)", "sans-serif"],
            },
            flex: {
                '2': '2 2 0%',
            },
        },
    },
    plugins: [],
};

export default config;
