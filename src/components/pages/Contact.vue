<script>
import { store } from '../../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content,
            }

            axios.post(`${store.baseUrl}/contacts`, data).then((response) =>{
                if(response.data.success){
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.content = '';
                }
            });
            
        }
  },

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Contacts</h1>
            </div>
            <div class="col-12">
                <form method="post" @submit.prevent="sendForm()">
                    <div class="row gy-4">
                        <div class="col-6">
                            <label class="control-label">Name</label>
                            <input type="text" class="form-control" name="name" id="name" v-model="name">
                        </div>
                        <div class="col-6">
                            <label class="control-label">Surname</label>
                            <input type="text" class="form-control" name="surname" id="surname" v-model="surname">
                        </div>
                        <div class="col-6">
                            <label class="control-label">eMail</label>
                            <input type="text" class="form-control" name="email" id="email" v-model="email">
                        </div>
                        <div class="col-6">
                            <label class="control-label">Phone Number</label>
                            <input type="number" class="form-control" name="phone" id="phone" v-model="phone">
                        </div>
                        <div class="col-12">
                            <label class="control-label">Text</label>
                            <textarea class="form-control" name="content" id="content" rows="4" cols="50" v-model="content"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-sm btn-success" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>