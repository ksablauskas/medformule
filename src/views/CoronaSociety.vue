<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <CoronaSocietyCalculator></CoronaSocietyCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CoronaSocietyCalculator from '@/components/CoronaSocietyCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    CoronaSocietyCalculator
  },
  data() {
    return {
      title: 'Visuomenės informavimas'    
    }
  }
}
</script>

