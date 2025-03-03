import { atom } from "recoil";

export const upperLayerAtom = atom({
  key: "upperLayerAtom",
  default: true,
});

export const searchQueryAtom = atom({
  key: "searchQueryAtom",
  default: "",
});

export const itemListAtom = atom({
  key: "itemListAtom",
  default: [],
});

export const hamburgerAtom = atom({
  key: "hamburgerAtom",
  default: true,
});
export const countCounterAtom = atom({
  key: "countCounterAtom",
  default: 1,
});
