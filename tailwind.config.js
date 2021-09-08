const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
