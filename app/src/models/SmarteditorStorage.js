'use strict'

const db = require("../config/db");

class SmartEditorStorage {
    static async save(content) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO smarteditor VALUES (?);";
            console.log(content);
            db.query(
                query, 
                [content],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success : true });
            });
        });
    }
}

module.exports = SmartEditorStorage;