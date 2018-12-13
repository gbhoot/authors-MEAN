import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new-quote',
    templateUrl: './new-quote.component.html',
    styleUrls: ['./new-quote.component.css']
})

export class NewQuoteComponent implements OnInit {
    aid: string;
    authorName: string;
    quoteD: any;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.setupQuote();
        this._route.params.subscribe((params: Params) => {
            this.getAuthorData(params['aid']);
        });
    };

    setupQuote() {
        this.quoteD = {
            quote: ""
        };
    };

    getAuthorData(aid: string) {
        this.aid = aid;
        let observable = this._httpService.getOneAuthor(aid);
        observable.subscribe(data => {
            this.authorName = (data['author']['fName'] +' '+
                data['author']['lName']);
        });
    };

    createNewQuote(event: any) {
        let observable = this._httpService.createQuote(this.aid, this.quoteD);
        observable.subscribe(data => {
            this._router.navigate(['/authors/'+ this.aid +'/quotes'])
        })
    }
}
