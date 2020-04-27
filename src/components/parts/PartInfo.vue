<template>
  <div>
   <h1>{{part.title}}</h1>
   <div>
     {{part.description}}
   </div>
  </div>
</template>

<script>
import parts from '../../data/part.js';
export default {
  name :'partInfo',
  computed: {
    part() {
      const { partType,id} = this.$route.params ;
      return parts[partType].find(part => part.id ===+id);

    }
  },

};
</script>

<style lang="scss" scoped>

</style>
