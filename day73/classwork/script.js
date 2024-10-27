function loanApproval() {
    const name = prompt("შეიყვანეთ თქვენი სახელი:");
    const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
    const annualIncome = parseFloat(prompt("შეიყვანეთ თქვენი წლიური შემოსავალი:"));
    const creditHistory = prompt("შეიყვანეთ თქვენი კრედიტის ისტორია (კარგი, საშუალო, ცუდი):").toLowerCase();
    const loanAmount = parseFloat(prompt("შეიყვანეთ სესხის თანხა:"));

    let approvalStatus;

    if (age < 18) {
        approvalStatus = "სესხი არ არის დამტკიცებული: ასაკი ნაკლებია 18.";
    } else if (annualIncome < 50000 && creditHistory === "ცუდი") {
        approvalStatus = "სესხი არ არის დამტკიცებული: დაბალი შემოსავალი და ცუდი კრედიტის ისტორია.";
    } else if (annualIncome >= 50000 && (creditHistory === "კარგი" || creditHistory === "საშუალო")) {
        
        
        if (loanAmount > 0.3 * annualIncome) {
            approvalStatus = "სესხი არ არის დამტკიცებული: სესხის თანხა აღემატება 30% წლიური შემოსავლისას.";
        } else {
            approvalStatus = "სესხი დამტკიცებულია.";
        }
    } else {
        approvalStatus = "სესხი არ არის დამტკიცებული: კრედიტის ისტორია არასწორია.";
    }

    alert(`${name}, ${approvalStatus}`);
}

loanApproval();