export default class Segment {

  OVERNIGHT_START = 22;
  OVERNIGHT_END = 6;
  SUNDAY = 0;

  constructor (readonly distance: number, readonly date: Date ) {
        if (!this.isValidDistance(distance)) throw new Error("Invalid Distance");
        if (!this.isValidDate()) throw new Error("Invalid Date");
  }

  isValidDistance(distance: number){
    return distance > 0
  }
  isValidDate() {
    return this.date != null && this.date != undefined && this.date instanceof Date && this.date.toString() !== "Invalid Date";
  }

  isOvernight () {
	  return this.date.getHours() >= this.OVERNIGHT_START|| this.date.getHours() <= this.OVERNIGHT_END
  }

  isSunday () {
    return this.date.getDay() === this.SUNDAY;
  }
}

