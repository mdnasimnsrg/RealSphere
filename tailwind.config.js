module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'width31%': '31%',
        'width33%': '33%',
        'width72%': '72%',
        'width68%': '68%',
        'width31.8%': '31.8%',
        'width32%': '32%',
        'width20%': '20%',
        'width80%': '80%',
        'width96%': '96%',
        'width86%': '86%',
        'width90%': '90%',
        'width49%': '49%',
        'width40%': '40%',
        'width78%': '78%',
        'width24%': '24%',
      },
      colors: {
        themeBlue: '#3D3D3D',
        light: {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#F7F7F7',
          200: '#E3E3E3',
          300: '#D2D2D2',
          400: '#B0B0B0',
          500: '#8C8C8C',
          600: '#707070',
          700: '#595959',
          800: '#404040'
        },
        primary: {
          DEFAULT: '#006693',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
          200: '#bfdbfe',
          100: '#dbeafe',
          50: '#f1f3fe',
          25: '#eaedfd'
        },
      },

      animation: {
        rotate: "rotateClockwise 2s linear infinite",
      },
      keyframes: {
        rotateClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

