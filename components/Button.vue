<template>
    <button :class="btnClass">
        {{ name }}
    </button>
</template>

<script setup>
defineProps({
    name: String,
    btnClass: String
})
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
