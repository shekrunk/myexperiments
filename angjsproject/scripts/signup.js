function displayPhoto(context) {
    var ref = document.getElementById('photo');
    var fileType = /image.*/;
    if (ref.files[0].type.match(fileType)) {
        console.log("OK!!!");
        var reader = new FileReader();
        reader.onload = function (e) {
            window.localStorage.setItem('profilepic', e.target.result);
            var profileImage = document.getElementById('picPreview');
            var img = new Image();
            img.src = e.target.result;
            profileImage.appendChild(img);
        }
        reader.readAsDataURL(ref.files[0]);
    } else {
        console.error("Unsupported file format!!!");
    }
}

function getPDF(){
    var ref = document.getElementById('pdf').files;
    var pdfType = /application\/pdf/;
    
    for(var i =0;i<ref.length;i++) {
        var reader = new FileReader();
        reader.readAsDataURL(ref.item(i));
        reader.onload = function(e) {
            console.log(e);
            window.localStorage.setItem('pdfFile'+i, e.target.result);
        }
    }
}


/*function parseExcel(file) {
    var fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onerror = function(err) {
        console.error(err);
    }
    
    fileReader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {type: 'binary'});

        workbook.SheetNames.forEach(function(sheetName){
            var row = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json = JSON.stringify(row);
        });
    }
}*/