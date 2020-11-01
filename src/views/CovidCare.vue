<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>
    <!-- <NEWSCalculator></NEWSCalculator> -->

    <v-container>
      <h3>TYRIMAI</h3>
    </v-container>
    
    <v-expansion-panel>
    <v-expansion-panel-content>
      <template v-slot:header>
        <h3>LABORATORINIAI TYRIMAI</h3>
      </template>
    <v-container >
      <v-card>
      <v-layout
      row wrap
      justify-left
      py-2
      >
        <v-flex xs12 md4 px-1 py-4 v-for="testGroup in testTable">
          <v-card  color='blue'>
            <v-card-title>{{testGroup.title}}</v-card-title>
          </v-card>
          <v-container>
            <ul >
              <li v-for="test in testGroup.tests" left>{{test}}</li>
            </ul>
          </v-container>
        </v-flex>
      </v-layout>
      </v-card>
    </v-container>
    </v-expansion-panel-content>

    <v-expansion-panel-content>
      <template v-slot:header>
        <h3>VAIZDINIAI TYRIMAI</h3>
      </template>
    <v-container >
      <v-card>
      <v-layout
      row wrap
      justify-left
      py-2
      >
        <v-flex xs12 md4 px-1 py-4 v-for="testGroup in imagingTable">
          <v-card  color='orange'>
            <v-card-title>{{testGroup.title}}</v-card-title>
          </v-card>
          <v-container>
            <ul >
              <li v-for="test in testGroup.tests" left>{{test}}</li>
            </ul>
          </v-container>
        </v-flex>
      </v-layout>
      </v-card>
    </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

    <v-container>
      <h3>PALAIKOMASIS GYDYMAS</h3>
    </v-container>

    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="item in treatment"
      :key="item.title"
    >
      <template v-slot:header>
        <h3>{{item.title}}</h3>
      </template>
      <v-container>
        <ul>
        <li v-for="point in item.points"
            :key="point.pointText">{{point.pointText}}
            <ul  v-if="point.subpoints.length > 0">
              <li v-for="subpoint in point.subpoints">{{subpoint}}</li>
            </ul>
        </li>
        </ul>
      </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

  </v-container>
</template>

<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'
// import CovidCare from '@/components/NEWSCalculator.vue'

export default {
  components: {
    CalculatorTitle,
    // NEWSCalculator
  },
  data() {
    return {
      title: 'COVID-19 gydymo taktika',
      testTable:[
        {
          title:'KASDIEN',
          tests:[
            'BKT',
            'Na, K, Cl, Mg',
            'Laktatas',
            'CRB',
            'Feritinas'
          ]
        },
        {
          title:'KAS 2-3 DIENAS',
          tests:[
            'SPA, ADTL, fibrinogenas',
            'D-dimerai'
          ]
        },
        {
          title:'PAGAL INDIKACIJAS',
          tests:[
            'HBV, HCV, HIV žymenys, jei anksčiau nedaryta',
            'Troponinas tik esant skausmams',
            'LDH, jei buvo padidėjęs',
            'Prokalcitoninas – įtariant bakterinę superinfekciją. Nepatikimas pažengus ligai',
            'Gripo virusas – visiems atvykusiems'
          ]
        },
      ],
      imagingTable:[
        {
          title:'Krūtinės ląstos rentgenograma',
          tests:[
            'Visiems atvykus į ligoninę',
            'Blogėjant būklei/didėjant deguonies poreikiui'
          ]
        },
        {
          title:'Plaučių KT',
          tests:[
            'Blogėjant būklei/didėjant deguonies poreikiui, kai plaučių rentgenograma neblogėjanti.'
          ]
        },
        {
          title:'Kiti vaizdiniai tyrimai',
          tests:[
            'Pagal indikacijas',
            'Planinių procedūrų sergant COVID-19 neatlikinėti'
          ]
        },
      ],
      treatment: [
        {title:'EMPIRINIS ANTIBAKTERINIS GYDYMAS',
        points:[
          {pointText:'Sergant COVID-19 nelabai būdingos bakterinės superinfekcijos',
          subpoints:[]},
          {pointText:'Skiriamas tik esant stipriam bakterinės superinfekcijos įtarimui',
          subpoints:[
            'Nauja karščiavimo banga ir nauja konsolidacijos zona plaučių rentgene;',
            'Plaučių KT bakterinei pneumonijai būdingi požymiai;',
            'Reikšmingas CRB, PCT didėjimas;',
            'Pacientai, turintys rijimo sutrikimų, kai įtariama aspiracija;',
            'Kraujo ir šlapimo bei skreplių pasėliai prieš skiriant pirmąją antibiotikų dozę.'
            ]},]},
        {title:'ANTIHIPERTENZINIS GYDYMAS',
        points:[
          {pointText:'AKFi, ARB turi būti tęsiami, jei nėra priežasčių juos nutraukti:',
          subpoints:[
            'Hipotenzija',
            'Ūminis inkstų pažeidimas'
          ]},
          {pointText:'Naujai atsiradusiai hipertenzijai koreguoti patartina skirti AKFi. Yra įrodymų, kad AKFi ir ARB gali gerinti ligos išeitis, bet įrodymų trūksta.',
          subpoints:[
            ]},]},
        {title:'STATINAI',
        points:[
          {pointText:'Tęsti, kaip paskirta vartoti. Yra duomenų, kad statinai gali gerinti ligos išeitis, bet įrodymų trūksta.',
          subpoints:[
          ]},]},
        {title:'CD GYDYMAS',
        points:[
          {pointText:'Vartoja Metforminą -> nutraukti. Skirti poodinį insuliną.',
          subpoints:[
          ]},
          {pointText:'Vartoja Diaprelį -> negalima skirti kartu su insulinoterapija dėl didelės hipoglikemijos rizikos. Esant poreikiui didinti antidiabetinį gydymą, skirti poodinį insuliną ir nutraukti diaprelį.',
          subpoints:[
          ]},
          {pointText:'Išrašant, grįžti prie pacientui įprasto gydymo.',
          subpoints:[
          ]},
          ]},
        {title:'IMUNOSUPRESANTAI',
        points:[
          {pointText:'Aptariama individualiu atveju.',
          subpoints:[
          ]},
          {pointText:'Esant sepsiui, sisteminių GKK staigiai nutraukti negalima. Rekomenduojama keisti į lašinamą Hidrokortizoną.',
          subpoints:[
          ]},
          {pointText:'Pacientams, gaunantiems GKK, atidžiau vertinti bendrą būklę, nes CRB ir kt. ūmios fazės baltymų kilimo bei karščiavimo blogėjant būklei gali nepasireikšti.',
          subpoints:[
          ]},
        ]},
        {title:'ANTIKOAGULIACIJA',
        points:[
          {pointText:'Visiems pacientams, neturintiems kitų rizikos faktorių, skiriami antikoaguliantai (įprastai Fraksiparinas), dozė koreguojama pagal svorį (daugmaž taip: iki 70 kg svoris – 0,3x2; daugiau nei 70 kg – 0,6 x 2) ir atsižvelgiant į inkstų funkciją.',
          subpoints:[
          ]},
          {pointText:'Pacientams, vartojantiems antikoaguliantus, skirti pagal pridedamą lentelę.',
          subpoints:[
          ]},
          {pointText:'Atsiradus kraujavimui, antikoaguliantai nedelsiant nutraukiami.',
          subpoints:[
          ]},
        ]},
      ]
    }
  }
}
</script>

