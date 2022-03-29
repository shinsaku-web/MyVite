import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin"; // 追加

// -------- 設定は下記参考に -------------
// https://ja.vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/index.html",
    port: 8000,
  },
  preview: {
    open: "/index.html",
  },
  base: "./",
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
