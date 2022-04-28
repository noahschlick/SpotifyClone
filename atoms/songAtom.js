import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // Unique ID (with respect to other stoms.selectors)
    default: null, //default value (aka intital value)
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false,
});