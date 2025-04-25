<template>
  <div class="flex flex-col justify-center items-center text-left p-5 md:p-10 gap-2 md:gap-10">
    <div class="flex flex-col gap-2 md:gap-10">
      <div class="flex flex-col gap-2">
        <h1>Personal info</h1>
        <p class="description">Please provide your name, email address, and phone number.</p>
      </div>

      <div class="flex flex-col gap-4">
        <FormField label="Name" v-model="name" placeholder="Enter your name" />
        <span v-if="name && !isNameValid" class="text-warning text-sm">Name is required.</span>

        <FormField label="Email address" v-model="email" placeholder="Enter your email address" />
        <span v-if="email && !isEmailValid" class="text-warning text-sm">Invalid email address.</span>

        <FormField label="Phone number" v-model="phone" placeholder="Enter your phone number" />
        <span v-if="phone && !isPhoneValid" class="text-warning text-sm">Invalid phone number.</span>
      </div>
    </div>

    <!-- ButtonGroup positioned exactly like other steps -->
    <div class="flex flex-row justify-between mt-2 md:mt-10 w-full">
      <!-- Left side empty to align with other steps -->
      <div class="w-fit"></div>

      <ButtonGroup :isDisabled="!isFormValid" />
    </div>
  </div>
</template>

<script setup>
import { useFromStore } from '@/stores/fromStores'
import { useStepStore } from '@/stores/stepStore'
import { ref, watch, computed } from 'vue'
import ButtonGroup from '~/components/ButtonGroup.vue'

const fromStore = useFromStore()
const stepStore = useStepStore()

const name = ref(fromStore.formData.name ?? '')
const email = ref(fromStore.formData.email ?? '')
const phone = ref(fromStore.formData.phone ?? '')

watch([name, email, phone], () => {
  fromStore.updatePersonalInfo({
    name: name.value,
    email: email.value,
    phone: phone.value
  })
}, { immediate: true })

const isNameValid = computed(() => name.value.trim().length > 0)
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
const isPhoneValid = computed(() => /^[0-9\-\+\s()]{7,15}$/.test(phone.value))

// ✅ Validité globale du formulaire
const isFormValid = computed(() =>
  isNameValid.value && isEmailValid.value && isPhoneValid.value
)

stepStore.goToStep(1)
</script>

<style scoped>
</style>