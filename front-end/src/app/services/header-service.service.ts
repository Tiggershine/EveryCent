import { Injectable } from '@angular/core';
import { MainPageComponent } from '../pages/main-page/main-page.component';


@Injectable({
  providedIn: 'root'
})

export class HeaderServiceService {
 
  constructor() {}

  getHeaderContentList(){
    return  [
      {
        id: 'main',
        iconLW: true,
        iconCW: true,
        iconR1W: true,
        iconR2W: true,
        iconLWSource: '../../assets/icons/everycent.svg',
        iconCWSource: '',
        iconR1WSource: '../../assets/icons/loginBtn.svg',
        iconR2WSource: '../../assets/icons/signupBtn.svg',
        iconLM: true,
        iconCM: true,
        iconR1M: false,
        iconR2M: true,
        iconLMSource: '../../assets/icons/everycent.svg',
        iconCMSource: '',
        iconR1MSource: '',
        iconR2MSource: '../../assets/icons/loginIcon.svg'
      },
      {
        id: 'login',
        iconLW: true,
        iconCW: false,
        iconR1W: false,
        iconR2W: false,
        iconLWSource: '../../assets/icons/everycent.svg',
        iconCWSource: '',
        iconR1WSource: '',
        iconR2WSource: '',
        iconLM: true,
        iconCM: true,
        iconR1M: false,
        iconR2M: false,
        iconLMSource: '../../assets/icons/backIcon.svg',
        iconCMSource: 'LOG IN',
        iconR1MSource: '',
        iconR2MSource: ''
      },
      {
        id: 'signup',
        iconLW: true,
        iconCW: false,
        iconR1W: false,
        iconR2W: false,
        iconLWSource: '../../assets/icons/everycent.svg',
        iconCWSource: '',
        iconR1WSource: '',
        iconR2WSource: '',
        iconLM: true,
        iconCM: true,
        iconR1M: false,
        iconR2M: false,
        iconLMSource: '../../assets/icons/backIcon.svg',
        iconCMSource: 'SIGN UP',
        iconR1MSource: '',
        iconR2MSource: ''
      },
      {
        id: 'post',
        iconLW: true,
        iconCW: false,
        iconR1W: false,
        iconR2W: true,
        iconLWSource: '../../assets/icons/everycent.svg',
        iconCWSource: '',
        iconR1WSource: '',
        iconR2WSource: '../../assets/icons/member.svg',
        iconLM: true,
        iconCM: true,
        iconR1M: false,
        iconR2M: true,
        iconLMSource: '../../assets/icons/backIcon.svg',
        iconCMSource: 'POST',
        iconR1MSource: '',
        iconR2MSource: ''
      },
      {
        id: 'products/:productId',
        iconLW: true,
        iconCW: true,
        iconR1W: true,
        iconR2W: true,
        iconLWSource: '../../assets/icons/everycent.svg',
        iconCWSource: '',
        iconR1WSource: '../../assets/icons/loginBtn.svg',
        iconR2WSource: '../../assets/icons/signupBtn.svg',
        iconLM: true,
        iconCM: false,
        iconR1M: false,
        iconR2M: false,
        iconLMSource: '../../assets/icons/backIcon.svg',
        iconCMSource: '',
        iconR1MSource: '',
        iconR2MSource: '',
      },
    ];
  }
}
