fruit = "Banana"
color_Input = "green"
color =  color_Input.capitalize()
if fruit == "Banana":
    if color == "Green":
        print("Unripe")
    elif color == "Yellow":
        print("Ripe")
    elif color == "Brown":
        print("Overripe")
    else:
        print("SomeThing, Went Wrong!!!")
