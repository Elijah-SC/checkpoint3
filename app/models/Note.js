import { generateId } from "../utils/GenerateId.js";

export class Note {

  /**
   * @param {{ name: any; body: any; createdOn?: string; lastEdited?: string; color: string; }} data
   */
  constructor(data) {

    this.id = generateId()
    this.lastEdited = data.lastEdited == undefined ? new Date() : new Date(data.lastEdited)
    this.createdOn = new Date()
    this.name = data.name
    this.body = data.body || ``
    this.color = data.color


  }

  get notesListTemplate() {

    return /*HTML*/`
    <div onclick="app.NotesController.setActiveNote('${this.id}')" class="ps-2 mb-3" role="button" style="border-left: 2px solid ${this.color}">
    <div class="d-flex justify-content-between">
      <p class="fw-bold fs-5">${this.name}</p>
      <time>${this.createdDate}</time>
    </div>
    <div>
      <p class="text-preview text-muted">${this.bodyPreview}...</p>
    </div>

  </div>`
  }

  get activeCardTemplate() {
    return `
    <div class="p-3">
            <div class="mb-3" style="border-left: 2px solid blue;">
              <div class="ms-2">
                <h1>CSS Tricks</h1>
              </div>
              <div class="container-fluid h-100">
                <div class="row justify-content-between">
                  <div class="col-5">
                    <p class="ms-2">Created on:</p>
                    <p class="ms-2">Last updated:</p>
                  </div>
                  <div class="col-5 text-center">
                    <button class="mx-1 btn btn-outline-danger"><i class="mdi mdi-trash-can"></i>Delete</button>
                    <button class="mx-1 btn btn-primary"><i class="mdi mdi-content-save-check-outline"></i>Save</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row activeText">
              <textarea class="rounded bg-card text-muted" name="" id=""></textarea>
            </div>
          </div>`
  }

  get createdDate() {
    return this.createdOn.toLocaleDateString()
  }


  get bodyPreview() {
    return this.body.substring(0, 50)
  }
}





