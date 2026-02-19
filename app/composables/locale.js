export const useFetchI18nData = async (i18n, keyPrefix, urlTemplate) => {
    const { locale, setLocaleMessage, getLocaleMessage } = i18n;

    const { data } = await useAsyncData(
        () => `${keyPrefix}-${locale.value}`,
        () => $fetch(urlTemplate(locale.value)),
        {
            watch: [locale],
            getCachedData: (key, nuxtApp) =>
                nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
        },
    );

    watch(
        data,
        (val) => {
            if (val) {
                const existing = getLocaleMessage(locale.value);
                setLocaleMessage(locale.value, { ...existing, ...val });
            }
        },
        { immediate: true },
    );

    return i18n;
};
