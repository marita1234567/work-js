function multiplay (a,b, op) {
    switch (true) {
        case op === "*":
            console.log(a * b)
            break;
        default:
            console.log (არასწორია)
            break;
    }
}

multiplay ( 7, 9, "*")

function  checkAge(x,op) {
    switch (true) {
        case op >= x:
            console.log("სრულწლოვანიხარ")
            break;
case op < x :
    console.log("არასრულწლოვანიხარ")
        default:
            break;
    }
}
checkAge (17, 0)

function isEvenOrrOdd(x,op) {
    switch (true) {
        case op % 2 === 0:
            console.log("რიცხვი ლუწია")
            
            break;
    
        default:
            console.log("რიცხვი კენტია")
            break;
    }
}
isEvenOrrOdd (4, 20)


function getDayName(daynumber) {
    switch (true) {
        case  daynumber === 1:
            console.log("ორშაბათი")
            break;
    case  daynumber === 2:
        console.log("სამშაბათი")
        break;
        case  daynumber === 3:
            console.log("ოთხშაბათი")
            break;
            case daynumber === 4:
                console.log("ხუთშაბათი")
                break;
                case  daynumber === 5:
                    console.log("პარასკევი")
                    break;
                    case  daynumber === 6:
                        console.log("შაბათი")
                        break;
                        case daynumber === 7:
                            console.log("კვირა")
        default:
            break;
    }
}
getDayName (3,)



function compareNumbers(a, b,) {
    switch (true) {
        case a > b  :
            console.log("პირველი რიცხვი უფრო დიდია")
            break;
            case b>a:
                console.log("მეორე რიცხვი უფრო დიდია")
                break;
                case a === b:
                    console.log("ორივე ტოლია")
    
        default:
            break;
    }
}
compareNumbers(8, 10)



function calculato(x, y, op) {
    switch (true) {
        case op === "+":
            console.log(x + y)
            break;
    case op === "-":
        console.log(x - y)
        break;
        case op === "*":
        console.log(x*y)
        break;
        case op === "%":
        console.log(x%y)
        default:
            break;
    }
}
calculato(7, 3, "-")

function findMax(a, b, c) {
    switch (true) {
        case a >b && a > c:
            console.log("ა ყველაზე დიდია")
            
            break;
            case b > a && b >c:
                console.log("ბ ყველაზე დიდია")
                break;
                case c > a && c > b:
                    console.log("c  ყველაზე დიდია")
    
        default:
            break;
    }
}
findMax(4,2, 1)

function checkSign(num) {
    switch (true) {
        case num > 0:
            console.log("რიხვი დადებითია")
            
            break;
    case num < 0:
        console.log("უარყოფითია")
        default:
            break;
    }
}
checkSign(8)

function getMonthName(monthNumber){
    switch (true) {
        case  monthNumber === 1:
            console.log("იანვარი")
            break;
    case  monthNumber === 2:
        console.log("თებერვალი")
        break;
        case  monthNumber === 3:
            console.log("მარტი")
            break;
            case monthNumber === 4:
                console.log("აპრილი")
                break;
                case  monthNumber === 5:
                    console.log("მაისი")
                    break;
                    case  monthNumber === 6:
                        console.log("ივნისი")
                        break;
                        case monthNumber === 7:
                            console.log("ივლისი")
                            break;
                            case monthNumber === 8:
                                console.log("აგვისტო")
                                break;
                            case monthNumber === 9:
                                console.log("სექტემბერი")
                                break;
                            case monthNumber === 10:
                                console.log("ოქტომბერი")
                                break;
                            case monthNumber === 11:
                                console.log("ნოემბერი")
                                break;
                            case monthNumber === 12:
                                console.log("დეკემბერი")

        default:
            break;
    }
}

getMonthName(11)

function multiplyIfGreaterThanFive(num){
    switch (true) {
        case num >= 5:
            console.log(num * 10)
            break;

    
        default:
            console.log ("რიცხვი მცირეა")
            break;
    }
}
multiplyIfGreaterThanFive (7)



function getSeason(seasonNumber) {
    switch (true) {
        case seasonNumber  === 1:
            console.log("გაზაფხული")
            break;
    case  seasonNumber === 2:
        console.log("ზაფხული")
        break;
        case  seasonNumber === 3:
            console.log("შემოდგომა")
            break;
            case seasonNumber === 4:
                console.log("ზამთარი")
        break;
        default:
            break;
    }
}
getSeason(2)


function checkPrice(price) {
    switch (true) {
        case price > 100:
            console.log("ფასი მაღალია")
            
            break;
    case price < 100:
        console.log("ფასი მისაღებია")
        default:
            break;
    }
}
checkPrice(120)


function positiveSum(a, b) {
    switch (true) {
        case a > 0 && b > 0:
            console.log(a+b)
            
            break;
            case a > 0 && b < 0:
                console.log("მინიმუმ ერთი რიცხვი უარყოფითია")
    
        default:
            break;
    }
}
positiveSum (4,4)



function switchCalculato(a, b, op) {
    switch (true) {
        case op === "+":
            console.log(a + b)
            break;
            case op === "-":
                console.log(a- b )
                break;
                case op === "*":
                    console.log(a * b)
                    break;
                    case "%":
                        console.log(a % b)
                        break;
                        case "/":
                            console.log(a/b)
    
        default:
            break;
    }
}
switchCalculato(20, 10, "-")


