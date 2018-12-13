import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    authors: any = [];

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getAuthorData();    
    }

    getAuthorData() {
        let observable = this._httpService.getAllAuthors();
        observable.subscribe(data => {
            this.authors = data['authors'];
        });
    };

    deleteBtnPressed(id: string) {
        let observable = this._httpService.deleteOneAuthor(id);
        observable.subscribe(data => {
            this.getAuthorData();
        });
    };
}
