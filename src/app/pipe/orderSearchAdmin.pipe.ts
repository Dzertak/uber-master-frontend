import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderSearchAdmin'
})
export class OrderSearchAdminPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return (order.smallDescription.includes(value) || order.name.includes(value) || order.status.includes(value));
        });
    }

}