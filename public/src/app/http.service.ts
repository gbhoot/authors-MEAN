import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) { }

    getAllAuthors() {
        return this._http.get('/db/v1/authors');
    };

    getOneAuthor(id: string) {
        return this._http.get('/db/v1/authors/'+ id);
    };

    createAuthor(author: any) {
        return this._http.post('/db/v1/authors', 
            {author: author});
    };

    deleteOneAuthor(id: string) {
        return this._http.delete('/db/v1/authors/'+ id);
    };

    editOneAuthor(id: string, author: any) {
        return this._http.put('/db/v1/authors/'+ id, 
            {author: author});
    };
}
