from typing import Optional
from fastapi import FastAPI, Request, File, Form
from datetime import datetime

app = FastAPI()


@app.get("/")
def root():
    return {
        "Wolt": "Delivery Fee Calculator"
    }

@app.post("/calculate-delivery-fee")
async def calculate_delivery_fee_endpoint(request: Request):
    data = await request.json()

    cart_value = data["cart_value"]
    delivery_distance = data["delivery_distance"]
    number_of_items = data["number_of_items"]
    time_str = data["time"]

    if not time_str.endswith("Z"):
        raise ValueError("Time must be in the format YYYY-MM-DDTHH:MM:SS.SSSZ")

    try:
        time = datetime.fromisoformat(time_str)
    except ValueError:
        raise ValueError(f"Invalid time format: {time_str}")

    base_fee = 2

    if cart_value < 1000:
        small_order_surcharge = 1000 - cart_value  
        base_fee += small_order_surcharge

    distance_surcharge = 0
    if delivery_distance > 1000:
        distance_surcharge = delivery_distance // 500

    item_surcharge = 0
    if number_of_items >= 5:
        for i in range(5, number_of_items + 1):
            if i < 13:
                item_surcharge += 0.5
            else:
                item_surcharge += 1.2

    if time.weekday() == 4 and time.hour == 15:
        friday_rush_multiplier = 1.2
    else:
        friday_rush_multiplier = 1

    final_fee = base_fee + distance_surcharge + item_surcharge
    final_fee *= friday_rush_multiplier

    if final_fee > 1500:
        final_fee = 1500
    final_fee= final_fee
    response = {"delivery_fee": final_fee}
    return response
