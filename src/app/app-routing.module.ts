import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from "./contatos/contatos.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: "contatos" , component: ContatosComponent  },
  { path: "sobre" , component: SobreComponent  },
  { path: ""        , component: HomeComponent    }
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// favor nao ler isso prof obg!!!!!!!!!!!!!!!!!!

// mas n tem diciplina
// sim, dai vc muda os nomes pra oq tem no novo
// ent é home, contatos e sobre? kkkkkk ta
// me sinto o plankitom, minha namorada é um pc
// CARAI O QUE LEGAL 
// vou chorar faz pfvrrrrrrrrrrrrr    
// agr faz igual po
// escreve de novvo
// ue
// deixa é historia
// TA, QUE LEGAL
// sou a letícia chiozzi e te amo
// sou o bruno sai e te amo
// ebaa
