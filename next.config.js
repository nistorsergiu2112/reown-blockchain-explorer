/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
    webpack: (config) => {
      // Ignore `.map` files
      config.module.rules.push({
        test: /\.map$/,
        use: 'ignore-loader', // Ignore `.map` files
      });
  
      // Ignore `.d.ts` files
      config.module.rules.push({
        test: /\.d\.ts$/,
        use: 'ignore-loader', // Ignore `.d.ts` files
      });
  
      return config;
    },
  };