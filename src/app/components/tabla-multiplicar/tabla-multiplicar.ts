import { ChangeDetectorRef, OnInit, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseArgs } from 'util';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})

export class TablaMultiplicar implements OnInit {
  numero!: number

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    
  }

  ngOnInit() {
    this._activeRoute.params.subscribe((parms: Params) => {
      if (parms['num'] != null) {
        this.numero = parseInt(parms['num'])
        this._cdr.detectChanges()
      }
    })
  }

  redirect(num: number) {
    this._router.navigate(['/tabla', num])
  }
}
