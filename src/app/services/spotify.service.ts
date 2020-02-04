import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDqW_Vk4GPT9vZKjIf2dXcw1Bvmi14b2Y8AZ2RnWzxOywhyEgRxk9ZhGC5Yn8iaz1mf8SrEqOk81QJO8pY'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    /*const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDf0zZ7kGcHbh_nFDCoK9yd6VAcnysKY1bNxZwfkAnC-x5tobQezyU20JyW0ZFsrkSJDQd7zrLGjaY7STM'
    });
*/  
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map (data =>  data['albums'].items));
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
                    .pipe( map (data =>  data['albums'].items));*/
  }
  getArtista( termino: string ){
    /*const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDf0zZ7kGcHbh_nFDCoK9yd6VAcnysKY1bNxZwfkAnC-x5tobQezyU20JyW0ZFsrkSJDQd7zrLGjaY7STM'
    });*/
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                      .pipe( map(data => data['artists'].items ));

    /*return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
                      .pipe( map(data => data['artists'].items ));*/
  }

}
