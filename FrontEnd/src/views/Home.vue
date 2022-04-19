<template>
<div>
  <div class="centrar">
    <video width="1080" height="460" autoplay>
      <source src="../../../assets/gif.mp4" type="video/mp4">
    </video>
  </div>
  <div class="centrar">
    <h3>Nuestros Servicios</h3>
    <hr>
  </div>
  <div class="laterales">
    <div class="card">
      <b-card
        title="Particulares"
        img-src="https://picsum.photos/600/300/?image=1"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20.5rem;"
        class="mb-2"
      >
        <b-card-text>
          Si eres un particular a continuacion encontrara mas informacion.
        </b-card-text>

        <b-button href="/particulares" class="btn-primary">Ir a particulares</b-button>
      </b-card>
    </div>
    <div class="card">
      <b-card
        title="Empresa"
        img-src="https://picsum.photos/600/300/?image=1048"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20.5rem;"
        class="mb-2"
      >
        <b-card-text>
          Si eres una empresa a continuacion encontrara mas informacion.
        </b-card-text>

        <b-button href="/Empresas" class="btn-primary">Ir a Empresa</b-button>
      </b-card>
    </div>
    <div class="card">
      <b-card
        title="Institución"
        img-src="https://picsum.photos/600/300/?image=193"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 21rem;"
        class="mb-2"
      >
        <b-card-text>
          Si es una institución a continuacion encontrara mas informacion.
        </b-card-text>

        <b-button href="/Empresas" class="btn-primary">Ir a institución</b-button>
      </b-card>
    </div>
  </div>

  <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
       <video width="1024" height="460" autoplay loop>
        <source src="../../../assets/gif.mp4" type="video/mp4">
      </video>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="" alt="Third slide">
      </div>
    </div>
  </div> -->
  <Fotter/>
</div>

</template>

<script>
import Fotter from '../components/Fotter.vue'

export default {
  components:{
    Fotter,
  }
}
</script>

<style >
  .laterales{
    display: flex;
    margin-left: 11%;
    margin-bottom: 3%;
    text-align: center;
  }
  .card{
    outline: none;
  }
  .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: #0C664B !important;
    border: 1px solid #0C664B !important;
}
</style>