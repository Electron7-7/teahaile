$(document).ready(function()
{
	$.ajax(
	{
		url : "blag.txt",
		dataType : "text",
		success : function(data)
		{
			// alert(data);
		}
	});
});