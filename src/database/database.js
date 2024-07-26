import { useState, useEffect } from "react";
import initSqlJs from "sql.js";

function Database() {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const initDb = async () => {
    const SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
      // You can omit locateFile completely when running in node
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });
    setDb(new SQL.Database());
  };

  useEffect(() => initDb, []);
  console.log(db);
  return (
    <div>
      <h1>Database</h1>
    </div>
  );
}
export default Database;
