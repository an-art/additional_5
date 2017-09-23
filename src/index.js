module.exports = function check(str, bracketsConfig) {
  	var brackets = [];
    for (var i=0; i<bracketsConfig.length; i++) {
      brackets[i] = bracketsConfig[i].join('');

  	}
  	var prev = '';
  	while (str.length!=prev.length) {
  		prev = str;
  		for (var i=0; i<brackets.length; i++) {
	  		str = str.replace(brackets[i], '');
	  	}
	  	
  	}
  	return (str.length > 0) ? false : true;
}
