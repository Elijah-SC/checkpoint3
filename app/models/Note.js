import { generateId } from "../utils/GenerateId.js";

export class Note {

  /**
   * @param {{ name: any; body: any; createdOn?: string; lastEdited?: string; color: string; }} data
   */
  constructor(data) {

    this.id = generateId()
    this.lastEdited = data.lastEdited == undefined ? new Date() : new Date(data.lastEdited)
    this.createdOn = data.createdOn == undefined ? new Date() : new Date(data.createdOn)
    this.name = data.name
    this.body = data.body || ``
    this.color = data.color


  }

  get notesListTemplate() {

    return `
    <div onclick="app.NotesController.setActiveNote('${this.id}')" class="ps-2 mb-3" role="button" style="border-left: 4px solid ${this.color}">
    <div class="d-flex justify-content-between">
      <p class="fw-bold fs-5">${this.name}</p>
      <time title="created ${this.createdDate} at ${this.createdTime} ">${this.createdDate}</time>
    </div>
    <div>
      <p class="text-preview text-muted">${this.bodyPreview}...</p>
    </div>

  </div>`
  }

  get activeCardTemplate() {
    return /*HTML*/`
    <div class="p-3">
            <div class="mb-3" style="border-left: 4px solid ${this.color};">
              <div class="ms-2">
                <h1>${this.name}</h1>
              </div>
              <div class="container-fluid">
                <div class="row justify-content-between">
                  <div class="col-5">
                    <p class="ms-2 date-size">Created on: ${this.createdDate} at ${this.createdTime}</p>
                    <p class="ms-2 mt-3 date-size">Last updated: ${this.lastEditedDate} at ${this.lastEditedTime}</p>
                  </div>
                  <div class="col-5 text-center">
                    <button onclick="app.NotesController.deleteNote('${this.id}')" class="mx-1 btn btn-outline-danger"><i class="mdi mdi-trash-can"></i>Delete</button>
                    <button class="mx-1 btn btn-primary mt-md "><i class="mdi mdi-content-save-check-outline"></i>Save</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row activeText">
              <textarea onblur="app.NotesController.updateNote()" class="rounded bg-card text-muted" name="" id="">${this.body}</textarea>
            </div>
          </div>
          `
  }

  static get defaultViewTemplate() {
    return ` <div class="container-fluid activeCard d-flex align-items-center justify-content-around">
            <div class="row justify-content-around">
              <div class="col-12 text-center">
                <img class="w-100 img-fluid text-center" src="assets/img/default.png"
                  alt="Guy working on computer drinking coffee">
                <p class="text-center fw-bold">Create or select a Note to start</p>
              </div>
            </div>
          </div>`
  }

  get createdDate() {
    return this.createdOn.toLocaleDateString()
  }

  get createdTime() {
    return this.createdOn.toLocaleTimeString()
  }

  get lastEditedDate() {
    return this.lastEdited.toLocaleDateString()
  }

  get lastEditedTime() {
    return this.lastEdited.toLocaleTimeString()
  }



  get bodyPreview() {
    return this.body.substring(0, 50)
  }
}





