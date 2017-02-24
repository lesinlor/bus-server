<template>
    <div class="hello">
        <input type="" name="city" placeholder="请输入城市" v-model="city">
        <br>
        <input type="" name="bus" placeholder="请输入公交线路" v-model="bus">
        <br>
        <button v-on:click="submit">确定</button>
    </div>
</template>

<script>
import util from '../utils/utils.js'

export default {
    name: 'busquery',
    data () {
        return {
            city: '',
            bus: ''
        }
    },
    methods: {
        submit: function(){
            this.$store.commit('setCity',this.city);
            var _this = this;//保存this变量
            if(this.city.trim() == '' || this.bus.trim() == '' ){
                alert('请完善信息');
                return;
            }
            var url = '/api/bus/' + this.city + '/' + this.bus;
            util.get({
                url: url,
                success: function(data){
                    data=JSON.parse(data)
                    _this.$store.commit('setBusList',data);
                    _this.$router.push('/bus');
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
