<template>
  <v-container>

    <FieldTitle :title="'Ar pastarųjų 14-os dienų bėgyje keliavote endeminėse šalyse ar kontaktavote su jose keliavusiu asmeniu?.'"></FieldTitle>
    <ButtonSelector :options="contact"></ButtonSelector>
    
    <FieldTitle :title="'Ar jūs karščiuojate daugiau nei 37,8°C?'"></FieldTitle>
    <ButtonSelector :options="fever"></ButtonSelector>

    <Result
      :resultvalue="nextStep"
      :resultcolor="color"
      :resultitle="'Tolimesni veiksmai'"
      :resultmeaning="''"
      :units="''"
    >
    </Result>

    <FieldTitle :title="'Endeminių šalių sąrašas:'"></FieldTitle>
    <ul>
      <li>Kinija</li>
      <li>Šiaurės Italijos regionas</li>
      <li>Iranas</li>
      <li>Japonija</li>
      <li>Pietų Korėja</li>
      <li>Singapūras Korėja</li>
    </ul>

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
        contact:[
          {id: 0, name: 'Ne', active: false, color: '', value: 0},
          {id: 1, name: 'Taip', active: false, color: '', value: 0}
        ],
        fever:[
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
    nextStep: function(){
      let contact = this.contact.find(obj => {
        return obj.active === true
      })

      let fever = this.fever.find(obj => {
        return obj.active === true
      })

      // let covid = this.covid.find(obj => {
      //   return obj.active === true
      // })

      // let result = ''

      if (contact !== undefined && fever !== undefined){
        if (contact.name === 'Taip' && fever.name === 'Taip'){
          this.color = 'red'
          return  'Kreipkitės į Greitąją medicinos pagalbą numeriu 112.'
        }
        else if (contact.name === 'Taip' && fever.name === 'Ne'){
          this.color = 'orange'
          return  'Dėl tolesnių rekomendacijų telefonu susisiekite su savo šeimos gydytoju.'
        }
        else if (contact.name === 'Ne' && fever.name === 'Taip'){
          this.color = 'orange'
          return  'Dėl tolesnių rekomendacijų susisiekite su savo šeimos gydytoju.'
        }
        else if (contact.name === 'Ne' && fever.name === 'Ne'){
          this.color = 'orange'
          return  'Dėl tolesnių rekomendacijų susisiekite su savo šeimos gydytoju.'
        }
      }

      // if (infiltration !== undefined){
      //   if (infiltration.name === 'Taip' && lymphocyteCount.name === 'Taip'){
      //     this.color = 'red'
      //     return  'Taikomas intensyvus paciento stebėjimas.'
      //   }
      //   else if (infiltration.name === 'Ne' && lymphocyteCount.name === 'Taip'){
      //     result =  'Laukti diagnostinio tepinėlio rezultatų.'
      //     this.color = 'orange'
      //   }
      // }

      // if (covid !== undefined){
      //   if (covid.name === 'Taip' && infiltration !== undefined && infiltration.name === 'Ne' && lymphocyteCount !== undefined && lymphocyteCount.name === 'Taip'){
      //     result =  'Tolimesnis gydymas taikomas laikantis COV-19 karantino sąlygų.'
      //     this.color = 'red'
      //   }
      //   else if (covid.name === 'Taip'){
      //     result =  'Tolimesnis gydymas taikomas laikantis COV-19 karantino sąlygų.'
      //     this.color = 'red'
      //   }
      //   else if (covid.name === 'Ne' && infiltration !== undefined && infiltration.name === 'Taip'){
      //     this.color = 'red'
      //     return  'Taikomas intensyvus paciento stebėjimas (dėl plaučių infiltracijos).'
      //   }
      //   else if (covid.name === 'Ne' && lymphocyteCount === undefined){
      //     this.color = 'orange'
      //     return  'Įprasta infekcinių ligų gydymo taktika, tačiau vertinti būklę pagal kraujo tyrimo rezultatus.'
      //   }
      //   else if (covid.name === 'Ne' && lymphocyteCount !== undefined && lymphocyteCount.name === 'Ne'){
      //     this.color = 'green'
      //     return  'Įprasta infekcinių ligų gydymo taktika.'
      //   }
      //   else if (covid.name === 'Ne' && infiltration !== undefined && infiltration.name === 'Ne'){
      //     result =  'Įprasta infekcinių ligų gydymo taktika.'
      //     this.color = 'green'
      //   }
      // }

      // return result

      
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
