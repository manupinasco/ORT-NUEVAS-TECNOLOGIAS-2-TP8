<template>

<section class="jumbotron">

  <h3 v-if="!usuarios.length" class="alert alert-warning">
      No hay usuarios disponibles
  </h3>

  <div v-else class="class table-responsive">
        <table class="class table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td> {{usuario.name}}</td>
            <td>{{usuario.age}}</td>
            <td>{{usuario.email}}</td>


          </tr>

      </table>
  </div>
  <br>
  <div class="col text-center">
      <button style="center " class="btn btn-primary mr-2" @click="ir()">IR AL FORMULARIO</button>
  </div>
  
  
</section>
</template>

<script>

  export default  {
    name: 'src-components-usuarios',
    props: [],
    created () {
     
    },
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      ir() {
        this.$router.push({
          path: '/formulario'
        })
      }
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
  .jumbotron {
      background-color: rgb(5, 41, 43);
      color: white;
  }
</style>
