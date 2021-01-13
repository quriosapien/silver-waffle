<template>
  <section>
    <h2>Hello {{ username }}</h2>
    <ul class="list">
      <li v-for="message in filteredMessages" class="list-item" :key="message.id">
        <p>{{ message.text }}</p>
      </li>
    </ul>
    <button class="toggle-button" @click="toggleMessage">Toggle Message</button>
  </section>
</template>

<script src="./js/greet.js"></script>

<style scoped>

.list {
  text-align: left;
}

.list-item {
  padding: 5px 20px;
  font-size: 20px;
}

.toggle-button {
  border: none;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 24px;

  font-size: 16px;
  color: white;

  background-color: #2c3e50;
  cursor: pointer;

  transition: background-color, transform 300ms ease-out;
}

.toggle-button:hover {
  transform: scale(1.2);
  background-color: #42b983;
}
</style>
