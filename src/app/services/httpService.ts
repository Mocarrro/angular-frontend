import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Notes } from '../classes/notes';

@Injectable()
export class httpService {
    readonly URL = 'http://localhost:3000/notes';

    constructor(private httpClient: HttpClient) { }

    getNote(): Observable<any> {
        return this.httpClient.get(this.URL)
    }

    sendToBackend(note: Notes): Observable<any> {
        return this.httpClient.post(this.URL, note)
    }
}  