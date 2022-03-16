<template>
    <DoughnutChart :chartData="data" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    props: ['data'],
    components: { DoughnutChart },
    computed: {
        toys() {
            console.log(this.$store.getters.toys)
            return this.$store.getters.toys
        }
    }
}

</script>