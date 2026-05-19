/**
 * Strava athlete data types
 */

/**
 * Summary athlete data
 */

export interface SummaryAthlete {
  readonly id?: number;
  readonly resource_state?: number;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly profile_medium?: string;
  readonly profile?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country?: string;
  readonly sex?: string;
  readonly friend?: string;
  readonly follower?: string;
  readonly premium?: boolean;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}

/**
 * Authenticated athlete from OAuth response
 */
export interface AuthenticatedAthlete extends SummaryAthlete {
  readonly username?: string;
  readonly bio?: string;
  readonly summit?: boolean;
  readonly badge_type_id?: number;
  readonly weight?: number;
  readonly measurement_preference?: "feet" | "meters";
}

/**
 * Detailed athlete data
 */
export interface DetailedAthlete extends AuthenticatedAthlete {
  readonly follower_count?: number;
  readonly friend_count?: number;
  readonly mutual_friend_count?: number;
  readonly athlete_type?: number;
  readonly date_preference?: string;
  readonly clubs?: readonly any[];
  readonly bikes?: readonly any[];
  readonly shoes?: readonly any[];
}
