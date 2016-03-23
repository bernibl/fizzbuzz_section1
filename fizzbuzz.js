exports.count = function(start, end) {
	// create a variable for output 
	var output = start;

    //modify output to
    for(var counter = start; counter < end; counter++){
    output = output + " " + (counter +1);
    }

    //return the output 
	return output;
};