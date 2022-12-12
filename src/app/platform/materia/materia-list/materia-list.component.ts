import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: []
})
export class MateriaListComponent {

  constructor(private router:Router) { }

  faPlus = faPlus;
}