import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";


@Component({
    selector: 'app-certificateFromP12',
    templateUrl: './certificateFromP12.component.html',
    styleUrls: ['./certificateFromP12.component.css']
})
export class certificateFromP12 implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    cert = ""

    certificateFromP12() {
        this.http.post<any>('http://localhost:8080/certificateFromP12',   {
            "userName": "client2",
            "password": "1",
            "hardTokenSN": null,
            "keyspec": "2048",
            "keyalg": "RSA"
        }).subscribe( data => {
                    this.cert = data.respond;
            }
        )

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Certificate From P12',
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
                        name: 'Certificate From P12',
                        isLink: false
                    }
                ]
            }
        }
    }
}