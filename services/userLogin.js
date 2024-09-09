const db = require('./queryExut.js');
const config = require('../config/index');
const helper = require('../utils/helper/index.js')
const oraclecon = require('oracledb')
const conn = oraclecon.createPool(config.db);
async function GetData(value) {
    oraclecon.outFormat= oraclecon.OUT_FORMAT_OBJECT;
    let query = "CP_UNBILIED_VIEW();"
    const rows = (await db.query(query));
    return {
        rows,
    }
}
module.exports = {
    GetData,
}