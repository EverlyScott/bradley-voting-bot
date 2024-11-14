const { parse } = require("node-html-parser");

(async () => {
  while (true) {
    const res = await fetch("https://www.wissports.net/poll/cast_vote_element/55957", {
      headers: {
        accept: "*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        "accept-language": "en-US,en;q=0.9,de;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token": "oZUhgUemFLXMrkdnNTyRuigbJu+p4yNCtZb5hR3YCOK5z6G3ZPDz5eHbxpjW50IXfNFv8D1zRV4S+PHPzvODxQ==",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "__cfruid=3d19eae7bb91861762eb6232a97724b57c816348-1731613095; optimizelyEndUserId=oeu1731613098850r0.8919382658621617; mprtcl-v4={'gs':{'ie':1|'dt':'us1-6ynS5HmBUtc3CDqDKTBu8ysq2WktiOjl'|'cgid':'d0422b0c-954c-4861-9712-8d65ad6f6b3b'|'das':'2e5307b6-6811-4ef6-bf1d-c5eb76cfd04d'|'csm':'WyI2NzU5MzA0MDMyMDgzNDkyODIiXQ=='|'sid':'818FFF39-5ECF-40AF-92F1-C750081B39DD'|'les':1731613112058|'ssd':1731613098516}|'l':0|'675930403208349282':{'fst':1728712511726|'ua':'eyJhZ2UiOm51bGwsImRvYiI6bnVsbCwiZ2VuZGVyIjpudWxsfQ=='}|'cu':'675930403208349282'}; _ngin_session=yIsziCkom%2Fh7DOfKwNuPDbLOGNq2gsjZRp7EgR9w%2F62VEQAqFshr5qXrv141%2FBVzOqJf7zLMXE5PI6NbP0wsEBckOz1NO%2BXNJRE1fkTOMRiWJFQwcAuWj8t2CSUtWim5zU9Lr7%2BnjJW9YTVYucN9%2Fww0ouf79SVzihq48j87P2eC1OR5vQXQ5TexTTvW0nn2z4uaEtzYWDEbcpwICxyokWaB6hyrr2PAx8UYkzoAYMyZZTJIwhzildOwYnJbYeGUxHzY4dqFIfzWL4IkPppTz4gYWH7dLxxMegFVQ1hWSys6m%2FROlp5SwblwijhaoetsThjzGOoerqEoXv8b66rgWiQ%3D--wcyX1RUf%2BJFhUkou--BX%2B365jxQka%2FstK%2FyZkCuA%3D%3D",
        Referer: "https://www.wissports.net/news_article/show/1323391",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "utf8=%E2%9C%93&answer_id=209187&commit=Vote",
      method: "POST",
    });
    const text = await res.text();
    console.log(res.statusText);
    // const html = res.match(/^Element.update\(".*.", "(.*)"\)/);
    // console.log(html[1]);
    // const document = parse(html[1]);
  }
})();
