import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  pets: any[] = [];
  petsFiltrados: any[] = [];
  filterId: Number = 1;
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

    this.petsFiltrados = this.pets.slice().sort((a, b) => b.id - a.id);
  }

  filtrarPorOrdemAlfabetica() {

    this.petsFiltrados = this.pets.slice().sort((a, b) => a.type.localeCompare(b.type));
  }

  filtrarPorOrdemPreco() {

    this.petsFiltrados = this.pets.slice().sort((a, b) => a.price + b.price);
  }
  }

