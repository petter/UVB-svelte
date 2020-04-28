module.exports = {
    theme: {
        extend: {
            inset: {
                '1': '100%'
            },
            maxHeight: {
                '0': '0',
                '1/4': '25vh',
                '1/3': '33vh',
                '1/2': '50vh',
                '3/4': '75vh'
            },
            minHeight: {
                '0': '0',
                '1/4': '25vh',
                '1/3': '33vh',
                '1/2': '50vh',
                '3/4': '75vh'
            },
            maxWidth: {
                '900px': '900px'
            },
            width: {
                '1/2': '50%'
            },
            spacing: {
                '900px': '900px'
            },
            z: {
                '60': '60'
            }
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        borderStyle: ['responsive', 'hover', 'focus'],
        margin: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'hover', 'focus']
    },
    plugins: [require('tailwindcss-transitions')()]
};
