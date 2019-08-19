<template>
  <v-container>
    <ButtonSelector :options="genderArray"></ButtonSelector>
    <ButtonSelector :options="raceArray"></ButtonSelector>

    <NumberField :numberdata.sync="serumCreatinine"></NumberField>
    <NumberField :numberdata.sync="age"></NumberField>
    <NumberField :numberdata.sync="weight"></NumberField>
    
    <InputError v-for="message in inputControl" :message="message"></InputError>
    <Result
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
    </v-container>    
  </v-container>
</template>

<script>
import ButtonSelector from '@/components/ButtonSelector'
import NumberField from '@/components/NumberField'
import Result from '@/components/Result'
import InputError from '@/components/InputError'
import Reference from '@/components/Reference'

export default {
  components: {
    ButtonSelector,
    NumberField,
    Result,
    InputError,
    Reference,
  },
  data() {
    return {
        gender: 'male',
        colorMale: 'warning',
        colorFemale: '',
        ckdEpi: 0,
        genderArray: [
          {id: 0, name: 'vyras', active: true, color: '', value: 0},
          {id: 1, name: 'moteris', active: false, color: '', value: 0}
        ],
        raceArray: [
          {id: 0, name: 'ne juodaodis', active: true, color: '', value: 0},
          {id: 1, name: 'juodaodis', active: false, color: '', value: 0}
        ],
        serumCreatinine: {name: 'Serumo kreatininas', units: '(μmol/l)', value: 100},
        age: {name: 'Amžius', units: '(metai)', value: 18},
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
  computed: {
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
