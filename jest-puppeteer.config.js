/* eslint-disable import/no-commonjs */

require("pptr-testing-library/extend")

module.exports = {
	"browserContext" : "incognito",
	"launch" : {
		"dumpio" : true,
		"defaultViewport" : {
			"width" : 1920,
			"height" : 800,
		},
		"headless" : process.env.HEADLESS !== "false",
		"slowMo" : process.env.HEADLESS === "false" ? 50 : 0,
	},
}
