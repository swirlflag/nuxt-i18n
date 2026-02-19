<template>
    <div>
        <p>about page...</p>
        <br />

        {{ t("sec2.t4") }}
        <br />
        {{ t("sec3.t4") }}
    </div>
</template>
<script setup>
import koText from "~~/locales/3/ko.json";
import enText from "~~/locales/3/en.json";
// https://pubbimgkcst.blob.core.windows.net/bluearchive/drops2/locales/ko.json
// https://pubbimgkcst.blob.core.windows.net/bluearchive/drops2/locales/en.json

const { t } = await useFetchI18nData(
    useI18n({ useScope: "local", missingWarn: false, fallbackWarn: false }),
    "test-locale",
    (l) =>
        `https://pubbimgkcst.blob.core.windows.net/bluearchive/drops2/locales/${l}.json`,
);

const route = useRoute();
const routeBaseName = useRouteBaseName();
const localePath = useLocalePath();
</script>
