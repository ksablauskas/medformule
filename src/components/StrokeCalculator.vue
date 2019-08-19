<template>
  <v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md2 mx-1>
          <v-layout row text-xs-center justify-center>
            <h3>ATVEJO PROGRESAS</h3>
          </v-layout>
          <v-layout row text-xs-center justify-center>
            <v-progress-circular
              :rotate="180"
              :size="150"
              :width="15"
              :value="value"
              color="info"
            >
              {{ value }} %
            </v-progress-circular>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <div v-if="!showContraindications">

      <FieldTitle :title="thrombolysisIndications"></FieldTitle>

      <FieldTitle :title="strokeSymptomsQuestion"></FieldTitle>
      <ButtonSelector :options="strokeSymptoms"></ButtonSelector>

      <FieldTitle :title="symptomsStartQuestion"></FieldTitle>
      <ButtonSelector :options="symptomsStart"></ButtonSelector>

      <FieldTitle :title="disabilityQuestion"></FieldTitle>
      <ButtonSelector :options="disability"></ButtonSelector>

      <FieldTitle :title="ageQuestion"></FieldTitle>
      <ButtonSelector :options="age"></ButtonSelector>

      <v-layout
        text-xs-center
        row wrap
        justify-left
        my-4  
      >
            <v-btn large 
              @click="showContraindications = true"
              color="success"
              :disabled="goToContraindicationsDisabled"
              >
                Patvirtinti
            </v-btn>
      </v-layout>

    </div>

    <!-- IVT KONTRAINDIKACIJOS -->
    
    <div v-else>

      <FieldTitle :title="thrombolysisContraindications"></FieldTitle>

      <FieldTitle :title="ctQuestion"></FieldTitle>
      <ButtonSelector :options="ct"></ButtonSelector>

      <FieldTitle :title="anticoagulantsQuestion"></FieldTitle>
      <ButtonSelector :options="anticoagulants"></ButtonSelector>

      <FieldTitle :title="vitaminKQuestion"></FieldTitle>
      <ButtonSelector :options="vitaminK"></ButtonSelector>

      <FieldTitle :title="giBleedingQuestion"></FieldTitle>
      <ButtonSelector :options="giBleeding"></ButtonSelector>

      <FieldTitle :title="vesselQuestion"></FieldTitle>
      <ButtonSelector :options="vessel"></ButtonSelector>

      <FieldTitle :title="surgeryQuestion"></FieldTitle>
      <ButtonSelector :options="surgery"></ButtonSelector>

      <FieldTitle :title="hemorrhageQuestion"></FieldTitle>
      <ButtonSelector :options="hemorrhage"></ButtonSelector>

      <FieldTitle :title="spontaniousHemorrhageQuestion"></FieldTitle>
      <ButtonSelector :options="spontaniousHemorrhage"></ButtonSelector>

      <FieldTitle :title="cnsDiseaseQuestion"></FieldTitle>
      <ButtonSelector :options="cnsDisease"></ButtonSelector>

      <FieldTitle :title="bpQuestion"></FieldTitle>
      <ButtonSelector :options="bp"></ButtonSelector>

      <FieldTitle :title="bacterialEndocarditisQuestion"></FieldTitle>
      <ButtonSelector :options="bacterialEndocarditis"></ButtonSelector>

      <FieldTitle :title="acutePancreatitisQuestion"></FieldTitle>
      <ButtonSelector :options="acutePancreatitis"></ButtonSelector>

      <FieldTitle :title="aneurysmQuestion"></FieldTitle>
      <ButtonSelector :options="aneurysm"></ButtonSelector>

      <FieldTitle :title="cancerQuestion"></FieldTitle>
      <ButtonSelector :options="cancer"></ButtonSelector>

      <FieldTitle :title="liverDiseaseQuestion"></FieldTitle>
      <ButtonSelector :options="liverDisease"></ButtonSelector>

      <FieldTitle :title="ctIschaemiaQuestion"></FieldTitle>
      <ButtonSelector :options="ctIschaemia"></ButtonSelector>

      <FieldTitle :title="heparinQuestion"></FieldTitle>
      <ButtonSelector :options="heparin"></ButtonSelector>
      
      <FieldTitle :title="thrombocytopeniaQuestion"></FieldTitle>
      <ButtonSelector :options="thrombocytopenia"></ButtonSelector>

      <FieldTitle :title="traumaQuestion"></FieldTitle>
      <ButtonSelector :options="trauma"></ButtonSelector>

      <FieldTitle :title="glucoseQuestion"></FieldTitle>
      <ButtonSelector :options="glucose"></ButtonSelector>

      <FieldTitle :title="seizureQuestion"></FieldTitle>
      <ButtonSelector :options="seizure"></ButtonSelector>

      <FieldTitle :title="pregnancyQuestion"></FieldTitle>
      <ButtonSelector :options="pregnancy"></ButtonSelector>

      <v-layout
        text-xs-center
        row wrap
        justify-left
        my-4  
      >
            <v-btn large 
              @click="showContraindications = false"
              color="info"
              
              >
                ATGAL Į INDIKACIJAS
            </v-btn>
      </v-layout>

    </div>

    
    
    <InputError v-for="message in inputControl" :message="message"></InputError>
    <!-- <Result
      :resultvalue="ckdCreatinine"
      :resultcolor="ckdCreatinineColor"
      :resultitle="'CKD-EPI KREATININAS (eGFR)'"
      :resultmeaning="ckdCreatinineStage"
      :units="'mL/min/1.73 m²'"
    >
    </Result>

    <Result
      :resultvalue="cochroftGault"
      :resultcolor="cochroftGaultColor"
      :resultitle="'COCKCROFT-GAULT (CrCl)'"
      :resultmeaning="cochroftGaultStage"
      :units="'mL/min'"
    >
    </Result>

    <v-container>
      <Reference v-for="reference in references"
      :key="reference.id"
      :text="reference.text"
    ></Reference>
    </v-container>     -->
  </v-container>
