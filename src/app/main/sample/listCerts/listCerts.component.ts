import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {UserDataVOWS} from "../findUsers/UserDataVOWS";
import {Certificate} from "./Certificate";

@Component({
    selector: 'app-listCerts',
    templateUrl: './listCerts.component.html',
    styleUrls: ['./listCerts.component.css']
})
export class listCerts implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    certificates : Certificate[];
    findUsers() {
        this.http.post<any>('http://localhost:8080/findCerts', {
            "userName" : "ngmduc4",
            "onlyValid" : false
        }).subscribe({
            next: data => {
                if(data.isEmpty){
                    window.alert('Get no data!');
                }
                else {
                    this.certificates  = data;
                }

            }
        })

    }
    selectedCert?: Certificate;
    onSelect(list: Certificate): void {
        this.selectedCert = list;
    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Find Certificate',
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
                        name: 'Find Certificate',
                        isLink: false
                    }
                ]
            }
        }
    }

}