let Cat = function (name, img, clicks) {
    this.name = name;
    this.img = img;
    this.clicks = clicks;
}

let model = {
    cats: [],
    images: ['https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
        'https://images.pexels.com/photos/22346/pexels-photo.jpg',
        'https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg',
        'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg'
    ],
    names: ['Max', 'Tigger', 'Purr', 'Dogo', 'Jinx', 'Todo'],
    clicks: 0,
    addClicks: function (e) {
        let clickedCat = e.target.id;
        model.cats[clickedCat].clicks += 1;

    },
    addListeners: function () {
        $('button').on('click', function (e) {
            e.preventDefault();
            container.show(e);
            container.showClicks(e);
            // show img of cat
        });
        $('img').on('click', function (e) {
            e.preventDefault();
            model.addClicks(e);
            container.showClicks(e);
        });
    },
// too many event listeners creating severe lag
}

let view = {

    createButton: function () {
        const catList = document.getElementsByClassName('catList');
        for (let i = 0; i < model.images.length; i++) {
            model.cats[i] = new Cat(model.names[i], model.images[i], 0);
            catList[0].innerHTML += "<button id=" + [i] + ">" + model.names[i] + "</button>";

        };

    },
}


let container = {
    show: function (e) {
        let clickedCat = e.target.id;
        $('div.catPic').html(`<img src=${model.cats[clickedCat].img} id=${e.target.id}>`);
        model.addListeners();
    },
    showClicks: function (e) {
        let clickedCat = e.target.id;
        $('div.catClicks').html(`<p>${model.cats[clickedCat].clicks}</p>`)
    }
    // this will be where we combine the model and the view 
}
view.createButton();
model.addListeners();