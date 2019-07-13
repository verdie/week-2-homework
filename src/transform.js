function groupAdultsByAgeRange (people){
    const peopleByGroup = {
        '20 and younger' : [],
        '21-30' : [],
        '31-40' : [],
        '41-50' : [],
        '51 and older' : []
    };

    const grouped = people.filter((person) => person.age >= 18)
    .reduce((acc, person)=>{
        if (person.age <= 20){
            acc['20 and younger'].push(person)
            return acc
        }
        else if (person.age >20 && person.age <=30){
            acc['21-30'].push(person)
            return acc
        }
        else if (person.age >30 && person.age <=40){
            acc['31-40'].push(person)
            return acc
        }
        else if (person.age >40 && person.age <=50){
            acc['41-50'].push(person)
            return acc
        }
        else {
            acc['51 and older'].push(person)
            return acc
        }
    }, peopleByGroup)
    
    for(let key in grouped){
        if (grouped[key].length == 0){
            delete grouped[key]
        }
    }
    return grouped
}
exports.groupAdultsByAgeRange = groupAdultsByAgeRange;