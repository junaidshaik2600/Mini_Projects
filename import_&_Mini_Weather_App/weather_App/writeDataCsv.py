import csv
with open("data1.csv", "r") as csvfile:
    store = csv.reader(csvfile)
    for row in store:
        print(row)
# Sample data to write to the CSV file
data = [
    ["name", "number" , "age"],
    ["junaid", "9876543210", 1120],
    ["ammi", "987654321", 452],
    ["didi","987654321",587]
]

# Open a CSV file in write mode
with open("data1.csv", mode="w", newline="") as csvfile:
    # Create a csv.writer object
    writer = csv.writer(csvfile)

    # Write the rows to the CSV file
    writer.writerows(data)