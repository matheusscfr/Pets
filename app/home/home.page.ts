import { Component, OnInit } from '@angular/core';
import { HttpService, Pet } from './../services/http.service'


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

  filtrarPorOrdemId() {

    this.petsFiltrados = this.pets.sort((a, b) => b.id + a.id);
  }

  filtrarPorOrdemAlfabetica() {

    this.petsFiltrados = this.pets.sort((a, b) => a.type.localeCompare(b.type));
  }

  filtrarPorOrdemPreco() {

    this.petsFiltrados = this.pets.sort((a, b) => a.price - b.price);
  }
  
  }

