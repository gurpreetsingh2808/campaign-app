import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'count'})
export class CountPipe implements PipeTransform {

    // We have fixed the length max to 150 characters;
    public transform(value: number): any {
        if (value > 999) {
            return ((value/1000).toFixed(1)) + 'K';
        } else {
            return value;
        }
    }
}
