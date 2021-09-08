const path = require("path")

const puppeteer = require("puppeteer")
const config = require("./jest-puppeteer.config")

it("should support regex matchers", async() => {

	const browser = await puppeteer.launch(config)
	const page = await browser.newPage()

	await page.goto(`file://${path.join(__dirname, './page.html')}`)
	const $document = await page.getDocument()
	await $document.getByRole("button", {"name" : /test/i})

	await browser.close()
})
