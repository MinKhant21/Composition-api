<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>I am {{name}}.My age is {{age}}</p>
    <button @click="handleclick">Click</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  setup()
  {
    let name = "kaung min khant";
    let age = 20;
    let handleclick = ()=>{
      console.log('u clicked me')
    }
    return {name,age,handleclick}
  }
}
</script>
