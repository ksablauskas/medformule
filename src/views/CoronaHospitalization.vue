<template>
  <v-container class="my-4">
    <CalculatorTitle
      :title="title"
    ></CalculatorTitle>

    <v-container>
      <h3>INDIKACIJOS HOSPITALIZACIJAI *</h3>
    </v-container>

    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="item in hospitalization"
      :key="item.title"
    >
      <template v-slot:header>
        <h3>{{item.title}}</h3>
      </template>
      <v-container>
        <ol>
        <li v-for="point in item.points"
            :key="point.pointText">
            <span v-html='point.pointText'></span>
            <ul  v-if="point.subpoints.length > 0">
              <li v-for="subpoint in point.subpoints"><span v-html='subpoint'></span></li>
            </ul>
        </li>
        </ol>
      </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

    <v-container>
    <p>* Slaugomi lėtinėmis terminalinėmis ligomis sergantys pacientai hospitalizuojami tik jei paliatyvios slaugos (įskaitant oksigenoterapiją) negalima užtikrinti ambulatoriškai ar slaugos įstaigoje.</p>
    </v-container>

    <v-container>
      <h3>INDIKACIJOS PERKĖLIMUI / IŠRAŠYMUI **</h3>
    </v-container>

    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="item in discharge"
      :key="item.title"
    >
      <template v-slot:header>
        <h3>{{item.title}}</h3>
      </template>
      <v-container>
        <ol>
        <li v-for="point in item.points"
            :key="point.pointText">
            <span v-html='point.pointText'></span>
            <ul  v-if="point.subpoints.length > 0">
              <li v-for="subpoint in point.subpoints"><span v-html='subpoint'></span></li>
            </ul>
        </li>
        </ol>
      </v-container>
    </v-expansion-panel-content>
    </v-expansion-panel>

  <v-container>
    <p>** Hospitalizacija tęsiama be medicininių indikacijų tik tais atvejais, kai privalomos izoliacijos neįmanoma užtikrinti ambulatoriškai ar kitose įstaigose.</p>
  </v-container>
    
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
      title: 'INDIKACIJOS HOSPITALIZACIJAI / IŠRAŠYMUI',
      hospitalization: [
        {title:'ATRAMINĖJE LIGONINĖJE',
        points:[
          {pointText:'SARS-CoV-2 sukelta pneumonija ir bent viena iš išvardintų sąlygų:',
          subpoints:[
            'kvėpavimo nepakankamumas (spO2 ≤ 94% nesant periferinių kraujagyslių vazospazmo ir (ar) KD ≥ 24 k/min.) ir (arba)',
            'lydinčios būklės*, reikalaujančios skubaus stacionarinio gydymo.',
          ]},
          {pointText:'COVID-19 koordinatoriaus sprendimu, jei yra kitų blogos prognozės priežasčių (pvz., „citokinų audros“ požymiai)',
          subpoints:[
            'Nauja karščiavimo banga ir nauja konsolidacijos zona plaučių rentgene;',
            'Plaučių KT bakterinei pneumonijai būdingi požymiai;',
            'Reikšmingas CRB, PCT didėjimas;',
            'Pacientai, turintys rijimo sutrikimų, kai įtariama aspiracija;',
            'Kraujo ir šlapimo bei skreplių pasėliai prieš skiriant pirmąją antibiotikų dozę.'
            ]},]},
        {title:'III LYGIO LIGONINĖJE',
        points:[
          {pointText:'Kritinė būklė.',
          subpoints:[
            '<b>Progresuojantis kvėpavimo nepakankamumas</b>: SpO2 < 93 proc., taikant oksigenoterapiją per kaukę 5 l/min. ar kvėpavimo dažnis ≥ 30 k/min.',
            '<b>Šokas</b>: sistolinis kraujo spaudimas < 90 mm Hg ar kritimas <40 mmHg nuo bazinio ar VAS <65 mmHg ar laktatas > 4 mmol/L nepaisant koreguotos volemijos.',
            '<b>DODS</b>: naujai atsiradęs daugiau nei vienos organų sistemų funkcijos sutrikimas.',
            '<b>NEWS</b> (angl. <i>National Early Warning Score</i>) ≥ 7 balai.'
          ]},
          {pointText:'Getutinės ligos, nesant kritinės būklės.',
          subpoints:[
            '<b>Transplantuoti</b>.',
            '<b>Imunosupresuoti</b> dėl ligos ar gaunantys imunosupresinį gydymą.',
            'Onkologiniai pacientai, gaunantys <b>specifinį gydymą</b>.',
            '<b>Dializuojami</b> pacientai.',
            'Kita gretutinės būklės, kai pagalba gali būti suteikta <b>tik III lygio ligoninėje</b>.'
          ]},
          {pointText:'Vaikai, nėščiosios.',
          subpoints:[
          ]},
        ]},
        
      ],
      discharge: [
        {title:'PERKĖLIMO Į SLAUGOS ĮSTAIGĄ / ATRAMINĘ LIGONINĘ INDIKACIJOS',
        points:[
          {pointText:'Kliniškai stabili COVID-19 ir/ar gretutinių ligų būklė, kai nebereikalinga III lygio pagalba, tačiau būtina tęsti stacionarinį gydymą atraminėje ligoninėje.',
          subpoints:[
          ]},
          {pointText:'Reikalinga tęstinė slauga ar paliatyvus gydymas, kai pacientas visiškai nepasveikęs nuo COVID-19 ligos.',
          subpoints:[
            ]},]},
        {title:'IŠRAŠYMO IŠ STACIONARO INDIKACIJOS',
        points:[
          {pointText:'Klinikiniai stabili bei gerėjanti COVID-19 liga:',
          subpoints:[
            'sO2>94% ir KD<24 k/min, kvėpuojant aplinkos oru.',
            'Afebrilus periodas 2-3 paros.',
            'Stabili hemodinamika ir normali sąmonė'
          ]},
          {pointText:'Stabiliai mažėjantys uždegimo ir/ar „citokinų audros“ laboratoriniai rodikliai.',
          subpoints:[
          ]},
        ]},
        
      ],
      
    }
  }
}
</script>

