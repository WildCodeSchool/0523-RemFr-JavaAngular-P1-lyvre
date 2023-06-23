import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/services/store/user.reducer';
import { ILevel } from 'src/app/utils/interface';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})

export class LevelComponent implements OnInit{
  constructor(private store:Store, private service: LevelService){}

  points = 0;
  level = 0;
  name="";
  image = "";
  user = this.store.select(selectUser);
  levels: ILevel[]= []
  fullLevel: ILevel = {
    name: "",
    level: []
  }

  ngOnInit(): void {
    this.user.subscribe((user) => {
      this.points = user.points;
      this.level = Math.floor(this.points/100)
      this.image = user.image;
      this.name= user.name;
    });
    this.service.getLevels().subscribe((levels) => {
      this.levels = levels;
      this.levels.map((level) => level.level.includes(this.level) && (this.fullLevel = level))
    })
  }
}
