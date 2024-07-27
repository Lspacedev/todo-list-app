import { useState, useEffect } from "react";
import initSqlJs from "sql.js";

function Database() {
  const [users, setUsers] = useState(["a", "b", "c", "d", "e"]);
  const [db, setDb] = useState(null);

  const initDb = async () => {
    //let datab;
    try {
      const SQL = await initSqlJs({
        // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
        // You can omit locateFile completely when running in node
        locateFile: (file) => `https://sql.js.org/dist/${file}`,
      });
      let datab = new SQL.Database();
      //setDb(new SQL.Database());

      /*let sqlstr = `CREATE TABLE user (id int, name char); \"`;

      console.log(sqlstr);
      users.forEach((user, i) => {
        console.log(user);
        sqlstr += ` INSERT INTO user VALUES (${i}, ${user}); \"`;
      });*/

      let sqlstr = `CREATE TABLE user (id int, name char); \
        INSERT INTO user VALUES (0, 'hello'); \
        INSERT INTO user VALUES (1, 'world'); \
        
        `;
      datab.run(sqlstr);
      let arr = datab.exec("select * from user");
      console.log(datab);
      console.log(arr);
      setDb(arr);
    } catch (err) {
      console.log(err);
    }
  };

  /*const initDb2 = async () => {
    //let datab;
    try {
      const SQL = await initSqlJs({
        // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
        // You can omit locateFile completely when running in node
        locateFile: (file) => `https://sql.js.org/dist/${file}`,
      });

      let res = await fetch("test.db");
      let arrayBuffer = await res.arrayBuffer();
      let uInt8Array = new Uint8Array(arrayBuffer);
      let db = new SQL.Database(uInt8Array);
      console.log(db);
    } catch (err) {
      console.log(err);
    }
  };*/

  useEffect(() => initDb, []);
  //console.dir(db);
  /*let sqlstr =
    "CREATE TABLE hello (a int, b char); \
INSERT INTO hello VALUES (0, 'hello'); \
INSERT INTO hello VALUES (1, 'world');";*/
  //db.run(sqlstr);
  //console.log(db.exec("select * from hello"));
  return (
    <div>
      <h1>Database</h1>
      <div>
        {JSON.stringify(db)}
        {/*db.length > 0 &&
          db.map((el) => {
            return JSON.stringify(el);
          })*/}
      </div>
    </div>
  );
}
export default Database;
