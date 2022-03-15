<template>
        <div class="wrapper">
            <h1>toy app!!</h1>
            <toy-filter v-if="$store.getters.toys"></toy-filter>
            <toy-list></toy-list>
            <nav></nav>
        </div>
</template>

<script>
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'
import ToyFilter from '../components/toy-filter.vue'
export default {
    name: 'toy-app',
    components: {
    toyList,
    toyFilter,
    ToyFilter
},
    created(){
        this.$store.dispatch('loadToys')
        // setTimeout(()=>{
        //     console.log(this.$store.getters.toys)
        // }, 2000)
    }
}
</script>

<style>
</style>
