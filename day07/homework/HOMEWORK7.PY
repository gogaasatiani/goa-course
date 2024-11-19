
ages = []
for i in range(5):
    age = int(input(f"შეიტანეთ {i + 1}-ე ადამიანის ასაკი: "))
    ages.append(age)
product_of_first_two = ages[0] * ages[1]

result_after_division = product_of_first_two / ages[2]

sum_of_fourth_and_fifth = ages[3] + ages[4]
final_result = result_after_division * sum_of_fourth_and_fifth
print(f"პირველი ორი ასაკის გამრავლება {product_of_first_two}")
print(f"მესამე ასაკზე გაყოფის შედეგი {result_after_division}")
print(f"მეოთხე და მეხუთე ასაკების ჯამი {sum_of_fourth_and_fifth}")
print(f"ბოლო შედეგი: {final_result}")
