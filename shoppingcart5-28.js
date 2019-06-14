var shopping = ['pop tarts','ramen noodles','chips','salsa','coffee'];
shopping.push('fruit loops');
shopping[4]="fair trade coffee";
shopping.splice(2,2,'rice','beans');

var cart=[];
cart[0]=shopping.pop();
cart[1]=shopping.shift();
while(shopping.length>0){
    var item=shopping.pop();
    cart.push(item);
}
cart.sort()
cart.reverse();
var shoppingstring=cart.join(', ');


console.log(shoppingstring); 