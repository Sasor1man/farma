/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // если используешь App Router
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}