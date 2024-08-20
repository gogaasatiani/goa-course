#davaleba 1
distance = 7425  
speed = 550
flight_time = distance / speed
print(flight_time)

#davaleba 2
bill = int(input())
tip = bill * 20 / 100
print(float(tip))

#davaleba 3 
weight = float(input())
height = float(input())


bmi = weight / (height ** 2)


if bmi < 18.5:
    category = "Underweight"
elif 18.5 <= bmi < 25:
    category = "Normal"
elif 25 <= bmi < 30:
    category = "Overweight"
else:
    category = "Obesse"


print(category)

