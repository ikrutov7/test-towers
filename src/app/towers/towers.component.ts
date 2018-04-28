import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Towers } from './towers.module';
import {  TowersService } from './towers.sevice';
@Component({
  selector: 'ik-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
@Injectable()
export class TowersComponent implements OnInit {
  towers: Towers[] = [];
  value = [
    {
      name: 'Уровень карналита 1',
    },
    {
      name: 'Уровень карналита 2',
    },
    {
      name: 'Уровень карналита 3',
    },
    {
      name: 'Уровень карналита 4',
    }
  ];
  constructor( public towersService: TowersService ) {

  }

  ngOnInit() {
    this.towersService
    .getTowers()
    .subscribe((towers: Towers[]) => {
      this.towers = towers;
    });
  }




  setClasses(tower) {

    if (tower.percent > tower.maxValue || tower.percent < tower.minValue) {
      return 'error';
    }
  }

  getHeight(tower) {

    if (tower.percent > tower.maxValue || tower.percent < tower.minValue) {
      return false;

    } else {
      return {
        'height': tower.percent + '%'};
    }


  }

}

