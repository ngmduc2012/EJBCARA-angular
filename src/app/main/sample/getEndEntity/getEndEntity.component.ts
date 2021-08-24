import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";

import { HttpClient } from '@angular/common/http';
import {EndEntityList} from "./endEntityList";
import {CAs} from "./CAs";
import {CPs} from "./CPs";
@Component({
    selector: 'app-getEndEntity',
    templateUrl: './getEndEntity.component.html',
    styleUrls: ['./getEndEntity.component.css']
})
export class getEndEntity implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    endEntities : EndEntityList;
    cAList : CAs[];
    cPList : CPs[];
    getEndEntityList(){
        this.http.get<any>('http://localhost:8080/endentity').subscribe(data => {
            console.log(data);
            this.endEntities = data;
            // window.alert('Version  ' + this.endEntities);
        });
    }
    selectedEndEntity?: EndEntityList;
    onSelect(list: EndEntityList): void {
        this.selectedEndEntity = list;
        this.cAList = list.cAsList;
        this.cPList = list.cPsList;
    }

    ngOnInit() {
        this.getEndEntityList();
        this.contentHeader = {
            headerTitle: 'EndEntity',
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
                        name: 'EndEntity',
                        isLink: false
                    }
                ]
            }
        }
    }

}