
import {Participant} from "../yawl/resources/entities/participant.entity";
import { lighten,darken, transparentize, parseToRgba, rgba } from 'color2k';

/**
 * @author Robin Steinwarz
 */

export class ColorUtils {
  static vibrantColor = ["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1"]
  static vibrantIndex = 0;
  static getVibrantColor(): string {
    return this.vibrantColor[(this.vibrantIndex++ % this.vibrantColor.length)]
  }

  static colorMix = ["#39F6BA", "#31D4CE", "#42C3EB", "#3183D4", "#3966F6", "#A3F659", "#5DD44C", "#5FEA79", "#4CD48B", "#59F6CE",
    "#F6C34F", "#D4B744", "#EBDC56", "#D3D444", "#BBF64F", "#F6724C", "#D47842", "#EBA254", "#D49F42", "#F6CA4C", "#F65DD3", "#D45074",
    "#EB6D65", "#D46C50", "#F6945D", "#B66CF6", "#BD5DD4", "#EB73D9", "#D45D87", "#F6726C", "#6862F6", "#7C55D4", "#B46AEA", "#C155D4",
    "#F662D3", "#B4F7ED", "#9CCFD6", "#B8D9ED", "#9CB1D6", "#B4BAF7","#F7E9BE", "#D6CFA5", "#EEECC4", "#CED6A5","#D9F7BE"]
  static colorMixIndex = 0;
  static getColorMix(): string {
    return this.colorMix[(this.colorMixIndex++ % this.colorMix.length)]
  }

  static getWeekdayColor(i: number): string {
    return this.vibrantColor[(i % this.vibrantColor.length)]
  }

  static getLighterColor(color: string){
    return lighten(color, .1);
  }
  static getMuchLighterColor(color: string){
    return lighten(color, .3);
  }
  static getTransparentColor(color: string){
    let cl = parseToRgba(color);
    cl[3] = 0.4;
    return rgba(...cl);
  }
  static getDarkerColor(color: string){
    return darken(color, .2);
  }

  static getPrimaryColor(): string {
    return "#2196c3";
  }

  static getSecondaryColor(): string {
    return "#12376a";
  }
}
