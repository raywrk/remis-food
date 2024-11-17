import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { InteractionService } from '../services/interaction.service';
import { FirestoreService } from '../firebase/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  private interactionService:  InteractionService = inject(InteractionService);
  private firestoreService: FirestoreService = inject(FirestoreService);

  constructor() {
    this.test();
    this.testeLeitura();
  }

  async test(){
    console.log('test()')
    await this.firestoreService.createDocument('teste', {hola: 'adios'})
  }

  testeLeitura(){
    this.firestoreService.getDocumentsChanges('teste').subscribe( res => {
      console.log(res)
    })
  }

  async save(){
    const res = await this.interactionService.presentAlert("Important", "quer salvar?", "Cancelar", "OK")
    if(res){
      if(res){
        await this.interactionService.showLoading("carregando");
        setInterval(() => {
          this.interactionService.dismissLoading();
          this.interactionService.showToast("carregado com sucesso")
        }, 200);
      }
    }else{
      console.log('no')
    }
  }
}
