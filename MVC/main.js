import controller from './Controller.js';



function start (e){
	controller.addItem(e)

}

// model = { 
// 	items: [],

// 	add: function(item){
// 		list_item = { text: item, completed: false }
// 		this.items.push(list_item)
// 	},

// 	complete: function(item_index){
// 		this.items[item_index].completed = !this.items[item_index].completed
// 	},

// 	del: function (item_index){
// 		this.items.splice(item_index, 1)
// 	}

// }

// view = {

// 	render: function() {
		
// 		if (model.items.length != 0) 
// 		{

// 			list = document.getElementById("list")

// 			for (var i = model.items.length - 1; i >= 0; i--) 
// 			{

// 				item = document.createElement('li');
// 				span = document.createElement('span');
// 				check = document.createElement('a');
// 				cross = document.createElement('a');
// 				iconCheck = document.createElement('c')
// 				iconCross = document.createElement('t');
				
// 				item.className = "item"
// 				span.className = "item-text"
// 				check.className = "item-complete"
// 				cross.className = "item-delete"
				
// 				span.textContent = model.items[i].text
				
				
// 				if (model.items[i].completed) 
// 				{
// 					span.setAttribute("style", "text-decoration: line-through; color: rgb(27, 146, 37)")
// 				}


// 				iconCheck.setAttribute("class", "bi bi-bookmark-check")
// 				iconCheck.setAttribute("data-id", i)
// 				iconCross.setAttribute("class", "bi bi-trash")
// 				iconCross.setAttribute("data-id", i)

				
// 				check.setAttribute("onclick", "controller.completeItem('" + i + "')")
// 				cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")

				
// 				check.appendChild(iconCheck)
// 				cross.appendChild(iconCross)
// 				item.appendChild(span)
// 				item.appendChild(check)
// 				item.appendChild(cross)
// 				list.appendChild(item);
// 			}		
// 		} 
// 	}
// }

// controller = {

// 	init: function() {
// 		this.clearList();	
// 		view.render()
// 	},
	

// 	addItem: function(e) {
// 		if ((e.code == "Enter") || (e.code == "NumpadEnter")) {
// 			if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) 
// 			{
// 				item = document.getElementById("add-item").value;
// 	        	model.add(item)

// 				document.getElementById("add-item").value = ""
// 				this.clearList();	
// 				view.render()	
// 			}
// 	    } 
// 	},

	
// 	completeItem: function(item_index) {

// 		model.complete(item_index)
// 		this.clearList();	
// 		view.render()
// 	},

// 	clearList: function() {
// 		var range = document.createRange();
// 		range.selectNodeContents(document.getElementById("list"));
// 		range.deleteContents();
// 	},

// 	deleteItem: function(item_index) {

// 		model.del(item_index)
// 		this.clearList();	
// 		view.render()
// 	}
// }
