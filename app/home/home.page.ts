import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service'
import { Pet } from '../models/pets-interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  pets: Pet[] = [];
  petsFiltrados: Pet[] = [];

  constructor(private httpService: HttpService) {
    this.carregarPets();
  }

  carregarPets() {
    this.httpService.consumirPets().subscribe({
      next : (data) => {
        this.pets = data;
        this.petsFiltrados = [...this.pets];
    },
      error : (error) => {
        console.error('Erro ao obter pets:', error);
      }
    });
  }
//Funções dos botões de Filtro

  filtrarPorOrdemId() {

    this.petsFiltrados = this.pets.sort((a, b) => a.id - b.id);
  }

  filtrarPorOrdemAlfabetica() {

    this.petsFiltrados = this.pets.sort((a, b) => a.type.localeCompare(b.type));
  }

  filtrarPorOrdemPreco() {

    this.petsFiltrados = this.pets.sort((a, b) => a.price - b.price);
  }
  
  }

