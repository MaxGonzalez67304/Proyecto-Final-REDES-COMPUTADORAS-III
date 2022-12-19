import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url : string = "https://www.googleapis.com/youtube/v3" 
  private apiKey : string = "AIzaSyDNe_3kvulYMrigQf2GIDWBsM7ttp8An6Y"
  private canal : string = "UCu6gWCRYZOdqlW5Tx_6jwuQ" // CANAL DE YOUTUBE SIGNS

  constructor(private http: HttpClient) {

  }

  obtenerVideos() {
    const parametros = new HttpParams()
    .set('part', 'snippet')
    .set('channelId', this.canal)
    .set('maxResults', 10)
    .set('key', this.apiKey);
    let vinculo = `${this.url}/search/`;
    return this.http.get(vinculo, {params: parametros}).pipe(map(resp => resp));
  }
}
