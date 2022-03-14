<template>
<router-link to="/toy">back</router-link>
    <div v-if="toy">
        <form @submit.prevent="saveToy">
            <input type="text" v-model="toy.name" />
            <input type="text" v-model="toy.price" />
            <input type="submit" />
        </form>
    </div>
    <h1 v-else>no toy</h1>
</template>

<script>
import { toyService } from '../services/toy-service.js'
export default {
    created() {
        toyService.getById(+this.$route.params.toyId)
            .then(toy => this.toy = toy)
    },
    data() {
        return {
            toy: null
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'saveToy', toy: this.toy })
        }
    }
}
</script>

<style>
</style>