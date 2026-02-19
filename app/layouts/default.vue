<template>
    <div>
        <div>
            <!-- <NuxtLink :to="localePath('/')">{{ t("nav.home") }}</NuxtLink>
            &nbsp;
            <NuxtLink :to="localePath('/about')">{{ t("nav.about") }}</NuxtLink> -->

            <NuxtLinkLocale to="/">{{ t("nav.home") }} </NuxtLinkLocale>
            &nbsp;
            <NuxtLinkLocale to="/about"> {{ t("nav.about") }} </NuxtLinkLocale>
        </div>
        <div>
            <select @change="onChangeLocale">
                <template v-for="item in locales">
                    <option :value="item.code" :selected="item.code === locale">
                        {{ item.name }}
                    </option>
                </template>
            </select>
        </div>
        <hr />
        <slot></slot>
    </div>
</template>

<script setup>
const { t, setLocale, locale, locales } = useI18n({
    useScope: "local",
    messages: {
        ko: { "nav.home": "홈", "nav.about": "소개" },
        en: { "nav.home": "home", "nav.about": "about" },
    },
});
const localePath = useLocalePath();
const onChangeLocale = (e) => {
    const cookiePrefer = useCookie("APP_PREFER_LOCALE"); // 유저 선택
    const selectedLocale = e.target.value;
    setLocale(selectedLocale);
    cookiePrefer.value = selectedLocale;
};
</script>
