
// check if the file is loaded successfully
console.log('pixabay.js loaded successfully');

PIXABAY_KEY = '33069872-dddb0ee2e01ae7cfd9a5a78b7';
// <KEY> is a placeholder for KEY
PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=yellow+flowers&image_type=photo&per_page=30';
// replace the <KEY>part in the PIXABAY_URL with this
const url = PIXABAY_URL.replace('<KEY>',PIXABAY_KEY);

const makePosts = () => {
    for (let j = 0; j< 20; j++) {
        let id_no = j;

        let card = $(`<div class="card blog"></div>`)
            .attr('id', 'card-'+id_no)
            .appendTo($('.blog-column'));

        let body = $('<div class="card-body blog"></div>')
            .attr('id', 'card-body-'+id_no)
            .appendTo(card);

        let title = $('<h5 class="card-title blog"></h5>')
            .attr('id',"card-title-'+id_no")
            .appendTo(body);

        let pic = $('<img>')
            .attr('id','img-'+id_no)
            .addClass('card-pic')
            .css('max-height', '100px')
            .appendTo(body);

        let text = $('<p class="card-text blog"></p>')
            .attr('id','card-text-'+id_no)
            .appendTo(body);    

        let sub = $('<p class="userId blog"></p>')
            .attr('id','sub-'+id_no)
            .appendTo(body);

        let post_id = $('<span></span>')
            .attr('id','post-'+id_no)
            .text('post #: ', id_no)
            .appendTo(sub);

        let user_id = $('<span></span>')
            .attr('id','user-'+id_no)
            .appendTo(sub);

    }

    getPictures();
};



const getPictures = () => {

    PIXABAY_KEY = '33069872-dddb0ee2e01ae7cfd9a5a78b7';
    // <KEY> is a placeholder for KEY
    PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=yellow+flowers&image_type=photo&per_page=30';
    // replace the <KEY>part in the PIXABAY_URL with this
    const url = PIXABAY_URL.replace('<KEY>',PIXABAY_KEY);

    //pics = []
    fetch(url)
        .then((res) => {
            return res.json();
        } )
        .then((data) => {
            console.log(data);
            for (let i = 0; i < 20; i++) {
                let picSrc = data['hits'][i]['webformatURL'];
                let altText = data['hits'][i]['tags'];
                console.log(`URL: ${picSrc} ALT: ${altText}`);
                $('#img-' + i)
                    .attr('src', picSrc)
                    .attr('alt', altText);
            }
        })
        .catch((err) => console.log(err));

}


makePosts();
