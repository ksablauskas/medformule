<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <CoronaHospitalCalculator></CoronaHospitalCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CoronaHospitalCalculator from '@/components/CoronaHospitalCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    CoronaHospitalCalculator
  },
  data() {
    return {
      title: 'Priežiūra ligoninėje COVID-19'    
    }
  }
}
</script>

