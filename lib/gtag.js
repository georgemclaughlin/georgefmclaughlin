// export const GA_TRACKING_ID = 'UA-157076206-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', 'UA-157076206-1', {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ clientWindow, action, category, label, value }) => {
  clientWindow.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};