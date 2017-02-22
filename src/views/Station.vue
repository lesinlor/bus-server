<template>
    <div class="hello">
        <li>
            <ul v-for="list in result">{{ list.name }}</ul>
        </li>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      result: [{
        name: '车坊首末站公交站'
      }, {
        name: '淞泽家园七区公交站'
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
