import { EventEmitter, Output } from "@angular/core";
import { Component } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output() feature = new EventEmitter<string>();
    SwitchPage(newFeature: string)
    {
        this.feature.emit(newFeature);
    }
}
  