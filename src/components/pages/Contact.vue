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
                    <div class="row gy-2">
                        <div class="col-12">
                            <label class="control-label">Name</label>
                            <input type="text" class="form-controll" name="name" id="name" v-model="name">
                        </div>
                        <div class="col-12">
                            <label class="control-label">Surname</label>
                            <input type="text" class="form-controll" name="surname" id="surname" v-model="surname">
                        </div>
                        <div class="col-12">
                            <label class="control-label">eMail</label>
                            <input type="text" class="form-controll" name="email" id="email" v-model="email">
                        </div>
                        <div class="col-12">
                            <label class="control-label">Phone Number</label>
                            <input type="number" name="phone" id="phone" v-model="phone">
                        </div>
                        <div class="col-12">
                            <label class="control-label">Text</label>
                            <textarea class="form-controll" name="content" id="content" v-model="content"></textarea>
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