<template>
    <h3>{{post.title}}</h3>
    <h3>{{cutpost}}</h3>
    
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
      
        return {cutpost};
    }
}
</script>

<style>

</style>