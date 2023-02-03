<template>
  <h1>Create</h1>
  <form @submit="handleCreate">
    <label >Title</label>
    <input type="text" v-model="title">

    <label>Body</label>
    <textarea v-model="body"></textarea>

    <div>
        <label>Tags</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleSubmit">
    <span>{{tags}}</span>
    </div>
    <input type="submit">
  </form>
</template>

<script>
import { ref } from 'vue';
import babelConfig from '../../babel.config';
import { useRouter } from 'vue-router';

export default {
    setup(){
        let title = ref("")
        let body = ref("")
        let tag = ref("")
        let tags = ref([])
        let router = useRouter();

        let handleSubmit = () =>{
           if(!tags.value.includes(tag.value))
           {
                tags.value.push(tag.value)
           }
          tag.value=""
        }
        let handleCreate = async() => {
            await fetch("http://localhost:3000/posts",{
                method:"POST",
                headers:{
                    "Content-type" : "application/json"
                },
                body:JSON.stringify({
                    title:title.value,
                    body:body.value,
                    tags:tags.value
                })
            })
            router.push('/')

        }
        
        return {title,body,tag,handleSubmit,tags,handleCreate}
    }
}
</script>

<style>

</style>