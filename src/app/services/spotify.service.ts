import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }
  getNewReleases() {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQCS1wNIPY--PqDpZk834JfOvrLGxet4b2sTkltUS211zIIX86Yq8oF047bk1MbAlX9KFhdQ7sBMAWQv0IY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
  getArtista( termino: string ){

  }

}
