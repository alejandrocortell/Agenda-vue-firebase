<!--
  Componente para añadir un nuevo contacto
-->
<template>
  <div id="anadir-contacto">
    <div
      class="opacidad"
      @click="$emit('cerrar-tarjeta')"
    ></div>
    <div class="tarjeta">
      <div class="cabecera-tarjeta">
        <h2>Contacto nuevo</h2>
        <div class="iconos">
          <img
            src="../assets/clear-black-24dp.svg"
            alt="Salir"
            @click="$emit('cerrar-tarjeta')"
          >
        </div>
      </div>
      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Nombre"
          name="nombreNuevo"
          v-model="nombreNuevo"
          id='nombreNuevo'
        />
        <label
          for="nombreNuevo"
          class="form__label"
        >
          Nombre
        </label>
      </div>
      <p
        v-if="errorNombre !== ''"
        class="error"
      >
        {{ errorNombre }}
      </p>
      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Nombre"
          name="telefonoNuevo"
          v-model="telefonoNuevo"
          id='telefonoNuevo'
        />
        <label
          for="telefonoNuevo"
          class="form__label"
        >
          Teléfono
        </label>
      </div>
      <p
        v-if="errorTelefono !== ''"
        class="error"
      >
        {{ errorTelefono }}
      </p>
      <div class="grupo-botones">
        <a
          class="boton guardar"
          @click="checkForm"
        >
          Guardar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnadirContacto',
  props: {
  },
  data: function () {
    return {
      errorNombre: '',
      errorTelefono: '',
      nombreNuevo: '',
      telefonoNuevo: ''
    }
  },
  methods: {
    checkForm: function () {
      // Comprobación de errores y mostrarlos
      this.errorNombre = ''
      this.errorTelefono = ''
      let error = false

      if (this.nombreNuevo === '') {
        error = true
        this.errorNombre = 'El nombre es obligatorio'
      }

      if (this.telefonoNuevo === '') {
        error = true
        this.errorTelefono = 'El teléfono es obligatorio'
      }

      if (isNaN(this.telefonoNuevo)) {
        error = true
        this.errorTelefono = 'El teléfono solo puede contener números'
      }

      // Emite el evento para añadir un nuevo contacto
      if (!error) {
        this.$emit('guardar-contacto', this.nombreNuevo, this.telefonoNuevo)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../css/variables";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
.opacidad {
  position: absolute;
  top: 0;

  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  opacity: 0.3;
}

.tarjeta {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);

  width: 50%;
  max-width: 500px;
  min-width: 300px;

  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2px;
  padding: 10px;

  .cabecera-tarjeta {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;

    h2 {
      display: inline-block;
      margin: 0px;
    }

    .iconos {
      justify-self: end;

      img {
        opacity: 50%;
      }

      img:hover {
        opacity: 100%;
        transition-duration: 0.3s;
        cursor: pointer;
      }
    }
  }

  /* Formulario contacto */
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #c9c9c9;
    outline: 0;
    font-size: 1.3rem;
    color: $negro;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }

    &:disabled {
      border-bottom: 0px solid $primario;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: $negro;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primario;
    }
    padding-bottom: 7px;
    border-width: 2px;
    border-bottom: 2px solid $primario;

    &.numeroIncorrecto {
      border-bottom: 2px solid $acento;

      ~ .form__label {
        color: $acento;
      }
    }
  }

  .numeroIncorrecto {
    border-bottom: 2px solid $acento;

    ~ .form__label {
      color: $acento;
    }
  }

  .grupo-botones {
    display: grid;
    grid-template-columns: 1fr;

    .boton {
      background-color: #ffffff;
      transition: 0.3s;
      margin-top: 10px;
      padding: 10px;
      border-radius: 3px;
      text-align: center;
      text-transform: uppercase;

      &:hover {
        transition: 0.3s;
        color: #ffffff;
        cursor: pointer;
      }

      &:visited {
        text-decoration: none;
      }
    }

    .guardar {
      border: 2px solid $primario;
      color: $primario;

      &:hover {
        background-color: $primario;
      }
    }

    .eliminar {
      border: 2px solid $acento;
      color: $acento;

      &:hover {
        background-color: $acento;
      }
    }
  }

  .confirmar-eliminar {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    grid-template-areas:
      "texto texto"
      "eliminar volver";

    .texto-eliminar {
      grid-area: texto;
    }

    .confirmacion-eliminar {
      grid-area: eliminar;
      justify-self: right;
      color: $acento;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .confirmacion-volver {
      grid-area: volver;
      justify-self: left;
      color: $primario;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .error {
    color: $acento;
    font-size: 0.8rem;
  }
}
</style>