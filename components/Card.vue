<template>
    <div>
        <label @click="selectCard">
            <input type="radio" name="plan" :value="name" :checked="modelValue === name" class="hidden" readonly />
            <UCard class="h-fit w-full md:w-40 relative cursor-pointer transition-all" :class="{
                'bg-bg': modelValue === name,
                'bg-white': modelValue !== name
            }" :ui="{
                base: 'border',
                body: 'p-4'
            }">
            <div class="flex flex-row md:flex-col gap-4">
                <img :src="icon" alt="Plan Icon" class="w-16 h-16" />
                <div class="flex flex-col text-left gap-1">
                    <h3 class="text-lg font-semibold">{{ name }}</h3>
                    <p class="text-sm font-medium text-secondary">${{ price }}/{{ isYearly ? 'yr' : 'mo' }}</p>
                    <p class="text-xs font-semibold min-h-[1rem]" :class="{ 'invisible': !isYearly }">
                        2 months free
                    </p>
                </div>
            </div>
            </UCard>
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: String,
    name: String,
    price: Number,
    yearlyPrice: Number,
    isYearly: Boolean,
    modelValue: String

});

const emit = defineEmits(['update:modelValue']);

const selectCard = () => {
    emit('update:modelValue', props.name);
};
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
