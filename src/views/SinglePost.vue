<template>
    <a :href="/posts/+post.id" @click="postidcarrier">
        <h3>{{post.title}}</h3>
    </a>
    
        <h3>{{ cutpost }}</h3>

    
</template>

<script>
import { computed , ref} from 'vue'
export default {
    props:["post"],
    setup(props)
    {
        let cutpost = computed(()=>{
            return props.post.body.substring(0,20)
        })
        let postidcarrier = ()=>{
            return props.post.id
        }
        return {cutpost,postidcarrier};
    }
}
</script>

<style>

</style>