<script>
export default {
    props: {
        menu: Array
    }
}
</script>

<template>
    <div>
        <header class="bg-dark text-light">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="my-4 fw-bold fst-italic">
                            <ul class="mt-2 mx-3 d-flex list-unstyled">
                                <li class="me-4" v-for="(item, index) in menu" :key="index">
                                    <router-link class="text-reset text-decoration-none" :to="{ name: item.name }">{{item.label}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="">
    
</style>