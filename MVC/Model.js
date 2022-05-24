export default model = { 
	items: [],

	add: function(item){
		list_item = { text: item, completed: false }
		this.items.push(list_item)
	},

	complete: function(item_index){
		this.items[item_index].completed = !this.items[item_index].completed
	},

	del: function (item_index){
		this.items.splice(item_index, 1)
	}

}