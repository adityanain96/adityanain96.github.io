
			var tickers = document.getElementsByClassName('i-am');
			var index = 1,
	    	delay = 2500;

			setInterval(function () {
	  			for (var i=0; i<tickers.length; i++) {
	    			var ticker = tickers[i];
	    			ticker.children[0].style.marginTop = -ticker.clientHeight*(index%ticker.children.length) + 'px';
	  			}
	  			index++;
			}, delay);
		