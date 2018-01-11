import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'masterSearch'
})
export class MasterSearchPipe implements PipeTransform{
    transform(masters, value): any {
        return masters.filter(master => {
            return (master.name.includes(value));
        });
    }

}