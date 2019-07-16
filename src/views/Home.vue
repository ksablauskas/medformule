<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>

    <v-layout row wrap>

      <CalculatorSelectionButton v-for="calculator in calculators"
        :key="calculator.id"
        :title="calculator.title"
        :color="calculator.color"
        :link="calculator.link"
      >
      </CalculatorSelectionButton>

    </v-layout>
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
import CalculatorSelectionButton from '@/components/CalculatorSelectionButton.vue'

export default {
  components: {
    CalculatorTitle,
    CalculatorSelectionButton,
  },
  data() {
    return {
      title: 'Įvairios skaičiuoklės medikams',
      calculators: [
        {id:0, title: 'GFG ir kreatinino klirensas (suaugusiųjų)', color: 'orange', link: '/ckd'},
        {id:1, title: 'GFG ir kreatinino klirensas (vaikų)', color: 'blue darken-2', link: '/ckd-pediatric'},
        {id:2, title: 'SCORE', color: 'green', link: '/score'},
        // {id:3, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'red darken-2', link: '/ckd'},
        // {id:4, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
        // {id:5, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
        // {id:6, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
      ]
    }
  }
}
</script>
