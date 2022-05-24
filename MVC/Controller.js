import model from './Model.js';
import view from './View.js';

 
 export default controller = {

	init: function() {
		this.clearList();	
		view.render()
	},
	

	addItem: function(e) {
		if ((e.code == "Enter") || (e.code == "NumpadEnter")) {
			if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) 
			{
				item = document.getElementById("add-item").value;
	        	model.add(item)

				document.getElementById("add-item").value = ""
				this.clearList();	
				view.render()	
			}
	    } 
	},

	
	completeItem: function(item_index) {

		model.complete(item_index)
		this.clearList();	
		view.render()
	},

	clearList: function() {
		var range = document.createRange();
		range.selectNodeContents(document.getElementById("list"));
		range.deleteContents();
	},

	deleteItem: function(item_index) {

		model.del(item_index)
		this.clearList();	
		view.render()
	}
} 