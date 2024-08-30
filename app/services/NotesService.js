import { AppState } from "../AppState.js"

class NotesService {
  setActiveNote(cardId) {
    const notes = AppState.Notes
    const foundNote = notes.find(note => note.id == cardId)
    console.log(`found Note`, foundNote)
    AppState.activeNote = foundNote
  }



}

export const notesService = new NotesService()