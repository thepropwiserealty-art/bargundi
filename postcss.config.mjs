import cssnano from "cssnano";

const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    cssnano: { preset: "default" },
  },
};

export default config