import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators : {
        'maximo' : value => {
            return value.length <= 15
        }
    }
}

Vue.use(VueForm, options)