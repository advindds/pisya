import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), 'database.sqlite')

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()
cursor.execute('DELETE FROM users')
conn.commit()
conn.close()

print("All users have been wiped successfully.")
