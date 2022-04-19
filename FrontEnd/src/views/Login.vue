<template>
  <div class="centrar">
    <div>
      <h1>Iniciar Sesion</h1>
      <hr>
    </div>
    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-input
              id="input-2"
              v-model="form.dni"
              placeholder="DNI"
              required
            ></b-form-input>
          <b-form-input
            id="input-1"
            v-model="form.correo"
            type="email"
            placeholder="Correo electronico"
            required
          ></b-form-input>
          <b-form-input
            id="input-1"
            v-model="form.contraseña"
            type="password"
            placeholder="Contraseña"
            required
          ></b-form-input>
          <br>
        <b-button type="submit" variant="primary">Iniciar Sesion</b-button>
        <br>
        <b-row>
          <b-col class="registro">
            <a class="registro" href="/Registro">Registrarse</a>
          </b-col>
          <b-col class="recuContra">
            <a class="recuContra" href="/RecuContrasena">Has perdido la contraseña?</a>
          </b-col>
        </b-row>
      </b-form>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          correo: '',
          dni: '',
          contraseña: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>