<!--
  Componente para representar un contacto, su nombre y teléfono.
  Pasa como evento a su padre que contacto es donde has pinchado
-->
<template>
  <div
    class="contacto"
    @click="$emit('ver-tarjeta', contacto)"
  >
    <div class="nombre">{{ contacto.nombre }}</div>
    <div class="telefono">{{ contacto.telefono }}</div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  props: {
    contacto: Object
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "../css/variables";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.contacto {
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2px;
  padding: 10px;
  cursor: pointer;

  color: $negro;

  &:hover {
    background-color: #f3f3f3;
  }

  .nombre {
    font-size: 1.2rem;
    line-height: 1.334;
  }

  .telefono {
    font-size: 0.8rem;
    color: #737379;
  }
}
</style>
