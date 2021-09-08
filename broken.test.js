const path = require("path")

it("should support regex matchers with jest-puppeteer", async() => {
	await page.goto(`file://${path.join(__dirname, './page.html')}`)
	const $document = await page.getDocument()
	debugger
	await $document.getByRole("button", {"name" : /test/i})
})
