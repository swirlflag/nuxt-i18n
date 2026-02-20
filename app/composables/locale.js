export const useFetchI18nData = async (urlTemplate) => {
    const i18n = useI18n({ useScope: "local" });
    const { locale, setLocaleMessage, getLocaleMessage } = i18n;

    const previousData = ref(null);

    const { data, pending, status } = await useAsyncData(
        urlTemplate(locale.value),
        () => {
            return $fetch(urlTemplate(locale.value));
        },
        {
            lazy: true,
            watch: [locale],
            default: () => previousData.value,
            getCachedData: (key, nuxtApp) => {
                const cached =
                    nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
                if (cached) {
                    const existing = getLocaleMessage(locale.value);
                    setLocaleMessage(locale.value, {
                        ...existing,
                        ...cached,
                    });
                }
                return cached;
            },
        },
    );

    watch(data, (now) => {
        if (now) {
            previousData.value = now;
        }
    });

    watch(
        status,
        (now) => {
            if (now === "success" && data.value) {
                const existing = getLocaleMessage(locale.value);
                setLocaleMessage(locale.value, { ...existing, ...data.value });
            }
        },
        { immediate: true },
    );

    return { ...i18n, pending };
};

export const setI18nLocale = (locale) => {
    const { $i18n } = useNuxtApp();
    $i18n.setLocale(locale);
};
