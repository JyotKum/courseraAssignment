(function (){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('customService',customService);

ToBuyController.$inject=['customService'];

function ToBuyController(customService){
	var buyController=this;
	buyController.items=customService.getItem();
	buyController.sendToBuyingList=function (itemIndex){
		customService.removeItem(itemIndex);
	};
	
}
AlreadyBoughtController.$inject=['customService'];
function AlreadyBoughtController(customService){
	var bougtController=this;
	bougtController.bought=customService.getList();
	
}
function customService(){
	var service=this;
	var shoppingList2=[
{
	name:"Milk",
	quantity:" 2 bottle "
},
{
	name:"Banana",
	quantity:"2 Kg "
},
{
	name:"chicken",
	quantity:" 1 kg"
},
{
	name:"Egg",
	quantity:" 12 pec "
},
{
	name:"Cookies",
	quantity:" 12 packet "
}
];
var msg="";
var items=[];
    service.getItem=function(){
		return shoppingList2;
	};
	service.removeItem=function(itemIndex){
		var itemList={
		   name:shoppingList2[itemIndex].name,
		   quantity:shoppingList2[itemIndex].quantity
	   };
	      items.push(itemList);
		shoppingList2.splice(itemIndex,1);
	};
	service.getList=function(){
		return items;
	};
	
}

})();
