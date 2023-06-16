import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { IBook } from 'src/app/utils/interface';
import { selectReadingsFinished, selectReadingsInProgress } from 'src/app/services/store/user.reducer';
import { map } from 'rxjs/operators';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartbar',
  templateUrl: './chartBar.component.html',
  styleUrls: ['./chartBar.component.scss']
})

export class ChartBarComponent implements OnInit{
  constructor(private store: Store){}
  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;

  sfBooks = 0;
  novelBooks = 0;
  fantasyBooks = 0;
  biographyBooks = 0;
  thrillerBooks= 0;
  horrorBooks= 0;
  otherBooks= 0;

  books : number[]= [this.sfBooks, this.novelBooks, this.fantasyBooks, this.biographyBooks, this.thrillerBooks, this.horrorBooks, this.otherBooks]

  ngOnInit(): void {
    this.store.select(selectReadingsFinished).pipe(map((books : any) => {
      books.forEach((book : IBook) => {
        if(book.genre.includes('Science Fiction')){
          this.sfBooks++
        } else if(book.genre.includes('Roman')){
          this.novelBooks++
        } else if(book.genre.includes('Fantasy')){
          this.fantasyBooks++
        } else if(book.genre.includes('Biographie')){
          this.biographyBooks++
        } else if(book.genre.includes('Thriller')){
          this.thrillerBooks++
        } else if(book.genre.includes('Horreur')) {
          this.horrorBooks++
        } else {
          this.otherBooks++
        }
      })
      this.barChartData.datasets[0].data = [this.sfBooks, this.novelBooks, this.fantasyBooks, this.biographyBooks, this.thrillerBooks, this.horrorBooks, this.otherBooks]
      this.chart.update()
    })).subscribe()
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'SF', 'Rom.', 'Fantasy', 'Bio', 'Thri.', 'Hor.', 'Other' ],
    datasets: [
      { data: [0,0,0,0,0,0], label: 'Livres lus par catégorie',  backgroundColor: ['#3f51b5', '#000', '#BC07E6', '#E53F56', '#F0A907', '#43DB98'] },
    ],

  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      y: {
        ticks: {
          stepSize: 1, // Afficher uniquement des nombres entiers sur l'axe y
        },
      },
    },
  };
}
