<template>
    <div class="hello">
        <input type="" name="city" placeholder="请输入城市" v-model="city">
        <br>
        <input type="" name="station" placeholder="请输入站台" v-model="station">
        <br>
        <button v-on:click="submit">确定</button>
    </div>
</template>

<script>
import util from '../utils/utils.js'
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'busquery',
    data () {
        return {
        	city: '',
        	station: ''
        }
    },
    methods: {
        submit: function(){
        	this.$store.commit('setCity',this.city);
        	var _this = this;//保存this变量
            if(this.city.trim() == '' || this.station.trim() == '' ){
                alert('请完善信息');
                return;
            }
            var url = '/api/station/' + this.city + '/' + this.station;
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
        },
        ...mapMutations([
        	'setBusList'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
