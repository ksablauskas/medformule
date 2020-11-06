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
      <h3>ELEKTROLITŲ KOREKCIJA</h3>
    </v-container>

    <v-expansion-panel>
    <v-expansion-panel-content>
      <template v-slot:header>
        <h3>HIPOKALEMIJOS KOREKCIJA</h3>
      </template>
    <v-container>
      <v-data-table
        :headers="hypokalemiaTreatment.headers"
        :items="hypokalemiaTreatment.regime"
        class="elevation-1"
        hide-actions
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <v-card :color='props.item.color'>{{ props.item.name }}</br>
            {{ props.item.range }}</v-card>
          </td>
          <td class="text-xs-left">{{ props.item.k }}</td>
          <td class="text-xs-left">{{ props.item.os }}</td>
          <td class="text-xs-left">{{ props.item.iv }}</td>
          <!-- <td class="text-xs-right">{{ props.item.sp }}</td> -->
        </template>
      </v-data-table>
      </br>
      <ul>
      <li v-for="point in hypokalemiaPoints"
          :key="point">
          {{point}}
      </li>
      </ul>
    </v-container>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <template v-slot:header>
        <h3>HIPOMAGNEZEMIJOS KOREKCIJA</h3>
      </template>
    <v-container>
      <v-data-table
        :headers="hypomagnesemiaTreatment.headers"
        :items="hypomagnesemiaTreatment.regime"
        class="elevation-1"
        hide-actions
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <v-card :color='props.item.color'>{{ props.item.name }}</br>
            {{ props.item.range }}</v-card>
          </td>
          <td class="text-xs-left">{{ props.item.mg }}</td>
          <td class="text-xs-left">{{ props.item.iv }}</td>
        </template>
      </v-data-table>
      </br>
      <ul>
      <li v-for="point in hypomagnesemiaPoints"
          :key="point">
          {{point}}
      </li>
      </ul>
    </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

    <v-container>
      <h3>SPECIFINIS GYDYMAS*</h3>
      <p>*Spręsti dėl dalyvavimo klinikiniame tyrime</p>
      
    </v-container>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <h3>BENDRA SCHEMA</h3>
        </template>
        <v-container>
          <img style="width: 100%" src="@/assets/specific_treatment_covid.png"></img>
        </v-container>
      </v-expansion-panel-content>
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
            ' Reikšmingas CRB, PCT didėjimas (atkreipti dėmesį, kad vėlyvose ligos stadijose PCT nepadeda patikimai diferencijuoti virusinės ir bakterinės pneumonijos);',
            'Pacientai, turintys rijimo sutrikimų, kai įtariama aspiracija;',
            'Kraujo ir šlapimo bei skreplių pasėliai prieš skiriant pirmąją antibiotikų dozę.'
            ]},]},
        {title:'ANTIHIPERTENZINIS GYDYMAS',
        points:[
          {pointText:'AKFi, ARB turi būti tęsiami, jei nėra priežasčių juos nutraukti:',
          subpoints:[
            'Hipotenzija',
            'Ūminis inkstų pažeidimas',
            'Hiperkalemija'
          ]},
          {pointText:'Naujai atsiradusiai hipertenzijai koreguoti patartina skirti AKFi. Yra duomenų, kad AKFi ir ARB gali gerinti ligos išeitis, bet įrodymų trūksta.',
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
          {pointText:'Hipoglikemija <4 mmol/l.',
          subpoints:[
            'Ekstra koreguoti i/v (50ml/50 % gliukozės) arba p/o gliukoze. Pakartoti gliukozės koncentraciją kraujyje po 15 min. Jei gliukozės koncentracija < 3,9 mmol/l, pakartotinai skirti gliukozę (25-50 ml 50%). Kartojama, kol gliukozės koncentracija >3,9 mmol/l). Nusistovėjus, glikemiją sekti kas 4-6 val./parą.',
            'Nutraukti antidiabetinį gydymą, jei toks skiriamas.',
            'Esant gyvybei pavojingai hipoglikemijai, rekomenduojama gliukagonas 1mg injekcija į raumenį.'
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
          {pointText:'Visiems pacientams, neturintiems kontraindikacijų, skiriami antikoaguliantai (įprastai MMMH).',
          subpoints:[
          ]},
          {pointText:'Fraksiparino dozė koreguojama pagal svorį (iki 70 kg– 0,3 ml kas 12 val.; daugiau nei 70 kg – 0,6 ml kas 12 val.) ir atsižvelgiant į inkstų funkciją.',
          subpoints:[
          ]},
          {pointText:'Pacientams, vartojantiems antikoaguliantus, skirti pagal <a href="https://www.uptodate.com/contents/image?imageKey=HEME%2F128045&topicKey=ID%2F127454&source=see_link">pridedamą lentelę.</a>',
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
          {pointText:'Svarbu titruoti dozę pagal efektą: kai skiriant O2 pakyla SpO2 >97% – O2 galima mažinti.',
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
        {title:'sO2 > 94% KVĖPUOJANT APLINKOS ORU',
        points:[
          {pointText:'Simptominis gydymas / stebėsena',
          subpoints:[
          ]},
        ]},
        {title:'sO2 ≤ 94% IR LOW-FLOW (NOSIES KANIULĖS / KAUKĖ)',
        points:[
          {pointText:'Skiriamas Deksametazonas',
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
          {pointText:'Svarstyti dėl Remdesiviro skyrimo. Aptarti konsiliume.',
          subpoints:[
          ]},
          {pointText:'Remdesiviro schema (1 kartą per dieną):',
          subpoints:[
            '1 diena: 200 mg Remdesiviro skiesti su 250 ml NaCl 0,9%; lašinti į veną per 30-120 min.',
            '2-5 dienos: 100 mg Remdesiviro skiesti su 250 ml NaCl 0,9%, lašinti į veną per 30-120 min.'
          ]},

        ]},
        {title:'sO2 ≤ 94% HIGH-FLOW / DPV**',
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
          {pointText:'**Kai COVID-19 simptomų trukmė yra <5-7 dienos ir hospitalizavus iškart yra high-flow / DPV indikacijos, spręsti dėl remdesiviro skyrimo individualiai; ieškoti kitų / papildomų kvėpavimo nepakankamumo priežasčių.',
          subpoints:[
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
      hypokalemiaTreatment: {
        headers: [
            {
              text: 'Hipokalemija',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            { text: 'K poreikis*', value: 'k'},
            { text: 'P/OS', value: 'os' },
            { text: 'Į/V**', value: 'iv' },
            // { text: 'Spironolaktonas', value: 'sp' },
          ],
          regime: [
            {
              name: 'Lengva',
              range: '3,4-3,9 mmol/l',
              k: '1-6 g',
              os: '1 Tab. KCl 750 mg x 2-3k/d.',
              iv: 'Sol. KCl 10 % 10ml (1g) x 1-3 k/d.',
              color: 'green lighten-1',
              // sp: 'Pradėti nuo 50-100 mg per dieną, galima palaipsniui didinti iki 400 mg per dieną',
            },
            {
              name: 'Vidutinė',
              range: '3-3,3 mmol/l',
              k: '7-10 g',
              os: '1-2 Tab. KCl 750 mg x 3k/d.',
              iv: 'Sol. KCl 10 % 10-30 ml į/v x 3 k/d.',
              color: 'orange lighten-1',
            },
            {
              name: 'Sunki',
              range: '<3 mmol/l',
              k: '>10 g',
              os: 'Tab. KCl 750 mg x 2 ne dažniau nei kas 3 val.***',
              iv: 'Sol. KCl 10 % 30-40 ml x 3 k/d.',
              color: 'red lighten-1',
            },
          ],
        },
        hypomagnesemiaTreatment: {
        headers: [
            {
              text: 'Hipomagnezemija',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            { text: 'Mg poreikis*', value: 'mg'},
            { text: 'Į/V**', value: 'iv' },
          ],
          regime: [
            {
              name: 'Lengva-vidutinė',
              range: '0,41-0,70 mmol/l',
              mg: '1-4 g',
              iv: 'Sol. MgSO4 25 % 5-10 ml į/v x 1-2 k/d.',
              color: 'orange lighten-1',
            },
            {
              name: 'Sunki',
              range: '<0,41 mmol/l',
              mg: '4-8 g',
              iv: 'Sol. MgSO4 25 % 10 ml x 2-3 k/d.',
              color: 'red lighten-1',
            },
          ],
        },
        hypokalemiaPoints: [
          '* K poreikis per dieną. 1g pakelia K koncentraciją kraujyje 0,1 mmol/l, pagal tai galima preliminariai apskaičiuoti reikalingo kalio kiekį.',
          '** Sol. KCl 10 % 10 ml (1 g) praskiesti su  Sol. NaCl 0,9 % 500 ml ir lėtai infuzuoti į/v.',
          '*** vienu kartu nerekomenduojama skirti 3 ar daugiau KCl tablečių dėl virškinimo trakto dirginimo.',
          'Esant visų sukumų hipokalemijai galima skirti spironolaktoną: pradėti nuo 50-100 mg per dieną, galima palaipsniui didinti iki 400 mg per dieną.',
          'Lašinimo greitis į periferinę veną ≤ 1 g KCl/val. Jei reikalingas >1 g KCL/val. greitis – indikuotina CVK. Maksimalus greitis į CVK 3 g KCl/val. praskiedus su NaCl 0,9 % 50 -100ml., TIK su pastoviu EKG monitoravimu. Esant vidutinio laipsnio ir sunkiai hipokalemijai sekti K koncentraciją 3-4 x d. Infuzuojamų skysčių kiekis pacientams su kardiovaskulinėmis, inkstų patologijomis turi būti griežtai monitoruojamas, vengiant hipervolemijos.',
        ],
        hypomagnesemiaPoints: [
          '* Mg poreikis per dieną. Sol. MgSO4 25% 10 ml = 2,5 g magnio.',
          '** MgSO4 25% 10 ml skiesti su 250 - 500 ml NaCl 0.9 % arba gliukozės 5% tirpalais ir lašinti ne greičiau nei per 1 - 2 val. bei stebėti paciento AKS, EKG ir Mg koncentraciją kraujo plazmoje (norma: 0,8 – 1,2 mmol/l) bei diurezę. Infuzuojamų skysčių kiekis pacientams su kardiovaskulinėmis, inkstų patologijomis turi būti griežtai monitoruojamas, vengiant hipervolemijos.',
        ],
    }
  }
}
</script>

