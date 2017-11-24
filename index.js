var lines = 0,
	print_begin = false,
	print_end = true;

function printDate(options) {
	if(typeof options !== 'undefined'){
		if(typeof options.lines !== 'undefined') {
			lines = options.lines;
		};

		if(typeof options.print_begin !== 'undefined') {
			print_begin = options.print_begin;
		};

		if(typeof options.print_end !== 'undefined') {
			print_end = options.print_end;
		};
	};
};

function print(msg) {
	var date = msg + (new Date()).toLocaleString();
	console.log('\x1b[36m', date ,'\x1b[0m');
}

printDate.prototype.apply = function(compiler) {
  	print_begin && compiler.plugin("compilation", function(compilation) {
  		for(var i = 0; i < lines; i++) {
			console.log("");
		};
		
  		compilation.plugin('record', function() {
			print("Begin: ");
  		});
  	});

  	print_end && compiler.plugin('done', function() {
  		setTimeout(function() {
  			print("End: ");
  		}, 0);
  	});
};

module.exports = printDate;