var data = {
	1: {
		text: 'Yeah',
	},

	2: {
		text: 'Barbra Streisand',
	},

	3: {
		text: 'Haha yeah',
	},

	4: {
		text: 'Seal laugh',
	},

	5: {
		text: 'MSN',
	},

	6: {
		text: 'Banter',
	},

	7: {
		text: 'Shit',
	},

	8: {
		text: 'Heckler takes over',
	},

	9: {
		text: 'Extra',
	}
};

var dataLength = Object.keys(data).length;

var objectPointer = 1;
var musicPointer = 0;

function heckle(){
    if (objectPointer <= dataLength) {
        currentObject = data[objectPointer];

        $('#description').text(currentObject.text);

        if (musicPointer != 0) {
            $('#heckle-player').html('<source src=audio/' + musicPointer + '.mp3 type="audio/mpeg">');
            $('#heckle-player').load();
        }
        musicPointer++;
        objectPointer++;

    } else if (musicPointer === dataLength) {
        $('#heckle-player').html('<source src=audio/' + musicPointer + '.mp3 type="audio/mpeg">');
        $('#heckle-player').load();
        musicPointer++;
        objectPointer++;

    } else {
        $('#description').text('Finished!');
    }

}
$(function() {
    heckle();
});
