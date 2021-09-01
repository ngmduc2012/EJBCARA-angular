import { CoreMenu } from '@core/types'
import {findUsers} from "../main/sample/findUsers/findUsers.component";
import {revokeCertificate} from "../main/sample/revokeCertificate/revokeCertificate.component";
import {checkRevokation} from "../main/sample/checkRevokation/checkRevokation.component";
import {p12Req} from "../main/sample/p12Req/p12Req.component";
import {softTokenRequest} from "../main/sample/softTokenRequest/softTokenRequest.component";

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'sample',
    title: 'Sample',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'sample'
  },
  {
    id: 'version',
    title: 'Version',
    translate: 'MENU.VERSION',
    type: 'item',
    icon: 'file',
    url: 'version'
  }
  ,
  {
    id: 'getEndEntity',
    title: 'getEndEntity',
    translate: 'MENU.ENDENTITY',
    type: 'item',
    icon: 'file',
    url: 'getEndEntity'
  }
  ,
  {
    id: 'availableCA',
    title: 'availableCA',
    translate: 'MENU.AVAILABLECA',
    type: 'item',
    icon: 'file',
    url: 'availableCA'
  } ,
  {
    id: 'addUser',
    title: 'addUser',
    translate: 'MENU.ADDUSER',
    type: 'item',
    icon: 'file',
    url: 'addUser'
  },
  {
    id: 'findUsers',
    title: 'findUsers',
    translate: 'MENU.FINDUSERS',
    type: 'item',
    icon: 'file',
    url: 'findUsers'
  }
  ,
  {
    id: 'deleteUser',
    title: 'deleteUser',
    translate: 'MENU.DELETEUSERS',
    type: 'item',
    icon: 'file',
    url: 'deleteUser'
  }
  ,
  {
    id: 'listCerts',
    title: 'listCerts',
    translate: 'MENU.LISTCERTS',
    type: 'item',
    icon: 'file',
    url: 'listCerts'
  }
  ,
  {
    id: 'revokeCertificate',
    title: 'revokeCertificate',
    translate: 'MENU.REVOKECERT',
    type: 'item',
    icon: 'file',
    url: 'revokeCertificate'
  }
  ,
  {
    id: 'checkRevokation',
    title: 'checkRevokation',
    translate: 'MENU.CHECK',
    type: 'item',
    icon: 'file',
    url: 'checkRevokation'
  }
  ,
  {
    id: 'p12Req',
    title: 'p12Req',
    translate: 'MENU.P12REQ',
    type: 'item',
    icon: 'file',
    url: 'p12Req'
  }
  ,
  {
    id: 'certificateFromP12',
    title: 'certificateFromP12',
    translate: 'MENU.CERTP12',
    type: 'item',
    icon: 'file',
    url: 'certificateFromP12'
  }
  ,
  {
    id: 'softTokenRequest',
    title: 'softTokenRequest',
    translate: 'MENU.TOKENREQ',
    type: 'item',
    icon: 'file',
    url: 'softTokenRequest'
  }
  ,
  {
    id: 'generateKeys',
    title: 'generateKeys',
    translate: 'MENU.GENKEYS',
    type: 'item',
    icon: 'file',
    url: 'generateKeys'
  }
  ,
  {
    id: 'pkcs10CertificationRequest',
    title: 'pkcs10CertificationRequest',
    translate: 'MENU.CERTREQ10',
    type: 'item',
    icon: 'file',
    url: 'pkcs10CertificationRequest'
  }

  ,
  {
    id: 'certificateRequestFromP10',
    title: 'certificateRequestFromP10',
    translate: 'MENU.CERT10',
    type: 'item',
    icon: 'file',
    url: 'certificateRequestFromP10'
  }

  ,
  {
    id: 'respondCertificate',
    title: 'respondCertificate',
    translate: 'MENU.CERT',
    type: 'item',
    icon: 'file',
    url: 'respondCertificate'
  }


]
