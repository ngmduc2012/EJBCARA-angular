import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-addUser',
    templateUrl: './addUser.component.html',
    styleUrls: ['./addUser.component.css']
})
export class addUser implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }
    addUser() {
        this.http.post<any>('http://localhost:8080/addUser',  {
            "userName": "ngmduc4",
            "password": "1",
            "clearPwd": false,
            "subjectDN": "CN=ngmduc4, OU=CMC, O=CMC company, L=ha noi, ST=cau giay, C=VN",
            "CaName": "ServerCA",
            "tokenType": "USERGENERATED",
            "status": 40,
            "email": null,
            "subjectAltName": null,
            "endEntityProfileName": "EndEntityProfile",
            "certificateProfileName": "EndEntityCertificateProfile",
            "startTime": null
        }).subscribe({
            next: data => {
                if(data){
                    window.alert('Add User Success!');
                }
                else {
                    window.alert('Add User Failure!');
                }
            }
        })

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Add User',
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
                        name: 'Add User',
                        isLink: false
                    }
                ]
            }
        }
    }

}