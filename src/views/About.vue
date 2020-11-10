<template>
  <v-container class="my-4">
      <CalculatorTitle
        :title="title"
      ></CalculatorTitle>
    <br>
    <v-card>
      <v-container>
        <p>Programėle yra sukurta <a href="https://www.covidmed.lt/">Įrodymais pagrįstos medicinos grupės</a> iniciatyva.
        </p>
        <p>Programėlės autoriai:
            <ul>
              <li>Gyd. Karolis Šablauskas</li>
              <li>Gyd. Ugnė Ringelevičiūtė</li>
            </ul>
          </p>
          <p>Dėkojame už pagalbą:
            <ul>
              <li>Prof. Laimonui Griškevičiui</li>
              <li>Prof. Ligitai Jančorienei</li>
              <li>Gyd. Tumui Beinortui</li>
              <li>Dr. Donatai Ringaitienei</li>
              <li>Dr. Valdui Pečeliūnui</li>
              <li>Gyd. Tomui Kairiui</li>
            </ul>
          </p>
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
      title: 'Autoriai',
    }
  }
}
</script>
