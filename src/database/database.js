import { useState, useEffect } from "react";
import initSqlJs from "sql.js";

function Database() {
  const [db, setDb] = useState(null);

  const [error, setError] = useState(null);
  const initDb = async () => {
    let datab;
    const SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
      // You can omit locateFile completely when running in node
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });
    datab = new SQL.Database();
    //setDb(new SQL.Database());
    let sqlstr =
      "CREATE TABLE user (a int, b char); \
INSERT INTO user VALUES (0, 'hello'); \
INSERT INTO user VALUES (1, 'world');";
    datab.run(sqlstr);
    let arr = datab.exec("select * from user");
    console.log(arr);
    setDb(arr);
  };

  useEffect(() => initDb, []);
  console.dir(db);
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
