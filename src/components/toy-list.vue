<template>
    <!-- <pre>toys:{{ toys }}</pre> -->
    <table v-if="toys && toys.length">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        <tr v-for="toy in toys" :key="toy._id">
            <td>{{ toy._id }}</td>
            <td>{{ toy.name }}</td>
            <td>{{ toy.type }}</td>
            <td>{{ toy.price }}</td>
            <td>
                <router-link :to="'/toy/' + toy._id">Details</router-link>
                <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
                <router-link to="/toy/add/">Add</router-link>
                <label @click="removeToy(toy._id)">X</label>
            </td>
        </tr>
    </table>
    <div v-else>No toys</div>
</template>

<script>
export default {
    data() {
        return {
            // toys: null
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        }
    },
    methods:{
        removeToy(toyId){
            this.$store.dispatch({type:'removeToy', toyId})
        }
    }
}
</script>

<style>
</style>