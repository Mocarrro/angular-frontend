import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { HttpService } from './services/httpService'
import { Note } from './classes/note'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  delayButton = new FormControl('');

  delayInput = new FormControl('');

  textInput = new FormControl('');

  receivedNotes: Note[];

  note: Note;

  constructor(private httpService: HttpService) {
    this.note = new Note();
  }

  public ngOnInit(): void {
    this.delayButton.setValue("Set delay");
  }

  public setDelay(): void {
    this.note.noteDelay = this.delayInput.value;
    this.delayButton.setValue("Set delay (current: " + this.delayInput.value + ")");
  }

  public setText(): void {
    this.note.noteText = this.textInput.value;
    this.note.timestamp = Date.now();

    this.httpService.sendToBackend(this.note).toPromise().then((response) => {
      if (!!response) {
        console.log('Hey, I got response!', response);
        this.receivedNotes = response;
      }
    });
  }

  public cancelPendingRequests(): void {
    console.log('Kanceluje pendigujące rikłesty');
    this.httpService.cancelRequests().toPromise().then((response) => {
      console.log('All requests were canceled!', response);
    });
  }
}
