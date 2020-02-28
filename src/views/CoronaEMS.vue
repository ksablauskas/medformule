<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <CoronaEMSCalculator></CoronaEMSCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CoronaEMSCalculator from '@/components/CoronaEMSCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    CoronaEMSCalculator
  },
  data() {
    return {
      title: 'Greitosios medicinos pagalbos veiksmai COVID-19'    
    }
  }
}
</script>

