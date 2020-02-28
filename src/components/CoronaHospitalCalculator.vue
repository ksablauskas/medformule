<template>
  <v-container>

    <FieldTitle :title="'Įvertinama paciento būklė, atliekamas įprastas ištyrimas.'"></FieldTitle>
    <FieldTitle :title="'Atliekamas ir išsiunčiamas ištyrimui diagnostinis COV-19 tepinėlis.'"></FieldTitle>

    <br><br>

    <FieldTitle :title="'Vertinamas bendras kraujo tyrimas'"></FieldTitle>
    <FieldTitle :title="'Ar kraujo tyrime limfocitų mažiau nei 1,1 * 10^9/l?'"></FieldTitle>
    <ButtonSelector :options="lymphocyteCount"></ButtonSelector>
    
    <div v-if="showCT">
      <FieldTitle :title="'Atliekama plaučių kompiuterinė tomografija'"></FieldTitle>
      <FieldTitle :title="'Ar yra infiltracijos požymių?'"></FieldTitle>
      <ButtonSelector :options="infiltration"></ButtonSelector>
    </div>

    <FieldTitle :title="'Ar pasitvirtino COV-19 diagnozė?'"></FieldTitle>
    <ButtonSelector :options="covid"></ButtonSelector>

    <Result
      :resultvalue="nextStep"
      :resultcolor="color"
      :resultitle="'Tolimesni veiksmai'"
      :resultmeaning="''"
      :units="''"
    >
    </Result>

    <FieldTitle :title="'Plaučių kompiuterinė tomografija'"></FieldTitle>
    <p>Indikuotina pacientams, kuriems pasireiškia kvėpavimo nepakankaumo požymiai ar limfopenija, net kai įprastinė krūtinės rentgenograma nerodo infiltracijos (virusinės pneumonijos) požymių.</p>



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
        color: '',
        age: {name: 'Amžius', units: '(metai)', value: null},
        spO2: {name: 'SpO2', units: '(%)', value: null},
        breathRate: {name: 'Kvėpavimo dažnis', units: 'k/min', value: null},
        pregnancyQuestion: 'Nėštumas:',
        lymphocyteCount:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        infiltration:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        covid:[
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
    showCT: function() {
      let lymphocyteCount = this.lymphocyteCount.find(obj => {
        return obj.active === true
      })

      if (lymphocyteCount === undefined){
        return false
      }

      if (lymphocyteCount.name === 'Taip'){
        return true
      }
    },
    inputControl: function() {
      return 0
    },
    nextStep: function(){
      let lymphocyteCount = this.lymphocyteCount.find(obj => {
        return obj.active === true
      })

      let infiltration = this.infiltration.find(obj => {
        return obj.active === true
      })

      let covid = this.covid.find(obj => {
        return obj.active === true
      })

      let result = ''

      if (lymphocyteCount !== undefined){
        if (lymphocyteCount.name === 'Taip' && infiltration === undefined){
          result = 'Atlikti plaučių kompiuterinės tomografijos tyrimą.'
          this.color = 'orange'
        }
        else if (lymphocyteCount.name === 'Ne'){
          result = 'Laukti diagnostinio tepinėlio rezultatų.'
          this.color = 'orange'
        }
      }

      if (infiltration !== undefined){
        if (infiltration.name === 'Taip' && lymphocyteCount.name === 'Taip'){
          this.color = 'red'
          return  'Taikomas intensyvus paciento stebėjimas.'
        }
        else if (infiltration.name === 'Ne' && lymphocyteCount.name === 'Taip'){
          result =  'Laukti diagnostinio tepinėlio rezultatų.'
          this.color = 'orange'
        }
      }

      if (covid !== undefined){
        if (covid.name === 'Taip' && infiltration !== undefined && infiltration.name === 'Ne' && lymphocyteCount !== undefined && lymphocyteCount.name === 'Taip'){
          result =  'Tolimesnis gydymas taikomas laikantis COV-19 karantino sąlygų.'
          this.color = 'red'
        }
        else if (covid.name === 'Taip'){
          result =  'Tolimesnis gydymas taikomas laikantis COV-19 karantino sąlygų.'
          this.color = 'red'
        }
        else if (covid.name === 'Ne' && infiltration !== undefined && infiltration.name === 'Taip'){
          this.color = 'red'
          return  'Taikomas intensyvus paciento stebėjimas (dėl plaučių infiltracijos).'
        }
        else if (covid.name === 'Ne' && lymphocyteCount === undefined){
          this.color = 'orange'
          return  'Įprasta infekcinių ligų gydymo taktika, tačiau vertinti būklę pagal kraujo tyrimo rezultatus.'
        }
        else if (covid.name === 'Ne' && lymphocyteCount !== undefined && lymphocyteCount.name === 'Ne'){
          this.color = 'green'
          return  'Įprasta infekcinių ligų gydymo taktika.'
        }
        else if (covid.name === 'Ne' && infiltration !== undefined && infiltration.name === 'Ne'){
          result =  'Įprasta infekcinių ligų gydymo taktika.'
          this.color = 'green'
        }
      }

      return result

      
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
