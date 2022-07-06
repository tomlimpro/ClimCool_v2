<template>
  <div class="main-wrapper">
    <div class="row">
      <div class="main-picture">
        <h1>Tet</h1>
        <h1>Tet</h1>
        <h1>Tet</h1>
        <h1>Tet</h1>
        <h1>Tet</h1>
      </div>
    </div>
    <div class="row">
      <div class="main-groupe">
          <h1>Climcool, les climatiseurs qui transforment la chaleur en cool</h1>
      </div>
    </div>
    <div class="main-solutions">
      <div>
        <h1>Nos solutions pour une atmosphère cool</h1>
      </div>
    </div>
    <div class="main-clients">
      <div>
        <h1>Nos clients qui sont aussi cool</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'main-view'
}
</script>

<style>
.row{
  --bs-gutter-x: 0;
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
    background: Yellow;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }

  .main-solutions{
    width: 100%;
    height: 100;
    margin:auto;
    background: red;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }
  .main-clients{
    width: 100%;
    height: 100;
    margin:auto;
    background: green;
    padding: 40px 55px 45px 55px;
    /* border-radius: 15px; */
    transition: all .3s;
  }
</style>