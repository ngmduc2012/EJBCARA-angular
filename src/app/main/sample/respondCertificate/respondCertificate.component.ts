import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-respondCertificate',
    templateUrl: './respondCertificate.component.html',
    styleUrls: ['./respondCertificate.component.css']
})
export class respondCertificate implements OnInit {
    public contentHeader: object
    form: FormGroup

    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     * @param fb
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient, public fb: FormBuilder) {
        this._coreTranslationService.translate(en, fr, de, pt),
            this.form = this.fb.group({
                userName: [''],
                requestType: [''],
                hardTokenSN: [''],
                responseType: [''],
                fileRequest: [null]
            })
    }

    cert = ""

    uploadFile(event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({
            fileRequest: file
        });
        this.form.get('fileRequest').updateValueAndValidity()
    }


    respondCertificate() {
        const formData: any = new FormData();
        formData.append("fileRequest", this.form.get('fileRequest').value);
        formData.append("userName", this.form.get('userName').value);
        formData.append("requestType", this.form.get('requestType').value);
        formData.append("hardTokenSN", this.form.get('hardTokenSN').value);
        formData.append("responseType", this.form.get('responseType').value);
        this.http.post<any>('http://localhost:8080/respondCertificate', formData).subscribe(data => {
                this.cert = data.respond;
            }
        )

    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Certificate Respond',
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
                        name: 'Certificate Respond',
                        isLink: false
                    }
                ]
            }
        }
    }

}