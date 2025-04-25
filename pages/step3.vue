<template>
  <div class="flex flex-col md:flex-row justify-center items-center text-left p-10 gap-10">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h1>Pick add-ons</h1>
          <p class="description">Add-ons help enhance your gaming experience (optional)</p>
        </div>

        <div>
          <OptionList
            v-for="option in options"
            :key="option.name"
            :name="option.name"
            :description="option.description"
            :price="isYearly ? option.yearlyPrice : option.price"
            :isSelected="fromStore.formData.selectedOptions.some(o => o.name === option.name)"
            @toggle="() => fromStore.toggleOption(option)"
          />
        </div>

        <ButtonGroup :isDisabled="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFromStore } from '~/stores/fromStores.js'
import OptionList from '@/components/OptionList.vue'
import { useStepStore } from '@/stores/stepStore'

const fromStore = useFromStore()
const options = fromStore.formData.options
const isYearly = fromStore.formData.isYearly // Bind to store directly

const stepStore = useStepStore()

// Go to step 3
stepStore.goToStep(3)
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
