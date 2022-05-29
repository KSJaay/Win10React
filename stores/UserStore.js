import { action, makeObservable, observable, set } from "mobx";

export default class UserStore {
  constructor() {
    this.bsod = false; // If bsod is currently activee
    this.page = "lockscreen"; // Progress of what page the user is currently on (lock screen or normal)
    this.lockscreen = null; // URL for the current lockscreen
    this.desktop = []; // Applications listed on desktop
    this.recycle = []; // Applications in the recycle bin
    this.wallpaper = "desert"; // Current wallpaper user has active

    makeObservable(this, {
      bsod: observable,
      page: observable,
      desktop: observable,
      recycle: observable,
      wallpaper: observable,
      updateBsod: action,
    });
  }

  fetchTime = (type) => {
    // Get time for user depending on the type given
  };

  updateBsod = (setting) => {
    this.bsod = setting;
  };
}
