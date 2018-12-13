import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
    authorD: any = {};

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getCurrentAuthor(params['id']);
        });
    };

    getCurrentAuthor(id: string) {
        let observable = this._httpService.getOneAuthor(id);
        observable.subscribe(data => {
            this.authorD = data['author'];
        });
    };
}
