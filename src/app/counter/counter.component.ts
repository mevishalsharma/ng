
import { Component } from '@angular/core'


@Component({
    selector:'app-counter',
    templateUrl:'counter.component.html'
})

export class CounterComponent
{
    private count:number=0;
    private propValue:number=0;
    private twoWayProp:number=0;
    counterIncrement(){
        this.count++;
    }
}