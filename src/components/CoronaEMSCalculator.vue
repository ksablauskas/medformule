<template>
  <v-container>

    <NumberField :numberdata.sync="age"></NumberField>
    <NumberField :numberdata.sync="spO2"></NumberField>
    <NumberField :numberdata.sync="breathRate"></NumberField>

    <FieldTitle :title="pregnancyQuestion"></FieldTitle>
    <ButtonSelector :options="pregnancy"></ButtonSelector>

    <FieldTitle :title="severeChronicDiseaseQuestion"></FieldTitle>
    <ButtonSelector :options="severeChronicDisease"></ButtonSelector>

    <FieldTitle :title="severeDiabetesQuestion"></FieldTitle>
    <ButtonSelector :options="severeDiabetes"></ButtonSelector>

    <FieldTitle :title="severeMajorDiseaseQuestion"></FieldTitle>
    <ButtonSelector :options="severeMajorDisease"></ButtonSelector>

    <InputError v-for="message in inputControl" :message="message"></InputError>

    <Result
      :resultvalue="nextStepMeaning"
      :resultcolor="nextStepColor"
      :resultitle="'Tolimesni veiksmai'"
      :resultmeaning="''"
      :units="''"
    >
    </Result>

        <FieldTitle :title="'Diagnostiniai tepinėliai dėl COV-19 '"></FieldTitle>
    <p>Pradinėse stadijose atliekami namų sąlygomis. Taip išvengiama bereikalingo pacientų transportavimo į skubios pagalbos skyrius, kas didintų infekcijos plitimo riziką. 
</p>
    <p>Jeigu atvejų skaičius didėja ir aktyvuojama epidemiologinė COV-19 diagnostika, tepinėliai atliekami gydymo įstaigose, kuomet pacientai stacionarizuojami, diagnozės patikslinimui.</p>


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
        age: {name: 'Amžius', units: '(metai)', value: null},
        spO2: {name: 'SpO2', units: '(%)', value: null},
        breathRate: {name: 'Kvėpavimo dažnis', units: 'k/min', value: null},
        pregnancyQuestion: 'Nėštumas:',
        pregnancy:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        severeChronicDiseaseQuestion: 'Sunki lėtinė liga:',
        severeChronicDisease: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        severeDiabetesQuestion: 'Sunkiai kontroliuojamas cukrinis diabetas:',
        severeDiabetes: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        severeMajorDiseaseQuestion: 'Sunki širdies, galvos smegenų kraujotakos ar inkstų liga:',
        severeMajorDisease: [
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        errorMessages: {
          invalidAge: 'Įveskite amžių.',
          invalidSpO2: 'Įveskite SpO2.',
          invalidBreathRate: 'Įveskite kvėpavimo dažnį.',
          invalidPregnancy: 'Pasirinkite nėštumo statusą.',
          invalidSevere: 'Pažymėkite laukelius, susijusius su lėtinėmis ligomis.',
        },
    }
  },
  methods: {
    getStageName: function(score) {
      if (score === -1){
        return '-'
      }else if (score === 0){
        return 'Pacientas transportuojamas į gydymo įstaigą'
      }else if (score === 1){
        return 'Paimamas tepinėlis ir pacientas pasilieka namuose ambulatoriniam stebėjimui'
      }
    },
    getStageColor: function(score) {
      if (score === -1){
        return ''
      }else if (score === 0){
        return 'red'
      }else if (score === 1){
        return 'orange'
      }
    }
  },
  computed: {
    inputControl: function() {
      let age = this.age.value
      let spO2 = this.spO2.value
      let breathRate = this.breathRate.value

      let pregnancy = this.pregnancy.find(obj => {
        return obj.active === true
      })
      let severeChronicDisease = this.severeChronicDisease.find(obj => {
        return obj.active === true
      })
      let severeDiabetes = this.severeDiabetes.find(obj => {
        return obj.active === true
      })
      let severeMajorDisease = this.severeMajorDisease.find(obj => {
        return obj.active === true
      })

      let messages = []

      if (age === null){messages.push(this.errorMessages.invalidAge)}
      if (spO2 === null){messages.push(this.errorMessages.invalidSpO2)}
      if (breathRate === null){messages.push(this.errorMessages.invalidBreathRate)}
      if (pregnancy === undefined){messages.push(this.errorMessages.invalidPregnancy)}
      if (severeChronicDisease === undefined || severeDiabetes === undefined || severeMajorDisease === undefined){messages.push(this.errorMessages.invalidSevere)}
            
      return messages
    },
    nextStep: function(){
      if (this.inputControl.length > 0){
        return -1
      }

      let age = this.age.value
      let spO2 = this.spO2.value
      let breathRate = this.breathRate.value
      
      let pregnancy = this.pregnancy.find(obj => {
        return obj.active === true
      })
      let severeChronicDisease = this.severeChronicDisease.find(obj => {
        return obj.active === true
      })
      let severeDiabetes = this.severeDiabetes.find(obj => {
        return obj.active === true
      })
      let severeMajorDisease = this.severeMajorDisease.find(obj => {
        return obj.active === true
      })

      let respiratoryDysfunction = false
      let riskFactors = false

      if (spO2 < 94 || breathRate > 20){
        respiratoryDysfunction = true
      }

      if (pregnancy.name === 'Taip'){
        riskFactors = true
      }

      if (age > 65){
        riskFactors = true
      }

      if (severeChronicDisease.name === 'Taip'){
        riskFactors = true
      }

      if (severeDiabetes.name === 'Taip'){
        riskFactors = true
      }

      if (severeMajorDisease.name === 'Taip'){
        riskFactors = true
      }

      if (riskFactors || respiratoryDysfunction){
        return 0
      }else{
        return 1
      }
    },
    nextStepMeaning: function() {
      return this.getStageName(this.nextStep)
    },
    nextStepColor: function() {
      return this.getStageColor(this.nextStep)
    }
  },
}
</script>

<style>

</style>
