const db = require('./models')

const names = [
"Data Analytics",
"Data Science",
"Digital Marketing",
"Entertainment",
"User Experience Design",
"Software Engineering (Best Cohort Ever)",
"Software Engineering (2nd Cohort)"
]

names.forEach(courseName => {
    db.course.findOrCreate({
        where: {
            name: courseName,
        }
    }).then((name, created) => console.log('success'))
    .catch(err => console.log(err))
})