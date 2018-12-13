import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
    authorD: any = {};
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.resetAuthor();
    }

    resetAuthor() {
        this.authorD = {
            fName: "",
            lName: ""
        };
    }

    submitBtnPressed(event: any) {
        console.log(this.authorD);
        let observable = this._httpService.createAuthor(this.authorD);
        observable.subscribe(data => {
            this._router.navigate(['/']);
        })
    }
}
