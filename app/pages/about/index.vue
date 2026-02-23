<template>
    <div>
        <p>about page...</p>
        <br />

        {{ t("sec2.t4") }}
        <br />
        {{ t("sec3.t4") }}
        <br />
        {{ t("head.title") }}
    </div>
</template>
<script setup>
// const { t, locale, pending } = await useFetchI18nData(
//     (l) =>
//         `https://pubbimgkcst.blob.core.windows.net/bluearchive/bluearchive.nexon.com/locales/${l}.json`,
// );

const { t, locale, pending } = await useFetchI18nData(
    (l) =>
        `https://pubbimgkcst.blob.core.windows.net/bluearchive/drops2/locales/${l}.json`,
);
</script>
