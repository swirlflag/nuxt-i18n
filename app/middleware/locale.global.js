export default defineNuxtRouteMiddleware(async (to) => {
    const { $i18n } = useNuxtApp();
    const cookieAccount = useCookie("APP_ACCOUNT_LOCALE");
    const cookiePrefer = useCookie("APP_PREFER_LOCALE");
    const availableCodes = $i18n.locales.value.map((l) => l.code);

    const resolved = (() => {
        // 2. 유저 선택
        if (cookiePrefer.value && availableCodes.includes(cookiePrefer.value)) {
            return { locale: cookiePrefer.value, source: "prefer" };
        }
        // 3. 계정 저장값
        if (
            cookieAccount.value &&
            availableCodes.includes(cookieAccount.value)
        ) {
            return { locale: cookieAccount.value, source: "account" };
        }
        // 4. 브라우저 언어 (SSR 대응)
        const browserLang = import.meta.client
            ? navigator.language.split("-")[0]
            : useRequestHeaders(["accept-language"])
                  ["accept-language"]?.split(",")[0]
                  ?.split("-")[0]
                  ?.trim();

        if (browserLang) {
            const matched = availableCodes.find((code) =>
                code.startsWith(browserLang),
            );
            if (matched) return { locale: matched, source: "browser" };
        }
        // 5. fallback
        return { locale: $i18n.defaultLocale, source: "default" };
    })();

    await $i18n.setLocale(resolved.locale);

    // prefer 쿠키는 유저가 명시적으로 선택한 경우만 저장
    if (resolved.source === "prefer" || resolved.source === "account") {
        cookiePrefer.value = resolved.locale;
    }
});
