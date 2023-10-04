export interface IOpenWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherProvider {
  children: React.ReactNode;
}

export type TWeatherData = IOpenWeatherResponse | null;

export interface IWeatherContext {
  weatherData: TWeatherData;
  isGeolocationFound: boolean;
  setIsGeolocationFound?: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData?: React.Dispatch<React.SetStateAction<TWeatherData>>;
}
