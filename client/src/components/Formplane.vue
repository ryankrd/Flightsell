
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Veuillez sélectionner votre billet.
    </p>
    <b-form-group>
      <b-form-radio-group  id="btn-sell" v-model="content.flight" 
      :options="options" button-variant="outline-primary"
        size="lg" name="radio-btn-outline" buttons>
      </b-form-radio-group>
      <p></p> 
    </b-form-group>
    <p class="mt-2">
      Choississez une date de départ.
    </p>
    <div>{{ this.date }}</div>
    <b-calendar v-model="content.departure" :hide-header="hideHeader"
      label-no-date-selected="Aucune date sélectionnée" @context="onContext" locale="fr">
      <div class="mb-2" dir="ltr">
        <b-button v-if="content.departure" size="sm" variant="outline-danger" @click="clearDate">
          Réinitialiser
        </b-button>
        <b-button v-if="!content.departure" size="sm" variant="outline-primary" @click="setToday">
          Aujourd'hui
        </b-button>
      </div>
    </b-calendar>
    <b-form-checkbox v-model="hideHeader" switch inline class="my-2">
        Hide the date header
    </b-form-checkbox> 
    {{ hideHeader }}
    <div class="bigcard">
      <b-card class="mt-2" bg-variant="light">
      <b-form-group class="mt-2" v-model="content.firstname" label="Coordonnées du passager">
        <b-form-group label="Prénom :">
          <b-form-input id="firstname"></b-form-input>
        </b-form-group>

        <b-form-group class="mt-1" v-model="content.name" label="Nom :">
          <b-form-input id="name"></b-form-input>
        </b-form-group>

        <label for="birthdate">Date de naissance :</label>
        <b-form-datepicker id="birthdate" label-no-date-selected="Aucune date sélectionnée"
        v-model="content.birthdate" class="mt-1 mb-2"></b-form-datepicker>

        <b-form-group class="mt-1" v-model="content.mail" label="Email :">
          <b-form-input id="mail"></b-form-input>
        </b-form-group>
          
        <b-form-checkbox id="checkbox-1" v-model="content.status" name="checkbox-1" value="bagage_yes" unchecked-value="bagage_no">
          Option bagage : 50 €
        </b-form-checkbox>

        <b-form-checkbox id="checkbox-1" v-model="content.group" name="checkbox-2" value="group_yes" unchecked-value="group_no">
          Option groupe à 6 : -3%
        </b-form-checkbox>

        <div class="buy">
          <b-button @click=buy()>Achat</b-button>
        </div>
      </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Formplane',
  props: {
    msg: String
  },
  data() {
    return {
      selected: 'radio1',
      options: [
        { text: ' CDG > JFK : 1000 €', value: 'cdgjfk' },
        { text: ' JFK > CDG : 1000 €', value: 'jfkcdg' },
        { text: ' CDG > DTW : 700 €', value: 'cdgdtw' },
        { text: ' DTW > CDG : 700 €', value: 'dtwcdg' },
        { text: ' JFK > DTW : 300 €', value: 'jfkdtw' },
        { text: ' DTW > JFK : 300 €', value: 'dtwjfk' }
      ],
      departure : null,
      context : null,
      date : null,
      hideHeader: false,
      status: 'bagage_no',
      content : {
        flight : null,
        departure : null,
        firstname : null,
        name : null,
        birthdate : null,
        mail : null,
        status : null,
        group : null
      }
    }
  },
  created() {
    this.date = "Aucune date sélectionnée"
  },
  methods: {
    setToday() {
      const now = new Date()
      this.content.departure = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    },
    clearDate() {
      this.content.departure = ''
    },
    onContext(ctx) {
      this.context = ctx
      this.date = this.context.selectedFormatted
    },
    buy() {
      var parsedobj = JSON.parse(JSON.stringify(this.content))
      console.log(parsedobj)
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.small {
  font-size: 0rem;
}
.bigcard {
  width: 20%;
  text-align: center;
}
.mt-3 {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
.buy {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
.b-calendar .b-calendar-header, .b-calendar .b-calendar-nav {
    display: none !important;
}
</style>



