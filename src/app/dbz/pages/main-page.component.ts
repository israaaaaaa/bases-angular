import { Component } from '@angular/core';
import { DbzServiceName } from '../services/dbz.component.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(public dbzService :  DbzServiceName) {
        
    }

}