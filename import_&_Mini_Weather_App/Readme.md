# Weather App

This project provides a basic implementation of a Weather Application that processes weather data stored in CSV and JSON formats and includes additional CSV file reading and writing functionality. The application is coded in Python and performs tasks like reading from and writing to files, calculating averages, and interacting with the user through the console.

## Project Structure
The folder "Weather_App" contains the following files:

1. **data.csv**
   - Stores simplified weather data with columns for date, temperature, humidity, and weather condition.
   - Sample Data :
     ```
     date,temperature,humidity,condition
     2024-10-01,25,65,Sunny
     2024-10-02,28,70,Partly Cloudy
     2024-10-03,22,75,Rainy
     2024-10-04,24,60,Cloudy
     2024-10-05,27,68,Sunny
     ```

2. **data.json**
   - Contains more detailed weather data, including daily temperature variations, humidity, and conditions.
   - JSON format allows for structured data storage with multiple temperature readings per day.
   - Example Entry:
     ```json
     {
         "date": "2024-10-01",
         "temperatures": [24, 25, 26, 27, 25],
         "humidity": 65,
         "condition": "Sunny"
     }
     ```

3. **data1.csv**
   - Stores sample personal data for demonstration purposes with columns for name, number, and age.
   - Sample Data:
     ```
     name,number,age
     junaid,9876543210,1120
     ammi,987654321,452
     didi,987654321,587
     ```

4. **main.py**
   - A Python script that reads data from `data.json` and calculates the average temperature for a specific date provided by the user.
   - Prompts the user for input, processes JSON data, and outputs the average temperature.
   - Handles potential errors with a simple error message.

5. **writeDataCsv.py**
   - A Python script that reads from and writes to `data1.csv`.
   - Demonstrates reading CSV file content and writing sample data to a CSV file.
   - Sample functionality:
     - Reads each row of the `data1.csv` file and prints it.
     - Writes a predefined set of rows to `data1.csv`.

## How to Run the Project
1. **Run the main script**:
   - Execute `main.py` to interact with the user and calculate the average temperature for the specified date.
   - Example usage:
     ```
     $ python main.py
     What was the date today: 03
     Today's Average Temperature is 22.0
     ```
   
2. **Run the CSV script**:
   - Execute `writeDataCsv.py` to read and write CSV data.
   - Example output:
     ```
     ['name', 'number', 'age']
     ['junaid', '9876543210', '1120']
     ['ammi', '987654321', '452']
     ['didi', '987654321', '587']
     ```

## Prerequisites
- Python 3.x
- No external libraries are required; the built-in `json` and `csv` modules are used.

## Notes
- The `main.py` script includes basic error handling, and the data files provided serve as examples for testing purposes.
- Feel free to modify the data or extend the functionality as needed.

