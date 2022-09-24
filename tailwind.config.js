module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      'navy-blue': '#1f2433',
      'light-blue': '#3699FF',
    },
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        blue: {
          500: '#1a73e8',
        },
        gray: {
          100: '#F5F8FA',
          200: '#EFF2F5',
          300: '#E4E6EF',
          400: '#B5B5C3',
          500: '#A1A5B7',
          600: '#7E8299',
          700: '#5E6278',
        },
        green: {
          500: '#47BE7D',
        },
        white: '#fff',
      },
    },
  },
  plugins: [],
};
