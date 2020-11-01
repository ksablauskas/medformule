<template>
  <v-container>
    <FieldTitle :title="'Kvėpavimo dažnis'"></FieldTitle>
    <ButtonSelector :options="respiratoryRateArray"></ButtonSelector>

    <FieldTitle :title="'Deguonies saturacija'"></FieldTitle>
    <ButtonSelector :options="saturationArray"></ButtonSelector>

    <FieldTitle :title="'Ar skiriamas papildomas deguonis?'"></FieldTitle>
    <ButtonSelector :options="suppOxygenArray"></ButtonSelector>

    <FieldTitle :title="'Temperatūra'"></FieldTitle>
    <ButtonSelector :options="temperatureArray"></ButtonSelector>

    <FieldTitle :title="'Sistolinis kraujospūdis'"></FieldTitle>
    <ButtonSelector :options="bpArray"></ButtonSelector>

    <FieldTitle :title="'ŠSD'"></FieldTitle>
    <ButtonSelector :options="hrArray"></ButtonSelector>

    <FieldTitle :title="'Ar yra sąmonės / orientacijos sutrikimas?'"></FieldTitle>
    <ButtonSelector :options="conciousnessArray"></ButtonSelector>

    <!-- <InputError v-for="message in inputControl" :message="message"></InputError> -->
    <Result
      :resultvalue="NEWS"
      :resultcolor="NEWSColor"
      :resultitle="'NEWS rodiklis'"
      :resultmeaning="NEWSStage"
      :units="''"
    >
    </Result>

    <!-- <Result
      :resultvalue="cochroftGault"
      :resultcolor="cochroftGaultColor"
      :resultitle="'COCKCROFT-GAULT (CrCl)'"
      :resultmeaning="cochroftGaultStage"
      :units="'mL/min'"
    >
    </Result> -->

    <v-container>
      <Reference v-for="reference in references"
      :key="reference.id"
      :text="reference.text"
    ></Reference>
    </v-container>    
  </v-container>
</template>

<script>
import FieldTitle from '@/components/CalculatorFieldTitle'
import ButtonSelector from '@/components/ButtonSelector'
import NumberField from '@/components/NumberField'
import Result from '@/components/Result'
import InputError from '@/components/InputError'
import Reference from '@/components/Reference'

