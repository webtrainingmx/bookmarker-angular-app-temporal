import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutStringInWords'
})
export class CutStringInWordsPipe implements PipeTransform {

  transform(value: string, numberOfWords: number): any {
    const words = value.split(' ');

    if (words.length <= numberOfWords) {
      return value;
    } else {
      return words.splice(0, numberOfWords).join(' ') + '...';
    }
  }

}
