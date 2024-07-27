#my_list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

#1 დაპრინტეთ მხოლოდ ლუწი რიცხვები
#2 დაპრინტეთ 5ის ჯერადი რიცხვები
#3 დაპრინტეთ რიცხვთა ჯამი
#4 დაპრინტეთ ლუწ რიცხვთა ჯამი
#5 დაპრინტეთ ახალი სია რომელშიც იქნება მხოლოდ კენტი რიცხვები
#6 დაპრინტეთ ახალი სია რომელშიც იქნება 3ის და 5ის ჯერადი რიცხვები 



my_list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

even_numbers = []
for x in my_list:
    if x % 2 == 0:
        even_numbers.append(x)
print(even_numbers)


five_numbers = []
for x in my_list:
    if x % 5 == 0:
        five_numbers.append(x)
print(five_numbers)




sum_numbers = 0
for x in my_list:
    sum_numbers += x
print(sum_numbers)


sum_numbers = 0
even_numbers = []
for x in my_list:
    if x % 2 == 0:
        sum_numbers += x
        even_numbers.append(x)
print(even_numbers)

#1 დაპრინტეთ მხოლოდ ლუწი რიცხვები
#2 დაპრინტეთ 5ის ჯერადი რიცხვები
#3 დაპრინტეთ რიცხვთა ჯამი
#4 დაპრინტეთ ლუწ რიცხვთა ჯამი
#5 დაპრინტეთ ახალი სია რომელშიც იქნება მხოლოდ კენტი რიცხვები
#6 დაპრინტეთ ახალი სია რომელშიც იქნება 3ის და 5ის ჯერადი რიცხვები 

list = []
for x in my_list:
    if x % 2 == 1: 
        list.append(x)
print(list)

gogas_list = []
three_and_five = []
for x in my_list:
    if x % 3 == 0 and x % 5 == 0:
        gogas_list.append(x)
print(gogas_list)        
    

     



       




