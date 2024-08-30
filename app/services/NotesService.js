import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"

class NotesService {
  createNote(noteDataFromForm) {
    const notes = AppState.Notes
    const newNote = new Note(noteDataFromForm)
    notes.push(newNote)
  }
  setActiveNote(cardId) {
    const notes = AppState.Notes
    const foundNote = notes.find(note => note.id == cardId)
    console.log(`found Note`, foundNote)
    AppState.activeNote = foundNote
  }



}

export const notesService = new NotesService()