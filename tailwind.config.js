/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'ui-serif', 'system-ui'],
        Lato: 'Lato'
      }
    }
  },
  plugins: []
};
