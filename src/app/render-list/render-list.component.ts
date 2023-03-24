import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  celulares: Celular[] = [
    { id: 1, name: "Celular XL", description: "Celular Grande", soldOff: true },
    { id: 2, name: "Celular M", description: "Celular Mine", soldOff: false },
  ]
}
