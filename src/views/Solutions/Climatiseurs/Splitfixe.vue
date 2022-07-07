<template>
  <div class="splitfixe-wrapper">
    <div class="navbar-splitfixe">
        <div class="fonctionnalite-splitfixe">
            <a href="#fonctionnalite_box" style="text-decoration: none; color: inherit; "><p style="text-align:center; color:white; margin-top:1em">Fonctionnalite</p></a>
        </div>
        <div class="detail-splitfixe">
            <a href="#detail_box" style="text-decoration: none; color: inherit; "><p style="text-align:center; color:white;margin-top:1em">Caractéristiques</p></a>
        </div>
        <div class="devis-splitfixe">
            <a href="#devis_box" style="text-decoration: none; color: inherit;"><p style="text-align:center; color:white;margin-top:1em;">Devis</p></a>
        </div>
    </div>
    <div class="container-splitfixe">
        <div class="photo-splitfixe">
            <img style="width: 300px; height:300px; margin-left:10em;" src="../../../assets/splitfixe-card.png">
        </div>
        <div class="info-splitfixe">
            <p style="font-size: 25px; font-weight: bolder;">Split Cool-2</p>
            <p>Avantage</p>
            <ul>
                <li>Performance</li>
                <li>Niveau sonore optimum car le compresseur est placé à l'extérieur.</li>
                <li>Installation nécessite l'intervention d'un frigoriste.</li>
            </ul>
            <p>Inconvénients</p>
            <ul>
                <li>Il faut prévoir un trou dans le mur pour passer la gaine d'air chaud</li>
            </ul>
        </div>
    </div>
    <br>
    <p id="fonctionnalite_box" style="color:white;">ancrage</p>
    <div class="fonctionnalite-detail-devis">
        <div class="box-fonctionnalite" >
            <p id="fonctionnalite_box" style="text-align:center; font-size:30px; font-weight:bolder;">Adopter une unité qui comporte tous les ingrédients destinés à rafraîchir la pièce.</p>
            <p style="text-align:center">Comme le split mobile, il est composé de 2 unités reliées par des
tuyauteries de petits diamètres. L'une est placée dans la pièce à climatiser,
l'autre à l'extérieur et les deux sont fixes. Il peut climatiser une surface de
10 à 30 m2. 
 </p>
            <p id="detail_box" style="color:white;">Test</p>
        </div>
        <div class="box-detail" >
            <p style="text-align:center; font-size:30px;font-weight:bolder">Caractéristiques</p>
            <div class="container-caracteristique">
                <div class="puissance-box">
                    <p style="text-align:center; font-size:30px;">Puissance</p>
                    <p style="text-align:center; font-weight: bolder;">2300 W</p>
                </div>
                <div class="intensite-box">
                    <p style="text-align:center;font-size:30px;">Intensité nominale</p>
                    <p style="text-align:center; font-weight: bolder;">0.16A</p>
                </div>
                <div class="alimentation-box">
                    <p style="text-align:center; font-size:30px;">Alimentation unité intérieure</p>
                    <p style="text-align:center; font-weight: bolder;">220-250V, 50Hz</p>
                </div>
                <div class="dimension-box">
                    <p style="text-align:center; font-size:30px;">Dimensions (LxHxP)</p>
                    <p style="text-align:center; font-weight: bolder;">837x308x192</p>
                </div>
                <p id="devis_box" style="color:white;">Test</p>
            </div>
        </div>
        <div class="box-devis">
            <p style="text-align:center; font-size:30px;font-weight:bolder">Demander un devis</p>
            <br>
            <nav id="nav-devis">
                <ul id="ul-devis">
                    <router-link to="/Contact-devis" style="text-decoration: none; color: inherit;"><li id="li-devis">Contact et devis<span></span><span></span><span></span><span></span></li></router-link>
                </ul>
            </nav>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
    name:'splitfixe-view'
}
</script>

<style scoped>
.navbar-splitfixe {  display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 0.2fr;
gap: 0px 0px;
grid-auto-flow: row;
grid-template-areas:
"fonctionnalite-splitfixe detail-splitfixe devis-splitfixe";
position: sticky;
position: -webkit-sticky;
background-color: black;
top: 60px;

}

.container-splitfixe {  display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 0px 0px;
grid-auto-flow: row;
grid-template-areas:
"photo-splitfixe info-splitfixe"
"photo-splitfixe info-splitfixe"
"photo-splitfixe info-splitfixe";
margin-top: 3em;


}

.fonctionnalite-detail-devis {  display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 0px 0px;
grid-auto-flow: row;
grid-template-areas:
"box-fonctionnalite"
"box-detail"
"box-devis";
}

.container-caracteristique {  display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 0px 0px;
grid-auto-flow: row;
grid-template-areas:
"puissance-box intensite-box"
"alimentation-box dimension-box";
margin-top:2em;
margin-left: 4em;

}

.puissance-box { grid-area: puissance-box; }

.intensite-box { grid-area: intensite-box; }

.alimentation-box { grid-area: alimentation-box; }

.dimension-box { grid-area: dimension-box; }


.box-fonctionnalite { grid-area: box-fonctionnalite; margin-top:8em;}

.box-detail { grid-area: box-detail; margin-top:5em;}

.box-devis { grid-area: box-devis; margin-top:5em;}


.photo-splitfixe { grid-area: photo-splitfixe; }

.info-splitfixe { grid-area: info-splitfixe; }

.fonctionnalite-splitfixe { grid-area: fonctionnalite-splitfixe; }

.detail-splitfixe { grid-area: detail-splitfixe; }

.devis-splitfixe { grid-area: devis-splitfixe; }

#nav-devis #ul-devis #li-devis {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
  }
  #nav-devis #ul-devis #li-devis {
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
    margin-left: 36em;
    margin-top: -1em;
    text-indent: 1.2em;
}

#nav-devis #ul-devis #li-devis span {
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

#nav-devis #ul-devis #li-devis:hover {
    color: black;
}

#nav-devis #ul-devis #li-devis:hover span {
    transform: translateY(0) scale(2);
}

#nav-devis #ul-devis #li-devis span:nth-child(1) {
    --n: 1;
}

#nav-devis #ul-devis #li-devis span:nth-child(2) {
    --n: 2;
}

#nav-devis #ul-devis #li-devis span:nth-child(3) {
    --n: 3;
}

#nav-devis #ul-devis #li-devis span:nth-child(4) {
    --n: 4;
}

</style>