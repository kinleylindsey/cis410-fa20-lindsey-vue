<template>
         <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create a Photo</h4> 
                     <form id="review-form" @submit.prevent="submitPhoto">
                        <div class="form-group">
                             <label for="ratinginput">Exposure</label> 
                             <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control" v-model="rating">
                        </div> 
                        <div class="form-group">
                             <label for="ratinginput">Saturation</label> 
                             <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control" v-model="rating">
                        </div>
                        <div class="form-group">
                             <label for="ratinginput">Contrast</label> 
                             <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control" v-model="rating">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit Photo</button> 
                        
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            exposure: null,
            saturation:null,
            contrast: null,
            errorMessage: null,
        }
    },
    methods:{
        submitPhoto(){
            const myPhoto={
                exposure: this.exposure,
                saturation: this.saturation,
                contrast: this.contrast,
                movieFK: this.$route.params.pk
            };
            // console.log("here is the photo", myPhoto)
            const token = this.$store.state.token;
            axios.post("/photos", myPhoto, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create a photo, please try again later."})
        },
        cancelPhoto(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>