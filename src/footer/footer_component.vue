<template>
  <footer class="page-footer" style="background-color: #2596BE;">
    <div class="container text-center" style="color:white">
      <div class="row">
        <div class="col"><br>
          <h3>Suivez Clim Cool sur nos différents réseaux sociaux</h3>
        </div>
      </div>
      <div class="row">
        <div class="col py-3">
          <a href="https://github.com/tomlimpro/ClimCool_v2" id="icones" target="_blank" class="fa fa-github"></a>
          <a href="https://facebook.com/" id="icones" target="_blank" class="px-3 fa fa-facebook"></a>
          <a href="https://twitter.com/" id="icones" target="_blank" class="fa fa-twitter"></a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="row">
        <p id="copyright" style="color:white">&copy; Ce site a été réalisé dans un but éducatif.</p>
      </div>
      <div class="row">
        <p style="color:white">Nous ne vendons pas de climatisations et n'avons aucune prétention de faire la concurrence à l'entreprise <a href="climcool.fr">ClimCool</a>, ou a dégrader son image.</p>
      </div>
      <div class="row">
        <p style="color:white">Si vous souhaitez contacter l'entreprise, nous vous invitons à vous diriger vers le lien ci-dessus. </p>
      </div>
  </div>
  </footer>
</template>

<script>

export default {
  name: "footer_component"
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

#icones {
  text-decoration: none;
  font-size: xx-large;
  color: white;
  margin-top: 5%;
  margin-bottom: -50%;
  transition: transform .7s ease-in-out;
}

#icones:hover {
  transform: rotate(360deg);
}
</style>