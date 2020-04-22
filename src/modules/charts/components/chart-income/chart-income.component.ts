/** @format */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

import { Chart } from 'chart.js';

import { InvoiceData, InvoiceState } from '../../models/invoice.model';
import { ChartType } from '../../models/chart.model';
import { InvoiceService } from '../../services/invoice/invoice.service';

@Component({
  selector: 'app-chart-income',
  templateUrl: './chart-income.component.html',
  styleUrls: ['./chart-income.component.css']
})
export class ChartIncomeComponent implements AfterViewInit {
  @ViewChild('incomeChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
  @Input() maxAmount: number;

  data: InvoiceData[] = [];
  chart!: Chart;
  loaded = false;

  constructor(private _invoice: InvoiceService) {}

  ngAfterViewInit(): void {
    this._invoice.getData$().subscribe(
      res => {
        this.data = res;
        this.chart = this.createIncomeChart();
        this.loaded = true;
      },
      error => console.error(error.message)
    );
  }

  createIncomeChart(
    type: string = ChartType.Bar,
    label: string = 'incone',
    backgroundColor: string = 'rgb(255, 255, 25)',
    borderColor: string = 'rgb(255, 99, 132)',
    max = this.maxAmount
  ): Chart {
    return new Chart(this.myAreaChart.nativeElement, {
      type,
      data: {
        labels: this.data.map(x => new Date(x.Date).toDateString()),
        datasets: [
          {
            label,
            backgroundColor,
            borderColor,
            data: this.data.map(x => x.Amount),
            fill: true
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              time: {
                unit: 'month'
              },
              gridLines: {
                display: false
              },
              ticks: {
                maxTicksLimit: 6
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max,
                maxTicksLimit: 10
              },
              gridLines: {
                display: true
              }
            }
          ]
        },
        legend: {
          display: true
        }
      }
    });
  }
}
