import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    // Pop.toast(`NotesController is live`)
    AppState.on(`activeNote`, this.drawActiveNote)
    this.drawNotesList()
  }


  drawActiveNote() {

  }
  drawNotesList() {
    const notes = AppState.Notes
    let notesListHTML = ``
    notes.forEach(note => notesListHTML += note.notesListTemplate)
    // console.log(notesListHTML)
    setHTML(`notesList`, notesListHTML)
  }

  setActiveNote(cardId) {
    notesService.setActiveNote(cardId)
  }

}