<template>
    <div>
        <h1>Cameras</h1>
        <hr/>

                <table class="table">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Lens</th>
                    <th>Memory Card</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisCamera in cameras" :key="thisCamera.CameraPK">
                    <th>{{thisCamera.Brand}}</th>
                    <td>{{thisCamera.Lens}}</td>
                    <td>{{thisCamera.MemoryCard}}</td>
                    <td>
                        <router-link :to="`/cameras/${thisCamera.CameraPK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    computed:{
        cameras(){return this.$store.state.cameras}
    }
}
</script>

<style scoped>

</style>