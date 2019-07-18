const assert = require("assert")

export default {
    "check title": expectedTitle => 
        browser.getTitle().then(actualTitle => 
            assert.equal(actualTitle, expectedTitle))
}