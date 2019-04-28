import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})

export class HomeComponent {
    private value: string = '';

    message(): string {
        return 'This is home component'
    }
}