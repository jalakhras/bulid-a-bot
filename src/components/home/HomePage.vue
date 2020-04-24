<template>
  <div class="home">
    <div>
      <img  class="robot" src="../../assets/robot-home.png" aria-hidden="true"/>
    </div>
    <div class="Get-stated">
      <a href="">Get strted</a> buliding your first robot

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 400px;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>
