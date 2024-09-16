const db = require('./models')

const names = [
    "Abdulla Almehaiza",
"Ahmed Al-Thawadi",
"Alya Abdulla",
"Ameera Ali",
"Anwaar Alsayoof",
"Fahad Janahi",
"Fatema Alafoo",
"Fatima Ali Abdulla",
"Fatima.alattar",
"Fuad Mohd AlShuroogi",
"Hessa Bubeshait",
"Hussain AlAdraj",
"Ibtisam Ali",
"Kawther Naser",
"Mahdi Altoubli",
"Maram",
"Mohamed Salman",
"Muhammad Zeeshan Khokhar",
"Nathanael Johnson",
"Noor Abdulla",
"Ranya",
"Sabika Ali",
"Safwan",
"Salman",
"Shaikha Albuflasa",
"Sharifa",
"Solein",
"Sumaya",
"Layla"]

names.forEach(studentName => {
    db.student.findOrCreate({
        where: {
            name: studentName,
        }
    }).then((name, created) => console.log('success'))
    .catch(err => console.log(err))
})