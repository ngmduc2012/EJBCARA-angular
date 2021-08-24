import { CoreMenu } from '@core/types'
import {findUsers} from "../main/sample/findUsers/findUsers.component";

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




]
