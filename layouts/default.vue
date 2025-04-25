<template>
    <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-5 md:bg-white w-screen md:w-fit rounded-xl mx-auto">
        <!-- Sidebar adjusts to height of the content next to it -->
        <Sidebar class="h-auto self-stretch" />

        <!-- Main content adjusts height normally -->
        <div class="flex flex-col w-full md:max-w-xl bg-white md:bg-transparent rounded-2xl">
            <main class="w-full md:bg-white">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '/components/Sidebar.vue'
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>