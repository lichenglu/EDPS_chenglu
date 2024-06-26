const students = ['camden', 'genevieve', 'laura', 'natalia', 'jiwon', 'jordan']

function formPairGroups(roster, peoplePerGroup = 3) {
    roster = [...roster]
    let tempGroup = []
    const groups = []
    while (roster.length > 0) {
        const idx = Math.floor(Math.random() * roster.length)
        tempGroup.push(roster.splice(idx, 1)[0])
        if (tempGroup.length == peoplePerGroup || roster.length == 0) {
            groups.push(tempGroup)
            tempGroup = []
        }
    }
    return groups
}