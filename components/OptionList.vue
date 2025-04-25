<template>
    <div 
      class="flex flex-row justify-between items-center p-4 border rounded-lg"
      :class="{
          'border-primary-light bg-gray-100': isChecked,
          'border-gray-200': !isChecked
      }"
    >
      <div class="flex flex-row gap-4 md:gap-8 items-center">
        <!-- Checkbox -->
        <label class="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            v-model="isChecked" 
            class="peer sr-only" 
          />
            <div 
            class="w-6 h-6 rounded-md flex justify-center items-center transition-colors duration-300"
            :class="{
              'bg-primary-light': isChecked,
              'bg-gray-200': !isChecked
            }"
          >
            <img 
              v-if="isChecked" 
              src="/assets/images/icon-checkmark.svg" 
              alt="Checked" 
              class="w-4 h-4" 
            />
          </div>
        </label>
        
        <div class="flex flex-col gap-1">
          <h3 class="text-md md:text-lg font-bold text-primary">{{ name }}</h3>
          <p class="text-xs md:text-sm font-medium text-secondary">{{ description }}</p>
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
  