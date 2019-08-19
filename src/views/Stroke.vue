<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <StrokeCalculator></StrokeCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import StrokeCalculator from '@/components/StrokeCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    StrokeCalculator
  },
  data() {
    return {
      title: 'Trombolizė / trombektomija'    
    }
  }
}
</script>

