import { NextResponse } from "next/server";
import { fetchWeatherApi } from "openmeteo";

/**
 * API route to fetch weather data from OpenMeteo API.
 */
const url = "https://api.open-meteo.com/v1/forecast";
const params = {
  latitude: 48.5126,
  longitude: -122.6127,
  hourly: "temperature_2m",
  timezone: "America/Los_Angeles",
  wind_speed_unit: "mph",
  temperature_unit: "fahrenheit",
  precipitation_unit: "inch",
};

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export async function GET() {
  try {
    const responses = await fetchWeatherApi(url, params);
    const res = responses[0];

    const utcOffsetSeconds = res.utcOffsetSeconds();
    const hourly = res.hourly()!;

    const weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
      },
    };
    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
