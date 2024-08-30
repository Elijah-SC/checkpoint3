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
    <div class="ps-2 mb-3" role="button" style="border-left: 2px solid ${this.color}">
    <div class="d-flex justify-content-between">
      <p class="fw-bold fs-5">${this.name}</p>
      <time>${this.createdDate}</time>
    </div>
    <div>
      <p class="fs-7">${this.body}</p>
    </div>

  </div>`
  }

  get createdDate() {
    return this.createdOn.toLocaleDateString()
  }
}


