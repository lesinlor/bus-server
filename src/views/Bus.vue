<template>
    <div class="hello">
        <li>
            <ul v-for="(item,index) in busList.result" v-on:click="toStation(index)">
                <h3>{{ item.key_name }}</h3>
                <span>起点:{{ item.front_name }}</span>
                <br>
                <span>终点:{{ item.terminal_name }}</span>
            </ul>
        </li>
    </div>
</template>

<script>
import util from '../utils/utils.js'
// import { mapGetters } from 'vuex'

export default {
    name: 'bus',
    // data () {
    //     return {
    //         busList: this.$store.state.busList
    //     }
    // },
    computed: {
        busList() {
            return this.$store.state.busList
        }
    },
    methods: {
        toStation(index){
            if(this.$store.state.busList.result[index].stationdes){
                this.$store.commit('setBusInfo',this.busList.result[index]);
                this.$router.push('/station');
            }else{
                var _this = this;
                var url = '/api/bus/' + this.$store.state.city + '/' + this.$store.state.busList.result[index].key_name;
                util.get({
                    url: url,
                    success(data){
                        data=JSON.parse(data)
                        _this.$store.commit('setBusList',data);
                        _this.$router.push('/bus');
                    },
                    error(){

                    }
                })
            }
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
    color: #42b983;
}
a {
  color: #42b983;
}

</style>
