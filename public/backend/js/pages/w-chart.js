'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {

  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-rate-graph'), options);
    chart.render();

    // monthly report chart
    var options_monthly_report = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
          name: 'Income Report',
          data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44]
        }
      ],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#04A9F5', '#04A9F5', '#04A9F5', '#7C57C1'],
      fill: {
        opacity: [0.6, 1,  0.6, 1]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      legend: {
        show: false
      }
    };
    var chart_monthly_report = new ApexCharts(document.querySelector('#monthly-report-graph'), options_monthly_report);
    chart_monthly_report.render();

    // yearly summary chart
    var options_yearly_summary = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '75%',
          borderRadius: 2,
          borderRadiusApplication: 'end'
        }
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1DE9B6', '#0398F2'],
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          stops: [0, 100],
          shadeIntensity: 0.5,
          gradientToColors: ['#1DC4E9', '#38B9E7'],
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Net Profit',
          data: [76, 85, 101, 98, 87]
        },
        {
          name: 'Revenue',
          data: [44, 55, 57, 56, 61]
        }
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val;
          }
        }
      }
    };
    var chart_yearly_summary = new ApexCharts(document.querySelector('#yearly-summary-chart'), options_yearly_summary);
    chart_yearly_summary.render();

    // overview chart
    var options_overview = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd','#748892'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
           name: "This month",
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },{
          name: "Last month",
          data: [ 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart_overview = new ApexCharts(document.querySelector('#overview-chart-1'), options_overview);
    chart_overview.render();

    // overview chart 2
    var options_overview_2 = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd','#748892'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
           name: "This month",
          data: [70, 50, 90, 50, 55, 45, 30, 60, 40,  60, 50, 65]
        },{
          name: "Last month",
          data: [ 50, 65, 30, 60, 40, 50, 55, 45, 60, 70, 50, 90]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart_overview_2 = new ApexCharts(document.querySelector('#overview-chart-2'), options_overview_2);
    chart_overview_2.render();

    // total sales chart
    var options_total_sales = {
      chart: {
        type: 'line',
        height: 265,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd','#748892'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
           name: "Today",
          data: [0, 0, 90, 50, 55, 0, 0, 0, 0,  60, 0, 0]
        },{
          name: "Yesterday",
          data: [ 0, 0, 30, 60, 40, 50, 0, 0, 0,0, 0, 0]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      responsive: [
        {
          breakpoint: 1182,
          options: {
            chart: {
              height: 230
            },
          }
        }
      ]
    };
    var chart_total_sales = new ApexCharts(document.querySelector('#total-sales-chart'), options_total_sales);
    chart_total_sales.render();

    // overview bar chart
    var options_overview_bar = {
      chart: { type: 'bar', height: 150, sparkline: { enabled: true } },
      colors: ['#F44236', '#04A9F5', '#673ab7', '#1DE9B6', '#F4C22B', '#3EBFEA'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%', distributed: true} },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_overview_bar = new ApexCharts(document.querySelector('#overview-bar-chart'), options_overview_bar);
    chart_overview_bar.render();

    // performance chart
    var options_performance = {
      chart: {
        height: 250,
        type: 'donut'
      },
      series: [27, 23, 20, 17],
      colors: ['#04A9F5', '#F4C22B', '#1DE9B6', '#04A9F5'],
      labels: ['Total income', 'Total rent', 'Download', 'Views'],
      fill: {
        opacity: [1, 1, 1, 0.3]
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                  labels: {
                    show: false
                  }
                }
              }
            }
          }
        },
        {
          breakpoint: 1182,
          options: {
            chart: {
              height: 190
            },
          }
        }
      ]
    };
    var chart_performance = new ApexCharts(document.querySelector('#performance-chart'), options_performance);
    chart_performance.render();

    // project rating chart
    var options_project_rating = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#1DE9B6'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_project_rating = new ApexCharts(document.querySelector('#project-rating-chart'), options_project_rating);
    chart_project_rating.render();

    // transactions chart
    var options_transactions = {
      chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
      colors: ['#04A9F5'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_transactions = new ApexCharts(document.querySelector('#transactions-chart'), options_transactions);
    chart_transactions.render();

    // canceled order chart
    var options_canceled_order = {
      chart: {
        type: 'line',
        height: 60,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F44236'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_canceled_order = new ApexCharts(document.querySelector('#canceled-order-chart'), options_canceled_order);
    chart_canceled_order.render();

    // total order chart
    var options_total_order = {
      chart: {
        type: 'area',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0
        }
      },
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }]
    };
    var chart_total_order = new ApexCharts(document.querySelector('#total-order-chart'), options_total_order);
    chart_total_order.render();

    // total rewards chart
    var options_rewards = {
      chart: {
        type: 'line',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F4C22B'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }]
    };
    var chart_rewards = new ApexCharts(document.querySelector('#total-rewards-chart'), options_rewards);
    chart_rewards.render();

    // total earning chart
    var options_total_earning = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#F4C22B50',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#F4C22B',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#F4C22B'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart_total_earning = new ApexCharts(document.querySelector('#total-earning-chart-1'), options_total_earning);
    chart_total_earning.render();

    //  total earning chart 2
    var options_total_earning_2 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#1DE9B650',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#1DE9B6',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart_total_earning_2 = new ApexCharts(document.querySelector('#total-earning-chart-2'), options_total_earning_2);
    chart_total_earning_2.render();

    // bitcoin chart 1
    var options_bitcoin_1 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_bitcoin_1 = new ApexCharts(document.querySelector('#bitcoin-chart-1'), options_bitcoin_1);
    chart_bitcoin_1.render();

    // bitcoin chart 2
    var options_bitcoin_2 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F44236'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_bitcoin_2 = new ApexCharts(document.querySelector('#bitcoin-chart-2'), options_bitcoin_2);
    chart_bitcoin_2.render();

    // bitcoin chart 3
    var options_bitcoin_3 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#04A9F5'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_bitcoin_3 = new ApexCharts(document.querySelector('#bitcoin-chart-3'), options_bitcoin_3);
    chart_bitcoin_3.render();

    // total rewards chart
    var options_total_rewards = {
      chart: {
        type: 'line',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F4C22B'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }]
    };
    var chart_total_rewards = new ApexCharts(document.querySelector('#total-rewards-chart-2'), options_total_rewards);
    chart_total_rewards.render();

    // times spent chart
    var options_time_spent = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart_time_spent = new ApexCharts(document.querySelector('#timesspent-chart'), options_time_spent);
    chart_time_spent.render();

    // new visitor chart
    var options_new_visitor = {
      chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
      colors: ['#F44236'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      states: {
        normal: {
            filter: {
                type: 'lighten',
                value: 0.7,
            }
        },
        hover: {
            filter: {
                type: 'lighten',
                value: 0,
            }
        },
      },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };   
    var chart_new_visitor = new ApexCharts(document.querySelector('#new-visitor-chart'), options_new_visitor);
    chart_new_visitor.render();

    // reports chart
    var options_reports = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#1DE9B6','#A389D4','#0398F2'],
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          stops: [0, 100],
          shadeIntensity: 0.5,
          gradientToColors: ['#1DC4E9','#899ED4','#38B9E7'],
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: "Tomorow",
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: "Today",
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: "Yesterday",
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart_reports = new ApexCharts(document.querySelector('#reports-chart'), options_reports);
    chart_reports.render();

    document.querySelector('#chart-line').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'line',
        },
        fill: {
          type: 'solid',
        },
      })
    })

    document.querySelector('#chart-area').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'area',
        },
        fill: {
          type: 'gradient',
        },
      })
    })

    document.querySelector('#chart-bar').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'bar',
        },
        fill: {
          type: 'solid',
        },
      })
    })

  })();
  
}
