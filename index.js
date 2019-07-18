const assert = require("assert")

module.exports = {
    "check title": expectedTitle => 
        browser.getTitle().then(actualTitle => 
            assert.equal(actualTitle, expectedTitle))
}