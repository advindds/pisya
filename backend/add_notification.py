with open('main.py', 'r', encoding='utf-8') as f:
    content = f.read()

loop_code = """
async def daily_new_tasks_notification_loop():
    import random
    import asyncio
    import database
    while True:
        try:
            # Send notification once a day (every 24 hours)
            users = database.get_all_users()
            amount = random.randint(4000, 16000)
            formatted_amount = f"{amount:,}".replace(",", " ")
            text = f"🔥 Отличные новости! Сегодня на платформу было добавлено {formatted_amount} новых рекламных заданий на генерацию изображений! Успейте забрать лучшие заказы! 🚀"
            
            for user in users:
                user_id = user["id"]
                if main_bot:
                    try:
                        await main_bot.send_message(user_id, text)
                    except Exception:
                        pass
        except Exception:
            pass
        await asyncio.sleep(86400) # 24 hours
"""

# Insert the new loop definition
content = content.replace("async def daily_followup_loop():", loop_code + "\n\nasync def daily_followup_loop():")

# Start it in on_startup
old_startup = """@app.on_event("startup")
async def on_startup():
    asyncio.create_task(daily_followup_loop())"""

new_startup = """@app.on_event("startup")
async def on_startup():
    asyncio.create_task(daily_followup_loop())
    asyncio.create_task(daily_new_tasks_notification_loop())"""

content = content.replace(old_startup, new_startup)

with open('main.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated main.py locally with daily notifications loop!")
