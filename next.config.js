/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
        // Ignore `.d.ts` files
        config.module.rules.push({
            test: /\.d\.ts$/,
            loader: 'file-loader',
            options: {
                emitFile: false, // Do not emit these files
            },
        });

        // Ignore `.map` files
        config.module.rules.push({
            test: /\.map$/,
            loader: 'file-loader',
            options: {
                emitFile: false, // Do not emit these files
            },
        });

        return config;
    },
};