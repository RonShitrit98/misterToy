<template>
    <section>
        <div>
            <p>filter by type:</p>
            <select @change="filterToys" v-model="filterBy.type">
                <option value="null">Type</option>
                <option value="Adult">Adult</option>
                <option value="Funny">Funny</option>
                <option value="Educational">Educational</option>
            </select>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                type: null
            }
        }
    },
    methods:{
        filterToys(){
            this.$store.commit({type:'setFilter', filterBy:this.filterBy})
        }
    }
}
</script>

<style>
</style>