<template>
  <div class="container">
    <label>Name</label>
    <input
        type="text"
        v-model="templateData.name"
        name="name"
        placeholder="Your Name"
    >
    <label>Email</label>
    <input
        type="email"
        v-model="templateData.email"
        name="email"
        placeholder="Your Email"
    >
    <button @click="submit">Envoyer</button>
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
      templateData: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.templateData)
      try {
        emailjs.send('service_c80epto', 'template_tlczdng', this.templateData, 'wOtWU47pMC9aqC3Wz');
      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.templateData.name = ''
      this.templateData.email = ''
    },
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