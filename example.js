define(['pipAPI', 'https://saurabhpn86.github.io/javascript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Muslims', //Will appear in the data.
			title : {
				media : {word : 'Muslims'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Salman'},
					{word: 'Iqbal'},
					{word: 'Ahmed'},
					{word: 'Muhammed'},
					{word: 'Ali'},
					{word: 'Hussein'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Hindus', //Will appear in the data.
			title : {
				media : {word : 'Hindus'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Rohit'},
					{word: 'Amit'},
					{word: 'Ramesh'},
					{word: 'Sanjay'},
					{word: 'Sunil'},
					{word: 'Aakash'}		], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
