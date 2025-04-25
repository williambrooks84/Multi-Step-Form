<template>
  <div class="flex flex-col justify-center items-center text-left p-10 gap-10">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h1>Select your plan</h1>
          <p class="description">You have the option of monthly or yearly billing.</p>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-6">
          <Card v-for="plan in plans" :key="plan.name" :icon="plan.icon" :name="plan.name"
            :price="isYearly ? plan.yearlyPrice : plan.price" :isYearly="isYearly" :modelValue="selectedPlan?.name"
            @update:modelValue="onSelectPlan" />
        </div>

        <div class="flex flex-row justify-center items-center w-full p-3 gap-3 bg-bg rounded-2xl">
          <span :class="{ 'font-bold': !isYearly }">Monthly</span>
          <USwitch v-model="isYearly" class="switch-custom"/>
          <span :class="{ 'font-bold': isYearly }">Yearly</span>
        </div>

        <ButtonGroup :isDisabled="!isPlanSelected" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFromStore } from '~/stores/fromStores.js'
import { ref, computed, watch } from 'vue'
import Card from '@/components/Card.vue'
import { useStepStore } from '@/stores/stepStore'

const fromStore = useFromStore()
const stepStore = useStepStore()

const plans = fromStore.formData.plans

// Bind to store
const selectedPlan = ref(fromStore.formData.selectedPlan)
const isYearly = ref(fromStore.formData.isYearly)

watch(selectedPlan, (newVal) => {
  fromStore.setSelectedPlan(newVal)
})
watch(isYearly, (val) => {
  fromStore.setIsYearly(val)
})

const onSelectPlan = (planName) => {
  const selected = plans.find(p => p.name === planName)
  selectedPlan.value = selected
}

// Computed property to check if a plan is selected
const isPlanSelected = computed(() => !!selectedPlan.value)

// Go to step 2
stepStore.goToStep(2)
</script>

<style scoped>
/* Targeting the USwitch track and thumb styles with more specificity */
.switch-custom .nut-switch-track {
  background-color: var(--color-primary) !important; /* Track color */
}

.switch-custom .nut-switch-track.nut-switch-checked {
  background-color: var(--color-primary-light) !important; /* Track color when checked */
}

.switch-custom .nut-switch-thumb {
  background-color: white !important; /* Thumb color when unchecked */
}

.switch-custom .nut-switch-thumb.nut-switch-checked {
  background-color: var(--color-primary) !important; /* Thumb color when checked */
}
</style>