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
      title: 'INKSTŲ FUNKCIJOS VERTINIMAS PAGAL GFR IR ClCr (18 m. ir vyresniems)'    
    }
  }
}
</script>

