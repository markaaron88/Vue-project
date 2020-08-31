import { firestoreAction } from "vuexfire";
import { dbMenuRef } from "../../firebase";

const state = {
  menuItems: [],
};

const getters = {
  getMenuItems: (state) => state.menuItems,
};

const mutations = {};

const actions = {
  setMenuRef: firestoreAction((context) => {
    return context.bindFirestoreRef("menuItems", dbMenuRef);
  }),
  addMenuItem: async (context, burrito) => {
    try {
      await dbMenuRef.add(burrito);
    } catch (error) {
      alert(`Error creating new burrito, ${error}`);
    }
  },
  removeMenuItem: async (context, id) => {
    try {
      const item = await dbMenuRef.doc(id);
      item.delete();
    } catch (error) {
      alert(`Error removing menu item, ${error}`);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
