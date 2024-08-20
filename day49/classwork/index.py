#classswork 1
print(24 * 60 * 60)



#classwork 2
print("Price: 87$")

#classwork 3
print("Nickname: Master")
print("Score: 99")

#classwork 4

print("   *   ")
print("  ***  ")
print(" ****** ")
print("********")
print(" ******  ")
print("  ***    ")
print("   *"     )

#classwork 5
country = input('portugal')
capital = input('lisbon')


print("Country: " + country)
print("Capital: " + capital)

#classwork 6

wins = input("Enter number of wins: ")
ties = input("Enter number of ties: ")
wins = int(wins)
ties = float(ties)
points = wins + (ties * 0.5)
print("Points earned:", points)

#classwork 7 
balance = int(input("Enter your balance: "))
withdraw = int(input("Enter amount to withdraw: "))
balance -= withdraw
print("Your balance:", balance)

#classswork 8
age = int(input("Enter your age: "))
if age <= 19:
    print("Take your kindle!")

#classwork 9
color = input()
if color == "red":
    print("box #1")
elif color == "green":
    print("box #2")
elif color == "black":
    print("box #3")
else:
    print("<b>unknown</b>")

#classwork 10 
day = int(input())
hour = int(input())
if day in [1, 2, 3, 4, 5]:  
    if 10 <= hour <= 21:
        print("Open")
    else:
        print("Closed")
else:  # Saturday and Sunday
    print("Closed")






