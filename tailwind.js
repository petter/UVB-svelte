module.exports = {
    theme: {
        extend: {
            inset: {
                '1': '100%'
            }
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        borderStyle: ['responsive', 'hover', 'focus']
    },
    plugins: [require('tailwindcss-transitions')()]
};
