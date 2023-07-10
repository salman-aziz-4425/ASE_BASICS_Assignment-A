class MobileAppUsers {
    constructor(name, news = "Today is a nice weather") {
      this.news = news;
      this.name = name;
    }
  
    getNews() {
      console.log(this.name + " received news: " + this.news);
    }
  
    updateNews(news) {
      this.news = news;
      console.log("News Updated: " + this.name);
    }
  }

module.exports= MobileAppUsers;
  