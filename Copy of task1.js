/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/
let ანა = 28 ;
let ლევანი = 21;
let ტექსტი = ("ანა ლევანზე 7 წლით უფროსია");
let სხვაობა = (ანა - ლევანი);
console.log(სხვაობა,ტექსტი)



/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
let a = ["john","sam","ann","will","andrew","joseph","lorelai","amelie","den"]
console.log(a[a.length - 4])


/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
let student = {
    firstName:"nika",
    lastName :'gorgodze',
    Age :24,
    subject:["math","english","literature"],
    roommate: {
        fullName:"lasha gorgodze",
        age:23
    }
}
for (let i in student.subject){
    console.log(student.subject[i])
}
// for (let i = 0;i < 100; i+=10){
//     console.log(i)
// }




/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
let masivi = ["Banana", "Orange", "Apple", "Mango",2,12]
let j = 0 
while (j < masivi.length){
    if (typeof masivi[j] === 'string'){
        console.log(masivi[j])
    }
    j++
}



/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let arr = [12,23,43,11,9,2,121,90]
for (let each in arr){
    console.log(arr[each])
    if (arr[each] > 31 && arr[each] % 2 === 0){
        console.log('Element is greater than provided value and is EVEN')
    }else if(arr[each] < 31 && arr[each] % 2 !== 0) {
        console.log('Element is less than provided value and is ODD')
    }
    
    
}