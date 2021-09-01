import {Component, OnInit} from '@angular/core';
import {KeyStore} from "../p12Req/KeyStore";
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-softTokenRequest',
    templateUrl: './softTokenRequest.component.html',
    styleUrls: ['./softTokenRequest.component.css']
})
export class softTokenRequest implements OnInit {

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

    softTokenRequest() {
        this.http.post<any>('http://localhost:8080/softTokenRequest',    {
            "userName": "client5",
            "password": "1",
            "clearPwd": true ,
            "subjectDN": "CN=client5, OU=CMC, O=CMC company, L=ha noi, ST=cau giay, C=VN",
            "CaName": "ServerCA",
            "tokenType": "P12",
            "status": 10,
            "email": null,
            "subjectAltName": null,
            "endEntityProfileName": "EndEntityProfile",
            "certificateProfileName": "EndEntityCertificateProfile",
            "startTime": null,
            "hardTokenS" : null,
            "keyspec" : "2048",
            "keyalg" : "RSA"
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
            headerTitle: 'Soft Token Request',
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
                        name: 'Soft Token Request',
                        isLink: false
                    }
                ]
            }
        }
    }

}