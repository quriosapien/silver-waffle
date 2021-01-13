<template>
  <main class="vuex">
    <h1>Vuex Example</h1>
    <p>Genre: {{  selectedGenre }}</p>
    <p>Amount: {{ selectedAmount }}</p>
    <button class="button-modify" @click="increaseAmount">Add one joke</button>
    <button class="button-modify" @click="decreaseAmount">Remove one joke</button>
    <button class="button-modify" @click="changeGenre">Change Genre Randomly</button>

    <section>
      <article class="joke" v-for="joke in jokes" :key="joke.id">
        <span v-if="joke.type === 'twopart'">
          <p>
            {{ joke.setup }}
          </p>
          <p>
            {{ joke.delivery }}
          </p>
        </span>
        <span v-else>
          {{ joke.joke }}
        </span>
      </article>
    </section>
  </main>
</template>

<script src="./js/vuex.js"></script>

<style scoped>
.button-modify {
  margin: 5px 20px;
  padding: 8px 40px;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;

  cursor: pointer;
}

.button-modify:hover {
  transform: scale(1.1);
  background-color: #42b983;
}

.joke {
  border: 1px solid #2c3e50;
  border-radius: 8px;
  margin: 15px;
  padding: 10px;

  box-shadow: 0px 0px 8px 2px #2c3e50;
}
</style>
