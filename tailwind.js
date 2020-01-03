module.exports = {
    theme: {
        extend: {
            inset: {
                '1': '100%'
            },
            maxHeight: {
                '0': '0',
                '1/4': '25vh',
                '1/2': '50vh',
                '3/4': '75vh'
            }
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        borderStyle: ['responsive', 'hover', 'focus']
    },
    plugins: [require('tailwindcss-transitions')()]
};
