import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/", (req, res) => {
    let data = {
        day: weekdays[date.getDay()],
        month: months[date.getMonth()],
        dayDate: date.getDate(),
        tasksList: todayList
    }
    res.render(indexPath, data);
});

app.post("/submit", (req, res) => { 
    const newTask = req.body.todoTask;
    todayList.push(newTask);
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render(workPath, {tasksList: workList});
});

app.post("/submitWork", (req, res) => { 
    const newTask = req.body.todoTask;
    workList.push(newTask);
    res.redirect("/work");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});













const indexPath = __dirname + "/views/index.ejs";
const workPath = __dirname + "/views/work.ejs";
let date = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let todayList = [];
let workList = [];