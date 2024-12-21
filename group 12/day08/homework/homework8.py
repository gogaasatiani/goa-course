
grades = input("შეიყვანე შენი ნიშნები აქ: ")
grades_list = [float(grade) for grade in grades]  #
average = sum(grades_list) / len(grades_list)  
print(f"შესაბამისი შაშუალო ნიშანია: {average}")
