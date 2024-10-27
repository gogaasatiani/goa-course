let month = readline().trim().toLowerCase();

switch (month) {
    case "მარტი":
    case "აპრილი":
    case "მაისი":
        console.log("გაზაფხული");
        break;
    case "ივნისი":
    case "ივლისი":
    case "აგვისტო":
        console.log("ზაფხული");
        break;
    case "სექტემბერი":
    case "ოქტომბერი":
    case "ნოემბერი":
        console.log("შემოდგომა");
        break;
    case "დეკემბერი":
    case "იანვარი":
    case "თებერვალი":
}
