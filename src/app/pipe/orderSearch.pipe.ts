import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return (order.smallDescription.includes(value) || order.name.includes(value) || order.masterProfession.includes(value));
        });
    }

}