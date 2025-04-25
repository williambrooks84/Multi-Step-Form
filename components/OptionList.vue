<template>
    <div 
      class="flex flex-row justify-between items-center p-4 border rounded-lg"
      :class="{
          'border-primary-light bg-gray-100': isChecked,
          'border-gray-200': !isChecked
      }"
    >
      <div class="flex flex-row gap-8 items-center">
        <!-- Checkbox -->
        <UCheckbox v-model="isChecked" color="customPurple" v-slot="{ checked }">
          <img v-if="checked" src="/assets/images/icon-checkmark.svg" alt="Checked" class="w-4 h-4" />
        </UCheckbox>
        
        <div class="flex flex-col gap-1">
          <h3 class="text-lg font-bold text-primary">{{ name }}</h3>
          <p class="text-sm font-medium text-secondary">{{ description }}</p>
        </div>
      </div>
      
      <!-- Price info -->
      <p class="text-sm font-medium text-primary-light">+${{ price }}/{{ isYearly ? 'yr' : 'mo' }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  // Define props to receive from the parent component
  const props = defineProps({
      name: String,
      description: String,
      price: Number,
      yearlyPrice: Number,
      isYearly: Boolean,
      isSelected: Boolean,  // isSelected is controlled from the parent component
  })
  
  // Define emits for the toggle event
  const emit = defineEmits(['toggle']);
  
  // Local state to track the checkbox (this component's state)
  const isChecked = ref(props.isSelected);
  
  // Emit to parent when the checkbox is toggled
  watch(isChecked, (newVal) => {
    // Emit the event to toggle the option in the parent component
    emit('toggle', { name: props.name, isChecked: newVal });
  });
  </script>
  
  <style scoped>
  @import "tailwindcss";
  @import "@nuxt/ui";
  </style>
  