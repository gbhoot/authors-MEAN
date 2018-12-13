import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
    authorName: string;
    quotes: any;
    aid: string;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getAllQuotesForAuthor(params['aid']);
        });
    };

    getAllQuotesForAuthor(aid: string): void {
        this.aid = aid;
        let observable = this._httpService.getOneAuthor(aid);
        observable.subscribe(data => {
            this.quotes = data['author']['quotes'];
            this.authorName = (data['author']['fName'] +' '+
                data['author']['lName']);
        });
    };

    updateVotesForQuote(qid: string, inc: number) {
        let observable = this._httpService.updateQuote(this.aid, qid, inc);
        observable.subscribe(data => {
            this.getAllQuotesForAuthor(this.aid);
        });
    };

    removeQuote(qid: string) {
        let observable = this._httpService.deleteQuote(this.aid, qid);
        observable.subscribe(data => {
            this.getAllQuotesForAuthor(this.aid);
        });
    };
}
