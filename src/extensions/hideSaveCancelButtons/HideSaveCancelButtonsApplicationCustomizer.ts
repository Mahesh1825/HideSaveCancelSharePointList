import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HideSaveCancelButtonsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HideSaveCancelButtonsApplicationCustomizer';

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
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    Dialog.alert(`Hello from new update ${strings.Title}:\n\n${message}`).catch(() => {
      /* handle error */
    });


       // Add CSS to hide Save and Cancel
    const style = document.createElement("style");
    style.innerHTML = `
      button[title="Save"],
      button[title="Cancel"],
      button[title="Close"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return Promise.resolve();
  }
}
