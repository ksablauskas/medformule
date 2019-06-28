<template>
  <v-container>
    <ButtonSelector :options="genderArray"></ButtonSelector>
    <ButtonSelector :options="raceArray"></ButtonSelector>
    <NumberField></NumberField>    
    <p>{{ckd_creatinine}}</p>
  </v-container>
</template>

<script>
import ButtonSelector from '@/components/ButtonSelector'
import NumberField from '@/components/NumberField'

export default {
  components: {
    ButtonSelector,
    NumberField
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
        cr: 75
    }
  },
  methods: {
    


  },
  computed: {
    ckd_creatinine: function(){
      let score = 0
      let cr = 70
      let a = 20
      let g = this.genderArray.find(obj => {
        return obj.active === true
      })
      let r = this.raceArray.find(obj => {
        return obj.active === true
      })

      if(g.name == 'moteris' && cr <= 61.88){score = 144*(Math.pow((cr/61.88), -0.329)*Math.pow(0.993, a))};
      if(g.name == 'moteris' && cr > 61.88){score = 144*(Math.pow((cr/61.88), -1.209)*Math.pow(0.993, a))};
      if(g.name == 'vyras' && cr <= 79.56){score = 141*(Math.pow((cr/79.56), -0.411)*Math.pow(0.993, a))};
      if(g.name == 'vyras' && cr > 79.56){score = 141*(Math.pow((cr/79.56), -1.209)*Math.pow(0.993, a))};
      //var score = Math.round(score,1)

      if(r.name == 'juodaodis'){score = score*1.159};
      score = score.toFixed(2)
      return score
      // document.getElementById("result_1").innerHTML = score;

      // if(score >= 90){document.getElementById('result_1').style.backgroundColor = 'green'; stage = 'I'};
      // if(score >= 60 && score < 90){document.getElementById('result_1').style.backgroundColor = '#dda930'; stage = 'II'};
      // if(score >= 30 && score < 60){document.getElementById('result_1').style.backgroundColor = 'orange'; stage = 'III'};
      // if(score >= 15 && score < 30){document.getElementById('result_1').style.backgroundColor = '#dd6b2e'; stage = 'IV'};
      // if(score < 15){document.getElementById('result_1').style.backgroundColor = '#dd2f2c'; stage = 'V'};

      // document.getElementById("comment_1").innerHTML = stage + ' stadija';
  }
  }
}
</script>

<style>

</style>