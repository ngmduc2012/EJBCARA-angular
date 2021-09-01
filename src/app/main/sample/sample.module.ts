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
import {revokeCertificate} from "./revokeCertificate/revokeCertificate.component";
import {checkRevokation} from "./checkRevokation/checkRevokation.component";
import {p12Req} from "./p12Req/p12Req.component";
import {certificateFromP12} from "./certificateFromP12/certificateFromP12.component";
import {softTokenRequest} from "./softTokenRequest/softTokenRequest.component";
import {generateKeys} from "./generateKeys/generateKeys.component";
import {pkcs10CertificationRequest} from "./pkcs10CertificationRequest/pkcs10CertificationRequest.component";
import {certificateRequestFromP10} from "./certificateRequestFromP10/certificateRequestFromP10.component";
import {respondCertificate} from "./respondCertificate/respondCertificate.component";

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
    ,
    {
        path: 'revokeCertificate',
        component: revokeCertificate,
        data: {animation: 'revokeCertificate'}
    }
    ,
    {
        path: 'checkRevokation',
        component: checkRevokation,
        data: {animation: 'checkRevokation'}
    }
    ,
    {
        path: 'p12Req',
        component: p12Req,
        data: {animation: 'p12Req'}
    }
    ,
    {
        path: 'certificateFromP12',
        component: certificateFromP12,
        data: {animation: 'certificateFromP12'}
    }
    ,
    {
        path: 'softTokenRequest',
        component: softTokenRequest,
        data: {animation: 'softTokenRequest'}
    }
    ,
    {
        path: 'generateKeys',
        component: generateKeys,
        data: {animation: 'generateKeys'}
    }
    ,
    {
        path: 'pkcs10CertificationRequest',
        component: pkcs10CertificationRequest,
        data: {animation: 'pkcs10CertificationRequest'}
    }
    ,
    {
        path: 'certificateRequestFromP10',
        component: certificateRequestFromP10,
        data: {animation: 'certificateRequestFromP10'}
    }
    ,
    {
        path: 'respondCertificate',
        component: respondCertificate,
        data: {animation: 'respondCertificate'}
    }
];

@NgModule({
    declarations: [SampleComponent, HomeComponent,
        Version, getEndEntity, availableCA, addUser,
        findUsers, deleteUser, listCerts, revokeCertificate,
        checkRevokation, p12Req, certificateFromP12,
        softTokenRequest,generateKeys,pkcs10CertificationRequest,
        certificateRequestFromP10, respondCertificate
    ],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
    exports: [SampleComponent, HomeComponent,
        Version, getEndEntity, availableCA, addUser,
        findUsers, deleteUser, listCerts, revokeCertificate,
        checkRevokation, p12Req, certificateFromP12,
        softTokenRequest,generateKeys, pkcs10CertificationRequest,
        certificateRequestFromP10, respondCertificate
    ]
})
export class SampleModule {
}
