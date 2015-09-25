// A $( document ).ready() block.
$( document ).ready(function() {
	// Log document ready to go!
	console.log("Hello from ScrapeBot! jQuery is ready.")
	$(window).load(function(){
	init();
	});	// end window.load	   
			   
function init(){
	//run function getData()
	getData();
};// end init()


function getData(){
	// Log ready to go!
	console.log("Ready to collect data");

	
function sendTrade(elm,type) {
	
	// Get data as text from HTML element
//	price = elm.find('.td_price').text();
//	amount = elm.find('.td_amount').text();
//	type = elm.find('.td_type').text();
//	time = elm.find('.td_time').text();
//	obtr = 'Trade';
//	console.log("Trade amount: "+amount);
//	console.log("Price "+price);
//	console.log("Type "+type);
//	console.log("Time "+time);
//	console.log("Type "+type + ' ' + obtr);


	// Send data to remote php script
//	$.ajax({
//		'url': 'https://138.128.169.162/coinfleet/coinbase_rt.php',
//		'data': {
//			'amount': amount,
//			'price': price,
//			'obtr': obtr,
//			'type': type
//		},
//		'complete' : function(transport){
//			console.log(transport.responseText);
//		}
//	});

}	// end DoSomething(elm)
	
	function sendOrder(elm,type) {
	//console.log(elm);
	// Get data as text from HTML element
	if (type == 'Buy'){	
		price = elm.find('[id*="buyPriceSpan"]').text();
		sum = elm.find('[id*="buyAmountSpan"]').text();
	}else{
		price = elm.find('[id*="sellPriceSpan"]').text();
	sum = elm.find('[id*="sellAmountSpan"]').text();
	};
	obtr = 'Order';
	console.log("Sum amount: "+sum);
	console.log("Price "+price);
//	console.log("Amount "+amount);
//	console.log("Type "+type + ' ' + obtr);
	//console.log("Type "+type);	
	//price = elm.find('.price').text();

	// Send data to remote php script
//	$.ajax({
//		'url': 'https://138.128.169.162/coinfleet/coinbase_rt.php',
//		'data': {
//			'amount': amount,
//			'price': price,
//			'obtr': obtr,
//			'type': type
//		},
//		'complete' : function(transport){
//			console.log(transport.responseText);
//		}
//	});

}	// end DoSomething(elm)
	
	
	//Listen for new trade history elements
	$('.transaction tbody').on('DOMNodeInserted', function(e) {
		//console.log("changed");
	 //if ($(e.target).is('.new_table_entry')) {	
       //sendTrade($(e.target));
	   console.log("Trade");	 
//	 }
		
	});
	//Listen for changed order book buy elements
	$('#depth_buy_context').on('DOMNodeInserted', function(e) {
        sendOrder($(e.target), 'Buy');
		console.log("New buy order");

	});
	//Listen for changed order book sell elements
	$('#depth_sell_context').on('DOMNodeInserted', function(e) {
        sendOrder($(e.target), 'Sell');
		console.log("New sell order");

	});
	
};
	// run getData()
	getData();

	
}); //end jQuery document ready

