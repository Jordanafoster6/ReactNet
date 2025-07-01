
export type WeatherSummary =
  | "Freezing"
  | "Bracing"
  | "Chilly"
  | "Cool"
  | "Mild"
  | "Warm"
  | "Balmy"
  | "Hot"
  | "Sweltering"
  | "Scorching";

export interface WeatherForecast {
  date: string; // ISO date string (e.g., "2025-07-02")
  temperatureC: number;
  temperatureF: number;
  summary: WeatherSummary;
}
