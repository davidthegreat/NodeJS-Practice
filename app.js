function placeAnOrder(orderNumber){
	console.log("Customer order:", orderNumber);


	cookAndDiliverFood(function(){
		console.log("Deliverd food order", orderNumber);
	});

}

function cookAndDiliverFood(callback){
	setTimeout(callback, 5000);
}


placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);