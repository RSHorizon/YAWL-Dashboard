import {ChartConfiguration, TooltipItem} from "chart.js";
import {FormatUtils} from "../../util/format-util";

/**
 * @author Robin Steinwarz
 */

export class TaskStatisticChartConfigurations {

  static avgCompletionTimeOverPeriodsOptions(month: boolean): ChartConfiguration<'bar'>['options']{
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
              return new FormatUtils().applyPastTimeFormatForTimestampWithDays(<number>value);
            }
          },
          min: 0,
          title: {
            display: true,
            text: 'Avg. completion time',
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
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label!,
                // @ts-ignore
                "Value: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static participantAvgPerformanceOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      normalized: true,
      scales: {
        x: {
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
            text: 'Avg. completion time',
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
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label!,
                // @ts-ignore
                "Value: " + FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
            }
          }
        },
      }
    };
  }

  static participantsProcessedInstancesOptions(month: boolean): ChartConfiguration<'bar'>['options']{
    return {
      animation: false,
      normalized: true,
      scales: {
        x: {
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
            text: 'Instances',
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
            label: function (tooltipItem: TooltipItem<"bar">): string | void | string[] {
              if(!tooltipItem){
                return "";
              }
              return [" " + tooltipItem.dataset.label!,
                // @ts-ignore
                "Value: " + tooltipItem.raw];
            }
          }
        },
      }
    };
  }


}
