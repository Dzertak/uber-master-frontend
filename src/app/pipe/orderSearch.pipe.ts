import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return (order.status.includes(value) || order.name.includes(value));
        });
    }

}