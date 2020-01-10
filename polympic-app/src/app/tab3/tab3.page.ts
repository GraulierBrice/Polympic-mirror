import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private editButtonColor: string = "warning";
  private isEditing: boolean = false;

  constructor() {}

  getEditButtonColor() {
    return this.editButtonColor;
  }

  toggleEdit(){
    if (this.isEditing){
      this.isEditing = false;
      this.editButtonColor = "warning";
    } else {
      this.isEditing = true;
      this.editButtonColor = "danger";
    }
  }

  ionview

}
