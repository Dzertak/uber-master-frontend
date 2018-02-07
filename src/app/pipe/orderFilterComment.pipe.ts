import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderFilterComment'
})
export class OrderFilterCommentPipe implements PipeTransform{
    transform(orders, value): any {
        return orders.filter(order => {
            return (order.comment!=value);
        });
    }

}