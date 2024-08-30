import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    // Pop.toast(`NotesController is live`)
    AppState.on(`activeNote`, this.drawActiveNote)
    AppState.on(`Notes`, this.drawNotesList)
    AppState.on(`Notes`, this.drawTotalNotes)

    notesService.loadNotes()
  }

  drawTotalNotes() {
    let notes = AppState.Notes
    let notesCount = 0
    notes.forEach(note => notesCount++)
    // console.log(`drawing total Notes`);
    setHTML(`totalNotes`, `${notesCount} notes`)
  }


  drawActiveNote() {
    const note = AppState.activeNote
    setHTML(`activeCard`, note.activeCardTemplate)

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

  createNote() {
    event.preventDefault()
    console.log(`creating Note`);
    const form = event.target
    const noteDataFromForm = getFormData(form)
    // console.log(`note data from form`, noteDataFromForm)
    notesService.createNote(noteDataFromForm)
  }

  updateNote() {
    console.log(`text area blurred`);
    const textAreaElm = event.target
    // @ts-ignore there is a value on textAreaElm 
    const updatedBody = textAreaElm.value
    // console.log(`text from text area`, updatedBody);
    notesService.updateNote(updatedBody)

  }

  deleteNote(noteId) {
    console.log(`deleting Note`);
    notesService.deleteNote(noteId)

  }

}