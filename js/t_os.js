const stingers = [
 "copyright lololol",
 "don't try any of this at home",
 "you heard him, don't do it!",
 "reality is just two ts away from being realtitty",
 "limeade > lemonade... sorry, but it's true",
 "and if you thought <i>that</i> was bad...",
 "teahaile1 is RogerOThornhill, confirmed!!!",
 "I miss the 00s...",
 // "check out the Wii theme",
 "I love my online boyfriend :3",
 ":3c",
 "<|:38"
]

$(document).ready(function()
{
	$('#blag.preview').load('/blag/blag.html', function()
	{
		let count = $('li.post').length;
		for(let i = 1; i < count; i++)
		{
			$('#blag.preview').children().eq(count - i).remove();
		}
	});

	$('#blag.embed').load('/blag/blag.html', function(){});

	$('button[name="blag-button"]').on("click", function()
	{
		window.location.href = 'blag';
	});

	let stinger = stingers[Math.floor(Math.random() * stingers.length)];

	$('.stinger').append("\"" + stinger + "\"");

	/*$.ajax(
	{
		url : "blag.txt",
		dataType : "text",
		success : function(data)
		{
			alert(data);
		}
	});*/
});
