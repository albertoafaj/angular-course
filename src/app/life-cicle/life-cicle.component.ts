import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, OnChanges, OnDestroy {
  hour = new Date();
  timer: any = null;
  @Input() text = ''
  ngOnInit(): void {
    console.log('O evento OnInt disparou');
    this.timer = setInterval(() => {
      this.hour = new Date(), 1000
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
