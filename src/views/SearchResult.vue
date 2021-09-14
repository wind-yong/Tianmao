<template>
  <div class="Search-result">
      {{txt_data}}
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:'SearchResult',
    data(){
        return{
            txt_data:"",
        }
    },
    created(){
        axios.get('http://localhost:3000/user/node_b')
            .then( _d=>{
            console.log( _d.data );
                this.txt_data = _d.data
            })
    }

}

</script>

<style scoped>

</style>