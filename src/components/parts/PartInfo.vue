<template>
  <div>
   <h1>{{part.titel}}</h1>
   <div>
     {{part.descrption}}
   </div>
  </div>
</template>

<script>
export default {
  name :'partInfo',
  data(){
    return{
      part :{
        titel :'Jassar Mahmoud',
        descrption: ' descrption'
      }
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
