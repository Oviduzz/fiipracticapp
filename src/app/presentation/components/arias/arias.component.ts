import {Component, OnInit} from '@angular/core';
import {AriasService} from '../../services/arias.service';

@Component({
  selector: 'app-arias',
  templateUrl: './arias.component.html',
  styleUrls: ['./arias.component.scss']
})
export class AriasComponent implements OnInit {
  arias: any;

  constructor(private ariasService: AriasService) {
  }

  ngOnInit() {
    this.getArias();
  }

  getArias(): void {
    this.arias = this.ariasService.getArias();
  }

  getAriaClicked(ariaCategory) {
   this.ariasService.setAriaCategory(ariaCategory);
  }

}
