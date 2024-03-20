let strings = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map', 'aasa', 'aaas']

let anagram = []

for (let i = 0; i < strings.length; i++) {
    let first = 0;
    for (let j = 0; j < strings.length; j++) {
        if (strings[i] == strings[j]) {
            continue;
        }
        else if (strings[i].length != strings[j].length) {
            continue;
        }
        else {
            let anagramCheck = 0;
            let mockStringB = Array.from(strings[j]) 
            for (let stringIndexA = 0; stringIndexA < strings[i].length; stringIndexA++) {
                for (let stringIndexB = 0; stringIndexB < mockStringB.length; stringIndexB++) {
                    if (strings[i][stringIndexA] == mockStringB[stringIndexB]) {
                        mockStringB.splice(stringIndexB,1)
                        anagramCheck++
                        break
                    }
                }
            }
            if (anagramCheck == strings[i].length && first == 0) {
                anagram.push([strings[i], strings[j]])
                strings.splice(j,1)
                first++
                j--
            }
            else if(anagramCheck == strings[i].length && first != 0) {
                let anagramLength = (anagram.length) - 1
                anagram[anagramLength].push(strings[j])
                strings.splice(j,1)
                j--
            }
        }    
    }
    if (first != 0) {
        strings.shift()
        i--
    }
    else {
        anagram.push([strings[i]])
        strings.shift()
        i--
    }

}

console.log(anagram);