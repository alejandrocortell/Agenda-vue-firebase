<!--
  Componente de la cabecera de la web.
  Pasa a App.vue el evento si se pincha en login, logout o añadir contacto
-->
<template>
  <div id="cabecera">
    <div class="titulo">
      <h1
        class="titulo-logout"
        v-if="user === null"
      >
        Agenda
      </h1>
      <div
        v-else
        class="titulo-login"
      >
        <!--
        <img
          :src="user.photoURL"
          :alt="user.displayName"
          class="login-avatar"
        >
        -->
        <h1 class="login-titulo">Agenda</h1>
        <h2 class="login-nombre">{{user.displayName}}</h2>
      </div>
    </div>
    <div class="botones">
      <a
        v-if="user === null"
        class="boton-anadir"
        @click="$emit('login')"
      >
        Login
      </a>
      <a
        v-else
        class="boton-anadir"
        @click="$emit('logout')"
      >
        Logout
      </a>
      <a
        v-if="user !== null"
        class="boton-anadir"
        @click="$emit('anadir-contacto')"
      >
        Añadir contacto
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cabecera',
  props: {
    user: Object
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "../css/variables";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

#cabecera {
  height: 50px;
  background-color: $primario;
  margin-bottom: 15px;
  padding: 0px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .titulo-logout {
    margin: 0px;

    color: #ffffff;
    font-weight: 500;
  }

  .titulo-login {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    justify-content: start;
    column-gap: 10px;
    grid-template-areas:
      "avatar titulo"
      "avatar nombre";

    color: #ffffff;
    font-weight: 500;

    .login-avatar {
      grid-area: avatar;
      justify-self: right;
      width: 40px;
      border-radius: 20px;
    }

    .login-titulo {
      grid-area: titulo;
      margin: 0px;
      font-size: 14px;
      font-weight: 300;
    }

    .login-nombre {
      grid-area: nombre;
      margin: 0px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .botones {
    justify-self: end;

    .boton-anadir {
      cursor: pointer;
      color: #ffffff;
      padding: 5px 15px;
      border: 2px solid $primario;

      &:hover {
        border: 2px solid #ffffff;
        border-radius: 3px;
        transition-duration: 0.15s;
      }
    }
  }
}
</style>