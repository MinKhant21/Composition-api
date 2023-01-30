<template>
  <div class="home">
    <h4>Posting Title</h4>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
      </div>
    </div>
    <div v-else>
      <p>Loading</p>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
// @ is an alias to /src

import { ref  } from 'vue';

export default {
  components: { SinglePost },
  setup(){
    let posts = ref([])
    let error = ref("");
    let load = async()=>{
      try{
        let response =await fetch("http://localhost:3000/posts")
        if(response.status == 404){
          throw new Error("Not Found Url")
        }
        let datas = await response.json();
        posts.value = datas;
      }catch(err){
        return error.value = err.message
      }
    }
    load();
  
    return {posts,error};
  }
}
</script>
