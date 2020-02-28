<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <CoronaOutpatientCalculator></CoronaOutpatientCalculator>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CoronaOutpatientCalculator from '@/components/CoronaOutpatientCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    CoronaOutpatientCalculator
  },
  data() {
    return {
      title: 'COV-19 tepinėlis ir ambulatorinė priežiūra'    
    }
  }
}
</script>

