import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'pokeOrderFilter'
})
export class PokeOrderFilterPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return order.status.includes(value) || order.status.includes('New');
        });
    }

}