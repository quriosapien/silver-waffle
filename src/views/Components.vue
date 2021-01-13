<template>
  <main class="components">
    <h1>Components Example</h1>
    <GreetUser :username="user" @toggle-message="toggleMessageListener"></GreetUser>
  </main>
</template>

<script src="./js/components.js"></script>

<style scoped>

</style>
