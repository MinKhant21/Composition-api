<template>
  <div v-if="error">
    {{ error }}
  </div>
  <h1>Detail - {{id}}</h1>
  <h3>{{ post.title }}</h3>
  <p>
    {{ post.body }}
  </p>
  
</template>

<script>
import getPost from '@/composables/getPost';
import { ref } from 'vue';

export default {
  props:['id'],
  setup(props){
    let {post,error,load}= getPost(props.id);
    console.log(post.value)
    load();
    return {post,error}
  }
}
</script>

<style>

</style>