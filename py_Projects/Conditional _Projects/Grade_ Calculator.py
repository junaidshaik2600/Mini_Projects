score = float(input("Enter Your Score: "))
if score >=101:
    print("Please Check Your Grade Again!!!")
elif score >= 90 and score <=100:
    print("You Got 'A' Grade")  
elif score >= 80:
    print("You Got 'B' Grade")
elif score >= 70:
    print("You Got 'C' Grade")
elif score >= 69:
    print("You Got 'D' Grade")
else:
    print("You Got 'F' Grade")