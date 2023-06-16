import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { IBook } from 'src/app/utils/interface';
import { selectReadingsFinished, selectReadingsInProgress } from 'src/app/services/store/user.reducer';
import { map } from 'rxjs/operators';
import { BaseChartDirective } from 'ng2-charts';

import { month } from 'src/app/utils/function';
@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})

export class ChartLineComponent implements OnInit{
  constructor(private store: Store){}
  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;

  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  nbBooksReadPerMonth = [0, 0, 0, 0, 0, 0]; // Tableau representant le nombre de livres totaux terminés par mois

  ngOnInit(): void {
    this.store.select(selectReadingsFinished).pipe(map((books : any) => {
      books.forEach((book : IBook) => {
          const month = new Date(book.lastUpdate).getMonth()
          const year = new Date(book.lastUpdate).getFullYear()

          if(month === this.currentMonth && year === this.getYear(0)) {
            this.nbBooksReadPerMonth[5]++ 
          }
          if(month === this.currentMonth - 1 && year === this.getYear(1)) {
            this.nbBooksReadPerMonth[4]++
          }
          if(month === this.currentMonth - 2 && year === this.getYear(2)) {
            this.nbBooksReadPerMonth[3]++
          }
          if(month === this.currentMonth - 3 && year === this.getYear(3)) {
            this.nbBooksReadPerMonth[2]++
          }
          if(month === this.currentMonth - 4 && year === this.getYear(4)) {
            this.nbBooksReadPerMonth[1]++
          }
          if(month === this.currentMonth - 5 && year === this.getYear(5)) {
            this.nbBooksReadPerMonth[0]++
          }
      })
      this.chart.update()
    })).subscribe()
  }

  public lineChartLegend = true;
  public lineChartPlugins = [];

  // algo qui permet de retrouver le mois même si on devient hors limite du tableau
  getMonth(data: number) {
    if(this.currentMonth - data >= 0) {
      return month[this.currentMonth - data]
    } else {
      return month[this.currentMonth - data + 12]
    }
  }

  // algo qui permet de retrouver l'année même si on devient hors limite du tableau
  getYear(data: number) {
    if(this.currentMonth - data >= 0) {
      return this.currentYear
    } else {
      return this.currentYear - 1
    }
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [ this.getMonth(5), this.getMonth(4), this.getMonth(3), this.getMonth(2), this.getMonth(1), this.getMonth(0)],
    datasets: [
      { data: this.nbBooksReadPerMonth, label: 'Livres lus par mois',
        backgroundColor: ['#648180' ],
        pointBackgroundColor: '#648180', // Couleur des points (vert dans cet exemple)
        borderColor: "#648180" },
    ],

  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
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
