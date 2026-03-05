export const useFetchI18nData = async (url) => {
    const i18n = useI18n({ useScope: "local" });
    i18n.missingWarn = false;
    i18n.fallbackWarn = false;
    i18n.warnHtmlMessage = false;

    const { locale, setLocaleMessage, getLocaleMessage } = i18n;

    const { data, pending, status, error } = await useFetch(
        () => {
            return typeof url === "function" ? url(locale.value) : `${url}/${locale.value}.json`
        },
        {
            lazy: false,
            getCachedData: (key, nuxtApp) => {
                return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
            },
        },
    );

    watch(
        [data, status],
        ([nowData, nowStatus]) => {
            if (nowStatus === "success" && nowData) {
                const existing = getLocaleMessage(locale.value);
                setLocaleMessage(locale.value, { ...existing, ...nowData });
            }
        },
        { immediate: true },
    );

    return { ...i18n, pending, status, error };
};