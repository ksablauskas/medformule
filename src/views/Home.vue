<template>
  <v-container class="my-4">

      <v-layout row wrap class="my-4">

        <CalculatorSelectionButton v-for="calculator in calculators"
          :key="calculator.id"
          :title="calculator.title"
          :color="calculator.color"
          :link="calculator.link"
        >
        </CalculatorSelectionButton>

      </v-layout>

      <br>
      <v-card flat>
        <v-container>
          <p>Šią programėlę sukūrėme reaguodami į COVID-19 pandemijos fronte dirbančių medikų poreikį turėti aiškias ir praktikoje taikomas gaires.
            Programėle yra sukurta <a href="https://www.covidmed.lt/">Įrodymais pagrįstos medicinos grupės</a> iniciatyva.
          </p>
          <p>Programėlę nuolatos atnaujiname, todėl labai laukiame argumentuotų komentarų bei nuomonių, kokios informacijos labiausiai trūksta. Taip pat kviečiame teikti pasiūlymus dėl informacijos turinio. Prašytume taip pat nurodyti ir šaltinius, kuriais remiatės.</p>
          <p>
            <v-btn color="blue darken-2" href="https://forms.gle/zm6TP19ZoyN5aNfR7" target="_blank">
              <span>užpildyti formą</span>
            </v-btn>
          </p>
        </v-container>
      </v-card>

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
      title: 'ĮRANKIAI MEDIKAMS',
      calculators: [
        {id:0, title: 'COVID-19 hospitalizacijos / išrašymo kriterijai', color: 'red lighten-4', link: '/hospitalization'},
        {id:1, title: 'COVID-19 bendra gydymo taktika', color: 'blue lighten-4', link: '/covid'},
        {id:2, title: 'NEWS', color: 'orange lighten-4', link: '/news'},
        {id:3, title: 'GFG ir kreatinino klirensas (suaugusiųjų)', color: 'green lighten-4', link: '/ckd'},
        
        
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
