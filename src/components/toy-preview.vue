<template>
        <tr v-for="toy in toys" :key="toy._id">
            <td>{{ toy._id }}</td>
            <td>{{ toy.name }}</td>
            <td>{{ toy.price }}</td>
        </tr>
</template>

<script>
export default {
    data() {
        return {
            toys: this.$store.getters.toys
        }
    }
}
</script>

<style>

</style>