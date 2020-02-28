<template>
  <v-container>

    <FieldTitle :title="'Tepinėlis transportuojamas į gydymo įstaigą, iš ten - į diagnostikos centrą.'"></FieldTitle>
    <FieldTitle :title="'Per 24 val. apie tyrimo rezultatus informuojamas pacientas ir jo šeimos gydytojas.'"></FieldTitle>

    <br><br>
    <FieldTitle :title="'Ar COV-19 rezultatas teigiamas?'"></FieldTitle>
    <ButtonSelector :options="covid"></ButtonSelector>

    <div v-if="showCare">
      
      <div v-if="careOngoing">
        <h2>Tęsiama ambulatorinė priežiūra ir būklės stebėjimas ir pakartotinis vertinimas:</h2>
        <h2 class="red">1) Po paros nuo simptomų išnykimo kartojamas tepinėlis dėl COV-19.</h2>
        <h2 class="red">2) Antrą parą nuo simptomų išnykimo atliekamas dar vienas tepinėlis dėl COV-19</h2>
      </div>

      <br><br>
      
      <FieldTitle :title="'Ar gauti du neigiami COV-19 rezultatai?'"></FieldTitle>
      <ButtonSelector :options="control"></ButtonSelector>

    </div>



    <Result
      :resultvalue="nextStep"
      :resultcolor="color"
      :resultitle="'Tolimesni veiksmai'"
      :resultmeaning="''"
      :units="''"
    >
    </Result>

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
        covid:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        control:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        errorMessages: {
          invalidlymphocyteCount: 'Nurodykite ar yra limfocitų skaičiaus pokytis.',
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
    showCare: function() {
      let covid = this.covid.find(obj => {
        return obj.active === true
      })

      if (covid === undefined || (covid !== undefined  && covid.name === 'Ne')){
        return false
      }

      if (covid.name === 'Taip'){
        return true
      }
      
    },
    careOngoing: function() {
      let covid = this.covid.find(obj => {
        return obj.active === true
      })

      let control = this.control.find(obj => {
        return obj.active === true
      })


      if (covid !== undefined && control !== undefined){
        if (covid.name === 'Taip' && control.name === 'Taip'){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      
    },
    nextStep: function(){
      let covid = this.covid.find(obj => {
        return obj.active === true
      })

      let control = this.control.find(obj => {
        return obj.active === true
      })

      if (covid !== undefined && control === undefined){
        if (covid.name === 'Ne'){
          this.color = 'orange'
          return  'Įprastinė kitų virusinių respiracinių infekcijų priežiūra.'
        }
        if (covid.name === 'Taip'){
          this.color = 'red'
          return  `Tęsiama ambulatorinė priežiūra ir būklės stebėjimas ir pakartotinis vertinimas.`
        }
      }

      if (covid !== undefined && control !== undefined){
        if (covid.name === 'Taip' && control.name === 'Ne'){
          this.color = 'red'
          return  'Ambulatorinė priežiūra tęsiama iki dviejų neigiamų COV-19 rezultatų.'
        }
        else if (covid.name === 'Ne' && control.name === 'Taip'){
          this.color = 'orange'
          return  'Įprastinė kitų virusinių respiracinių infekcijų priežiūra.'
        }
        else if (covid.name === 'Ne' && control.name === 'Ne'){
          this.color = 'orange'
          return  'Įprastinė kitų virusinių respiracinių infekcijų priežiūra.'
        }
        else if (covid.name === 'Taip' && control.name === 'Taip'){
          this.color = 'green'
          return  'Pabaiga. Asmuo gali išeiti iš karantino ir grįžti į visuomenę.'
        }
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
