export interface IMovie {
  id: number;
  backdrop_path: string;
  title: string;
  poster_path: string;
  runtime: number;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  dates: {
    monthName: string;
    monthDay: string;
    dayName: string;
  }[];
}
