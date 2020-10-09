import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataSource =

    {
      datasets: [{
          data: [30, 350, 90, 100, 200, 300, 400],
          backgroundColor: [
                  '#F70505',
                  '#0000FF',
                  '#16F705',
                  '#05E7F7',
                  '#F705F7',
                  '#EFF705',
                  '#F75605'
              ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Eat Out',
          'Rent',
          'Car Payment',
          'Entertainment',
          'Medical',
          'Savings',
          'Groceries'
      ]
      };


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {

      for (var i = 0; i < res.budget.length; i++){
        this.dataSource.datasets[0].data[i] = res.budget[i].budget;
        this.dataSource.labels[i] = res.budget[i].title;
        this.createChart();
    }

    });
  }

  createChart(){
    // var ctx = document.getElementById('myChart').getContext('2d');
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: this.dataSource

    });
}

}
