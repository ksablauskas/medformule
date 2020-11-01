<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <NEWSCalculator></NEWSCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import NEWSCalculator from '@/components/NEWSCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    NEWSCalculator
  },
  data() {
    return {
      title: 'National Early Warning Score (NEWS)'    
    }
  }
}
</script>

