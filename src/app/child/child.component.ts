import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})

export class ChildComponent {
    @Input() inputChildValue: string = "No Value Came from Parent"
    @Output() outputChildValue = new EventEmitter();
    private myChildValue : string = "Default Value of Child Value";
    sendDatattoParent(){
        this.outputChildValue.emit(this.myChildValue);
    }

}