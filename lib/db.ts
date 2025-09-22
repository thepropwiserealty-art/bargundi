import Database from "better-sqlite3";

interface DbResponse{
    success: boolean,
    message: string
};

const db = new Database("leads.db");

console.log(db);

db.prepare(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    phone_number TEXT NOT NULL UNIQUE
        CHECK (length(phone_number) = 10 AND phone_number GLOB '[0-9]*')
  )
`).run();

const insertPhoneno = db.prepare(`
  INSERT OR IGNORE INTO contacts (phone_number)
  VALUES (@phone_number)
`);



export function addPhoneno(phone: string):Promise<DbResponse> {
    return new Promise((resolve, reject) => {
        try {
            insertPhoneno.run({phone_number: phone});
            resolve({ success: true, message: 'User added successfully' });
        } catch (err:any) {
            reject({ success: false, message: 'something went wrong' });
        }
    });
}

export default db;