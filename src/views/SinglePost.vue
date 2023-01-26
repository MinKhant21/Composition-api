<template>
    <h3>{{post.title}}</h3>
    <h3>{{cutpost}}</h3>
    
</template>

<script>
import { computed,onMounted ,onUnmounted ,onUpdated} from 'vue'
export default {
    props:["post"],
    setup(props)
    {
        let cutpost = computed(()=>{
            return props.post.body.substring(0,20)
        })
        onMounted(()=>console.log("Mounted"))
        onUnmounted(()=>console.log("UmMounted"))
        onUpdated(()=>console.log("Updated"))
        return {cutpost};
    }
}
</script>

<style>

</style>