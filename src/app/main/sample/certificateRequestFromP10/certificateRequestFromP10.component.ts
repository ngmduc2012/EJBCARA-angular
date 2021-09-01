import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-certificateRequestFromP10',
    templateUrl: './certificateRequestFromP10.component.html',
    styleUrls: ['./certificateRequestFromP10.component.css']
})
export class certificateRequestFromP10 implements OnInit {

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
        this.http.post<any>('http://localhost:8080/certificateRequestFromP10',   {
            "keySpec": "2048",
            "keyalgorithmRsa": "RSA",
            "signatureAlgorithm": "SHA1WithRSA",
            "dn": "CN=client6, OU=CMC, O=CMC company, L=ha noi, ST=cau giay, C=VN",
            "userName": "client6",
            "password": "1",
            "hardTokenSN": null,
            "responseType": "CERTIFICATE"
        }).subscribe( data => {
                this.cert = data.respond;
            }
        )

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Certificate PKCS10',
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
                        name: 'Certificate PKCS10',
                        isLink: false
                    }
                ]
            }
        }
    }

}