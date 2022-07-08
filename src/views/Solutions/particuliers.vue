<template>
  <div class="utilisateur-wrapper">
    <h1 id="titre">Particuliers</h1>
    <p style="text-align:center; font-size:25px; font-weight:bolder;">Habitat individuel ou collectif</p>
    <hr style="width:50%; margin:auto;">
    <div class="card-container">  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <router-link to="/Solutions/Monobloc"><img src="../../assets/monobloc-card.png"></router-link>  
           <h3>Monobloc</h3>  
         </div>  
       </div>  
       <div class="face face2">  
         <div class="content">  
           <p>Le climatiseur monobloc est, comme son nom l'indique, constitué d'un seul élément. Le
             monobloc est mobile, prévu pour de petites pièces...</p>
             <router-link to="/Solutions/Monobloc">En savoir plus.</router-link>
         </div>  
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <router-link to="/Solutions/Split"><img src="../../assets/split-card.png"></router-link>  
           <h3>Split</h3>  
         </div>  
       </div>  
       <div class="face face2">  
         <div class="content">  
           <p>Le split est composé de 2 unités, intérieure dans la pièce à climatiser, et extérieure. Le climatiseur évacue
             les calories ...</p>
             <router-link to="/Solutions/Split">En savoir plus.</router-link>
         </div>  
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <router-link to="/Solutions/Splitfixe"><img src="../../assets/splitfixe-card.png"></router-link>  
           <h3>Split fixe</h3>  
         </div>  
       </div>  
       <div class="face face2">  
         <div class="content">  
           <p>Comme le split mobile, il est composé de 2 unités reliées par des
             tuyauteries de petits diamètres...</p>
             <router-link to="/Solutions/Splitfixe">En savoir plus.</router-link>  
         </div>  
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <router-link to="/Solutions/Bisplitfixe"><img src="../../assets/bisplit-fixe-card.png"></router-link>
           <h3>Bi-split fixe</h3>  
         </div>  
       </div>  
       <div class="face face2">  
         <div class="content">  
           <p>Le principe du split est ici appliqué à deux pièces. C'est-à-dire que le
             climatiseur est composé de 3 unités : une extérieure et deux intérieures...</p>
             <router-link to="/Solutions/Bisplitfixe">En savoir plus.</router-link>  
         </div>  
       </div>  
     </div>
   </div>  
   <p style="text-align:center; font-size:25px; font-weight:bolder;">Bureaux indépendants</p>
   <hr style="width:50%; margin:auto;">  
   <br>  
   <div class="card-container">  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <img src="../../assets/monobloc-card.png">  
           <h3>Monobloc</h3>  
         </div>  
       </div>
       <div class="face face2">
         <div class="content">
           <p>Le climatiseur monobloc est, comme son nom l'indique, constitué d'un seul élément. Le
             monobloc est mobile, prévu pour de petites pièces...</p>
           <router-link to="/Solutions/Monobloc">En savoir plus.</router-link>
         </div>
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <img src="../../assets/split-card.png">  
           <h3>Split</h3>  
         </div>  
       </div>
       <div class="face face2">
         <div class="content">
           <p>Le split est composé de 2 unités, intérieure dans la pièce à climatiser, et extérieure. Le climatiseur évacue
             les calories ...</p>
           <router-link to="/Solutions/Split">En savoir plus.</router-link>
         </div>
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <img src="../../assets/splitfixe-card.png">  
           <h3>Split fixe</h3>  
         </div>  
       </div>
       <div class="face face2">
         <div class="content">
           <p>Comme le split mobile, il est composé de 2 unités reliées par des
             tuyauteries de petits diamètres...</p>
           <router-link to="/Solutions/Splitfixe">En savoir plus.</router-link>
         </div>
       </div>  
     </div>  
     <div class="card">  
       <div class="face face1">  
         <div class="content">  
           <img src="../../assets/bisplit-fixe-card.png">  
           <h3>Bi-split fixe</h3>  
         </div>  
       </div>
       <div class="face face2">
         <div class="content">
           <p>Le principe du split est ici appliqué à deux pièces. C'est-à-dire que le
             climatiseur est composé de 3 unités : une extérieure et deux intérieures...</p>
           <router-link to="/Solutions/Bisplitfixe">En savoir plus.</router-link>
         </div>
       </div>  
     </div>
   </div>
  </div>
</template>

<script>
//import nav_component from '../../components/nav-component/nav-component.vue'
export default {
    components:{},
    name:'utilisateurs_particuliers'

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
  
  .solution-container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "monobloc split split-fix"
    ". . ."
    ". . .";
 }

.monobloc { grid-area: monobloc; }

.split { grid-area: split; }

.split-fix { grid-area: split-fix; }

.card{
    border: #fff;
    
}

.card-container{  
   align-items: center;
   width: 1400px;  
   position: relative;  
   display: flex;  
   justify-content: space-between;  
   margin-left: auto;
   margin-right: auto;
 }  
 .card-container .card{  
   position: relative;  
   cursor: pointer;  
 }  
 .card-container .card .face{  
   width: 300px;  
   height: 200px;  
   transition: 0.5s;  
 }  
 .card-container .card .face.face1{  
   position: relative;  
   background: #333;  
   display: flex;  
   justify-content: center;  
   align-items: center;  
   z-index: 1;  
   transform: translateY(100px);  
 }  
 .card-container .card:hover .face.face1{  
   
   transform: translateY(0);  
 }  
 .card-container .card .face.face1 .content{  
   opacity: 0.2;  
   transition: 0.5s;  
 }  
 .card-container .card:hover .face.face1 .content{  
   opacity: 1;  
 }  
 .card-container .card .face.face1 .content img{  
   max-width: 100px;  
 }  
 .card-container .card .face.face1 .content h3{  
   margin: 10px 0 0;  
   padding: 0;  
   color: #fff;  
   text-align: center;  
   font-size: 1.5em;  
 }  
 .card-container .card .face.face2{  
   position: relative;  
   background: #fff;  
   display: flex;  
   justify-content: center;  
   align-items: center;  
   padding: 20px;  
   box-sizing: border-box;  
   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);  
   transform: translateY(-100px);  
 }  
 .card-container .card:hover .face.face2{  
   transform: translateY(0);  
 }  
 .card-container .card .face.face2 .content p{  
   margin: 0;  
   padding: 0;  
 }  
 .card-container .card .face.face2 .content a{  
   margin: 15px 0 0;  
   display: inline-block;  
   text-decoration: none;  
   font-weight: 900;  
   color: #333;  
   padding: 5px;  
   border: 1px solid #333;  
 }  
 .card-container .card .face.face2 .content a:hover{  
   background: #333;  
   color: #fff;  
 }  

</style>