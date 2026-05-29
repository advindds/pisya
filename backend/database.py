import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), 'database.sqlite')

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            balance INTEGER DEFAULT 0,
            status TEXT DEFAULT 'active',
            net_profit INTEGER DEFAULT 0,
            generations_total INTEGER DEFAULT 0,
            generations_success INTEGER DEFAULT 0,
            generations_failed INTEGER DEFAULT 0
        )
    ''')
    
    # Try adding columns if they don't exist
    try:
        cursor.execute('ALTER TABLE users ADD COLUMN net_profit INTEGER DEFAULT 0')
        cursor.execute('ALTER TABLE users ADD COLUMN generations_total INTEGER DEFAULT 0')
        cursor.execute('ALTER TABLE users ADD COLUMN generations_success INTEGER DEFAULT 0')
        cursor.execute('ALTER TABLE users ADD COLUMN generations_failed INTEGER DEFAULT 0')
    except:
        pass # Columns probably exist

    try:
        cursor.execute('ALTER TABLE users ADD COLUMN fsm_state TEXT DEFAULT ""')
        cursor.execute('ALTER TABLE users ADD COLUMN last_notified REAL DEFAULT 0')
        cursor.execute('ALTER TABLE users ADD COLUMN last_action_time REAL DEFAULT 0')
    except:
        pass

        
    try:
        cursor.execute('ALTER TABLE users ADD COLUMN is_post_topup BOOLEAN DEFAULT 0')
    except:
        pass
        
    try:
        cursor.execute('ALTER TABLE users ADD COLUMN is_approved BOOLEAN DEFAULT 0')
        cursor.execute('ALTER TABLE users ADD COLUMN curator_name TEXT DEFAULT NULL')
        cursor.execute('ALTER TABLE users ADD COLUMN referred_by INTEGER DEFAULT NULL')
        cursor.execute('ALTER TABLE users ADD COLUMN referral_balance INTEGER DEFAULT 0')
    except:
        pass
        
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS global_users (
            id INTEGER PRIMARY KEY,
            name TEXT
        )
    ''')
        
    conn.commit()
    conn.close()

def get_user(user_id: int):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict(row)
    return None

def create_user(user_id: int, initial_balance: int = 2500):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (id, balance, status) VALUES (?, ?, 'active')", (user_id, initial_balance))
    conn.commit()
    conn.close()
    return get_user(user_id)

def add_global_user(user_id: int, name: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("INSERT OR IGNORE INTO global_users (id, name) VALUES (?, ?)", (user_id, name))
    # If the user exists but name changed, update it
    cursor.execute("UPDATE global_users SET name = ? WHERE id = ?", (name, user_id))
    conn.commit()
    conn.close()

def get_all_global_names():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM global_users WHERE name IS NOT NULL AND name != ''")
    rows = cursor.fetchall()
    conn.close()
    return [row[0] for row in rows]

def update_balance(user_id: int, amount: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET balance = balance + ?, net_profit = net_profit + ? WHERE id = ?", (amount, amount, user_id))
    conn.commit()
    conn.close()

def approve_user(user_id: int, curator_name: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET is_approved = 1, curator_name = ? WHERE id = ?", (curator_name, user_id))
    conn.commit()
    conn.close()

def set_curator_name(user_id: int, curator_name: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("INSERT OR IGNORE INTO users (id, balance, status) VALUES (?, 2500, 'active')", (user_id,))
    cursor.execute("UPDATE users SET curator_name = ? WHERE id = ?", (curator_name, user_id))
    conn.commit()
    conn.close()

def get_referrals(user_id: int):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT id, is_approved FROM users WHERE referred_by = ?", (user_id,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def apply_referral_bonus(inviter_id: int, new_user_id: int):
    # Both get 100 
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET balance = balance + 100, referral_balance = referral_balance + 100 WHERE id = ?", (inviter_id,))
    cursor.execute("UPDATE users SET balance = balance + 100, referral_balance = referral_balance + 100, referred_by = ? WHERE id = ?", (inviter_id, new_user_id))
    conn.commit()
    conn.close()

def set_balance(user_id: int, new_balance: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET balance = ? WHERE id = ?", (new_balance, user_id))
    conn.commit()
    conn.close()

def get_admin_users_stats():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute('''
        SELECT g.id, g.name, u.balance 
        FROM global_users g
        LEFT JOIN users u ON g.id = u.id
    ''')
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def set_status(user_id: int, status: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET status = ? WHERE id = ?", (status, user_id))
    conn.commit()
    conn.close()

def mark_post_topup(user_id: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET is_post_topup = 1 WHERE id = ?", (user_id,))
    conn.commit()
    conn.close()

def record_generation(user_id: int, success: bool, profit: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    if success:
        cursor.execute("UPDATE users SET generations_total = generations_total + 1, generations_success = generations_success + 1, net_profit = net_profit + ? WHERE id = ?", (profit, user_id))
    else:
        cursor.execute("UPDATE users SET generations_total = generations_total + 1, generations_failed = generations_failed + 1, net_profit = net_profit + ? WHERE id = ?", (profit, user_id))
    conn.commit()
    conn.close()

init_db()

def update_fsm_state(user_id, state_name):
    import time
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('UPDATE users SET fsm_state = ?, last_action_time = ? WHERE id = ?', (state_name, time.time(), user_id))
    conn.commit()
    conn.close()

def update_last_notified(user_id):
    import time
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('UPDATE users SET last_notified = ? WHERE id = ?', (time.time(), user_id))
    conn.commit()
    conn.close()

def get_all_users():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('SELECT id, balance, status, net_profit, generations_total, generations_success, generations_failed, is_post_topup, fsm_state, last_notified, last_action_time FROM users')
    users = cursor.fetchall()
    conn.close()
    
    result = []
    for u in users:
        result.append({
            "id": u[0],
            "balance": u[1],
            "status": u[2],
            "net_profit": u[3],
            "generations_total": u[4],
            "generations_success": u[5],
            "generations_failed": u[6],
            "is_post_topup": u[7],
            "fsm_state": u[8] if len(u) > 8 else "",
            "last_notified": u[9] if len(u) > 9 else 0,
            "last_action_time": u[10] if len(u) > 10 else 0
        })
    return result
