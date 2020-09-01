<template>
  <div class="background">
    <div class="background-overlay">
      <img src="../assets/images/mexico.png" alt="roller" />
      <h3>Feeling hungry?</h3>
      <button class="order_btn" @click="goToMenu">Let's order!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "burrito";
  src: url(../assets/fonts/burrito.TTF);
}

h2,
h3 {
  font-family: "burrito", sans-serif;
  margin: 2%;
  font-size: 2rem;
}

.background {
  background: url("../assets/images/dough.jpg") center;
  background-size: cover;
  height: 30vh;
  display: flex;
  text-align: center;
  align-items: center;
}

.background-overlay {
  display: flex;
  flex-direction: column;
  background: #f1e6da;
  opacity: 0.8;
  width: 50%;
  margin: 0 auto;
  align-items: center;
}

.background-overlay > img {
  max-width: 15%;
}

.order_btn {
  background: #006341;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
