const stingers = [
 "copyright lololol",
 "funnily enough, I was only born in 2002",
 "don't try any of this at home",
 "you heard him, don't do it!",
 "reality is just two ts away from being realtitty",
 "FUCKFUCKFUCKFUCKFUCK(and so on and so forth)",
 "Limeade > Lemonade... sorry, but it's true",
 "If you thought <i>that</i> was bad...",
 "teahaile1 is RogerOThornhill, confirmed!!!"
]

$(document).ready(function()
{
	$('#blog-embed').load('/blag/blag.html', function()
	{
		$('template').remove();
	});

	$('button[name="blog"]').on("click", function()
	{
		window.location.href = 'https://teahaile.com/blag';
	});

	$('.header h1').on("click", function()
	{
		window.location.href = 'https://teahaile.com';
	});

	let stinger = stingers[Math.floor(Math.random() * stingers.length)];

	$('.stinger').append(stinger);
});

// document.write('<script src="http://' + 'localhost'.split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');