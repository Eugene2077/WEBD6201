// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 11 Mar 2023 


// check if the file is loaded successfully
console.log('pixabay.js loaded successfully');

PIXABAY_KEY = '33069872-dddb0ee2e01ae7cfd9a5a78b7';
// <KEY> is a placeholder for KEY
PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=yellow+flowers&image_type=photo&per_page=30';
// replace the <KEY>part in the PIXABAY_URL with this
const url = PIXABAY_URL.replace('<KEY>',PIXABAY_KEY);

/**
 * build the post inside the blog-column div
 */
const makePosts = () => {
    for (let j = 0; j< 20; j++) {
        let id_no = j;
        // card element
        let card = $(`<div class="card blog"></div>`)
            .attr('id', 'card-'+id_no)
            .appendTo($('.blog-column'));
        // blog body in the card
        let body = $('<div class="card-body blog"></div>')
            .attr('id', 'card-body-'+id_no)
            .appendTo(card);
        // the titles for the blogs
        let title = $('<h5 class="card-title blog"></h5>')
        .attr('id','card-title-'+id_no)
        .appendTo(body);
        // pictures are from pixabay
        let pic = $('<img>')
        .attr('id','img-'+id_no)
        .addClass('card-pic')
        //style to css file
        .appendTo(body);
        // blog text 
        let text = $('<p class="card-text blog"></p>')
        .attr('id','card-text-'+id_no)
        .appendTo(body);   

        let sub = $('<p class="userId blog"></p>')
            .attr('id','sub-'+id_no)
            .appendTo(body);

        let post_id = $('<span></span>')
        .attr('id','post-'+id_no)
        .attr('style','margin-right: 3em; color: orange;')
        .appendTo(sub);

        let user_id = $('<span></span>')
        .attr('id','user-'+id_no)
        .attr('style', 'color: orange;')
        .appendTo(sub);
    }
    getPictures();
};

/**
 * get pictures from pixabay using api key and apply to the blog post
 */
const getPictures = () => {

    PIXABAY_KEY = '33069872-dddb0ee2e01ae7cfd9a5a78b7';
    // <KEY> is a placeholder for KEY
    PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=yellow+flowers&image_type=photo&per_page=30';
    // replace the <KEY>part in the PIXABAY_URL with this
    const url = PIXABAY_URL.replace('<KEY>',PIXABAY_KEY);

    //using fetch to fetch pictures from pixabay
    fetch(url)
        .then((res) => {
            return res.json();
        } )
        // data processing 
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

/**
 * populate the blog posts contents from jasonplaceholder
 */
const populateContents = () => {
// Blog constents
// source of the blog contents
const blogPostUrl = 'https://jsonplaceholder.typicode.com/posts';
// fetch the blog contents from the source
fetch(blogPostUrl)
// to jason and return it
.then(result => {
    return result.json();
})
// 
.then(data => {
    console.log(data[0]);
    for (let i = 0; i < 20; i++) {
        // get the title by id and pupulate from the data
        $('#card-title-' + i)
            .text(data[i]['title']);
        // get the text by id and pupulate from the data
        $('#card-text-' + i)
            .text(data[i]['body']);
        // get the post id by id and pupulate from the data    
        $('#post-' + i)
            .text('post #: '+ data[i]['id']);
        // get the user id by id and pupulate from the data    
        $('#user-' + i)
            .text('user #: '+ data[i]['userId']);

    }
  })
  .catch((err) => console.log(err));

}

populateContents();

