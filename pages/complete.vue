<template>
    <div class="flex flex-col items-center justify-center p-10 gap-6">
      <div class="flex flex-col items-center gap-10">
        <img src="/assets/images/icon-thank-you.svg" alt="Thank you icon" />
        <div class="flex flex-col gap-2 md:gap-5 text-center">
          <h1 class="text-3xl font-bold text-primary">Thank you!</h1>
          <p class="description">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
import { useStepStore } from '@/stores/stepStore'

const stepStore = useStepStore()

stepStore.goToStep(4)

</script>

<style scoped>
    @import "tailwindcss";
    @import "@nuxt/ui";
</style>