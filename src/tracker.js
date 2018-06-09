class Tracker {
  constructor() {
    this.startDate = null;
    this.endDate = null;
    this.pageViews = [];
    this.clicks = [];
  }
  start(routeName) {
    this.startDate = new Date();
    this.pageView(routeName);
  }
  pageView(routeName) {
    const currentDate = new Date();

    if (this.pageViews.length > 0) {
      this.pageViews.slice(-1)[0].endDate = currentDate;
    }
    this.pageViews.push({
      startDate: currentDate,
      routeName
    });
  }
  trackClick(routeName, element) {
    this.clicks.push({
      routeName,
      element
    })
  }
  save() {
    const currentDate = new Date();

    if (this.pageViews) {
      this.pageViews.slice(-1)[0].endDate = currentDate;
    }
    this.endDate = currentDate;
    console.log('Start Date', this.startDate);
    console.log('End Date', this.endDate);
    console.log(this.pageViews);
    console.log(this.clicks);
  }
}

export default new Tracker();
