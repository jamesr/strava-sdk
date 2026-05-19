import { SummarySegment } from "./activity";
import { SummaryAthlete } from "./athlete";

export enum RouteType {
  Ride = 1,
  Run = 2,
}

export enum RouteSubType {
  Road = 1,
  MTB = 2,
  CX = 3,
  Trail = 4,
  Mixed = 5,
}

export interface PolylineMap {
  readonly id?: string;
  readonly polyline?: string;
  readonly summary_polyline?: string;
}

export interface SummarySegmentEffort {
  readonly id?: number;
  readonly elapsed_time?: number;
  readonly start_date?: Date;
  readonly start_date_local?: Date;
  readonly distance?: number;
  readonly is_kom?: boolean;
}

export interface Route {
  readonly athlete?: SummaryAthlete;
  readonly description?: string;
  readonly distance?: number;
  readonly elevation_gain?: number;
  readonly id?: number;
  readonly id_str?: string;
  readonly map?: PolylineMap;
  readonly name?: string;
  readonly private?: boolean;
  readonly starred?: boolean;
  readonly timestamp?: boolean;
  readonly type?: RouteType;
  readonly sub_type?: RouteSubType;
  readonly created_at?: Date;
  readonly updated_at?: Date;
  readonly estimated_moving_time?: number;
  readonly segments?: SummarySegment[];
}
