const config = {
    compatibilityDate: "2026-02-19",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n"],
    i18n: {
        detectBrowserLanguage: false,
        defaultLocale: "en",
        lazy: true,
        strategy: "prefix_and_default",
        customRoutes: "config",
        locales: [
            { code: "en", name: "English", region: "US", language: "en" },
            { code: "ko", name: "한국어", region: "KR", language: "ko" },
        ],
        pages: {
            about: {
                en: "/about",
                ko: "/introduce-us",
            },
        },
    },
};

export default defineNuxtConfig(config);
