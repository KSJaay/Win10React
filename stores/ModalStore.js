import { action, makeObservable, observable } from "mobx";

export default class ModalStore {
  constructor() {
    this.applications = []; // Currently active applications (opened or minimized)

    makeObservable(this, {
      applications: observable,
      updateApps: action,
      deleteItem: action,
    });
  }

  updateApps = (applications) => {
    this.applications = applications;
  };

  deleteItem = (id, inFolder, folder) => {
    if (inFolder) {
      if (
        this.applications.filter((x) => x.name && x.name === folder).length > 0
      ) {
        let folder = this.applications.filter(
          (x) => x.name && x.name === folder
        )[0];

        if (
          folder.content &&
          folder.content.filter((x) => x.name === id).length > 0
        ) {
          let index = folder.content.map((x) => x.name).indexOf(id);
          
        }
      }
    }
  };
}
