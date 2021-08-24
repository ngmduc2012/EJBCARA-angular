import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {EndEntityList} from "../getEndEntity/endEntityList";
import {AvailableCA} from "./AvailableCA";


@Component({
    selector: 'app-availableCA',
    templateUrl: './availableCA.component.html',
    styleUrls: ['./availableCA.component.css']
})
export class availableCA implements OnInit {

    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    availableCA : AvailableCA;
    getEndEntityList(){
        this.http.get<any>('http://localhost:8080/availableCA').subscribe(data => {
            console.log(data);
            this.availableCA = data;
            // window.alert('Version  ' + this.endEntities);
        });
    }
    selectedAvailableCA?: AvailableCA;
    onSelect(list: AvailableCA): void {
        this.selectedAvailableCA = list;
    }

    ngOnInit() {
        this.getEndEntityList();
        this.contentHeader = {
            headerTitle: 'AvailableCA',
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
                        name: 'AvailableCA',
                        isLink: false
                    }
                ]
            }
        }
    }

}