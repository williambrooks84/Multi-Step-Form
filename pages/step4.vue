<template>
  <div class="flex flex-col items-center justify-center p-5 md:p-10 gap-2 md:gap-6">
    <div class="flex flex-col gap-3 md:gap-10">
      <div class="text-left">
        <h1>Finishing up</h1>
        <p class="description">Double-check everything looks OK before confirming.</p>
      </div>

      <!-- Selected Plan -->
      <div class="w-full max-w-lg bg-bg p-6 rounded-xl">
        <div class="flex flex-row justify-between items-center mb-4">
          <div class="flex flex-col mb-4">
            <div class="flex flex-col items-start">
              <p class="text-lg md:text-2xl font-semibold text-primary">
                {{ fromStore.formData.selectedPlan?.name }}
                <span>{{ fromStore.formData.isYearly ? 'Yearly' : 'Monthly' }}</span>
              </p>
              <Button type="button" :name="'Change'" class="btn btn-bgless underline text-md md:text-lg font-normal"
                @click="goBackToStep2" />
            </div>
          </div>
          <p class="text-lg md:text-2xl font-bold text-primary">
            ${{ fromStore.formData.isYearly ? fromStore.formData.selectedPlan?.yearlyPrice :
              fromStore.formData.selectedPlan?.price }}
            {{ fromStore.formData.isYearly ? '/yr' : '/mo' }}
          </p>
        </div>

        <div class="flex border-b-2 border-secondary mb-4"></div>

        <div v-if="fromStore.formData.selectedOptions.length === 0" class="text-center">
          <p>No add-ons selected</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="addon in fromStore.formData.selectedOptions" :key="addon.name"
              class="flex justify-between items-center text-md md:text-lg mb-2">
              <span class="text-secondary">{{ addon.name }}</span>
              <span class="font-medium text-primary">
                +${{ fromStore.formData.isYearly ? addon.yearlyPrice : addon.price }}
                {{ fromStore.formData.isYearly ? '/yr' : '/mo' }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Total Price -->
      <div class="w-full max-w-lg p-6 flex justify-between items-center">
        <p class="text-md md:text-lg font-bold text-secondary">
          Total (per {{ fromStore.formData.isYearly ? 'year' : 'month' }}):
        </p>
        <p class="text-md md:text-lg font-bold text-primary-light">
          +${{ fromStore.totalPrice }}{{ fromStore.formData.isYearly ? '/yr' : '/mo' }}
        </p>
      </div>

      <div class="flex flex-row justify-between  mt-2 md:mt-10">
        <div class="w-fit">
          <Button v-if="stepStore.currentStep > 1" :name="'Go back'" class="btn btn-bgless" @click="goBack" />
        </div>
        <Button :name="stepStore.currentStep === 4 ? 'Confirm' : 'Next step'" class="btn btn-default"
          :disabled="!isConfirmed" @click="confirmSelection" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFromStore } from '@/stores/fromStores.js'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useStepStore } from '@/stores/stepStore'

const fromStore = useFromStore()
const router = useRouter()
const stepStore = useStepStore()

stepStore.goToStep(4)

// Computed property to check if everything is confirmed
const isConfirmed = computed(() => {
  return fromStore.formData.selectedPlan !== null
})

// Method to navigate back to Step 2
const goBackToStep2 = () => {
  router.push('/step2')
}

// Method to navigate back to the previous step
const goBack = () => {
  const prevStep = stepStore.currentStep - 1
  if (prevStep >= 1) {
    router.push(prevRoutes[prevStep])
    stepStore.previousStep()
  }
}

// Method to confirm the selection (navigate to confirmation or next step)
const confirmSelection = () => {
  console.log('Confirmed!', fromStore.formData)
  router.push('/complete')  // You can change this to where you want to go after confirming
}
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
