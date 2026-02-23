export const useFetchI18nData = async (urlTemplate) => {
    const i18n = useI18n({ useScope: "local" });
    const { locale, setLocaleMessage, getLocaleMessage } = i18n;
    const previousData = ref(null);

    watch(locale, (newLocale) => {
        if (!previousData.value) return;
        const existing = getLocaleMessage(newLocale);
        if (Object.keys(existing).length > 0) return;
        setLocaleMessage(newLocale, previousData.value);
    });

    const { data, pending, status, error } = await useFetch(
        () => urlTemplate(locale.value),
        {
            lazy: false,
            watch: [locale],
            default: () => previousData.value,
            getCachedData: (key, nuxtApp) => {
                return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
            },
        },
    );

    watch(
        [data, status],
        ([nowData, nowStatus]) => {
            if (nowStatus === "success" && nowData) {
                previousData.value = nowData;
                const existing = getLocaleMessage(locale.value);
                setLocaleMessage(locale.value, { ...existing, ...nowData });
            }
        },
        { immediate: true },
    );

    return { ...i18n, pending, status, error };
};

export const setI18nLocale = (locale) => {
    const { $i18n } = useNuxtApp();
    $i18n.setLocale(locale);
};
