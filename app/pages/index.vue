<template>
    <div>
        index gogo
        <br />
        locale: {{ locale }}
    </div>
</template>
<script setup>
const { locale, messages } = useI18n();
</script>
