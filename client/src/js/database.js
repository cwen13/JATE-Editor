import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore("jate", { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
//  console.log("PUT to DB");
  const textDB = await openDB("jate",1);
  const tx = textDB.transaction("jate", "readwrite");
  const store = tx.objectStore("value");
  const request = store.add({content});
  const result = await request;
  console.log('Data put in db.');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
//  console.log("GET from DB");
  const textDB = await openDB("jate",1);
  const tx = textDB.transaction("jate", "readonly");
  const store = tx.objectStore("value");
  const request = store.getAll();
  const result = await request;
  
  console.log("result", result);
  return result;
  
};

initdb();
