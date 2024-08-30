import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"

class NotesService {
  deleteNote(noteId) {
    const notes = AppState.Notes
    const noteIndex = notes.findIndex(note => note.id = noteId)
    notes.splice(noteIndex, 1)

    this.saveNotes()

  }
  updateNote(updatedBody) {
    const note = AppState.activeNote
    note.body = updatedBody
    note.lastEdited = new Date()
    AppState.emit(`activeNote`)
    AppState.emit(`Notes`)
    this.saveNotes()
  }
  createNote(noteDataFromForm) {
    const notes = AppState.Notes
    const newNote = new Note(noteDataFromForm)
    notes.push(newNote)
    this.saveNotes()
  }
  saveNotes() {
    saveState(`notes`, AppState.Notes)
  }
  loadNotes() {
    const notesFromLocalStorage = loadState(`notes`, [Note])
    AppState.Notes = notesFromLocalStorage
  }
  setActiveNote(cardId) {
    const notes = AppState.Notes
    const foundNote = notes.find(note => note.id == cardId)
    // console.log(`found Note`, foundNote)
    AppState.activeNote = foundNote
  }



}

export const notesService = new NotesService()