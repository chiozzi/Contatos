import { Component, OnInit } from '@angular/core';
import { Contatos } from '../contatos';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent implements OnInit {
   
  contatos: Contatos [] = [];
  formGroupContatos: FormGroup; 
  isEditing: boolean = false;

  constructor(
    private service: ContatosService,
    private formBuilder: FormBuilder,
  ) {
    this.formGroupContatos = formBuilder.group({
      id: [''],
      name: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.loadContatos(); // carrega a lista de professores
  }

  loadContatos() {
    this.service.getAll().subscribe({
      next: json => this.contatos = json
    });
  }

  onClickSave() {
    this.service.save(this.formGroupContatos.value).subscribe({
          next: json => {
            this.contatos.push(json);
            this.formGroupContatos.reset();
          }
    });
  }

  onClickDelete(contatos: Contatos) {
   this.service.delete(contatos).subscribe({
        next: () => this.loadContatos()
    });
  }
  onClickUpdate(contatos: Contatos) {
      this.formGroupContatos.setValue(contatos);
      this.isEditing=true;
    }

    onClickConfirmUpdate() {
      this.service.update(this.formGroupContatos.value)
        .subscribe({
            next: () => {
                this.loadContatos(); 
                this.clear();
            }
        });
    }

    onClickClear() {
      this.clear();
    }
      
    clear(){
      this.formGroupContatos.reset();
      this.isEditing=false;   
    }

}

// agr onde ta vermelho vc escreve de no
// isso é erro do serviço e do html, a gnte nao fez ainda, quando fisumir, de