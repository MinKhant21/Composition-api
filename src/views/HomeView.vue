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
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import SinglePost from './SinglePost'
// @ is an alias to /src

import { ref  } from 'vue';
import getPosts from '@/composables/getPosts';
export default {
  components: {
    Spinner, SinglePost },
  setup(){
    let {posts,error,load} =getPosts();
    load();
  
    return {posts,error};
  }
}
</script>
