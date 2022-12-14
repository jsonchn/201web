import { useState } from 'react';
import Search from "./Search";

function Home() {
  let [profile, setProfile] = useState({
    "country":"US",
    "currency":"USD",
    "exchange":"NASDAQ NMS - GLOBAL MARKET",
    "finnhubIndustry":"Technology",
    "ipo":"1980-12-12",
    "logo":"https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg",
    "marketCapitalization":2294268.811075778,
    "name":"Apple Inc",
    "phone":"14089961010.0",
    "shareOutstanding":15908.1,
    "ticker":"AAPL",
    "weburl":"https://www.apple.com/"
})

  let [prices, setPrices] = useState({
    "c":144.22,     // close price
    "d":-3.89,
    "dp":-2.6264,
    "h":146.6399,   // high price
    "l":143.39,     // low price
    "o":145.14,     // open price
    "pc":148.11,
    "t":1669669204
  });

  return (
    <div className="box1">
      <h1>SEARCH STOCKS</h1>
      <Search
        profile={profile}
        setProfile={setProfile}
        prices={prices}
        setPrices={setPrices}
      />
    </div>
  )
}

export default Home;