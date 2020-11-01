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
            :key="point.pointText">
            <span v-html='point.pointText'></span>
            <ul  v-if="point.subpoints.length > 0">
              <li v-for="subpoint in point.subpoints"><v-html>{{subpoint}}</v-html></li>
            </ul>
        </li>
        </ul>
      </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

    <v-container>
      <h3>SPECIFINIS GYDYMAS</h3>
    </v-container>

    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="item in specificTreatment"
      :key="item.title"
    >
      <template v-slot:header>
        <h3>{{item.title}}</h3>
      </template>
      <v-container>
        <ul>
        <li v-for="point in item.points"
            :key="point.pointText">
            <span v-html='point.pointText'></span>
            <ul  v-if="point.subpoints.length > 0">
              <li v-for="subpoint in point.subpoints"><v-html>{{subpoint}}</v-html></li>
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
        {title:'ANTIPIRETIKAI',
        points:[
          {pointText:'Paracetamolis – mažiausia efektyvi dozė.',
          subpoints:[
          ]},
        ]},
        {title:'DEGUONIES TERAPIJA',
        points:[
          {pointText:'Jauniems pacientams SpO2 <95%.',
          subpoints:[
          ]},
          {pointText:'Vyresniems pacientams SpO2<92-93%.',
          subpoints:[
          ]},
          {pointText:'Svarbu titruoti dozę pagal efektą: O2 ir pakilus SpO2 >97% – O2 galima mažinti.',
          subpoints:[
          ]},
          {pointText:'Titruojant pagal arterines kraujo dujas, palaikyti PaO2>60mmHg.',
          subpoints:[
          ]},
          {pointText:'Atsargiai skirti O2 terapiją sergantiems lėtine obstrukcine plaučių liga dėl hiperkapnijos pavojaus (šiems pacientams monitoruoti arterines kraujo dujas).',
          subpoints:[
          ]},
        ]},
        {title:'ARTERINĖS KRAUJO DUJOS',
        points:[
          {pointText:'Indikacijos:',
          subpoints:[
            'SpO2 <93%, skiriant 5 l/min O2;',
            'Kvėpavimo dažnis >20 k/min kvėpuojant 5 l/min O2;',
            'Skiriamo O2 titravimas sergantiems LOPL (deguonį skirti atsargiai, titruoti dėl hiperkapnijos).',
          ]},
          {pointText:'<a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm0803851">Kaip atlikti?</a>',
          subpoints:[
          ]},
        ]},
      ],
      specificTreatment: [
        {title:'LENGVA FORMA BE PNEUMONIJOS IR BE DEGUONIES POREIKIO',
        points:[
          {pointText:'Simptominis gydymas',
          subpoints:[
          ]},
        ]},
        {title:'VIRUSINĖ PNEUMONIJA BE DEGUONIES POREIKIO AR LOW-FLOW POREIKIS',
        points:[
          {pointText:'Skiriamas Remdesiviras, dėl paskyrimo sprendžia konsiliumas.',
          subpoints:[
          ]},
          {pointText:'Remdesiviro schema (1 kartą per dieną):',
          subpoints:[
            '1 diena: 200 mg Remdesiviro skiesti su 250 ml NaCl 0,9%; lašinti į veną per 30-120 min.',
            '2-5 dienos: 100 mg Remdesiviro skiesti su 250 ml NaCl 0,9%, lašinti į veną per 30-120 min.'
          ]},
        ]},
        {title:'VIRUSINĖ PNEUMONIJA SU DEGUONIES POREIKIU',
        points:[
          {pointText:'Skiriamas Deksametazonas. Įrodyta, jog 10 dienų mažų dozių Deksametazono kursas gerina ligos išeitis.',
          subpoints:[
          ]},
          {pointText:'Deksametazono schema (1 kartą per dieną):',
          subpoints:[
            '6 mg Deksametazono per os ar į veną (galima skirti bolus ar lašinti su nedideliu kiekiu NaCl 0,9%) 1 kartą per dieną 10 dienų iš eilės.'
          ]},
          {pointText:'Deksametazono skyrimo metu atkreipti dėmesį į:',
          subpoints:[
            'Glikemiją (ypač CD sergantiems pacientams) - gliukozės monitoravimas 3 k/d.',
            'AKS (ypač hipertenzija sergantiems pacientams).',
            'Sujaudinimą (skirti pirmoje dienos pusėje).',
            'VT dirginimą (papildomai skirti Omeprazolį profilaktikai)'
          ]},
        ]},
        {title:'IMUNOSUPRESUOTI PACIENTAI',
        points:[
          {pointText:'Atliekami SARS-CoV-2 IgG ir IgM antikūnai (ELISA metodu).',
          subpoints:[
          ]},
          {pointText:'Jei jų neaptinkama, konsiliumo būdu sprendžiama dėl imuninės plazmos skyrimo indikacijų.',
          subpoints:[
          ]},
        ]},
      ],
    }
  }
}
</script>