export default {
  components: {
    FieldTitle,
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
        respiratoryRateArray: [
          {id: 0, name: '≤8', active: false, color: '', value: 3},
          {id: 1, name: '9-11', active: false, color: '', value: 1},
          {id: 2, name: '12-20', active: false, color: '', value: 0},
          {id: 3, name: '21-24', active: false, color: '', value: 2},
          {id: 4, name: '≥25', active: false, color: '', value: 3},
        ],

        saturationArray: [
          {id: 0, name: '≤91%', active: false, color: '', value: 3},
          {id: 1, name: '92-93%', active: false, color: '', value: 2},
          {id: 2, name: '94-95%', active: false, color: '', value: 1},
          {id: 3, name: '≥96%', active: false, color: '', value: 0},
        ],

        suppOxygenArray: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 2},
        ],

        temperatureArray: [
          {id: 0, name: '≤35°C', active: false, color: '', value: 3},
          {id: 1, name: '35.1-36°C', active: false, color: '', value: 1},
          {id: 2, name: '36.1-38°C', active: false, color: '', value: 0},
          {id: 3, name: '38.1-39°C', active: false, color: '', value: 1},
          {id: 4, name: '≥39.1 °C', active: false, color: '', value: 2},
        ],

        bpArray: [
          {id: 0, name: '<90', active: false, color: '', value: 3},
          {id: 1, name: '91-100', active: false, color: '', value: 2},
          {id: 2, name: '101-110', active: false, color: '', value: 1},
          {id: 3, name: '111-219', active: false, color: '', value: 0},
          {id: 4, name: '≥220', active: false, color: '', value: 3},
        ],

        hrArray: [
          {id: 0, name: '<40', active: false, color: '', value: 3},
          {id: 1, name: '41-50', active: false, color: '', value: 1},
          {id: 2, name: '51-90', active: false, color: '', value: 0},
          {id: 3, name: '91-110', active: false, color: '', value: 1},
          {id: 4, name: '111-130', active: false, color: '', value: 2},
          {id: 5, name: '≥131', active: false, color: '', value: 3},
        ],

        conciousnessArray: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 3}
        ],
        references: [
          // {id: 0, text: "https://www.rcplondon.ac.uk/projects/outputs/national-early-warning-score-news-2"},
          // {id: 1, text: "Kreatinino klirensas - COCKCROFT-GAULT (1976)"},
          // {id: 2, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},
          // {id: 3, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},
          // {id: 4, text: "Formulės galioja tik su standartizuotais serumo kreatinino nustatymo metodais."},

        ],
    }
  },
  methods: {
  //   updateCountFn: function() {
  //     console.log('yo')
  //   },
    getStageName: function(score, singleAbnormal) {
      // return 'seniuk'
      if (singleAbnormal === true){return 'Pastovus monitoravimas (bent vieno rodiklio vertė yra 3).'}
      else if (score === ''){return 'Užpildykite visus laukelius'}
      else if(score == 0){return 'Monitoravimas kas 12 val'}
      else if(score >= 1 && score < 5){return 'Monitoravimas kas 4-6 val'}
      else if(score >= 5 && score < 7){return 'Monitoravimas kas 1 val'}
      else if(score >= 7){return 'Pastovus monitoravimas'}
      // else if(score >= 30 && score < 60){return 'III stadija'}
      // else if(score >= 15 && score < 30){return 'IV stadija'}
      // else if(score < 15){return 'V stadija'}
      // else {return ''}
    },
    getStageColor: function(score, singleAbnormal) {
      if (singleAbnormal === true){return 'red'}
      else if (score === ''){return 'grey'}
      else if(score == 0){return 'grey'}
      else if(score >= 1 && score < 5){return 'green'}
      else if(score >= 5 && score < 7){return 'orange'}
      else if(score >= 7){return 'red'}
    }
  },
  computed: {
  //   inputControl: function() {
  //     let age = this.age.value
  //     let creatinine = this.serumCreatinine.value

  //     let messages = []

  //     if (age < 18){messages.push(this.errorMessages.invalidAge)}
  //     if (creatinine <= 0){messages.push(this.errorMessages.invalidCreatinine)}
      
  //     return messages
  //   },
    NEWSSingleAbnormal: function(){
      let respiratoryRate = this.respiratoryRateArray.find(obj => {
        return obj.active === true
      })
      let saturation= this.saturationArray.find(obj => {
        return obj.active === true
      })
      let supplementaryOxygen = this.suppOxygenArray.find(obj => {
        return obj.active === true
      })
      let hr = this.hrArray.find(obj => {
        return obj.active === true
      })
      let bp = this.bpArray.find(obj => {
        return obj.active === true
      })
      let temperature = this.temperatureArray.find(obj => {
        return obj.active === true
      })
      let conciousness = this.conciousnessArray.find(obj => {
        return obj.active === true
      })
      if (respiratoryRate === undefined){
        return false
      }
      if (saturation === undefined){
        return false
      }
      if (supplementaryOxygen === undefined){
        return false
      }
      if (hr === undefined){
        return false
      }
      if (bp === undefined){
        return false
      }
      if (temperature === undefined){
        return false
      }
      if (conciousness === undefined){
        return false
      }

      if (temperature.value === 3){return true}
      else if (hr.value === 3){return true}
      else if (bp.value === 3){return true}
      else if (saturation.value === 3){return true}
      else if (conciousness.value === 3){return true}
      else if (respiratoryRate.value === 3){return true}
      else {return false}
    },
    NEWS: function(){
      let respiratoryRate = this.respiratoryRateArray.find(obj => {
        return obj.active === true
      })
      let saturation= this.saturationArray.find(obj => {
        return obj.active === true
      })
      let supplementaryOxygen = this.suppOxygenArray.find(obj => {
        return obj.active === true
      })
      let hr = this.hrArray.find(obj => {
        return obj.active === true
      })
      let bp = this.bpArray.find(obj => {
        return obj.active === true
      })
      let temperature = this.temperatureArray.find(obj => {
        return obj.active === true
      })
      let conciousness = this.conciousnessArray.find(obj => {
        return obj.active === true
      })
      if (respiratoryRate === undefined){
        return ''
      }
      if (saturation === undefined){
        return ''
      }
      if (supplementaryOxygen === undefined){
        return ''
      }
      if (hr === undefined){
        return ''
      }
      if (bp === undefined){
        return ''
      }
      if (temperature === undefined){
        return ''
      }
      if (conciousness === undefined){
        return ''
      }

      return respiratoryRate.value + saturation.value + hr.value + bp.value + conciousness.value + temperature.value + supplementaryOxygen.value
    },
    NEWSStage: function() {
      return this.getStageName(this.NEWS, this.NEWSSingleAbnormal)
    },
    NEWSColor: function() {
      return this.getStageColor(this.NEWS, this.NEWSSingleAbnormal)
    },
  //   cochroftGaultStage: function() {
  //     return this.getStageName(this.cochroftGault)
  //   },
  //   cochroftGaultColor: function() {
  //     return this.getStageColor(this.cochroftGault)
  //   },
  },
}
</script>

<style>

</style>
