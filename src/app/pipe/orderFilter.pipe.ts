
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return order.name.includes(value) || order.smallDescription.includes(value);
        });
    }

}