day = str(input("What Day Is Today: "))
age = int(input("Enter Your Age: "))
adult = 12
child = 8
if day == "Wednesday" or day == "Wed" or day == "wed":
    if age >= 18:
        print(f"Your Movie Ticket Price Is ${adult}. \nBut, Bcuz Today Is Wednesday You Get Discount Of $2\nSo The Bill Is ${adult-2}")
    else:
        print(f"Your Movie Ticket Price Is ${child}. \n But, Bcuz Today Is Wednesday You Get Discount Of $2\n So The Bill Is ${child-2}")
else:
    if age >= 18:
        print(f"Your Movie Ticket Price Is ${adult}.")
    else:
        print(f"Your Movie Ticket Price Is ${child}. ")