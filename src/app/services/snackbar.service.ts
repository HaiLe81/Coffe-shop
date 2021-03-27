import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  success(message: string) {
    this.snackbar.open(message, 'Dismiss', {
      panelClass: 'snackbar-success'
    });
  }

  error(message: string) {
    this.snackbar.open(message, 'Dismiss', {
      panelClass: 'snackbar-error'
    });
  }

  open(data: any, component: ComponentType<any>) {
    this.snackbar.openFromComponent(component, {
      data,
      panelClass: 'snackbar-error'
    });
  }
}
