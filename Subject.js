class IPublisher{
  addSubscriber(subscriber){}
  removeSubscriber(subscriber){}
  notifySubscribers(news){}
}

class Publishers extends IPublisher{
    constructor() {
      super()
      this.subscribers = [];
    }
  
    addSubscriber(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    removeSubscriber(subscriber) {
      const index = this.subscribers.indexOf(subscriber);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    }
  
    notifySubscribers(news) {
      for (const subscriber of this.subscribers) {
        subscriber.updateNews(news);
      }
    }
  }

module.exports= Publishers;
  
