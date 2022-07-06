<template>
  <div class="utilisateur-wrapper">
    <div class="utilisateur-inner">
      <h1>Particulier ou entreprise</h1>
    </div>
  </div>
</template>

<script>
//import nav_component from '../../components/nav-component/nav-component.vue'
export default {
    components:{},
    name:'choix_user'

}
</script>

<style scoped>
  .utilisateur-wrapper{
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction:column;
    text-align:left;
  }

  .utilisateur-inner{
    width: 60%;
    height: 1200px;
    margin:auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
</style>