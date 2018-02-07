import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderFilterProf'
})
export class OrderFilterProfPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return order.masterProfession.includes(value);
        });
    }

}