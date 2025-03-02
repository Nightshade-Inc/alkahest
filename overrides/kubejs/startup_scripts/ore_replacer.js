WorldgenEvents.remove(event => {
	event.removeOres(ores => {
		let oresList = {
			"tin": "techreborn",
			"lead": "techreborn",
			"silver": "techreborn",
			"galena": "",
			"bauxite": "",
			"ruby": "thermal",
			"sapphire": "thermal",
			"iridium": "",
			"cinnabar": "thermal",
			"pyrite": "techreborn",
			"nickel": "thermal",
			"apatite": "thermal",
			"sulfur": "techreborn"
		}
		var predicates = []
		for(var key in oresList) {
			var predList = {
				"or": ["/.*:.*" + key + ".*ore.*/"],
				"not": ["/" + oresList[key] + ".*:.*" + key + ".*ore.*/"]
			}
			predicates.push(predList)
		}
		ores.blocks = predicates
	})
})