<template>
  <div class="centrar">
    <div>
      <h1>Registro</h1>
      <hr>
    </div>
    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row>
              <b-col>
                <b-form-group
                    id="descripcion-1"
                    label="Introduce DNI"
                    label-for="input-1"
                    valid-feedback="Bien!"
                    :invalid-feedback="invalidFeedback"
                    :state="state"
                    >
                    <b-form-input
                    id="input-1"
                    v-model="form.dni"
                    placeholder="DNI"
                    :state= "state"
                    trim
                    required
                    >
                    </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                    id="descripcion-2"
                    label="Introduce Correo"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    v-model="form.correo"
                    type="email"
                    placeholder="Correo electronico"
                    trim
                    required
                    >
                    </b-form-input>
                </b-form-group>
              </b-col>
          </b-row>
        <b-button type="submit" variant="primary">Enviar</b-button>
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
        },
        show: true
      }
    },
    computed: {
      state() {
        return this.form.dni.length >= 9
      },
      invalidFeedback() {
        if (this.form.dni.length > 0) {
          return 'Introduce los 9 caracteres.'
        }
        return 'Porfavor introduce el DNI correctamente.'
      },
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>