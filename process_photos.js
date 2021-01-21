var iptc = require('node-iptc');
var fs = require('fs');
var sharp = require('sharp');
const csv = require('fast-csv');

function convert(path) {

    fs.readFile(path, function (err, data) {
        if (path.endsWith("jpg")) {
            if (err) {
                throw err
            }
            var iptc_data = iptc(data);
            filename = iptc_data.object_name.replace(/\s/g, ".").toLowerCase();
            let locationObject = findByName(filename);
            if (locationObject == null) {
                throw Error(filename + "Shouldn't return null")
            }

            sharp(path).resize(2048, 2048, {fit: "inside"}).toFile("public/" + filename + ".webp").then(function (data) {
                locationObject.width = data.width;
                locationObject.height = data.height;
                console.log(locationObject);
                results.push(locationObject);
                onComplete();
            });

            sharp(path).resize(150).toFile("public/" + filename + "_thumb.webp");
        }
        }
    )
}

const locations = [];
let results = [];
fs.createReadStream("public/data/locations.tsv")
    .pipe(csv.parse({headers: true, delimiter: '\t'}))
    .on('error', error => console.error(error))
    .on('data', row => locations.push(row))
    .on('end', () => start());

function start() {
    fs.readdir("public/photos", (err, files) => {
        for (let i in files) {
            convert("public/photos/" + files[i])
        }
        console.log("printing results");

    });

}

function findByName(name) {
    for (let location of locations) {
        if (location.title === name) {
            return location
        }
    }
    return null;
}

function onComplete() {
    const json = "export const Photos = " + JSON.stringify(results, null, 2);
    fs.writeFile("components/Location.js", json, (err) => {
        if (err) {
            console.error(err);
            throw err
        }
        console.log('Saved data to file.')
    })
}