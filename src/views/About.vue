<template>
  <v-container class="my-4">
      <CalculatorTitle
        :title="title"
      ></CalculatorTitle>
    <br>
    <v-card>
      <v-container>
        <p>Šią programėlę sukūrėme reaguodami į COVID-19 pandemijos fronte dirbančių medikų poreikį turėti aiškias ir praktikoje pritaikomas gaires.
          Programėle yra sukurta <a href="https://www.covidmed.lt/">Įrodymais pagrįstos medicinos grupės</a> iniciatyva.
        </p>
        <ul></ul>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'

export default {
  components: {
    CalculatorTitle,
  },
  data() {
    return {
      title: 'Apie',
    }
  }
}
</script>
