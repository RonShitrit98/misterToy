<template>
    <section>
        <div>
            <p>filter by type:</p>
            <select @change="filterToys" v-model="filterBy.type">
                <option :value="''">Type</option>
                <option value="Adult">Adult</option>
                <option value="Funny">Funny</option>
                <option value="Educational">Educational</option>
            </select>
            <p>search name:</p>
            <input type="text" @keyup="filterToys" v-model="filterBy.searchBy" placeholder="search">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                type: '',
                searchBy: '',
            }
        }
    },
    methods:{
        filterToys(){
            this.$store.dispatch({type:'setFilter', filterBy:this.filterBy})
        }
    }
}
</script>

<style>
</style>