import { defineStore } from 'pinia'

const plans = [
  { name: 'Arcade', price: 9, yearlyPrice: 90, icon: '/assets/images/icon-arcade.svg' },
  { name: 'Advanced', price: 12, yearlyPrice: 120, icon: '/assets/images/icon-advanced.svg' },
  { name: 'Pro', price: 15, yearlyPrice: 150, icon: '/assets/images/icon-pro.svg' },
]

const options = [
  { name: 'Online service', description: 'Access to multiplayer games', price: 1, yearlyPrice: 10 },
  { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, yearlyPrice: 20 },
  { name: 'Customizable Profile', description: 'Custom theme on your profile', price: 2, yearlyPrice: 20 },
]

export const useFromStore = defineStore('form', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      phone: '',
      plans,
      selectedPlan: null, // Ensure selectedPlan is initially null
      options,
      selectedOptions: [], // Will store the selected options objects
      isYearly: false, // Track billing frequency here
    },
  }),

  getters: {
    totalPrice(state) {
      const planPrice = state.formData.isYearly
        ? state.formData.selectedPlan?.yearlyPrice || 0
        : state.formData.selectedPlan?.price || 0

      const optionsTotal = state.formData.selectedOptions.reduce((sum, option) => {
        return sum + (state.formData.isYearly ? option.yearlyPrice : option.price)
      }, 0)

      return planPrice + optionsTotal
    },
  },

  actions: {
    setSelectedPlan(plan) {
      this.formData.selectedPlan = plan
    },

    toggleOption(option) {
      const index = this.formData.selectedOptions.findIndex(o => o.name === option.name)
      if (index === -1) {
        this.formData.selectedOptions.push(option)
      } else {
        this.formData.selectedOptions.splice(index, 1)
      }
    },

    setIsYearly(value) {
      this.formData.isYearly = value
    },

    updatePersonalInfo({ name, email, phone }) {
      this.formData.name = name
      this.formData.email = email
      this.formData.phone = phone
    },
  },
})
