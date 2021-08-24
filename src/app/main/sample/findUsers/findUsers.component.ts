import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {HttpClient} from "@angular/common/http";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {UserDataVOWS} from "./UserDataVOWS";

@Component({
    selector: 'app-findUsers',
    templateUrl: './findUsers.component.html',
    styleUrls: ['./findUsers.component.css']
})
export class findUsers implements OnInit {


    public contentHeader: object
    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     * @param http
     */
    constructor(private _coreTranslationService: CoreTranslationService, private http: HttpClient) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }
    users : UserDataVOWS[];
    findUsers() {
        this.http.post<any>('http://localhost:8080/findUsers', {
            "search" : "ServerCA",
            "usermatch" : [5]
        }).subscribe({
            next: data => {
                if(data.isEmpty){
                    window.alert('Get no data!');
                }
                else {
                    this.users  = data;
                }

            }
        })

    }
    selectedUser?: UserDataVOWS;
    onSelect(list: UserDataVOWS): void {
        this.selectedUser = list;
    }

    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Find User',
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
                        name: 'Find User',
                        isLink: false
                    }
                ]
            }
        }
    }

}