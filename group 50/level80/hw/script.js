const photo1 = document.getElementById('photo1')
    const photo2 = document.getElementById('photo2')
    const photo3 = document.getElementById('photo3')

    photo1.addEventListener('mouseover', () => {
    photo1.src = 'download (3).jfif'
    photo1.addEventListener('mouseout', () => {
    photo1.src = 'download (1).jfif'
    });

    photo2.addEventListener('mouseover', () => {
    photo2.src = 'download (2).jfif'
    });
    photo2.addEventListener('mouseout', () => {
    photo2.src = 'download.jfif'
    });


    photo3.addEventListener('click', () => {
    photo3.src = 'photo3_new.jpg'
    });
    photo3.addEventListener('mouseout', () => {
    photo3.src = 'photo3.jpg'
    });

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', (e)) => 
        e.preventDefault()
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirmPassword').value

        if (!password || !confirmPassword) {
            alert("Input fields cannot be empty.")
        } else if (password !== confirmPassword) {
            alert("Passwords do not match each other. Try again.")
        } else {
            alert("Your login was successful")
        }
    })