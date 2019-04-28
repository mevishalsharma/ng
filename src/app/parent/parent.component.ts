import { Component } from '@angular/core'

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})

export class ParentComponent {
    inputParentValue: string = "Value from parent";
    private valueFromChild: string = "No Data from Child";

    getChildData(value: any) {
        this.valueFromChild = value;    
    }
}