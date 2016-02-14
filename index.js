var data = {
	1: {
		text: 'test 1',
		audio: 'audio/1'
	},

	2: {
		text: 'test 2',
		audio: 'audio/2'
	}
};

var dataLength = Object.keys(data).length;

var objectPointer = 1;

function heckle(){
    if (objectPointer <= dataLength) {
        currentObject = data[objectPointer];

        $('#description').text(currentObject.text);
        objectPointer++;
    } else {
        $('#description').text("Finished!");
    }

}
