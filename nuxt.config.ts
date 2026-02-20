const config = {
    compatibilityDate: "2026-02-19",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n"],
    i18n: {
        detectBrowserLanguage: {
            useCookie: false,
            redirectOn: "root",
        },
        lazy: true,
        strategy: "prefix_and_default",
        customRoutes: "config",
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English", language: "en-US", file: "en.json" },
            { code: "ko", name: "한국어", language: "ko-KR", file: "ko.json" },
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
