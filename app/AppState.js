import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Note[]} */
  Notes = [
    new Note
      ({
        name: `CSS Tips and Tricks`,
        body: `You can create classes by starting with a period and opening them with curly brackets
      these classes can be used in html by putting them in classes on tags`,
        createdOn: `8/29/24`,
        lastEdited: `8/30/24`,
        color: `#1996c6`,
      }),
    new Note({
      name: `Html Tips and Tricks`,
      body: `
      You can create classes by starting with a period and opening them with curly brackets
      these classes can be used in html by putting them in classes on tags`,
      createdOn: `8/29/24`,
      lastEdited: `8/30/24`,
      color: `#E1561B`,
    }),
    new Note({
      name: `Javascript Tips and Tricks`,
      body: `You can create classes by starting with a period and opening them with curly brackets
      these classes can be used in html by putting them in classes on tags`,
      color: `#ff0000`,
    }),

  ]

  /**@type {Note} */

  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())