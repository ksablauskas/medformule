<template>
  <v-container class="my-4" fluid>
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <!-- <CoronaHospitalCalculator></CoronaHospitalCalculator> -->
      <v-layout child-flex>
      <v-data-table
        :headers="hospitalizationCriteria.headers"
        :items="hospitalizationCriteria.criteria"
        class="elevation-1"
        hide-actions
        fluid
      >
        <template v-slot:items="props">
          <td class="text-xs-left">
            <p v-for="point in props.item.points">{{point}}</p>
          </td>
          <td class="text-xs-left"><v-chip :color="props.item.color">{{ props.item.comment }}</v-chip></td>
        </template>
      </v-data-table>    
       
    </v-layout>
    </br>
    <p>* Esant santykinei indikacijai dėl hospitalizacijos spręsti individualiai. Ambulatorinis gydymas galimas tik galint užtikrinti kasdienę medicininę priežiūrą.</p> 
  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
// import CoronaHospitalCalculator from '@/components/CoronaHospitalCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    // CoronaHospitalCalculator
  },
  data() {
    return {
      title: 'Pacientų, sergančių COVID-19 indikacijos hospitalizacijai',
      hospitalizationCriteria: {
        headers: [
            {
              text: 'Kriterijus',
              align: 'left',
              value: 'name'
            },
            { text: 'Indikacija', value: 'comment',},
          ],
          criteria: [
            {
              points: [
                'Kvėpavimo dažnis >20 (kvėpuojant aplinkos oru).',
                ],
              comment: 'Absoliuti',
              color: 'red lighten-1'
            },
            {
              points: [
                'SpO2 <96% (kvėpuojant aplinkos oru).',
                ],
              comment: 'Absoliuti',
              color: 'red lighten-1'
            },
            {
              points: [
                'Infiltraciniai pokyčiai krūtinės KT ar Ro.',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Limfopenija.',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Amžius >= 50.',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Amžius <50 m. ir kliniškai reikšmingas komorbidiškumas (širdies-kraujagyslių ligos, plaučių ligos, inkstų ligos su IFN, CD).',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Imunodeficitas ir (ar) skiriamas imunosupresinis gydymas ar baigtas per pastaruosius 6 mėn. Nepriklausomai nuo amžiaus.',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Po kraujodaros kamieninių ląstelių transplantacijos (<12 mėn. autoKKLT, <24 mėn aloKKLT). Nepriklausomai nuo amžiaus.',
                ],
              comment: 'Santykinė*',
              color: 'orange lighten-1'
            },
            {
              points: [
                'Progresuojantis kvėpavimo nepakankamumas: SpO2 < 93 proc., taikant oksigenoterapiją per kaukę 5 l/min. ar kvėpavimo dažnis ≥ 30 k/min.',
                ],
              comment: 'RITS',
              color: 'red darken-4'
            },
            {
              points: [
                'Šokas: sistolinis kraujo spaudimas < 90 mm Hg ar kritimas <40 mmHg nuo bazinio ar VAS <65 mmHg ar laktatas > 4 mmol/L nepaisant koreguotos volemijos.',
                ],
              comment: 'RITS',
              color: 'red darken-4'
            },
            {
              points: [
                'DODS: naujai atsiradęs daugiau nei vienos organų sistemų funkcijos sutrikimas.',
                ],
              comment: 'RITS',
              color: 'red darken-4'
            },
            {
              points: [
                'NEWS (angl. National Early Warning Score)  ≥ 7 balai.',
                ],
              comment: 'RITS',
              color: 'red darken-4'
            },
            {
              points: [
                'Nei vieno išvardinto kriterijaus.',
                ],
              comment: 'Ambulatoriškai',
              color: 'green lighten-1'
            },
          ],
        }, 
    }
  }
}
</script>

