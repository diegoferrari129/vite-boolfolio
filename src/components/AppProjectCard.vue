<script>

export default {
    name: 'AppProjectCard',
    props:{
        project: Object
    }, 

    methods: {
        truncateText(text){
            return text != null ? text.substr(0, 100) + '...' : '';
        },
    },
}
</script>

<template>
    <div class="col-4">
        <router-link class="text-reset text-decoration-none" :to="{ name: 'show_project', params: { slug: project.slug } }">
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
        </router-link>
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