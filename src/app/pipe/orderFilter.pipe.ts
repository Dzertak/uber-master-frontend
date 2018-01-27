
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return order.masterProfession.includes(value);
        });
    }

}