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
    >
    </Result>
  </v-container>
</template>

<script>
import ButtonSelector from '@/components/ButtonSelector'
import NumberField from '@/components/NumberField'
import Result from '@/components/Result'
import InputError from '@/components/InputError'

export default {
  components: {
    ButtonSelector,
    NumberField,
    Result,
    InputError,
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
        weight: {name: 'Svoris', units: '(kg)', value: 0},
        errorMessages: {
          invalidAge: 'Amžius turi būti 18 arba daugiau metų. Jaunesniems nei 18 metų asmenims naudokite pediatrinę CKD skačiuoklę.',
          invalidCreatinine: 'Serumo kreatinino koncentracija turi būti didesnė nei 0 μmol/l.',
        },
    }
  },
  methods: {
    updateCountFn: function() {
      console.log('yo')
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
    ckdCreatinineColor: function() {
      let score = this.ckdCreatinine

      if(score >= 90){return 'green'}
      else if(score >= 60 && score < 90){return 'yellow darken-2'}
      else if(score >= 30 && score < 60){return 'orange'}
      else if(score >= 15 && score < 30){return 'deep-orange darken-1'}
      else if(score < 15){return 'red darken-4'}
      else {return 'grey'}

    },
  },
}
</script>

<style>

</style>
