var app = new function () {

    this.el = document.getElementById('makanan');

    this.makanan = ['Sate', 'Martabak', 'Pempek'];

    this.Count = function (data) {
        var el = document.getElementById('jumlah');
        var name = 'list';

        if (data) {
            if (data > 1) {
                name = 'makanan';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.tampil = function () {
        var data = '';

        if (this.makanan.length > 0) {
            for (i = 0; i < this.makanan.length; i++) {
                data += '<tr>';
                data += '<td>' + this.makanan[i] + '</td>';
                data += '<td><button class="btn" onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button class="btn" onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.makanan.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('tambahnamamakanan');
        var list = el.value;

        if (list) {
            this.makanan.push(list.trim());
            el.value = '';
            alert("Input Data Berhasil");
            this.tampil();
        } else {
            alert("Input Data Gagal");
        }
    };

    this.Edit = function (item) {
        var el = document.getElementById('editnamamakanan');
        el.value = this.makanan[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            var list = el.value;

            if (list) {
                self.makanan.splice(item, 1, list.trim());
                self.tampil();
                alert("Edit Data Berhasil");
                CloseInput();
            } else {
                alert("Edit Data Gagal");
            }
        }
    };

    this.Delete = function (item) {
        this.makanan.splice(item, 1);
        alert("Delete Data Berhasil");
        this.tampil();
    };

}

app.tampil();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

function acak(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function show() {

    var arr = ["Sate", "Martabak", "Pempek"];
    var arr1 = acak(arr)
    document.getElementById("breakfast").value = arr[0]
    document.getElementById("lunch").value = arr[1]
    document.getElementById("dinner").value = arr[2]
}