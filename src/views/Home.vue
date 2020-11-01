<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <br>
    <h2 class='red'>Dėmesio - svetainė skirta naudoti tik sveikatos priežiūros specialistams.</h2>
    <br>
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
      title: 'Skaičiuoklės medikams',
      calculators: [
        {id:0, title: 'COVID-19 bendra gydymo taktika', color: 'blue darken-2', link: '/covid'},
        {id:1, title: 'NEWS', color: 'orange', link: '/news'},
        {id:2, title: 'GFG ir kreatinino klirensas (suaugusiųjų)', color: 'green', link: '/ckd'},
        
        // {id:2, title: 'SCORE', color: 'green', link: '/score'},
        
        // {id:4, title: 'Visuomenei COVID-19', color: 'orange', link: '/corona_society'},
        // {id:4, title: 'COVID-19 GMP', color: 'green', link: '/corona_ems'},
        // {id:5, title: 'COV-19 tepinėlis ir ambulatorinė priežiūra', color: 'blue', link: '/corona_outpatient'},
        // {id:6, title: 'COVID-19 priežiūra ligoninėje', color: 'purple', link: '/corona_hospital'},

        // {id:3, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'red darken-2', link: '/ckd'},
        // {id:4, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
        // {id:5, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
        // {id:6, title: 'GFG ir kreatinino klirensas asd asd asdd as d', color: 'orange', link: '/ckd'},
      ]
    }
  }
}
</script>
