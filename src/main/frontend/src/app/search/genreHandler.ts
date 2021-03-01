
export class GenreHandler {

  private static handler: GenreHandler;
  private static genreList: Genre[];

  private constructor() { }

  public static getInstance(genreList: Genres): GenreHandler {

    if (!GenreHandler.handler) {
      this.handler = new GenreHandler;
    }
    if (genreList && !GenreHandler.genreList ) {
      GenreHandler.genreList = genreList.genres;
    }
    return this.handler;
  }

  public getGenresForSearch(ids: number[]): string {

    let genresString = '';

    ids.forEach(id => {

      if (genresString.length === 0) {
        genresString = genresString
          + GenreHandler.genreList.find(genre => genre.id === id).name;
      } else {
        genresString = genresString + ', '
          + GenreHandler.genreList.find(genre => genre.id === id).name;
      }
    });

    return genresString;
  }

  public getGenresForDetails(ids: GenreIds[]): string {

    let genresString = '';

    ids.forEach(data => {

      if (genresString.length === 0) {
        genresString = genresString + data.name;
      } else {
        genresString = genresString + ', ' + data.name;
      }
    });

    return genresString;
  }

}
