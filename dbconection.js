const mysql = require('mysql');

const db = mysql.createConnection({
host:'localhost',
user:'revital',
password:'123456',
datbase:'workers_list'
});


//שכתבתי את שורה 13 הכל נפל
db.connect((err) => {
    if(err) throw err;
    console.log(`MySql connected as id : ${db.threadId}`);
    
})

//השגיאה שקיבלתי
 /*
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
}
[nodemon] app crashed - waiting for file changes before starting...

*/