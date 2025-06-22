class PersusGuineaPig {
    constructor(color, size, birthYear, birthMonth, birthDay) {
        this.color = color
        this.size = size
        this.birthDate = new Date(birthYear, birthMonth - 1, birthDay)
    }

    calculateAge() {
        const today = new Date();
        let ageYears = today.getFullYear() - this.birthDate.getFullYear()
        let ageMonths = today.getMonth() - this.birthDate.getMonth()
        let ageDays = today.getDate() - this.birthDate.getDate()

        if (ageDays < 0) {
            ageMonths--
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
            ageDays += lastMonth.getDate()
        }

        if (ageMonths < 0) {
            ageYears--
            ageMonths += 12
        }

        return {
            years: ageYears,
            months: ageMonths,
            days: ageDays
        }
    }
}

const birthYear = prompt("შეიყვანეთ დაბადების წელი:")
const birthMonth = prompt("შეიყვანეთ დაბადების თვე (1-დან 12-მდე):")
const birthDay = prompt("შეიყვანეთ დაბადების რიცხვი:")

const persusGuineaPig = new PersusGuineaPig('ყავისფერი', 'მცირე', birthYear, birthMonth, birthDay)
const age = persusGuineaPig.calculateAge()
console.log(`პერსუსული გინეა გოჭი არის ${age.years} წლის, ${age.months} თვის და ${age.days} დღის.`)
