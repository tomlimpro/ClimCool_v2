<template>
  <div class="container">
    <div class="row">
      <h2>Besoin d'un devis ?</h2>
      <h3>ClimCool s'occupe de tout !</h3>
    </div>
    <div class="row">
      <p>Pour chacune des climatisations si dessous, merci d'indiquer le nombre de clim que vous souhaitez dans votre devis.</p>
      <p>Vous recevrez un mail avec une estimation du prix, puis un expert ClimCool vous recontactera afin de finaliser le devis.</p>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label for="monoblocInput">Monobloc : {{devisData.monoblocPrix}}€/unité</label>
          <input value="0" class="form-control" v-model.number="devisData.monobloc" type="number" min="0" max="3500" id="monoblocInput" required>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="splitmobileInput">Split mobile : {{devisData.splitmobilePrix}}€/unité</label>
            <input value="0" class="form-control" v-model.number="devisData.splitmobile" type="number" min="0" max="7000" id="splitmobileInput" required>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label for="splitfixeInput">Split fixe : {{devisData.splitfixePrix}}€/unité</label>
          <input value="0" class="form-control" v-model.number="devisData.splitfixe" type="number" min="0" max="10500" id="splitfixeInput" required>
        </div>
        <div class="col">
          <label for="bisplitInput">BiSplit : {{devisData.bisplitPrix}}€/unité</label>
          <input value="0" class="form-control" v-model.number="devisData.bisplit" type="number" min="0" max="7000" id="bisplitInput" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="devisEmail">Email</label>
      <input type="email" v-model="devisData.email" class="form-control" id="devisEmail" placeholder="Entrez votre email" required>
    </div>
    <button @click="sendDevis" type="button" class="btn btn-primary">Devis !</button>
    <hr>
    <div class="row">
      <h2>Une question ?</h2>
      <h3>Contactez ClimCool via le formulaire si dessous.</h3>
    </div>
    <div class="form-group">
      <label for="nomInput">Nom</label>
      <input v-model="contactData.name" class="form-control" id="nomInput" placeholder="Entrez votre nom">
    </div>
    <div class="form-group">
      <label for="emailInput">Email</label>
      <input type="email" v-model="contactData.email" class="form-control" id="emailInput" placeholder="Entrez votre email">
    </div>
    <div class="form-group">
      <label for="messageInput">Message</label>
      <textarea id="messageInput" v-model="contactData.message" class="form-control" placeholder="Entrez votre message"></textarea>
    </div>
    <button @click="sendContact" type="button" class="btn btn-primary">Contact !</button>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
//import nav_component from '../../components/nav-component/nav-component.vue'
export default {
  components:{
  },
  name:'contact_devis',
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        message : ''
      },
      devisData: {
        monobloc: Number,
        monoblocPrix : 307,
        splitmobile: Number,
        splitmobilePrix: 412,
        splitfixe: Number,
        splitfixePrix: 854,
        bisplit: Number,
        bisplitPrix: 2350,
        total: Number,
        email: ''
      }
    }
  },
  methods: {
    sendContact() {
      try {
        emailjs.send('service_c80epto', 'template_tlczdng', this.contactData, 'wOtWU47pMC9aqC3Wz');
      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.contactData.message = '';
      this.contactData.email = '';
      this.contactData.name = '';
    },
    sendDevis() {
      this.devisData.total = this.devisData.bisplit * this.devisData.bisplitPrix +
          this.devisData.splitmobile * this.devisData.splitmobilePrix +
          this.devisData.splitfixe * this.devisData.splitfixePrix +
          this.devisData.bisplit * this.devisData.bisplitPrix;
      try{
        emailjs.send('service_c80epto', 'template_spyx80c', this.devisData, 'wOtWU47pMC9aqC3Wz');
      } catch(error) {
        console.log({error});
      }
      this.devisData.monobloc = 0;
      this.devisData.splitmobile = 0;
      this.devisData.splitfixe = 0;
      this.devisData.bisplit = 0;
      this.devisData.total = 0;
      this.devisData.email = '';
    }
  },
  mounted() {
    this.devisData.monobloc = 0;
    this.devisData.splitmobile = 0;
    this.devisData.splitfixe = 0;
    this.devisData.bisplit = 0;
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>