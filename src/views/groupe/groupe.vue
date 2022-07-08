<template>
  <div class="groupe-wrapper">
    <div class="container-groupe">
      <div class="titre-groupe">
        <h1 style="text-align: center; font-weight: bolder;">Notre groupe</h1><br>
      </div>
      <div class="description-groupe">
        <p>Nous sommes une entreprise qui fournit des solutions pour rendre la vie intérieur agréable pour les utilisateurs. 
          Nous leur fournissons du matériel de qualité supérieur pour répondre à leur besoin.</p>
        <p>Nous développons, innovons des gammes innovantes de systèmes de chauffage et de climatisation. Grâce à nos partenariats, nous pouvons offrir à nos clients une vraie expérience.</p> 
        <p>Notre priorité est le confort des clients.</p>      
      </div>
      <br>
      <div class="chiffre-groupe">
        <div class="container-chiffres">
          <div class="ca-groupe">
            <p style="text-align: center; font-size:70px;color:#2596BE; font-weight:bolder;">26 M</p>
            <br><p style="text-align:center; margin-top:-3em;color:#2596BE;">Chiffres d'affaire</p>
          </div>
          <div class="effectif-groupe">
            <p style="text-align: center;  font-size:70px;color:#2596BE; font-weight:bolder;">288</p>
            <br><p style="text-align:center; margin-top:-3em;color:#2596BE;">Collaborateurs</p>
          </div>
          <div class="site-groupe">
            <p style="text-align: center; font-size:70px;color:#2596BE; font-weight:bolder;">10</p>
            <br><p style="text-align:center; margin-top:-3em;color:#2596BE;">Sites en France</p>
          </div>
          <div class="solutions-groupe">
            <p style="text-align: center; font-size:70px;color:#2596BE; font-weight:bolder;">4</p>
            <br><p style="text-align:center; margin-top:-3em;color:#2596BE;">Solutions</p>
          </div>
        </div>
      </div>
      <div class="titre-groupe">
        <h1 style="text-align: center; font-weight: bolder;">Nos membres</h1><br>
      </div>
      <div class="container-orga">
        <div class="juliane">
          <div class="card-juliane">
            <div class="container-juliane">
              <img src="../../assets/juliane.png" alt="" style="width: 100%">
              <h2>Juliane MARIANO</h2>
              <p class="title">CEO</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
        <div class="christian">
          <div class="card-christian">
            <div class="container-christian">
              <img src="../../assets/christian.png" alt="" style="width: 100%">
              <h2>Christian KAYO</h2>
              <p class="title">Responsable performance gestion</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
        <div class="sephora">
          <div class="card-sephora">
            <div class="container-sephora">
              <img src="../../assets/sephora.png" alt="" style="width: 100%">
              <h2>Sephora GRONDIN</h2>
              <p class="title">Responsable Comptabilité</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>

        </div>
        <div class="gautier">
          <div class="card-gautier">
            <div class="container-gautier">
              <img src="../../assets/gautier.png" alt="" style="width: 100%">
              <h2>Gautier LEHERICY</h2>
              <p class="title">Responsable Marketing</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
        <div class="tom">
          <div class="card-tom">
            <div class="container-tom">
              <img src="../../assets/tom.png" alt="" style="width: 100%">
              <h2>Tom LIM</h2>
              <p class="title">Responsable Communication</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <div class="titre-groupe">
        <h1 style="text-align: center; font-weight: bolder;">Nos valeurs</h1><br>
        <div class="container-valeurs">
          <div class="team-box">
            <img src="../../assets/teamplay.jpg" alt="">
            <p id="teamplay-text">L'esprit d'équipe</p>
          </div>
          <div class="entraide-box">
            <img src="../../assets/entraide.jpg" alt="">
            <p id="entraide-text">L'entraide</p>
          </div>
          <div class="respect-box">

          </div>
          <div class="honnete-box">

          </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'groupe-view'
}
</script>

<style scoped>
.container {  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 0.4fr 1.4fr 1.2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "titre-groupe titre-groupe titre-groupe"
    "description-groupe description-groupe description-groupe"
    "chiffre-groupe chiffre-groupe chiffre-groupe";
}

.titre-groupe { 
  grid-area: titre-groupe; 
  margin-top: 5em;
}

.description-groupe { 
  grid-area: description-groupe;
  width: 70em;
  margin: auto;
  
  
}

.chiffre-groupe { 
  grid-area: chiffre-groupe; 
  }

/************************************       *********************** */
.container-chiffres {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.8fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "ca-groupe effectif-groupe site-groupe solutions-groupe"
    ". . . ."
    ". . . .";
}

.ca-groupe { 
  grid-area: ca-groupe;
  margin-left: 11em;
}

.effectif-groupe { 
  grid-area: effectif-groupe; 
  margin-left: 5em;
}

.site-groupe { grid-area: site-groupe; }

.solutions-groupe { grid-area: solutions-groupe; margin-left: -9em;}

/************************************************************************ */

.container-orga {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 1fr ;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". juliane juliane ."
    "christian sephora gautier tom"
    "christian sephora gautier tom";
}

.juliane { grid-area: juliane; }

/** card juliane */
.card-juliane{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: poppins, Helvetica, sans-serif;
}
.container-juliane{
  background: #ffffff;

}

button{
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
a{
  padding-right: 5px;
  text-decoration: none;
  font-size: 30px;
  font-family:poppins;
  color: black;
}
button:hover, a:hover{
  opacity: 0.7;
}
/*** */

.christian { grid-area: christian; }
.card-christian{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: poppins, Helvetica, sans-serif;
}
.container-christian{
  background: #ffffff;

}

/** */
.sephora { grid-area: sephora; }
.card-sephora{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: poppins, Helvetica, sans-serif;
}
.container-sephora{
  background: #ffffff;

}

/** */
.gautier { grid-area: gautier; }

.card-gautier{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: poppins, Helvetica, sans-serif;
}
.container-gautier{
  background: #ffffff;

}

/** */
.tom { grid-area: tom; }
.card-tom{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: poppins, Helvetica, sans-serif;
}
.container-tom{
  background: #ffffff;

}


.container-valeurs {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "team-box entraide-box"
    "respect-box honnete-box";
}

.team-box { grid-area: team-box; margin-left:15em; }

.entraide-box { grid-area: entraide-box; margin-left:5em; }

.respect-box { grid-area: respect-box; }

.honnete-box { grid-area: honnete-box; }


img{
  border-radius: 30px;
  width: 380;
  height: 300px;
  filter: brightness(70%)
}

#teamplay-text{
  position: absolute;
  margin-top:-6em;
  margin-left:3em;
  color:#ffffff;
  font-weight: bolder;
  font-size: 30px;

}
#entraide-text{
  position: absolute;
  margin-top:-6em;
  margin-left:4em;
  color:#ffffff;
  font-weight: bolder;
  font-size: 30px;

}
</style>