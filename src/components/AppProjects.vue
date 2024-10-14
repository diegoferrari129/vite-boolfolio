<script>
import axios from 'axios';

export default {
    name: 'AppProjects',

    data() {
        return {
            projects: [],
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects').then((response) =>{
                console.log(response.data.results);
            });
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">
                    Projects
                </h1>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>