<template>
    <div class="hello">
        <li>
            <ul v-for="list in result">{{ list.key_name }}</ul>
        </li>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            result: [{
                key_name: '156'
            }, {
                key_name: '225'
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

</style>
