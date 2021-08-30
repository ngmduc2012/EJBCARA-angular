import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {RevokeStatus} from "./RevokeStatus";

@Component({
    selector: 'app-checkRevokation',
    templateUrl: './checkRevokation.component.html',
    styleUrls: ['./checkRevokation.component.css']
})
export class checkRevokation implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    revokeStatus : RevokeStatus

    checkRevokation() {
        this.http.post<any>('http://localhost:8080/checkRevokation',  {
            "userName" : "ngmduc4",
            "onlyValid" : false,
            "idCert" : 3
        }).subscribe({
            next: data => {
                this.revokeStatus = data;
            }
        })

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Check Revokation',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Check Revokation',
                        isLink: false
                    }
                ]
            }
        }
    }
}