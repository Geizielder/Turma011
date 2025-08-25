import type FareCalculator from "./FareCalculator";
import type Segment from "./Segment";

export default class OvernigntSundayFareCalculator implements FareCalculator {
  FARE = 5;
  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}