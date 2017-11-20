		getReq('products.json', function (resp) {
			var data = JSON.parse(resp);
			
			var html = "<div class='col-md-10'>";
			html += "<ul class='products-list'>";

			for (var i = 0; i < data.length; i++)
			{

				html += '<li>';
				html += '<a href="#" class="product-photo">';
				html += '<img src='+data[i].image.small+' height="130" alt="'+data[i].name+'">';
				html += '</a>'
				html += '<h2">'+data[i].name+'</h2>';
				html += '<ul class ="product-description">';
				html += '<li rel ="'+data[i].specs.manufacturer+'"><span>Manufacturer: </span>'+data[i].specs.manufacturer+'</li>';
				html += '<li rel ="'+data[i].specs.storage+'"><span>Storage: </span>'+data[i].specs.storage+'</li>';
				html += '<li rel ="'+data[i].specs.os+'"><span>OS: </span>'+data[i].specs.os+'</li>';
				html += '<li rel ="'+data[i].specs.camera+'"><span>Camera: </span>'+data[i].specs.camera+'</li>';
				html += '<li><span>Description: </span>'+data[i].description+'</li>';
				html += '</ul>';
				html += '<p class="product-price">£'+data[i].price+'</p>';
				html += '</li>';
			}
			
			html += "</ul>";
			
			document.getElementById("col-md-10").innerHTML = html;
		})
	
		function getReq(url, fn)
		{
			var invocation = new XMLHttpRequest();
			invocation.onreadystatechange = handleResponse;
			
			invocation.open("GET", url, true);
			invocation.send(null);
			
			function handleResponse()
			{
				if (invocation.readyState == invocation.DONE)
				{
					if (invocation.status == 200)
					{
						fn(invocation.responseText);
					}
				}
			}
		}
		
		function log(msg)
		{
			return console.log(msg);
		}
		
/**		$(document).ready(function () {
            $('.product-description  li').hide();

            $('.filter-criteria').find('input:checkbox').live('click', function () {
                $('.products-list  li').hide();
                $('.filter-criteria').find('input:checked').each(function () {
                    $('.product-description  li.' + $(this).attr('value')).show();
                });
            });
        }); 		
		**/
  $(document).ready(function(){
    $('.category').on('change', function(){
      var category_list = [];
      $('.filter-criteria :input:checked').each(function(){
        var category = $(this).val();
        category_list.push(category);
      });

      if(category_list.length == 0)
        $('.col-md-10').fadeIn();
      else {
        $('.col-md-10k').each(function(){
          var item = $(this).attr('rel');
          if(jQuery.inArray(item,category_list) > -1)
            $(this).fadeIn('slow');
          else
            $(this).hide();
        });
      }   
    });
  });		

	