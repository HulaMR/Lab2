import model from './Model.js';


export default view = {

	render: function() {
		
		if (model.items.length != 0) 
		{

			list = document.getElementById("list")

			for (var i = model.items.length - 1; i >= 0; i--) 
			{

				item = document.createElement('li');
				span = document.createElement('span');
				check = document.createElement('a');
				cross = document.createElement('a');
				iconCheck = document.createElement('c')
				iconCross = document.createElement('t');
				
				item.className = "item"
				span.className = "item-text"
				check.className = "item-complete"
				cross.className = "item-delete"
				
				span.textContent = model.items[i].text
				
				
				if (model.items[i].completed) 
				{
					span.setAttribute("style", "text-decoration: line-through; color: rgb(27, 146, 37)")
				}


				iconCheck.setAttribute("class", "bi bi-bookmark-check")
				iconCheck.setAttribute("data-id", i)
				iconCross.setAttribute("class", "bi bi-trash")
				iconCross.setAttribute("data-id", i)

				
				check.setAttribute("onclick", "controller.completeItem('" + i + "')")
				cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")

				
				check.appendChild(iconCheck)
				cross.appendChild(iconCross)
				item.appendChild(span)
				item.appendChild(check)
				item.appendChild(cross)
				list.appendChild(item);
			}		
		} 
	}
}