import type FareCalculator from "./FareCalculator";
import NormalFareCalculator from "./NormalFareCalculator";
import OvernigntFareCalculator from "./OvernightFareCalculator";
import OvernigntSundayFareCalculator from "./OvernightSundayFareCalculator";
import type Segment from "./Segment";
import SundayFareCalculator from "./SundayFareCalvulator";

export default class FareCalculatorFactory {
  
  static create (segment: Segment): FareCalculator{
    if (segment.isOvernight() && !segment.isSunday()) return new OvernigntFareCalculator();
    if (segment.isOvernight() && segment.isSunday()) return new OvernigntSundayFareCalculator();
    if (!segment.isOvernight() && segment.isSunday()) return new SundayFareCalculator();
    if (!segment.isOvernight() && !segment.isSunday()) return new NormalFareCalculator();
    throw new Error("Inválid segments");
  }
}