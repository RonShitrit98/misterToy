<template>
    <div class="wrapper">
        <!-- <toy-chart :data="testData"></toy-chart> -->
        <toy-filter v-if="$store.getters.toys"></toy-filter>
        <toy-list></toy-list>
        <nav></nav>
    </div>
</template>

<script>
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'
import ToyFilter from '../components/toy-filter.vue'
import toyChart from '../components/toy-chart.vue'
import ToyChart from '../components/toy-chart.vue'
export default {
    name: 'toy-app',
    components: {
        toyList,
        toyFilter,
        ToyFilter,
        toyChart,
        ToyChart
    },
    created() {
        this.$store.dispatch('loadToys')
        // setTimeout(()=>{
        //     console.log(this.$store.getters.toys)
        // }, 2000)
    },
    data() {
        return {
            testData: {
                labels: ['', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
                datasets: [
                    {
                        data: [30, 40, 60, 70, 5],
                        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                    },
                ],
            }
        }
    }
}
</script>

<style>
</style>
