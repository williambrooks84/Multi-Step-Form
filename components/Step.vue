<template>
    <div class="flex flex-row gap-3 text-white items-center">
        <div :class="`p-2 border-2 w-10 h-10 border-white rounded-full flex items-center justify-center ${stepStore.currentStep === step || active ? 'bg-blue-300 text-black' : 'bg-transparent text-white'}`">
            <p class="font-semibold">{{ step }}</p>
        </div>
        <div class="hidden md:flex md:flex-col text-left">
            <h2>Step {{ step }}</h2>
            <p class="uppercase font-semibold">{{ content }}</p>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useStepStore } from '@/stores/stepStore'

defineProps({
    step: Number,
    content: String,
    active: Boolean
})

const stepStore = useStepStore()
</script>
