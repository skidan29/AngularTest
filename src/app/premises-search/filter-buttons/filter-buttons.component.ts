import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterConfig} from "../premises.interfaces";

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {
  @Output() changeForm = new EventEmitter<FilterConfig>();

  public profileForm = new FormGroup({
    flat: new FormControl(false),
    office: new FormControl(false),
    garage: new FormControl(false),
  });

  onChangeForm() {
    this.changeForm.emit(this.profileForm.value)
  }

}
