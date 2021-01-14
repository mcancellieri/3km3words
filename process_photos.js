var iptc = require('node-iptc');
var fs = require('fs');
var sharp = require('sharp');

function convert(path) {
    fs.readFile(path, function (err, data) {
            if (err) {
                throw err
            }
            var iptc_data = iptc(data)
            filename = iptc_data.object_name.replace(/\s/g, ".").toLowerCase()
            sharp(path).toFile("public/" + filename + ".webp")
            sharp(path).resize(150).toFile("public/" + filename + "_thumb.webp")
        }
    )
}

fs.readdir("public/photos", (err, files) => {
    files.forEach(file => {
        console.log(file);
        convert("public/photos/" + file)
    });
});