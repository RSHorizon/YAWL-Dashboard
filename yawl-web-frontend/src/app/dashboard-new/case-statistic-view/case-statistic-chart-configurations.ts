import {FormGroup} from "@angular/forms";
import {ChartConfiguration, TooltipItem} from "chart.js";
import {FormatUtils} from "../../util/format-util";
import {ColorUtils} from "../../util/color-util";

/**
 * @author Robin Steinwarz
 */

export class CaseStatisticChartConfigurations {

  static weekDayOccurrencesOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      maintainAspectRatio: false,
      normalized: true,
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
            }
          },
          title: {
            display: true,
            text: 'Number of cases started',
            font: {
              size: 7
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
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
              return [" " + tooltipItem.dataset.label,
                // @ts-ignore
                "Case instances started: " + tooltipItem.raw];
            }
          }
        },
      }
    };
  }

  static costsOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      maintainAspectRatio: false,
      normalized: true,
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
            }
          },
          title: {
            display: true,
            text: 'Sum of costs',
            font: {
              size: 7
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
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
              return [" " + tooltipItem.dataset.label,
                // @ts-ignore
                "Cost: " + tooltipItem.raw.toFixed(2)];
            }
          }
        },
      }
    };
  }


  static resourceUtilizationOptions(month: boolean): ChartConfiguration<'line'>['options']{
    return {
      animation: false,
      normalized: true,
      spanGaps: true,
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 0,
          hitRadius: 2
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month',
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
            }
          },
          min: 0,
          title: {
            display: true,
            text: 'Number of participants',
            font: {
              size: 7
            }
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
            label: function (tooltipItem: TooltipItem<"line">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return "Number of participants " + tooltipItem.raw;
            }
          }
        },
      }
    };
  }


  static caseIndicatorOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      normalized: true,
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
          max: 1,
          title: {
            display: true,
            text: 'Ratio as percentage',
            font: {
              size: 7
            }
          }
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

  static casePerformanceOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      maintainAspectRatio: false,
      normalized: true,
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
              return FormatUtils.applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          },
          title: {
            display: true,
            text: 'Run time',
            font: {
              size: 7
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


  static casePerformanceDistributionOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      maintainAspectRatio: false,
      normalized: true,
      scales: {
        x: {
          stacked: true,
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
            }
          },
          title: {
            display: true,
            text: 'Number of cases per distribution percentile',
            font: {
              size: 7
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
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
                "Value: " + tooltipItem.raw];
            }
          }
        },
      }
    };
  }


}
