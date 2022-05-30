import { createContext } from "react";
import ModalStore from "./ModalStore";
import NavigationStore from "./NavigationStore";
import UserStore from "./UserStore";

export const rootStore = {
  baseStore: new Map(),
  modalStore: new ModalStore(),
  navigationStore: new NavigationStore(),
  userStore: new UserStore(),
};

export const RootStoreContext = createContext(rootStore);
