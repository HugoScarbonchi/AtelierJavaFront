/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'text-default': 'DM Sans, Arial, sans-serif',
            'montserrat': 'Montserrat, Arial, sans-serif'
        },
        textColor: theme => ({
            ...theme('colors'),
            'primary': '#5D5A88',
            'light': '#9795B5',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#5D5A88'
        }),
        extend: {},
    },
    plugins: [],
}