$(function () { 
    Highcharts.setOptions({
      colors: ['#2A3F54'],
      chart: {
          style: {
              fontFamily: 'sans-serif',
              color: '#fff',
              backgroundColor: 'rgba(255, 255, 255)'
          }
      }
  });  
    $('#container').highcharts({
          chart: {
              type: 'column',
              backgroundColor: '#white'
          },
          title: {
              text: 'Weekly Revenue',
              style: {  
                color: 'black'
              }
          },
          xAxis: {
              tickWidth: 0,
              labels: {
                style: {
                    color: 'black',
                   }
                },
              categories: ['May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10', 'May 11']
          },
          yAxis: {
             gridLineWidth: .5,
                gridLineDashStyle: 'dash',
                gridLineColor: 'black',
             title: {
                  text: '',
                  style: {
                    color: 'black'
                   }
              },
              labels: {
                formatter: function() {
                          return '$'+Highcharts.numberFormat(this.value, 0, '', ',');
                      },
                style: {
                    color: 'black',
                   }
                }
              },
          legend: {
              enabled: false,
          },
          credits: {
              enabled: false
          },
          tooltip: {
             valuePrefix: '$'
          },
          plotOptions: {
                column: {
                    borderRadius: 2,
               pointPadding: 0,
                    groupPadding: 0.1
              } 
              },
          series: [{
              name: 'Revenue',
              data: [2200, 2800, 2300, 1700, 2000, 1200, 1400]
          }]
      });
  });