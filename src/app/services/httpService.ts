import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Note } from '../classes/note';

@Injectable()
export class HttpService {

    readonly URL = 'http://localhost:3000/notes';

    constructor(private httpClient: HttpClient) { }

    cancelRequests() {
        return this.httpClient.post(this.URL + '/cancel', undefined);
    }

    deleteRequests(): Observable<any> {
        return this.httpClient.delete(this.URL + '/delete', undefined);
    }

    getNote(): Observable<any> {
        return this.httpClient.get(this.URL)
    }

    sendToBackend(note: Note): Observable<any> {
        return this.httpClient.post(this.URL, note)
    }
}  