<template>
    <router-link to="/toy">back</router-link>
    <div v-if="toy">
        <p>name: {{ toy.name }}</p>
        <p>type: {{ toy.type }}</p>
        <p>labels: {{toy.labels.join(' ,')}}</p>
        <p>{{ isInStock }}</p>
        <p>price: {{ toy.price }}</p>
    </div>
    <h1 v-else>no toy</h1>
</template>

<script>
import { toyService } from '../services/toy-service.js'
export default {
    data() {
        return {
            toy: null
        }
    },
    created() {
        toyService.getById(+this.$route.params.toyId)
            .then((toy) => {
                this.toy = toy
                console.log(toy)
            })
    },
    computed: {

        isInStock() {
            if (this.toy.inStock) return 'Is In Stock!'
            else return 'Is not in stock...'
        },
    }
}
</script>

<style>
</style>