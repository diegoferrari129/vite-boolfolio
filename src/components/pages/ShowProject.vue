<script>
import { store } from '../../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            project: null,
            success:false
        }
    },

    created() {
            this.getProject();
    },

    methods: {
        getProject(){
            this.success = false
            axios.get(`${store.baseUrl}/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.results
                    this.success = true
                }
                else{

                }
            });
        },
    },
}
</script>

<template>
    <div v-if="!success">
        Loading...
    </div>
    <div v-else class="container">
        <div class="row">
            <div class="col-4">
                <div class="my-5">
                    <img :src="project.image ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/600x400?text=Hello+World'" />
                </div>
            </div>
            <div class="col-4">
                <div class="my-5">
                    <h3>{{ project.title }}</h3>
                    <p :class="project.status == 'completed' ? 'text-success' : 'text-warning'">{{ project.status }}</p>
                    <p><strong>{{ project.type ? project.type.name : '' }}</strong></p>

                    <ul class="list-unstyled d-flex" v-if="project.technologies">
                        <li v-for="technology in project.technologies" :key="technology.id">
                            <span class="pe-1"><strong>
                                {{ technology.name }},
                            </strong></span>
                        </li>
                    </ul>
                    <p>{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>