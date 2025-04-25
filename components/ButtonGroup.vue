<template>
    <div class="flex flex-row justify-between mt-10">
        <div class="w-fit">
            <Button 
                v-if="stepStore.currentStep > 1" 
                :name="'Go back'" 
                class="btn btn-bgless" 
                @click="goBack" 
            />
        </div>
        <Button 
            :name="stepStore.currentStep === 4 ? 'Confirm' : 'Next step'" 
            class="btn btn-default" 
            :disabled="isDisabled"
            @click="goNext" 
        />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStepStore } from '@/stores/stepStore'

const router = useRouter()
const stepStore = useStepStore()

const nextRoutes = {
    1: '/',
    2: '/step2',
    3: '/step3',
    4: '/step4',
    5: '/complete'
}

const prevRoutes = {
    1: '/',
    2: '/step2',
    3: '/step3',
    4: '/step4',
    5: '/complete'
}

function goNext() {
    const nextStep = stepStore.currentStep + 1
    
    if (nextStep <= 4) {
        if (nextRoutes[nextStep]) {
            router.push(nextRoutes[nextStep])
            console.log('Navigating to:', nextRoutes[nextStep])
            stepStore.nextStep()
        }
    }
}

function goBack() {
    const prevStep = stepStore.currentStep - 1
    
    if (prevStep >= 1) {
        if (prevRoutes[prevStep]) {
            router.push(prevRoutes[prevStep])
            console.log('Navigating to:', prevRoutes[prevStep])
            stepStore.previousStep()
        }
    }
}

// On accepte la prop "isDisabled" pour gérer l'activation du bouton "Next"
defineProps({
  isDisabled: Boolean,  // Ajout de la prop isDisabled pour gérer l'état du bouton
})
</script>

<style scoped>

</style>
