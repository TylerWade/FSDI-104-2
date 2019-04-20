// shopping cart lab 2


let snacks=['1. Salt and Vinegar Chips', '2. Pistachios','3. Pepsi','4. Coke','5. Dr. Pepper'];

let price=[ 0.99, 4.99, 1.50, 1.50, 1.50];

//alert menu here
// \n is a break line inside an alert
let menu='';

for(let i=0; i< snacks.length; i++){
   menu=menu+snacks[i]+'. $'+price[i].toFixed(2)+'\n';
}

for(let i=0;i<=3;i++){
alert(menu);
}

let selection=prompt("Select a product: ");
let number=prompt("Number of products");

let count,total,t,totalPrice,tt;


switch(selection){
    case'1':
        count=0;
        t=pay();
        tt=calculateTaxes();
        alert('You selected a: '+snacks[0]+ '--->'+price[0].toFixed(2) 
        +'\n Total:'+ t.toFixed(2)+ '\n Total w/ tax:'+ tt.toFixed(2));
        break;
    case'2':
        count=1;
        t=pay();
        tt=calculateTaxes();
        alert('You selected a: '+snacks[1]+ '--->'+price[1].toFixed(2) 
        +'\n Total:'+ t.toFixed(2)+ '\n Total w/ tax:'+ tt.toFixed(2));
        break;
    case'3':
        count=2;
        t=pay();
        tt=calculateTaxes();
        alert('You selected a: '+snacks[2]+ '--->'+price[2].toFixed(2) 
        +'\n Total:'+ t.toFixed(2)+ '\n Total w/ tax:'+ tt.toFixed(2));
        break;
    case'4':
        count=3;
        t=pay();
        tt=calculateTaxes();
        alert('You selected a: '+snacks[3]+ '--->'+price[3].toFixed(2) 
        +'\n Total:'+ t.toFixed(2)+ '\n Total w/ tax:'+ tt.toFixed(2));
        break;
    case'5':
        count=4;
        t=pay();
        tt=calculateTaxes();
        alert('You selected a: '+snacks[4]+ '--->'+price[4].toFixed(2) 
        +'\n Total:'+ t.toFixed(2)+ '\n Total w/ tax:'+ tt.toFixed(2));
        break;
    default:
        alert('Please, select a valid option');
        break;
}

function pay(){
    let total=price[count]*number;
    return total;
}

function calculateTaxes() {
    let total = price[count]*number;
    let salesTax = .07;
    let totalPrice = (total) * (1 + salesTax);
    return totalPrice;
}