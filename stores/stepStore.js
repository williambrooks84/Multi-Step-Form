import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStepStore = defineStore('step', () => {
    const currentStep = ref(1);

    function goToStep(step) {
        currentStep.value = step;
    }

    function nextStep() {
        currentStep.value++;
    }

    function previousStep() {
        currentStep.value--;
    }

    return { currentStep, goToStep, nextStep, previousStep };
});