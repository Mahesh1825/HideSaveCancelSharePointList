
import {
 BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHideSaveCancelButtonsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideSaveCancelButtonsApplicationCustomizer
  extends BaseApplicationCustomizer<IHideSaveCancelButtonsApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    console.log("HideSaveCancelButtons extension initialized");
    


       // Add CSS to hide Save and Cancel
    const style = document.createElement("style");
    style.innerHTML = `
      button[title="Save"],
      button[title="Cancel"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return Promise.resolve();
  }
}
