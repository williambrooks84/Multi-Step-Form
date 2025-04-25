<template>
    <div class="form-field flex flex-col">
        <UFormField :label="label" class="text-blue-950 text-lg font-bold">
            <UInput :name="name" :id="id" :placeholder="placeholder" class="w-full" input-class="w-full p-4"
                :model-value="modelValue" @update:model-value="val => emit('update:modelValue', val)" />

        </UFormField>
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