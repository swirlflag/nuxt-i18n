<template>
    <div id="app">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
const { t, messages } = useI18n();
const i18nHead = useLocaleHead();

useHead(() => ({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs?.lang,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
}));

// console.log(messages.value);

useSeoMeta({
    title: () => t("head.title"),
    description: () => t("head.meta.description"),
});
</script>
