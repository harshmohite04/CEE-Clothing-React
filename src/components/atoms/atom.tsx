import { atom } from "recoil";

export const upperLayerAtom =atom({
    key:"upperLayerAtom",
    default:true
})

export const searchQueryAtom =atom({
    key:"searchQueryAtom",
    default:""
})
