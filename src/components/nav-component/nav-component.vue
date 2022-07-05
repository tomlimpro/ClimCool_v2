<template>
<div class="nav-wrapper">
  <nav>
    <div class="nav-component">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <div class="logo">
                <h1>Clim</h1>
            </div>
            <div class="menu-items">
                <router-link to="/Utilisateurs">Test</router-link>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Notre groupe</a></li>
                <li><a href="#">Nos solutions</a></li>
                <li><a href="#">Nos clients</a></li>
                <li><a href="#">Contacts et devis</a></li>
            </div>
        </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");  
 * {  
  margin: 0;  
  padding: 0;  
  box-sizing: border-box;  
 }

.nav-wrapper {  
  font-family: "Poppins", sans-serif;
  position: -webkit-sticky;
	position: sticky;
	top: 0;  
 } 
.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;  
}

.nav-component{
    width: 100%;
    box-shadow: 0 0px 0px rgb(146 161 176 / 15%);
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
    font-weight: bolder;
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
    z-index: 2;
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
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    height: 100vh;
    width: 100%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5 ease-in-out;
    text-align: center;
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


</style>