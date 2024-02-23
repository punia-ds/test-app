fetch(
  "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001346e203f29274866504478eef12437af&format=json&limit=1000&offset=0&filters[state]=Haryana&fields=district,market,modal_price,commodity",
  {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,hi;q=0.8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "http://weareharyanvi.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }
)
  .then((x) => x.json())
  .then((x) => console.log(x));
