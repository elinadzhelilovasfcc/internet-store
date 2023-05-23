export const dark = {
    colors: {
        'transparent': "transparent",
        'blue': '#007c94',
        'purple': '#4f0b57',
        'pink': '#932a7f',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#030712',
        'red': '#ce2a22',
        'beige': '#efebe2',
        'gray': '#1f2937',
        'gray-light': '#d3dce6',
        'error': '#901913',
        'success': '#437557',
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
    spacing: {
        '4': '4px',
        '8': '8px',
        '10': '10px',
        '20': '20px',
        '32': '32px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '120': '120px',
    },
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        colors: () => ({
            'primary': "colors.blue",
            'secondary': "colors.pink",
            'text-primary': "colors.gray-dark",
            'text-secondary': "colors.gray-light",
        })
    }
}