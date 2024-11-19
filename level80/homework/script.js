let names = ["მარიამი", "გიორგი", "ანა", "დავითი", "ნიკა"];
        let selectedNames = [];
        let randomIndex = Math.floor(Math.random() * names.length);
        let selectedName = names[randomIndex];
        if (!selectedNames.includes(selectedName)) {
            selectedNames.push(selectedName);
        }
        alert(selectedName + "მა უნდა გადაიხადოს გადასახადი. ");