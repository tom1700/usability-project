const getDuration = (startDate, endDate) => {
  return endDate - startDate;
};

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
      element: `${element.tagName}#${element.id || ''}.${element.classList.value}`
    })
  }
  save() {
    const currentDate = new Date();

    if (this.pageViews) {
      this.pageViews.slice(-1)[0].endDate = currentDate;
    }
    this.endDate = currentDate;

    const data = {
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      duration: getDuration(this.startDate, this.endDate),
      pageViews: this.pageViews.map(pageView => ({
        ...pageView,
        startDate: pageView.startDate.toISOString(),
        endDate: pageView.endDate.toISOString(),
        duration: getDuration(pageView.startDate, pageView.endDate)
      })),
      clicks: this.clicks,
      menuVariant: localStorage.getItem('currentHeader')
    };
    const url = 'http://tomaszmoraws.nazwa.pl/usability/api/save';

    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
    })
  }
}

export default new Tracker();
