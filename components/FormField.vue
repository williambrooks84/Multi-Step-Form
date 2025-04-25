<template>
    <div class="form-field flex flex-col">
        <label :for="id" class="text-primary text-md md:text-lg font-bold mb-2">{{ label }}</label>
        <input 
            :name="name" 
            :id="id" 
            :placeholder="placeholder" 
            :value="modelValue" 
            @input="event => emit('update:modelValue', event.target.value)" 
            class="w-full p-2 md:p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
    </div>
</template>

<script setup>
defineProps({
  label: String,
  name: String,
  id: String,
  placeholder: String,
  modelValue: String 
})

const emit = defineEmits(['update:modelValue']) 
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>