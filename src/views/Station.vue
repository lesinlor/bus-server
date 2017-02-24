<template>
    <div class="hello">
        <h3>{{ busInfo.key_name }}</h3>
        <h4>起点:{{ busInfo.front_name }}</h4>
        <h4>终点:{{ busInfo.terminal_name }}</h4>
        
        <li>
            <ul v-for="item in busInfo.stationdes">{{ item.name }}</ul>
        </li>
    </div>
</template>

<script>
export default {
  name: 'station',
  data () {
    return {
      busInfo: this.$store.state.busInfo
    }
  },
  created(){
    console.log(this.$store.state.busInfo)
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
