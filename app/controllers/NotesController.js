import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    // Pop.toast(`NotesController is live`)
    this.drawNotesList()
  }


  drawNotesList() {

    const notes = AppState.Notes
    let notesListHTML = ``
    notes.forEach(note => notesListHTML += note.notesListTemplate)
    // console.log(notesListHTML)
    setHTML(`notesList`, notesListHTML)
  }

}