module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#FF9718',
                secondary: '#242424',
                positive: '#338C09',
                light: '#F0F0F0',
                error: 'rgb(232, 2, 0)'
            }
        },
        fontfamily: {
            'sans': ['aktiv-grotesk', 'Arial', 'Helvetica','sans-serif']
        }
    },
    variants: {},
    plugins: [],
};