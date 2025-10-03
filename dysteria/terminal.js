let non_terminal_element = $('.content');
let terminal_element = $('#terminal');

const image_loader = ({  }) => `
	<div id='image-1'></div>
	<div id='image-2'></div>
	<div id='image-3'></div>
	<div id='image-4'></div>
`;

function scroll_to_bottom()
{
	let scroll_height = terminal_element.prop('scrollHeight');
	terminal_element.scrollTop(scroll_height);
}

let terminal = terminal_element.terminal(
{
	list: function(what)
	{
		switch(what)
		{
			case 'catalogue':
			case 'catalog':
				return 'Catalogue empty.';
				break;
			default:
				return `No such item "${what}" exists.`;
				break;
		}
	},

	fat: function()
	{
		const image_src = "https://cdn.discordapp.com/attachments/1165124891146727494/1227790767985131581/IMG_5307.png?ex=6632eac2&is=662075c2&hm=207c01467b6cb558a69f2c304f682aef9b3e14828a92d56c5272216070064989&";
		let new_image=$('<div id="loading-image" style="background:transparent url('+image_src+') no-repeat; background-size:contain; height:400px; width:auto;"></div>');
		this.echo(new_image);
	}
},
{
	greetings: false,
	prompt: 'root@DYSTERIACOM0042:~$ ',
	name: 'Main Terminal'
});
