/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path to match where your source files are located
    "./public/index.html"              // Include any other paths where you might use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        customYellow: '#fdfd96',
      },
      spacing: {
        // Add custom spacing if needed
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  plugins: [
    // Add plugins here if you need additional functionality
  ],
};
