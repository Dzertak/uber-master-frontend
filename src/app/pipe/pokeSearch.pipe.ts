import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'pokeSearch'
})
export class PokeSearchPipe implements PipeTransform{
    transform(pokes, value): any {
        return pokes.filter(poke => {
            return (poke.name.includes(value));
        });
    }

}