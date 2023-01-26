<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>Search name - {{search}}</p>
    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref ,computed } from 'vue';

export default {
  setup()
  {
    let names = ref(["aungaung","mgmg","KyawKyaw","susu"])
    let search = ref("");
    let filteredNames = computed(()=>{
      return names.value.filter((name)=>{
        return name.includes(search.value)
      })
    })
    return {names,search,filteredNames};
  }
}
</script>
