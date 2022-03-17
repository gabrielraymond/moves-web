import axios from "axios";
import { atom, selector } from "recoil";

//------ Header --------
let token = `Bearer ${localStorage.token}`;
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
};
console.log(token);
const user = selector({
  key: "auth-user",
  get: async () => {
    let user = null;

    try {
      let { data } = await axios.get(
        "https://melandas.ilios.id/api/v1/users/me",
        config
      );
      user = { user: data };
      console.log(user);
    } catch (error: any) {
      user = { user: error.message };
    }

    return user;
  },
});

export { user };
