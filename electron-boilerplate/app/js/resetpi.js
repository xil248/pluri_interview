///////////////////////
//Here is Ryan's code:/
///////////////////////
var SSH = require('simple-ssh');
var ssh = new SSH({
    host: 'go.pluricorp.com',
    user: 'pi',
    pass: '2/EQvWeWTGohwE7+ki8ju7VADi4IMz0neY3c04Md1u4='
});


 // document.getElementById("reboot").onclick = rebootFunc;
 // document.getElementById("test").onclick = testFunc;

	function rebootFunc() {
		alert("Rebooting...");
		//Restart the server
		ssh.exec('sudo reboot', {
    	err: function(stderr) {
        	console.log(stderr); // this-does-not-exist: command not found 
    	}
		}).start();
		ssh.exec('2/EQvWeWTGohwE7+ki8ju7VADi4IMz0neY3c04Md1u4=', {
    	err: function(stderr) {
        	console.log(stderr); // this-does-not-exist: command not found 
    	}
		}).start();
	}

	function testFunc() {
		alert("Print out last shutdown time ...");
		//Print out last shutdown time in console
		ssh.exec('last -x|grep shutdown | head -1', {
    	out: function(stdout) {
        	console.log(stdout);
    	}
		}).start();
	}

