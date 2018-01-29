
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderFilter2'
})
export class OrderFilterPipe2 implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
             return order.status.includes(value);
        });
    }

}