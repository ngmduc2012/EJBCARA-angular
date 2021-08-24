import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {CoreCommonModule} from '@core/common.module';

import {ContentHeaderModule} from 'app/layout/components/content-header/content-header.module';

import {SampleComponent} from './sample.component';
import {HomeComponent} from './home.component';
import {Version} from "./Version/Version.component";
import {getEndEntity} from "./getEndEntity/getEndEntity.component";
import {availableCA} from "./availableCA/availableCA.component";
import {addUser} from "./addUser/addUser.component";
import {findUsers} from "./findUsers/findUsers.component";
import {deleteUser} from "./deleteUser/deleteUser.component";
import {listCerts} from "./listCerts/listCerts.component";

const routes = [
    {
        path: 'sample',
        component: SampleComponent,
        data: {animation: 'sample'}
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {animation: 'home'}
    }
    ,
    {
        path: 'version',
        component: Version,
        data: {animation: 'version'}
    }
    ,
    {
        path: 'getEndEntity',
        component: getEndEntity,
        data: {animation: 'getEndEntity'}
    }
    ,
    {
        path: 'availableCA',
        component: availableCA,
        data: {animation: 'availableCA'}
    },
    {
        path: 'addUser',
        component: addUser,
        data: {animation: 'addUser'}
    },
    {
        path: 'findUsers',
        component: findUsers,
        data: {animation: 'findUsers'}
    },
    {
        path: 'deleteUser',
        component: deleteUser,
        data: {animation: 'deleteUser'}
    },
    {
        path: 'listCerts',
        component: listCerts,
        data: {animation: 'listCerts'}
    }

];

@NgModule({
    declarations: [SampleComponent, HomeComponent, Version, getEndEntity, availableCA,addUser,findUsers, deleteUser, listCerts],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
    exports: [SampleComponent, HomeComponent, Version, getEndEntity, availableCA,addUser,findUsers, deleteUser, listCerts]
})
export class SampleModule {
}
