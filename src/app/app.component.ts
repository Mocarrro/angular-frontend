import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { httpService } from './services/httpService'
import { Notes } from './classes/notes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  DelayInput = new FormControl('')
  TextInput = new FormControl('')
  DelayButton = new FormControl('')

  receivedNote: Notes
  note = new Notes()

  constructor(private _httpService: httpService) {

  }
  ngOnInit() {
    this.DelayButton.setValue("Set delay")
  }


  setDelay() {
    this.note.noteDelay = this.DelayInput.value
    this.DelayButton.setValue("Set delay (current: " + this.DelayInput.value + ")")
  }

  setText() {
    this.note.noteText = this.TextInput.value
    this._httpService.sendToBackend(this.note).subscribe(
      data => {
        this.receivedNote = data
      }
    )
  }
}
