const mysql = require('oracledb');
const config = require('../config/index.js');

async function query(sql, params) {
  const connection = await mysql.getConnection(config.db);
  var plSQLFun = "begin CP_UNBILIED_VIEW(:RPTTYP, :EMPCODE, :LOGINBRN, :REGN, :CNTR, :ACNTR, :BRN, :FRMDT, :TODT, :STATUSDT, :p_DATA, :p_error); " + "end;";
  // var plSQLFun = "begin DMY_DATA_WORK(:P_DATA, :MSG); " + "end;";
  let RPTTYP1="UNB";
  let EMPCODE1="SYS";
  let LOGINBRN1="CRPO";
  let REGN1="";
  let CNTR1="";
  let ACNTR1="";
  let BRN1="";
  let FRMDT1="01-JUN-2000";
  let TODT1="24-JUN-2024";
  let STATUSDT1="24-JUN-2024";
  var bindvars = {    
    RPTTYP:RPTTYP1,
    EMPCODE:EMPCODE1,
    LOGINBRN:LOGINBRN1,
    REGN:REGN1,
    CNTR:CNTR1,
    ACNTR:ACNTR1,
    BRN:BRN1,
    FRMDT:FRMDT1,
    TODT:TODT1,
    STATUSDT:STATUSDT1,
    p_DATA: { dir: mysql.BIND_OUT, type: mysql.CURSOR },
    p_error: { dir: mysql.BIND_OUT, type: mysql.DB_TYPE_VARCHAR },
    // P_DATA: { dir: mysql.BIND_OUT, type: mysql.CURSOR },
    // MSG: { dir: mysql.BIND_OUT, type: mysql.DB_TYPE_VARCHAR },

  };
  const data1 = await connection.execute(plSQLFun, bindvars);
  let results = await data1?.outBinds?.P_DATA.getRows()
  //let len= JSON.parse(results)
  //console.log(len.length)
  return results;
}
module.exports = {
  query
}