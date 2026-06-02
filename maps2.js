
const students =[
    {name: 'jose wilson', testGrade: 7 },
    {name: 'maria', testGrade: 5 },
    {name: 'joão', testGrade: 8 },
    {name: 'bruno', testGrade: 9 },
    {name: 'carla', testGrade: 3 },
    {name: 'ana', testGrade: 2 },
    {name: 'julio', testGrade: 10 },
]

const listStudents = students.map (student => {

    let status

    if (student.testGrade >=5 && student.testGrade <= 7){
        status = 'recovery'
    }
    else if (student.testGrade > 7){
       status = 'approved'
    }
    else {
        status ='failed'
    }
    return {
        name: student.name,
        grade: student.testGrade,
        status: status
    }
})

console.log(listStudents)