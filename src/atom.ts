/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom } from "recoil";

export const dialogStatus = atom({
  key: `dialog`,
  default: {
    open: false,
    title: "",
    description: "",
  },
});
