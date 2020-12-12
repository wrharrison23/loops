// Foundations - Loops

// Lightning - Psychotic Bird
let i = 1

while (i < 101){
    console.log('TWEET TWEET')
    i++
}

// Lightning - Favorite Foods

let favoriteFoods = ['chicken', 'mozz sticks', 'tuna', 'steak', 'fajitas']

for(let x = 0; x < favoriteFoods.length; x++){
    console.log(favoriteFoods[x])
}

// Loops - Practice

// Practice 1

let cohortOneStudents = ['Sable', 'David', 'Joey', 'Nick', 'Tommy', 'Connor', 'Charles', 'Russ', 'Bobby', 'Josh', 'Nikki', 'Matt', 
'Dale', 'Sydney']
for (let name = 0; name < cohortOneStudents.length; name++){
    console.log(cohortOneStudents[name])
}

// Practice 2

let interestArray = ['video games', 'music', 'hiking', 'movies', 'watching sports']

for (let interest = 0; interest < interestArray.length; interest++) {
    console.log(`One of my interests is: ${interestArray[interest]}`)
}

// Practice 3

for (let interest = 0; interest < interestArray.length; interest++) {
   if (interest === 0){
       console.log(`My absolute favorite interest is: ${interestArray[interest]} `)
   } else console.log(`One of my interests is: ${interestArray[interest]}`)
}

// Practice 5

let harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", 
"and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (let title = 0; title < harryPotterTitles.length; title ++) {
    console.log(`Harry Potter ${harryPotterTitles[title]}`)
}

// Practice 6

let grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(let grade = 0; grade < grades.length; grade++){
    if (grades[grade] >= 0 && grades[grade] <= 69){
        console.log('You got an F')
    } else if (grades[grade] >= 70 && grades[grade] <= 76){
        console.log('You got a D')
    } else if (grades[grade] >= 77 && grades[grade] <= 84){
        console.log('You got a C')
    } else if (grades[grade] >= 84 && grades[grade] <= 92){
        console.log('You got an B')
    } else if (grades[grade] >= 93 && grades[grade] <= 100){
        console.log('You got an A')
    }
}

// Practice 7
let endNum = 8
let numArray = []
for(let num = 2; num <=8; num +=2){
    numArray.push(num)
}
console.log(`${numArray} who do we appreciate?`)
