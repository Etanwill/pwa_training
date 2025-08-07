import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
export default withUt({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // example blue
      },
    },
  },
  plugins: [],
});
