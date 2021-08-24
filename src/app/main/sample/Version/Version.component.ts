import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-Version',
    templateUrl: './Version.component.html',
    styleUrls: ['./Version.component.css']
})
export class Version implements OnInit {

    public contentHeader: object

    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    versionAPI = "Can't get Version";
    getVersion() {
        this.http.get<any>('http://localhost:8080/version').subscribe(data => {
            console.log(data);
            this.versionAPI = data.version;
            // window.alert('Version  ' + this.versionAPI);
        });

    }


    /**
     * On init
     */
    ngOnInit() {
        this.getVersion();
        this.contentHeader = {
            headerTitle: 'Version',
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
                        name: 'Version',
                        isLink: false
                    }
                ]
            }
        }
    }

}