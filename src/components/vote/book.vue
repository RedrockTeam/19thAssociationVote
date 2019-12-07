<template>
  <div class="book">
        <span  class="info"><slot></slot></span>
  </div>
</template>

<script>

export default {
    name: 'myheader',
    components: {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.book {
    width: 85.2vw;
    height: 11.02vh;
    background-image: url(../../assets/images/vote/book.png);
    background-size: 100% 100%;
    margin: 0 auto;
    position: relative;
    top: 5.5vh;
    left: 1vw;
    font-family: 'pingfang';
    color: #bf4c49;
    font-size: calc(100vw / 750 * 24);
    .info {
        display: block;
        width: 70vw;
        margin: 0 auto;
        position: relative;
        top: 2vh;
        font-weight: bold;
    }
}
</style>