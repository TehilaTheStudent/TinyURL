
import {Component, Input} from '@angular/core';
import { LinkModel } from '../../../models/link.model';
import { MatIcon } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
// import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'expansion-panel-component',
  templateUrl: 'expansion-panel.component.html',
  styleUrl:'expansion-panel.component.html'
//   imports: [MatExpansionModule],
//   standalone:true
})
export class ExpansionPanelComponent {
  panelOpenState:boolean = false;
  @Input()
  link!:LinkModel
  constructor(
    private clipBoard:Clipboard
  ){}

  onCopyLink(link: string, matIcon: MatIcon) {
    matIcon._elementRef.nativeElement.innerHTML = "check "
    this.clipBoard.copy(link);
    setTimeout(() => {
        matIcon._elementRef.nativeElement.innerHTML = "content_copy "
    }, 1000);
}

}


