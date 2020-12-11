<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Photos</h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        
        <table v-if="reviewsByUser" class="table">
            <thead>
                <th>Camera</th>
                <th>Exposure</th>
                <th>Saturation</th>
                <th>Contrast</th>
            </thead>
            <tbody>
                <tr v-for="thisPhoto in photosByUser" :key="thisPhoto.PhotoPK">
                    <th><router-link :to="`/cameras/${thisPhoto.PhotoFK}`">{{thisPhoto.Camera}}</router-link></th>
                    <th>{{thisPhoto.Exposure}}</th>
                    <th>{{thisPhoto.Saturation}}</th>
                    <th>{{thisPhoto.Contrast}}</th>
                </tr>
            </tbody>   
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            photosByUser: null,
            accountError: false
        }
    },
    computed:{
    firstName(){
        console.log(this.$store.state)
        return this.$store.state.user.NameFirst}
    },
    created(){
        axios.get("/photos/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the photos/me response:", response)
            this.photosByUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>

<style scoped>

</style>