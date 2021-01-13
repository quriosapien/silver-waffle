<template>
  <section class="classFromChild">
    <h4>Counter Value <span class="count">{{ count }}</span></h4>
  </section>
</template>

<script src="./js/counter.js"></script>

<style scoped>
.count {
  display: inline-block;
  border-radius: 50%;
  padding: 10px 20px;

  background-color: dodgerblue;
  color: white;
}

.classFromChild {
  border-top: 1px solid black;
  padding: 10px;
}
</style>
