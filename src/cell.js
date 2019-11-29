/**
 * The cell class
 */
class Cell {
  constructor (initialStatus) {
    this.status = initialStatus !== undefined ? initialStatus : false;
  }

  get live () {
    return !!this.status;
  }

  get dead () {
    return !this.status;
  }

  toggle () {
    this.status = !this.status;
  }

  die () {
    this.status = false;
  }

  rise () {
    this.status = true;
  }
}

export default Cell;
