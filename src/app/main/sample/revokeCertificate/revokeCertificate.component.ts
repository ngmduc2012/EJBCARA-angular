import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-revokeCertificate',
    templateUrl: './revokeCertificate.component.html',
    styleUrls: ['./revokeCertificate.component.css']
})
export class revokeCertificate implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    revokeCertificate() {
        this.http.post<any>('http://localhost:8080/revokeCertificate',  {
            "userName" : "ngmduc4",
            "onlyValid" : false,
            "idCert" : 68,
            "reason" : 0
        }).subscribe({
            next: data => {
                if (data) {
                    window.alert('Revoke Certificate Success!');
                } else {
                    window.alert('Revoke Certificate Failure!');
                }

            }
        })
    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Revoke Certificate',
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
                        name: 'Revoke Certificate',
                        isLink: false
                    }
                ]
            }
        }
    }
}