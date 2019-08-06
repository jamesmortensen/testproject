// helper function to dynamically extend the behavior of a function
function extendLogBehavior(legacyFn, color) {
    /** arguments for original fn **/
    return function() {
        // original function pass in as parameter
        legacyFn.apply(this, arguments);
        var container = document.getElementById('container');
        var newLogEntry = document.createElement('div');
        if(color === undefined) {
        	color = 'black';
        }
        newLogEntry.innerHTML = '<font color="'+color+'">'+arguments[0]+'</font>';
        container.appendChild(newLogEntry); 
     
    };
};

// extend behavior of log functions to automatically update UI as well
console.log = extendLogBehavior(console.log);
console.error = extendLogBehavior(console.error, 'red');


// returns true if email is valid; otherwise, return false
function isValidEmail(email) {
  var constraints = {
  	from: {
        email: true
  	}
  };

  var result = validate({from: email}, constraints);
  if(result === undefined)
  	return { result: true };
  else
  	return { result: false, message: result.from[0] };
}

// returns true if IP or URL is valid; otherwise, return false
function isValidUrl(url) {
  var result = validate({website: url}, {
  	website: {
  	  url: {
        allowLocal: true,
        schemes: ['ftp','http','https', 'ws', 'wss']
      }
    }
  });
  if(result === undefined)
  	return { result: true };
  else
  	return { result: false, message: result['website'][0] };
}


function formatString(str) {
  console.log(validate.capitalize(validate.prettify(str)));
}

// window.addEventListener('load', function() {
//   formatString('this.isA.testSentence.');
// });