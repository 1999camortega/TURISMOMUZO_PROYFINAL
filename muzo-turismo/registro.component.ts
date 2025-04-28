import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrar() {
    if (this.registroForm.invalid) {
      this.mensaje = 'Por favor llena todos los campos correctamente.';
      return;
    }

    this.usuarioService.registrarUsuario(this.registroForm.value).subscribe(
      respuesta => {
        this.mensaje = 'Usuario registrado exitosamente.';
        this.registroForm.reset();
      },
      error => {
        this.mensaje = 'Error al registrar usuario.';
        console.error(error);
      }
    );
  }
}
