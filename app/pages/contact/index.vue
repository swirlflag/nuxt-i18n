<template>
    <div>
        <p>CONTACT page</p>
        <br />
        {{ t("head.title") }}
        <br />
        {{ t("head.meta.description") }}
    </div>
</template>
<script setup>
const { t, locale, messages } = await useFetchI18nData(
    (l) =>
        `https://pubbimgkcst.blob.core.windows.net/dwm/dwm.nexon.com/locales/${l}.json`,
);

console.log(messages.value);

const route = useRoute();
</script>
