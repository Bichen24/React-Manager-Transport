import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// 修改 react 插件以包含 name 属性

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "localhost",
        port: 8000,
        proxy: {
            "/api": "http://api-driver.marsview.cc",
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [react()],
});
