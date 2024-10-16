<script>
import axios from 'axios';

export default {
    name: 'AppProjectCard',

    data() {
        return {
            projects: [],
            last_page: null,
            current_page: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects').then((response) =>{
                this.projects = response.data.results.data;
                this.last_page = response.data.results.last_page;
                this.current_page = response.data.results.current_page;
            });
        },

        goToPage(page){
            axios.get('http://127.0.0.1:8000/api/projects?page='+page).then((response) =>{
                this.projects = response.data.results.data;
                this.current_page = response.data.results.current_page;
            });
        },

        truncateText(text){
            return text != null ? text.substr(0, 100) + '...' : '';
        },

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
            <div class="col-4" v-for="project in projects" :key="project.id">
                <div class="card h-100">
                    <div class="card_img">
                        <img class="card-img-top img-fluid" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/600x400?text=Hello+World'">
                    </div>
                    <div class="card-body">
                        <h3>{{ project.title }}</h3>
                        <p><strong>{{ project.type ? project.type.name : '' }}</strong></p>
                        <ul class="list-unstyled d-flex" v-if="project.technologies">
                            <li v-for="technology in project.technologies" :key="technology.id">
                                <span class="pe-1"><strong>
                                    {{ technology.name }},
                                </strong></span>
                            </li>
                        </ul>
                        <p>{{ truncateText(project.description) }}</p>
                        <div class="card-footer d-flex justify-content-end">

                            <p :class="project.status == 'completed' ? 'text-success' : 'text-warning'">{{ project.status }}</p>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <nav aria-label="Page navigation example"  class="d-flex justify-content-center">
                    <ul class="pagination">
                        
                      <li class="page-item"><a class="page-link" :class="current_page == 1 ? 'disabled' : ''" href="#" @click="goToPage(current_page - 1)">Previous</a></li>

                      <li class="page-item" v-for="index in last_page"><a class="page-link" href="#" @click="goToPage(index)">{{ index }}</a></li>
  
                      <li class="page-item"><a class="page-link" :class="current_page == last_page ? 'disabled' : ''" href="#" @click="goToPage(current_page + 1)">Next</a></li>

                    </ul>
                  </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card_img{
        display: flex;
        height: 400px;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .card-footer {
        margin-top: auto;
    }
    
</style>