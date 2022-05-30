import { action, makeObservable, observable } from "mobx";

export default class NavigationStore {
  constructor() {
    // Booleans to check which sections of the navbar are currently open
    this.options = {
      calendar: false,
      language: false,
      sound: false,
      wifi: false,
      windowsUpadte: false, // Icon for there's a windows update (Randomly appears)
      startup: false, // Up arrow with applications that are currently open
      weather: false,
      menu: false,
    };

    makeObservable(this, {
      options: observable,
      toggleMenu: action,
    });
  }

  toggleMenu = (name) => {
    const options = Object.keys(this.options);
    options.forEach((option) => {
      if (option === name) {
        this.options[option] = !this.options[option];
      } else {
        this.options[option] = false;
      }
    });
  };

  // This is a function that will be called when the user clicks
  handleClick = (e) => {
    if (
      e.path.filter((x) => {
        if (
          x.className &&
          x.className.length > 0 &&
          x.className.includes("react-calendar")
        ) {
          return x;
        }
      }).length > 0 ||
      e.target.id.includes("react-calendar")
    ) {
      this.toggleMenu("calendar");
    }
  };
}
