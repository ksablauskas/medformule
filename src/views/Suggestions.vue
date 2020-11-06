<template>
  <v-container class="my-4">
      <CalculatorTitle
        :title="title"
      ></CalculatorTitle>
    <br>
    <v-card>
      <v-container>
        <p>Programėlę nuolatos atnaujiname, todėl labai laukiame argumentuotų komentarų bei nuomonių, kokios informacijos labiausiai trūksta. Taip pat kviečiame teikti pasiūlymus dėl informacijos turinio. Prašytume taip pat nurodyti ir šaltinius, kuriais remiatės.</p>
        <p>
          <v-btn color="blue darken-2" href="https://forms.gle/zm6TP19ZoyN5aNfR7">
            <span>užpildyti formą</span>
          </v-btn>
        </p>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
import CalculatorTitle from '@/components/CalculatorTitle.vue'

export default {
  components: {
    CalculatorTitle,
  },
  data() {
    return {
      title: 'Pasiūlymai',
    }
  }
}
</script>
