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
    <div class="sidebar mb-3">
    <div class="d-flex justify-content-between">
      <h3>CSS Tricks</h3>
      <time>8/30/24</time>
    </div>
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, culpa similique facilis sit hic
        repellendus minima sequi? Esse perspiciatis sint nam maiores reiciendis culpa repudiandae at,
        similique porro tempore id.
      </p>
    </div>

  </div>`
  }
}