<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <CKDCalculator></CKDCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CKDCalculator from '@/components/CKDCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    CKDCalculator
  },
  data() {
    return {
      title: 'Inkstų funkcijos vertinimas pagal GFR ir ClCr (18 m. ir vyresniems)'    
    }
  }
}
</script>

