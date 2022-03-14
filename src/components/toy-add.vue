<template>
    <section>
        <h1>addToy</h1>
        <form @submit.prevent="saveToy">
            <input type="text" v-model="toy.name" placeholder="name" />
            <!-- <input type="text" v-model="toy.type" placeholder="type" /> -->
            <select v-model="toy.type">
                <option value="null">Type</option>
                <option value="Adult">Adult</option>
                <option value="Funny">Funny</option>
                <option value="Educational">Educational</option>
            </select>
            <input type="text" v-model="toy.price" placeholder="price" />
            <input type="text" v-model="toy.labels" placeholder="labels" />
            <input type="submit" />
        </form>
    </section>
</template>

<script>
import router from '../router'
import { toyService } from '../services/toy-service.js'
export default {
    data() {
        return {
            toy: toyService.getEmptyToy()
        }
    },
    methods: {
        saveToy() {
            console.log(this.toy)
            this.$store.dispatch({ type: 'saveToy', toy: this.toy })
            router.replace({ path: '/toy' })
        }
    }
}
</script>

<style>
</style>