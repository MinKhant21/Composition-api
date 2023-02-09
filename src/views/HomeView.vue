<template>
  <div class="home">
    <div class="layout">
      <h2>Pages</h2>
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

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap:20px;
}
</style>