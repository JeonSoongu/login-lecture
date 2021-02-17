'use strict'

const SmartEditorStorage = require("./SmartEditorStorage");

class SmartEditor {
    constructor(body) {
        this.body = body;
    }

    async editor() {
        const client = this.body;
        try {
            const response = await SmartEditorStorage.save(client.content);
            return response;
        } catch (e) {
            return { success : false, msg : e }
        }
    }
}

module.exports = SmartEditor;