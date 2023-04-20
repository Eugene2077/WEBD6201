const homeView = (req, res) => {
    const pageTitle = "Home";
    const homeContent = "Welcome to the home page!";
    res.render("home", { 
        pageTitle:pageTitle 
        , homeContent:homeContent
    });
};

module.exports = {
    homeView
};