<script>
import AppProjectCard from '../AppProjectCard.vue';
import { store } from '../../store';
import axios from 'axios';

export default {

  components:{
    AppProjectCard,

  },

  data() {
    return {
        store,
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
      axios.get(`${store.baseUrl}/projects`).then((response) =>{
          this.projects = response.data.results.data;
          this.last_page = response.data.results.last_page;
          this.current_page = response.data.results.current_page;
      });
    },

    goToPage(page){
      axios.get(`${store.baseUrl}/projects`, {params: {page: page}}).then((response) =>{
          this.projects = response.data.results.data;
          this.current_page = response.data.results.current_page;
      });
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
      <AppProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
    <div class="row">
      <div class="col-12">
        <nav aria-label="Page navigation example"  class="d-flex justify-content-center py-3">
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

</style>
