import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return value.substr(0, 2) + "..";
  }
}
