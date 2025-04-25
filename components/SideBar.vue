<template>
    <div class="flex flex-row md:flex-col gap-5 p-10 pr-25 rounded-2xl bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center justify-start md:justify-start ">
        <!-- Steps -->
        <Step 
            v-for="(step, index) in steps" 
            :key="index" 
            :step="step.step" 
            :content="step.content" 
            :active="stepStore.currentStep === step.step" 
        />
    </div>
</template>

<script setup>
import Step from './Step.vue'
import { useStepStore } from '@/stores/stepStore'

const stepStore = useStepStore()

const steps = [
    { step: 1, content: 'Your Info' },
    { step: 2, content: 'Select Plan' },
    { step: 3, content: 'Add-Ons' },
    { step: 4, content: 'Summary' }
]
</script>
