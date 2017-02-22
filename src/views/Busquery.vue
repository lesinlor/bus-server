<template>
    <div class="hello">
        <input type="" name="city" placeholder="请输入城市" v-model="city">
        <input type="" name="bus" placeholder="请输入公交线路" v-model="bus">
        <br>
        <button v-on:click="submit">确定</button>
    </div>
</template>

<script>
import util from '../utils/utils.js'
export default {
    name: 'home',
    data () {
        return {
            city: '',
            bus: ''
        }
    },
    methods: {
        submit: function(){
            console.log(123)
            var url = util.api + 'busline?key=8229e8e1c79890c2606c502e72c48fd4&city=苏州&%20bus=156'
            util.get({
                url: url,
                success: function(data){
                    console.log(data)
                },
                error: function(){

                }
            })
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