</template>

<script>
import ButtonSelector from '@/components/ButtonSelector'
import NumberField from '@/components/NumberField'
import Result from '@/components/Result'
import InputError from '@/components/InputError'
import Reference from '@/components/Reference'
import FieldTitle from '@/components/CalculatorFieldTitle'

export default {
  components: {
    ButtonSelector,
    NumberField,
    Result,
    InputError,
    Reference,
    FieldTitle,
  },
  data() {
    return {
        interval: {},
        value: 0,
        showContraindications: false,
        gender: 'male',
        colorMale: 'warning',
        colorFemale: '',
        ckdEpi: 0,
        thrombolysisIndications: 'Tinkamumo intraveninei trombolizei kriterijai',
        thrombolysisContraindications: 'Netinkamumo intraveninei trombolizei kriterijai',
        strokeSymptomsQuestion: '1. Pacientui įtariamas ŪGSKS?',
        strokeSymptoms:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        symptomsStartQuestion: '2. Paciento simptomai trunka:',
        symptomsStart: [
          {id: 0, name: 'Ilgiau nei 4,5 val.', active: false, color: '', value: 0},
          {id: 1, name: 'Trumpiau nei 4,5 val.', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0}
        ],
        disabilityQuestion: '3. Ar iki insulto pradžios pacientas galėjo apsitarnauti savarankiškai?',
        disability: [
          {id: 0, name: 'Taip', active: false, color: '', value: 0},
          {id: 1, name: 'Ne', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0}
        ],
        ageQuestion: '4. Paciento amžius:',
        age: [
          {id: 0, name: '<18 metų', active: false, color: '', value: 0},
          {id: 1, name: '≥18 metų', active: false, color: '', value: 0},
        ],
        ctQuestion: '1. Vaizdiniuose tyrimuose matoma išemijos zona viršija 33% užsikimšusios kraujagyslės maitinamos zonos (kriterijus taikomas vidinės miego arterijos baseinui):',
        ct: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        anticoagulantsQuestion: '2. Ligonis vartoja netiesioginio veikimo antikoaguliantus ir/arba protrombino laikas didesnis 15 sek. (TNS ≥1,7):',
        anticoagulants: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        vitaminKQuestion: '3. Nuo geriamųjų ne vitamino K antagonistų (tiesioginių trombino ar faktoriaus Xa inhibitorių) paskutinės dozės suvartojimo praėjo mažiau kaip 24 val.:',
        vitaminK: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        giBleedingQuestion: '4. Kraujavimas iš virškinamojo trakto ar šlapimo takų per pastarąsias 3 sav.:',
        giBleeding: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        vesselQuestion: '5. Per paskutines 10 dienų punktuota kraujagyslė, kurios neįmanoma užspausti:',
        vessel: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        surgeryQuestion: '6. Didelės apimties chirurginė operacija per pastarąsias 14 dienų ir esant nereikšmingam neurologiniam deficitui:',
        surgery: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        hemorrhageQuestion: '7. Hemoraginė diatezė:',
        hemorrhage: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        spontaniousHemorrhageQuestion: '8. Spontaninė intrasmegeninė kraujosruva anamnezėje:',
        spontaniousHemorrhage: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        cnsDiseaseQuestion: '9. Sunki centrinės nervų sistemos liga anamnezėje arba kitokia lydinti lėtinė liga, kuri reikšmingai apsunkina gyvenimo prognozę:',
        cnsDisease: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        bpQuestion: '10. Nekontroliuojama arterinė hipertenzija: sistolinis AKS >185 mmHg arba diastolinis AKS >110 mmHg iki gydymo pradžios:',
        bp: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        bacterialEndocarditisQuestion: '11. Bakterinis endokarditas, perikarditas:',
        bacterialEndocarditis: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        acutePancreatitisQuestion: '12. Ūminis pankreatitas:',
        acutePancreatitis: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        aneurysmQuestion: '13. AVM arba nustatyta didelė (≥10 mm) neplyšusi intrakranijinė aneurizma:',
        aneurysm: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        cancerQuestion: '14. Vėžys su padidinta kraujavimo rizika:',
        cancer: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        liverDiseaseQuestion: '15. Sunki kepenų liga:',
        liverDisease: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        ctIschaemiaQuestion: '16. Atliekant galvos smegenų KT nustatomi ISK arba SAK požymiai, arba ankstyvi pakitimai, būdingi dideliam išeminiam insultui:',
        ctIschaemia: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        heparinQuestion: '17. Per paskutines 48 val. ligoniui buvo skirtas heparinas ir yra prailgėjęs ADTL (≥ 2 kartus viršija viršutinę normos ribą), arba nuo paskutinės gydomosios MMMH dozės paskyrimo praėjo mažiau kaip 12 val:',
        heparin: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        thrombocytopeniaQuestion: '18. Trombocitopenija <100 x 109/l (<100 000/mm3):',
        thrombocytopenia: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        traumaQuestion: '19. Per pastaruosius 3 mėnesius buvęs insultas, intrakranijinė operacija arba sunki galvos trauma:',
        trauma: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
          {id: 2, name: 'Nežinoma', active: false, color: '', value: 0},
        ],
        glucoseQuestion: '20. Gliukozės koncentracija kraujyje <2,8 mmol/l arba >22,3 mmol/l:',
        glucose: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        seizureQuestion: '21. Traukuliai insulto pradžioje esant duomenų, kad popriepuolinis neurologinis deficitas yra sąlygotas ne insulto:',
        seizure: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        pregnancyQuestion: '22. Nėštumas arba gimdymas per pastarąsias 10 parų:',
        pregnancy: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0},
        ],
        genderArray: [
          {id: 0, name: 'vyras', active: true, color: '', value: 0},
          {id: 1, name: 'moteris', active: false, color: '', value: 0}
        ],
        raceArray: [
          {id: 0, name: 'ne juodaodis', active: true, color: '', value: 0},
          {id: 1, name: 'juodaodis', active: false, color: '', value: 0}
        ],
        serumCreatinine: {name: 'Serumo kreatininas', units: '(μmol/l)', value: 100},
        // age: {name: 'Amžius', units: '(metai)', value: 18},
        weight: {name: 'Svoris', units: '(kg)', value: 65},
        errorMessages: {
          invalidAge: 'Amžius turi būti 18 arba daugiau metų. Jaunesniems nei 18 metų asmenims naudokite pediatrinę CKD skačiuoklę.',
          invalidCreatinine: 'Serumo kreatinino koncentracija turi būti didesnė nei 0 μmol/l.',
        },
        references: [
          {id: 0, text: "Apskaičiuotasis glomerulų filtracijos greitis - CKD-EPI CREATININE EQ (2009)"},
          {id: 1, text: "Kreatinino klirensas - COCKCROFT-GAULT (1976)"},
          {id: 2, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},
          {id: 3, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},
          {id: 4, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},

        ],
    }
  },
  methods: {
    updateCountFn: function() {
      console.log('yo')
    },
    getStageName: function(score) {
      if(score >= 90){return 'I stadija'}
      else if(score >= 60 && score < 90){return 'II stadija'}
      else if(score >= 30 && score < 60){return 'III stadija'}
      else if(score >= 15 && score < 30){return 'IV stadija'}
      else if(score < 15){return 'V stadija'}
      else {return ''}
    },
    getStageColor: function(score) {
      if(score >= 90){return 'green'}
      else if(score >= 60 && score < 90){return 'yellow darken-2'}
      else if(score >= 30 && score < 60){return 'orange'}
      else if(score >= 15 && score < 30){return 'deep-orange darken-1'}
      else if(score < 15){return 'red darken-4'}
      else {return 'grey'}
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 1/36
      this.value = Math.round(this.value * 100) / 100
    }, 200)
  },
  computed: {
    goToContraindicationsDisabled() {
      let symptomsCheck = false
      let startCheck = false
      let disabilityCheck = false
      let ageCheck = false

      this.strokeSymptoms.forEach(element => {
        if (element.active == true){symptomsCheck = true}
      });

      this.symptomsStart.forEach(element => {
        if (element.active == true){startCheck = true}
      });

      this.disability.forEach(element => {
        if (element.active == true){disabilityCheck = true}
      });

      this.age.forEach(element => {
        if (element.active == true){ageCheck = true}
      });

      if (symptomsCheck && startCheck && disabilityCheck && ageCheck){
        return false
      } else { return true }
    },
    inputControl: function() {
      let age = this.age.value
      let creatinine = this.serumCreatinine.value

      let messages = []

      if (age < 18){messages.push(this.errorMessages.invalidAge)}
      if (creatinine <= 0){messages.push(this.errorMessages.invalidCreatinine)}
      
      return messages
    },
    ckdCreatinine: function(){
      if (this.inputControl.length > 0){
        return '-'
      }

      let score = 0
      let cr = this.serumCreatinine.value
      let a = this.age.value
      let g = this.genderArray.find(obj => {
        return obj.active === true
      })
      let r = this.raceArray.find(obj => {
        return obj.active === true
      })

      if(g.name == 'moteris' && cr <= 61.88){score = 144*(Math.pow((cr/61.88), -0.329)*Math.pow(0.993, a))}
      if(g.name == 'moteris' && cr > 61.88){score = 144*(Math.pow((cr/61.88), -1.209)*Math.pow(0.993, a))}
      if(g.name == 'vyras' && cr <= 79.56){score = 141*(Math.pow((cr/79.56), -0.411)*Math.pow(0.993, a))}
      if(g.name == 'vyras' && cr > 79.56){score = 141*(Math.pow((cr/79.56), -1.209)*Math.pow(0.993, a))}

      if(r.name == 'juodaodis'){score = score*1.159}

      score = score.toFixed(2)
      return score

    },
    ckdCystatine: function() {
      if (this.inputControl.length > 0){
        return '-'
      }

      let score = 0

      // TODO: Add CYSTATINE
      let cy = this.serumCreatinine.value
      let a = this.age.value
      let g = this.genderArray.find(obj => {
        return obj.active === true
      })

      if(g.name == 'moteris' && cy <= 0.8){score = 133*(Math.pow((cy/0.8), -0.499)*Math.pow(0.999, a))*0.932};
      if(g.name == 'moteris' && cy > 0.8){score = 133*(Math.pow((cy/0.8), -1.328)*Math.pow(0.996, a))*0.932};
      if(g.name == 'vyras' && cy <= 0.8){score = 133*(Math.pow((cy/0.8), -0.499)*Math.pow(0.996, a))};
      if(g.name == 'vyras' && cy > 0.8){score = 133*(Math.pow((cy/0.8), -1.328)*Math.pow(0.996, a))};

      score = score.toFixed(2)
      return score
    },
    cochroftGault(){
      if (this.inputControl.length > 0){
        return '-'
      }

      let score = 0
      let cr = this.serumCreatinine.value
      let a = this.age.value
      let w = this.weight.value
      let g = this.genderArray.find(obj => {
        return obj.active === true
      })

      score = ((140 - a) * w) / (0.815 * cr);
      if(g.name == 'moteris'){score = score*0.85};

      score = score.toFixed(2)
      return score
    },
    ckdCreatinineStage: function() {
      return this.getStageName(this.ckdCreatinine)
    },
    ckdCreatinineColor: function() {
      return this.getStageColor(this.ckdCreatinine)
    },
    cochroftGaultStage: function() {
      return this.getStageName(this.cochroftGault)
    },
    cochroftGaultColor: function() {
      return this.getStageColor(this.cochroftGault)
    },
  },
}
</script>

<style>

</style>
