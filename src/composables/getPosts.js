// import { reject, resolve } from "core-js/fn/promise";
import { db } from "../firebase/config";
import { ref } from "vue";

let getPosts = ()=>{
    let posts = ref([])
    let error = ref("");
    let load = async()=>{
      try{
        // await new Promise((resolve,reject)=>{
        //   // resolve();
        //   setTimeout(resolve,2000)
        // })
      //   })
      //   let response =await fetch("http://localhost:3000/posts")
      //   if(response.status == 404){
      //     throw new Error("Not Found Url")
      //   }
      //   let datas = await response.json();
      //   posts.value = datas;
      
        let response = await db.collection("posts").get();
        console.log("h")
      }catch(err){
         error.value = err.message
      }
    
    }
    return {posts,error,load}
}

export default getPosts