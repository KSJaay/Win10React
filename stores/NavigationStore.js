import { action, makeObservable, observable } from "mobx";

export default class NavigationStore {
  constructor() {
    // Booleans to check which sections of the navbar are currently open
    this.calendar = false;
    this.language = false;
    this.sound = false;
    this.wifi = false;
    this.windowsUpadte = false; // Icon for there's a windows update (Randomly appears)
    this.startup = false; // Up arrow with applications that are currently open
    this.weather = false;
    this.menu = false;

    makeObservable(this, {
      calendar: observable,
      calendar: observable,
      language: observable,
      sound: observable,
      wifi: observable,
      windowsUpadte: observable,
      startup: observable,
      weather: observable,
      menu: observable,
      openMenu: action,
    });
  }

  openMenu = (name) => {
    if (this[name]) {
      this.calendar = false;
      this.language = false;
      this.sound = false;
      this.wifi = false;
      this.windowsUpadte = false;
      this.startup = false;
      this.weather = false;
      this.menu = false;
      this[name] = true;
    }
  };
}
