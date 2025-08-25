import type FareCalculator from "./FareCalculator";
import type Segment from "./Segment";

export default class OvernigntFareCalculator implements FareCalculator {
  FARE = 3.9;
  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}