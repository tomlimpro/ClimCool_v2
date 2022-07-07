<template>
  <div class="main-wrapper">
    <div class="row">
      <div class="main-picture">
        <img src="../assets/room.jpeg" id="pic" alt="">
      </div>
    </div>
    <div class="row">
      <div class="main-groupe">
        <h1 id="title-groupe">Climcool</h1>
        <h1 id="title-groupe">Les climatiseurs qui transforment la chaleur en cool.</h1><br>
        <p id="paragraphe-groupe">Proposer des solutions innovantes pour vous assurer une atmosphère agréable, 
          en étant à l'écoute de tous nos clients.<br> Voilà qui nous sommes.</p><br>
        <nav>
          <ul>
            <router-link to="Notre-groupe" style="text-decoration: none; color: inherit;"><li id="button-groupe">Découvrir notre groupe<span></span><span></span><span></span><span></span></li></router-link>
          </ul>
        </nav>     
      </div>
    </div>
    <div class="row">
      <div class="main-solutions">
        <div class="container">
          <div class="paragraphe-solutions">
              <h1 id="title-solutions">L'efficacité de nos produits adaptéees à tous les types d'utilisateurs.</h1><br>
              <p id="paragraphe-solutions">Laissez-vous tenter par nos produits qui sauront régulariser la température ambiante de la pièce pour vous offrir un espace propice.</p><br>
              <nav id="nav-solutions">
                <ul id="ul-solutions">
                  <router-link to="/Utilisateurs" style="text-decoration: none; color: inherit;"><li id="li-solutions">Voir nos produits<span></span><span></span><span></span><span></span></li></router-link>
                </ul>
              </nav>
          </div>
          <div class="caroussel-solutions">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/monobloc.jpg" class="d-block w-100">
                </div>
                <div class="carousel-item">
                  <img src="../assets/split.jpg" class="d-block w-100">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="main-clients">
        <div>
          <h1 style="text-align:center; font-weight:bolder;font-size:60px;">Êtes-vous intéressés par nos produits ?</h1>
          <p style="text-align:center;">Que vous soyez <span style="font-weight:bolder;">intéressés</span> par nos produits ou que vous souhaitiez avoir des <span style="font-weight:bolder;">renseignements</span> supplémentaires,<br> nous restons à votre disposition pour tous renseignements complémentaires.
          </p>
        </div>
    </div> 
    </div>
  </div>
</template>

<script scoped>
export default {
    name:'main-view'
}
</script>

<style>
.row{
  --bs-gutter-x: 0;
  margin-right: 0;
}
#pic{
  display: block;
  margin-bottom: -45px;
  margin-top: -45px; 
  height: 500px;
  width:100%;
  max-width:1600px;
}

.main-wrapper{
    display: flex;
    /* margin-top: 50px; */
    justify-content: center;
    flex-direction:column;
    text-align:left;
  }

  .main-picture{
    width: 100%;
    height: 100;
    margin:auto;
    background: blue;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }

.main-groupe{
    width: 100%;
    height: 100;
    margin:auto;
    background: white;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }

  .main-solutions{
    width: 100%;
    height: 100;
    margin:auto;
    background: white;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }
  .main-clients{
    width: 100%;
    height: 100;
    margin:auto;
    background: white;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }

  #title-groupe{
    text-align: center;
    font-weight: bolder;
    font-size: 70px;
  }
  #paragraphe-groupe{
    text-align: center;
  }
  #title-solutions{
    text-align: center;
    font-weight: bolder;
    font-size: 60px;
  }
  #paragraphe-solutions{
    text-align: center;
  }
  nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
  }
  nav ul li {
    --c: #FFE36F;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 25em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1 ;
    transition: 0.5s;
    margin: 1em;
    margin-left: 35em;
}

nav ul li span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

nav ul li:hover {
    color: black;
}

nav ul li:hover span {
    transform: translateY(0) scale(2);
}

nav ul li span:nth-child(1) {
    --n: 1;
}

nav ul li span:nth-child(2) {
    --n: 2;
}

nav ul li span:nth-child(3) {
    --n: 3;
}

nav ul li span:nth-child(4) {
    --n: 4;
}
  
.container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "paragraphe-solutions paragraphe-solutions caroussel-solutions"
    "paragraphe-solutions paragraphe-solutions caroussel-solutions"
    "paragraphe-solutions paragraphe-solutions caroussel-solutions";
}

.paragraphe-solutions { grid-area: paragraphe-solutions; }

.caroussel-solutions { grid-area: caroussel-solutions; }

  #nav-solutions #ul-solutions #li-solutions {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
  }
  #nav-solutions #ul-solutions #li-solutions {
    --c: #FFE36F;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 15em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1 ;
    transition: 0.5s;
    margin: 1em;
    margin-left: 15em;
    text-indent: 1.2em;
}

#nav-solutions #ul-solutions #li-solutions span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

#nav-solutions #ul-solutions #li-solutions:hover {
    color: black;
}

#nav-solutions #ul-solutions #li-solutions:hover span {
    transform: translateY(0) scale(2);
}

#nav-solutions #ul-solutions #li-solutions span:nth-child(1) {
    --n: 1;
}

#nav-solutions #ul-solutions #li-solutions span:nth-child(2) {
    --n: 2;
}

#nav-solutions #ul-solutions #li-solutions span:nth-child(3) {
    --n: 3;
}

#nav-solutions #ul-solutions #li-solutions span:nth-child(4) {
    --n: 4;
}

</style>