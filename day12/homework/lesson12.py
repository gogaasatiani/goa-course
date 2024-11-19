
correct_password = "mypassword"
while True:
    password = input("შეიტანეთ პაროლი: ")
    if password == correct_password:
        print("პაროლი სწორია!")
        break
    else:
        print("პაროლი არასწორია, სცადეთ ისევ.")

# დავალება მეორე

number = int(input("შეიტანეთ რიცხვი: "))
for i in range(number, 0, -1):
    print(i)

# დავალება მესამე
num = int(input("შეიტანეთ დადებითი მთელი რიცხვი: "))

if num > 0:
    total = sum(range(1, num + 1))
    print(f"რიცხვების 1-დან {num}-მდე ჯამი არის: {total}")
else:
    print("გთხოვთ, შეიტანოთ დადებითი მთელი რიცხვი.")


