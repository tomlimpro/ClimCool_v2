<template>
<div class="nav-wrapper">
  <nav class="main-nav">
    <div class="nav-component">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="check" v-model="checknav"/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <div class="logo">
                <router-link to="/" style="text-decoration: none; color: inherit; ;"><h1 id="nom_entreprise">ClimCool</h1></router-link>
                <img id="logo_climcool" src="./assets/logo_climcool.png">
            </div>
            <div class="menu-items">
                <router-link to="/" @click.native="InlineButtonClickHandler">Accueil</router-link>
                <router-link to="/Utilisateurs"> Nos solutions</router-link>
                <router-link to="/Notre-groupe"> Notre groupe</router-link>
                <router-link to="/Contact-devis">Contact et devis</router-link>  
            </div>
        </div>
    </div>
  </nav>
  <router-view/>
  <footer>
    <div class="footer-component">
        <div class="container-footer">
            <div class="block-logo">
                <router-link to="/" style="text-decoration: none; color: inherit; ;"><h1 id="nom_entreprise">ClimCool</h1></router-link>
                <img id="logo_climcool" style="width: 70px;height: 70px;margin-top: -4em;margin-left: 10.9em;" src="./assets/logo_climcool.png">
            </div>
            <div class="block-reseau">
              <ul>  
                <li><a href="#" target="blank"><i class="fab fa-github"></i></a></li>  
                <li><a href="#" target="blank"><i class="fab fa-instagram"></i></a></li>  
                <li><a href="#" target="blank"><i class="fab fa-linkedin-in"></i></a></li>  
                <li><a href="#"><i class="fab fa-codepen" target="blank"></i></a></li>  
            </ul>   
            </div>
            <div class="block-info">
                <h1>test 3</h1>
            </div>
        </div>
    </div>
  </footer>
</div>
</template>
<script>

export default {
    data(){
        return{
            checknav:'',
            check:''
        }
    }

}
</script>

<style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");  
 * {  
  margin: 0;  
  padding: 0;  
  /*box-sizing: border-box;*/  

 }

#nom_entreprise{
    font-weight: bolder         ;
}

#logo_climcool{
    width: 70px;
    height: 70px;
    margin-top: -3.5em;
    margin-left: 8.5em;
}

.main-nav{
    position: -webkit-sticky;
    position: sticky;
    top:0%;
    background-color:#2596BE ;
     z-index: 5;
}

.nav-wrapper {  
  font-family: "Poppins", sans-serif;
 } 
.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;  
}

.nav-component{
    width: 100%;
    box-shadow: 0 0px 0px rgb(146 161 176 / 15%);
    position: sticky;
}

.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    
}

.nav-component .menu-items{
    display: flex;
}

.nav-component .nav-container li{
    list-style: none;
}

.nav-component .nav-container a{
    text-decoration: none;
    color: #0e2431;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
}

.nav-component .nav-container a:hover{
    color: #FFE36F
}

.nav-container{
    display:block;
    position: relative;
    height: 60px;
}


.nav-container .checkbox{
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
}

.nav-container .hamburger-lines{
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.nav-container .hamburger-lines .line{
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
}

.nav-container .hamburger-lines .line1{
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2{
    transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3{
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}

.nav-component .menu-items{
    padding-top: 120px;
    /* box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5); */
    height: 100vh;
    width: 100%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5 ease-in-out;
    text-align: center;
    background-color: #2596BE;
}

.nav-component .menu-items li{
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
}

.logo{
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 1.2rem;
    color: #0e2431;
    margin-top: -35px;
    margin-right: 20px;

}

.nav-container input[type="checkbox"]:checked ~ .menu-items{
    transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
    transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
    transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
    transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
    display:none;
}

.footer-component{
    width: 100%;
    height: 100;
    margin:auto;
    background-color:#2596BE;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
}

.container-footer {  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "block-logo block-reseau block-info"
    ". . ."
    ". . .";
}

.block-logo { grid-area: block-logo; }

.block-reseau { grid-area: block-reseau; }

.block-info { grid-area: block-info; }


</style>