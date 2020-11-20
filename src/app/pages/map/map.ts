import { AfterViewInit,OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
// HIGHCHARTS
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/funnel')(Highcharts);
let chartHolder;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  username: string;
  myAlerts:string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData
  ) {}

  ngOnInit() {
    console.log("MapPage ngOnInit");
  }

  ngAfterViewInit() {

  }

  ionViewDidEnter() {

    let mySeries=[];
    let currColourScheme=[];

    let incomplete=  {
      name:  `<span id="incomplete" style="vertical-align:middle">Incomplete</span>`,
      data: [7, 6, 3, 8, 5, 6, 6, 8],
      marker: {enabled:true,symbol: 'circle'},
      type: 'area',
      fillOpacity: 0.5,
    }
    let active=  {
        name:  `<span id="active" style="vertical-align:middle">Active</span>`,
        data: [4, 6, 3, 5, 5, 2, 5, 7],
        marker: {enabled:true,symbol: 'circle'},
        type: 'area',
        fillColor: 'white'
      }
    let outerSpace={
          name:  '',
          data: [10,10,10,10,10,10,10,10],
          marker: {enabled:false,symbol: 'circle'}
    }

    mySeries.push(incomplete);
    currColourScheme.push('#F9DC22');

    mySeries.push(active);
    currColourScheme.push('#7DC243');

    mySeries.push(outerSpace); // hidden. no color
    currColourScheme.push('rgb(192,192,192,0)'); // grey

    this.myAlerts="8";
    let alertBadge=`<ion-badge>${this.myAlerts}</ion-badge>`;

    /*
    let titleLink=`
      <a class="energized chartLink"  href="/tab/myAlerts">
        <span class="padding-left chartTitle"">Alerts</span>
        ${alertBadge}
      </a>
      `;
      */
    let titleLink=`
        <span class="padding-left chartTitle"">Alerts</span>
          ${alertBadge}
        `;
    let chartTitle = {
          //text: null,
          text: titleLink,
          useHTML:true,
          margin:30,
          style : {"fontSize": "20px"}
      }

    chartHolder = Highcharts.chart('container', {
      chart: {
        polar: true,
        type: 'line',
        style: {
              fontFamily: 'inherit'
        }
      },

    title: chartTitle,

    subtitle: {
        text: 'You have notifications'
    },

    xAxis: {
      categories: ['Health','Work', 'Love','Leisure','Relationships','Finances','Fun','Misc'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: {
        style : {"fontSize": "14px"},
        distance: 30,
        align: 'center'
      },
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      tickInterval: 1,
      minTickInterval:1,
      showFirstLabel:false,
      labels: {
           enabled:false
      }
    },
    colors: currColourScheme,
    series: mySeries,
    legend: {
       enabled : true,
       useHTML:true,
       itemStyle: {
         fontSize:'16px',
         fontWeight:'normal'
       },
       symbolHeight:10
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        pointPlacement: 'on',
        events: {
          legendItemClick: function(event) {
            console.log("---- legend clicked ----");
            if (event) {
              event.preventDefault();
              //console.log("legendItemClick() target id=");
              //console.log(event.browserEvent.target.id);
            }
          }
        },
        point: {
                events: {
                    click: function(event){
                      console.log("Point, Category:" + event.point.category + " index="+event.point.index);
                    }
                }
            }
      }
    },
    credits: {
      enabled:false
    },
    tooltip: {
      enabled:false
    }
    });
  }

  shareChart() {}
}
