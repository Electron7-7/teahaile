let terminal_running = true;
let terminal_toggle = $('.terminal-toggle');

terminal_toggle.click(function() { toggle_terminal() });

function toggle_terminal()
{
	terminal_running = !terminal_running;
	terminal_toggle.toggleClass('active');
	terminal.freeze(!terminal_running);

	if (terminal_running)
	{
		terminal_toggle.text('ON');
		$('.terminal, .terminal *').css('visibility', 'visible');
		return;
	}

	terminal_toggle.text('OFF');
	$('.terminal, .terminal *').css('visibility', 'hidden');
}