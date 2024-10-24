age_In_Num = input("Enter Your Age : ")
age = int(age_In_Num)
if age < 13 :
    print("Child")
elif age >= 13 and age <= 19:
    print("Teenage")
elif age >= 20 and age <= 59:
    print("Adult")
elif age > 60 and age <= 100:
    print("Senior")
else:
    print("Something Went Worng!!")