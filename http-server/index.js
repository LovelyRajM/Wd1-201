const http = require('http');
const fs = require('fs');

let homeContent5 = "";
let projectContents5 = "";
let registerContent5 = "";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    homeContent5 = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    projectContents5 = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    registerContent5 = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(projectContents5);
            response.end();
            break;
        case '/registration':
            response.write(registerContent5);
            response.end();
            break;
        default:
            response.write(homeContent5);
            response.end();
            break;

        }
});
server.listen(port.port);