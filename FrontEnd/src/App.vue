<template>
  <div id="app">
        <b-navbar toggleable="md" type="dark" class="navbar"> 
        <b-container>
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <b-navbar-brand>SPERS</b-navbar-brand>
          <b-collapse class="negro" id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/" >Home</b-nav-item>
              <b-nav-item href="/Particulares">Particulares</b-nav-item>
              <!-- <b-nav-item href="/Empresas">Empresas</b-nav-item> -->
              <b-nav-item href="/SobreNosotros">Sobre Nosotros</b-nav-item>
              <b-nav-item href="/Contacto">Contacto</b-nav-item>
              <b-nav-item href="/login">Inicio Sesion</b-nav-item>
              <b-nav-item href="/form1">Formulario</b-nav-item>
              <b-nav-item href="/form2">Formulario2</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    <router-view/>
  </div>
</template>

<style >
  .navbar{
    background-color: #0C664B;
    color: black !important;
  }
</style>