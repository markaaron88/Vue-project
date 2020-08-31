<template>
  <form>
    <h3>Add new Burrito:</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="newBurrito.name" />
    </div>
    <div class="form-group">
      <label for="name">Description</label>
      <textarea
        type="text"
        id="description"
        v-model="newBurrito.description"
        rows="5"
      ></textarea>
    </div>
    <p>
      <strong>Option 1:</strong>
    </p>
    <div class="form-group">
      <label for="size1">Size</label>
      <input type="text" id="size1" v-model="newBurrito.options[0].size" />
    </div>
    <div class="form-group">
      <label for="price1">Price</label>
      <input type="text" id="price1" v-model="newBurrito.options[0].price" />
    </div>
    <p>
      <strong>Option 2:</strong>
    </p>
    <div class="form-group">
      <label for="size2">Size</label>
      <input type="text" id="size2" v-model="newBurrito.options[1].size" />
    </div>
    <div class="form-group">
      <label for="price2">Price</label>
      <input type="text" id="price2" v-model="newBurrito.options[1].price" />
    </div>
    <button type="button" class="btn_green" @click="add">Add</button>
  </form>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "addNewBurrito",
  data() {
    return {
      newBurrito: {
        name: "Eg. Carne asada burrito",
        description:
          "Eg .A Mexican tradition, carne asada is marinated and quick-cooked steak that's thinly sliced and served in tortillas. Flank steak bathed in a lime and cilantro marinade is the basis for these simply seasoned carne asada burritos",
        options: [
          {
            size: "Large",
            price: 7.95,
          },
          {
            size: "Small",
            price: 12.95,
          },
        ],
      },
    };
  },
  methods: {
    add() {
      store.dispatch("addMenuItem", this.newBurrito);
    },
  },
};
</script>

<style>
.form-group {
  margin: 10px 0;
}
label {
  display: block;
  margin: 0 0 10px 0;
}

input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgg(254, 254, 252);
  border: solid 1px #f79e38;
}

button {
  background: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>
