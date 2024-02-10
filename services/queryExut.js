const mysql = require('oracledb');
const config = require('../config/index.js');

async function query(sql, params) {
  const connection = await mysql.getConnection(config.db);
  var plSQLFun = "begin cp_node.user_node(:BRANCH, :P_DATA, :MSG); " + "end;";
  let value12="WSNA"
  var bindvars = {
    BRANCH: value12,
    P_DATA: { dir: mysql.BIND_OUT, type: mysql.CURSOR },
    MSG: { dir: mysql.BIND_OUT, type: mysql.DB_TYPE_VARCHAR },

  };
  const data1 = await connection.execute(plSQLFun, bindvars);
  let results = data1?.outBinds?.P_DATA.getRows()
  return results;
}
module.exports = {
  query
}