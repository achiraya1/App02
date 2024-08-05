import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton,IonGrid,IonRow,IonCol,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonGrid,IonRow,IonCol,IonButton ]
})
export class ProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

