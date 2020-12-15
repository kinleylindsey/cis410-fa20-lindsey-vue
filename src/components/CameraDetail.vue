<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{camera.Brand}}</h2>
                <br/>
                <p>Lens: <br/> <strong>{{camera.Lens}}</strong></p>
                <p>MemoryCard: <br/> <strong>{{camera.MemoryCard}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/cameras/${this.$route.params.pk}/photos`">
            <button type="button" class="btn btn-success">Add a Photo</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Add a Photo</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        camera(){
            var cameras = this.$store.state.cameras;
            var thisCamera = cameras.find((aCamera)=> aCamera.CameraPK == this.$route.params.pk)

            console.log("here is the camera that you want", thisCamera);
            return thisCamera
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>