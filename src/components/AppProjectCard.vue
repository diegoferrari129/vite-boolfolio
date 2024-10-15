<script>
import axios from 'axios';

export default {
    name: 'AppProjectCard',

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
                this.projects = response.data.results;
            });
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center py-5">
                    <h1>
                        Projects
                    </h1>
                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-4" v-for="(project) in projects" :key="project.id">
                <div class="card h-100">
                    <img class="card-img-top" :src="project.image" alt="">
                    <div class="card-body">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <p>{{ project.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>