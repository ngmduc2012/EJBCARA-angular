import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {Keys} from "./Keys";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
@Component({
    selector: 'app-generateKeys',
    templateUrl: './generateKeys.component.html',
    styleUrls: ['./generateKeys.component.css']
})
export class generateKeys implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    keys : Keys

    generateKeys() {
        this.http.post<any>('http://localhost:8080/generateKeys',   {
            "keySpec" : "2048",
            "keyalgorithmRsa" : "RSA"
        }).subscribe({
            next: data => {
                if(data.isEmpty){
                    window.alert('Get no data!');
                }
                else {
                    this.keys = data;
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
            headerTitle: 'Generate Keys',
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
                        name: 'Generate Keys',
                        isLink: false
                    }
                ]
            }
        }
    }

}