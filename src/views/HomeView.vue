<template>
  <div class="home">
      <h1>Posting</h1>
      <div v-if="show">
        <div v-for="post in posts" :key="post">
          <SinglePost :post="post"></SinglePost>
      </div>
      </div>
        
      
      <button @click="show=!show">show</button>
      <button @click="posts.pop()">Pop</button>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
// @ is an alias to /src

import { ref ,computed } from 'vue';

export default {
  components: { SinglePost },
  setup(){
    let posts = ref([
     { "title" : "post title 1","body":"Loram has built a decades-long partnership with the rail industry offering the most innovative portfolio of equipment crewed by our expertly-trained operators and technicians. Our contracted services capabilities assure our customers of superior maintenance, unsurpassed productivity and maximum rail availability." , "id" : 1},
     { "title" : "post title 2","body":"body 2" , "id" : 2},
    ])
    let show = ref(true)
    return {posts,show};
  }
}
</script>
