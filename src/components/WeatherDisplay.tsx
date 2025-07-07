// add weather "hour that says, time to hire this guy"

"use client";
import React, { useEffect, useState } from "react";

interface WeatherData {
  hourly: {
    time: string[]; // API returns strings, not Date objects
    temperature2m: number[];
  };
}

// Format the time to only show hours and minutes
const formatTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString([], options);
};

// Find the closest hour (round to nearest hour)
const findClosestHourIndex = (times: Date[], currentTime: Date) => {
  // Get the current hour
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // If we're past half the hour, round up to the next hour
  const targetHour = currentMinute >= 30 ? currentHour + 1 : currentHour;

  // Find the index of the time matching our target hour
  return times.findIndex((time) => {
    const timeHour = time.getHours();
    return timeHour === targetHour;
  });
};

const DEFAULT_LOCATION = { latitude: 48.5126, longitude: -122.6127 };

const WeatherDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // If user denies or error, use default location
          fetchWeather(DEFAULT_LOCATION.latitude, DEFAULT_LOCATION.longitude);
        }
      );
    } else {
      fetchWeather(DEFAULT_LOCATION.latitude, DEFAULT_LOCATION.longitude);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Convert string times to Date objects
  const dateTimes = weatherData.hourly.time.map((timeStr) => new Date(timeStr));

  // Get current time
  const now = new Date();

  // Find closest hour index based on the rounding logic
  const closestIndex = findClosestHourIndex(dateTimes, now);

  // If we couldn't find a matching hour or don't have enough data
  if (closestIndex === -1 || closestIndex + 2 >= dateTimes.length) {
    return <div>Cannot display weather: insufficient data available</div>;
  }

  // Get the three hours we want to display
  const displayData = [
    {
      time: dateTimes[closestIndex],
      temperature: weatherData.hourly.temperature2m[closestIndex].toFixed(0),
    },
    {
      time: dateTimes[closestIndex + 1],
      temperature:
        weatherData.hourly.temperature2m[closestIndex + 1].toFixed(0),
    },
    {
      time: dateTimes[closestIndex + 2],
      temperature:
        weatherData.hourly.temperature2m[closestIndex + 2].toFixed(0),
    },
  ];

  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
      <h2 className="text-xl font-bold mb-3">Weather Forecast</h2>
      <div className="flex gap-4">
        {displayData.map((data, index) => (
          <div
            key={index}
            className="flex-1 p-3 rounded-md bg-white dark:bg-slate-700 shadow-sm"
          >
            <div className="text-lg font-medium">{formatTime(data.time)}</div>
            <div className="text-2xl font-bold">{data.temperature}°F</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
