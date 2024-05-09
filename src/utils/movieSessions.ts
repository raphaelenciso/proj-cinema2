function getMovieSession(time: any) {
  switch (time) {
    case '10:30 AM':
      return 1;
    case '1:00 PM':
      return 2;
    case '4:30 PM':
      return 3;
    case '7:00 PM':
      return 4;
  }
}

export default getMovieSession;
