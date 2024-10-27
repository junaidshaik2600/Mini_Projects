import json
user_Date = input("What was the data today: ")
date = f"2024-10-{user_Date.zfill(2)}"
with open("data.json", "r") as jf:
    data = json.load(jf)
    for i in data:
        if (i["date"] == date):
            today_data = i["temperatures"]
            total = sum(today_data)
            length_of_data= len(today_data)
            average  = total/length_of_data
            print(f"Today's Average Temperatures is {average}")
            break
        else:
            print("Something When Wrong!!!")
            break

