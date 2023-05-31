import {FormGroup} from "@angular/forms";
import {ChartConfiguration, TooltipItem} from "chart.js";
import {FormatUtils} from "../../util/format-util";
import {ColorUtils} from "../../util/color-util";

/**
 * @author Robin Steinwarz
 */

export class SpecificationStatisticChartConfigurations {

  static specPerformanceComparisonOptions(month: boolean): ChartConfiguration<'bubble'>['options']{
    return {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: (month)?'month': 'year',
            displayFormats: {

              year: 'yyy MMM',
              month: 'yyy MMM',
            }
          },
          ticks: {
            font: {
              size: 9
            }
          }
        },
        y: {
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return new FormatUtils().applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          },
          min: 0,
          title: {
            display: true,
            text: 'Average run time'
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            font: {
              size: 8
            }
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bubble">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label!,
                // @ts-ignore
                "Period (year/month): " + FormatUtils.applyDateFormat(tooltipItem.raw.x),
                // @ts-ignore
                "Number of cases started in period: " + tooltipItem.raw.count,
                // @ts-ignore
                "Avg. case duration: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw.y)];
            }
          }
        },
      }
    };
  }

  static specIndicatorOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: (month)?'month': 'year',
            displayFormats: {
              year: 'yyy MMM',
              month: 'yyy MMM',
            }
          },
          ticks: {
            font: {
              size: 9
            }
          }
        },
        y: {
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyDecimalPercentageFormat(<number>value);
            }
          },
          min: 0,
          max: 1
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            font: {
              size: 9
            }
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label + " bar",
                // @ts-ignore
                "Percentage: " + FormatUtils.applyDecimalPercentageFormat(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static specOutlierOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              size: 7
            },
            maxRotation: 90,
            minRotation: 90
          }
        },
        y: {
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 0,
            boxHeight: 0,
            font: {
              size: 7
            }
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label + " bar",
                // @ts-ignore
                "Value: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static capacityUtilizationOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          type: 'time',
          time: {
            unit: (month)?'month': 'year',
            displayFormats: {
              year: 'yyy MMM',
              month: 'yyy MMM',
            }
          },
          ticks: {
            font: {
              size: 9
            }
          }
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            font: {
              size: 7
            }
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label + " bar",
                // @ts-ignore
                "Value: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static activeBottlenecksOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          ticks: {
            font: {
              size: 7
            },
            maxRotation: 90,
            minRotation: 90
          }
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" Task: " + tooltipItem.dataset.label,
                // @ts-ignore
                "Average resource time: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static automationRatioOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              size: 7
            },
            maxRotation: 90,
            minRotation: 90
          }
        },
        y: {
          min: 0,
          max: 1,
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyDecimalPercentageFormat(<number>value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label + " bar",
                // @ts-ignore
                "Automation ratio: " + FormatUtils.applyDecimalPercentageFormat(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static automationCandidatesOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          ticks: {
            font: {
              size: 7
            },
            maxRotation: 90,
            minRotation: 90
          }
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              size: 9
            },
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return FormatUtils.applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" Task: " + tooltipItem.dataset.label,
                // @ts-ignore
                "Average resource time: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }


  static resourcesRadarOptions(month: boolean): ChartConfiguration<'radar'>['options']{
    return {
      maintainAspectRatio: true,
      elements: {
        line: {
          borderWidth: 2,
          borderColor: ColorUtils.getPrimaryColor()
        },
        point: {
          radius: 3,
          borderColor: ColorUtils.getPrimaryColor()
        }
      },
      scales: {
        r: {
          angleLines: {
            display: false
          },
          beginAtZero: true,
          pointLabels:{
            font: {
              size: 6
            }
          },
          ticks: {
            font: {
              size: 7
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }


}
