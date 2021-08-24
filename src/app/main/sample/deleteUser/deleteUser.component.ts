import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-deleteUser',
    templateUrl: './deleteUser.component.html',
    styleUrls: ['./deleteUser.component.css']
})
export class deleteUser implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    deleteUser() {
        this.http.post<any>('http://localhost:8080/deleteUser',  {
            "userName" : "ngmduc4",
            "reason" : 6,
            "decision" : true
        }).subscribe({
            next: data => {
                if (data) {
                    window.alert('Delete User Success!');
                } else {
                    window.alert('Delete User Failure!');
                }

            }
        })
    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Delete User',
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
                        name: 'Delete User',
                        isLink: false
                    }
                ]
            }
        }
    }

}