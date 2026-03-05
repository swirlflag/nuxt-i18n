<template>
    <div>
        <p>about page...</p>
        <br />

        {{ t("sec2.t4") }}
        <br />
        <div id="ttt">
            {{ t("sec3.t4") }}
        </div>
        <br />

        {{ t("head.title") }}
    </div>
</template>
<script setup>

const { t, locale, pending, messages } = await useFetchI18nData("https://pubbimgkcst.blob.core.windows.net/bluearchive/drops2/locales");

</script>