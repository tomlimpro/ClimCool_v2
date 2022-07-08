<template>
  <div class="utilisateur-wrapper">
    <h1 id="titre">Qui êtes-vous ?</h1>
    <router-link to="/Utilisateurs/Particuliers" style="text-decoration: none; color: inherit;">
    <div class="particulier-inner">
      <div class="container-particulier">
        <div class="particulier-photo">
          <img src="../../assets/famille.jpg" id="famille-image">
        </div>
        <div class="particulier-description">
          <h1 id="titre-particulier">Un particulier</h1><br>
          <p id="paragraphe-particulier">Vous êtes un particulier interessé par nos produits ? Venez découvrir tous les produits ClimCool disponibles aux particuliers.</p>
        </div>
      </div>
    </div>
    </router-link>
    <router-link to="/Utilisateurs/Professionnel" style="text-decoration: none; color: inherit;">
    <div class="professionnel-inner">
      <div class="container-professionnel">
        <div class="professionnel-photo">
          <img src="../../assets/business.jpg" id="business-image">
        </div>
        <div class="professionnel-description">
          <h1 id="titre-professionnel">Un professionel</h1><br>
          <p id="paragraphe-professionnel">Vous êtes un professionnel et souhaitez découvrir nos produits ? Venez découvrir tous les produits ClimCool disponibles pour les entreprises.</p>
        </div>
      </div>
    </div>
    </router-link>
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
  #titre {
    text-align: center;
    font-size: 50px;
    font-weight: bolder;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .particulier-wrapper{
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction:column;
    text-align:left;
  }

  .particulier-inner{
    width: 70%;
    height: 200px;
    margin:auto;
    background: #f7f7f7;
    box-shadow: 0px 0px 5px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
    margin-bottom: 3em;
  }

  .professionel-wrapper{
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction:column;
    text-align:left;
  }

  .professionnel-inner{
    width: 70%;
    height: 200px;
    margin:auto;
    background: #f7f7f7;
    box-shadow: 0px 0px 5px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
    margin-bottom: 3em;
  }

  .container-particulier {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "particulier-photo particulier-description particulier-description"
    ". . ."
    ". . .";
}

.particulier-photo { grid-area: particulier-photo; }

.particulier-description { grid-area: particulier-description; }

  .container-professionnel {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "professionnel-photo professionnel-description professionnel-description"
    ". . ."
    ". . .";
}

.professionnel-photo { grid-area: professionnel-photo; }

.professionnel-description { grid-area: professionnel-description; }

#famille-image{
  width: 300px;
  height: 200px;
  margin-top: -2.5em;
  margin-left: -3.4em;
}

#titre-particulier{
  margin-top:-0.8em;
}

#paragraphe-particulier{
  margin-top:-1.5em
}

#business-image{
  width: 300px;
  height: 200px;
  margin-top: -2.5em;
  margin-left: -3.4em;
}

#titre-professionnel{
  margin-top:-0.8em;
}

#paragraphe-professionnel{
  margin-top:-1.5em
}
</style>