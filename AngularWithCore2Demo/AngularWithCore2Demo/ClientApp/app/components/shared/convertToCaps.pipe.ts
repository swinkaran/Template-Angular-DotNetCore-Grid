import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToCaps'
})

export class ConvertToCaps implements PipeTransform {
    transform(value: string, chracter: string): string {
        return value.toUpperCase();
    }
}