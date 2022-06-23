<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h1>Formulario</h1>

      <br>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">

          <label for="name">Nombre</label>
          <input 
            type="text"
            id="name"
            class="form-control"
            name="name"
            autocomplete="off"
            v-model.trim="formData.name" 
            required 
            :minlength="nombreMinLength"
            maximo
          />
    
          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{nombreMinLength}} caracteres.
            </div>
            <div slot="maximo" class="alert alert-danger mt-1">
              Este campo no debe poseer más de {{nombreMaxLength}} caracteres.
            </div>
          </field-messages>

        </validate>

        <br>

        <validate tag="div">

          <label for="age">Edad</label>
          <input 
            type="number"
            id="age"
            class="form-control"
            name="age"
            autocomplete="off"
            v-model.number="formData.age" 
            required 
            :min="edadMin"
            :max="edadMax"
          />
    
          <field-messages name="age" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">La edad mínima debe ser {{edadMin}} años.</div>
            <div slot="max" class="alert alert-danger mt-1">La edad no debe superar los {{edadMax}} años.</div>
          </field-messages>

        </validate>
        <br>

        <validate tag="div">

          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            class="form-control"
            name="email"
            autocomplete="off"
            v-model="formData.email" 
            required 
          />
    
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>

        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>


       <div class="col text-center">
      <button style="center " class="btn btn-primary mr-2" @click="ir()">IR A LA TABLA DE USUARIOS</button>
    </div>

      
  
    </div>

   
    
    



  </section>




</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://62b47909530b26da4cbf650c.mockapi.io/users',
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        nombreMaxLength : 15,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInicialData() {
        return {
          name : null,
          age: null,
          email: null
        }
      },
      async enviar() {
        let usuarioNew = { ...this.formData }
        this.$store.dispatch('agregarUsuario', usuarioNew)
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      ir() {
        this.$router.push({
          path: '/usuarios'
        })
      }
    },
    computed: {
    
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
      background-color: rgb(5, 41, 43);
      color: white;
  }

  hr {
    background-color: #bbb;
  }  

  pre {
    color: white;
  }
</style>
