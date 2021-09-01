import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

@Component({
    selector: 'app-pkcs10CertificationRequest',
    templateUrl: './pkcs10CertificationRequest.component.html',
    styleUrls: ['./pkcs10CertificationRequest.component.css']
})
export class pkcs10CertificationRequest implements OnInit {


    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    certReq = ""

    pkcs10CertificationRequest() {
        this.http.post<any>('http://localhost:8080/pkcs10CertificationRequest',    {
            "keySpec": "2048",
            "keyalgorithmRsa": "RSA",
            "signatureAlgorithm": "SHA1WithRSA",
            "dn": "CN=client6, OU=CMC, O=CMC company, L=ha noi, ST=cau giay, C=VN"
        }).subscribe( data => {
                this.certReq = data.respond;
            }
        )

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'PKCS10 Certification Request',
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
                        name: 'PKCS10 Certification Request',
                        isLink: false
                    }
                ]
            }
        }
    }
}