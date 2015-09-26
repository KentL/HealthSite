$( document ).ready(function(){
	carousel_sync_text();
	
	$('#myCarousel').on('slid.bs.carousel', function() {
													 carousel_sync_text();
													 });
	
	$(document).on('mouseenter', '.list_item', function(){
														  display_list_detail(this);
														  });
});

function carousel_sync_text()
{
	var elements=$('#myCarousel .carousel-indicators li');
		var active_index=0;
		for (i = 0; i < elements.length; i++) { 
			if(elements[i].className=='active')
			{
				active_index=i;
				}
		}
		var text_array=document.getElementsByClassName("carousel-text");
		
		for(i=0;i<text_array.length;i++)
		{
			text_array[i].setAttribute('hidden', 'true');
			}
		text_array[active_index].removeAttribute('hidden');
		
	}
	
function display_list_detail( hovered_item)
{
	var current_item=document.getElementsByClassName('current_item');
	current_item[0].className="list_item";
	hovered_item.className="current_item";
}