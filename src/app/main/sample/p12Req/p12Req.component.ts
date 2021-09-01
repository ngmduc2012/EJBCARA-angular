import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {KeyStore} from "./KeyStore";


@Component({
    selector: 'app-p12Req',
    templateUrl: './p12Req.component.html',
    styleUrls: ['./p12Req.component.css']
})
export class p12Req implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    keyStore : KeyStore

    p12Req() {
        this.http.post<any>('http://localhost:8080/p12Req',   {
            "userName": "client2",
            "password": "1",
            "hardTokenSN": null,
            "keyspec": "2048",
            "keyalg": "RSA"
        }).subscribe({
            next: data => {
                if(data.isEmpty){
                    window.alert('Get no data!');
                }
                else {
                    this.keyStore = data;
                }

            },
            error: error => {
                window.alert('Get error: ' + error);
                console.error('There was an error!', error);
            }
        })

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'P12 Request',
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
                        name: 'P12 Request',
                        isLink: false
                    }
                ]
            }
        }
    }
}