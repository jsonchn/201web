import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const API_KEY = "cdlbhriad3i3mjcqjab0cdlbhriad3i3mjcqjabg";

function Search({profile, setProfile, prices, setPrices}) {
  const [ticker, setTicker] = useState("");
  function handleChange(e) {
    setTicker(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const FINNHUB_PROFILE_URL=`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${API_KEY}`;
    const FINNHUB_PRICES_URL=`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`;
    axios.get(FINNHUB_PROFILE_URL)
    .then(
      (response) => {
        setProfile(response.data);
      }
    )
    axios.get(FINNHUB_PRICES_URL)
    .then(
      (response) => {
        setPrices(response.data);
      }
    )
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup style={{width:500, display:'flex', margin:'auto'}}>
          <Form.Control value={ticker} placeholder="Search by ticker..." onChange={handleChange}/>
          <Button variant="primary" type="submit">
          🔍
          </Button>
        </InputGroup>
      </Form>
      {
        profile &&
        <>
          <h2>{profile["ticker"]}</h2>
          <p>{profile["name"]}</p>
          <p>{profile["exchange"]}</p>
          <h2>Summary</h2>
          <p>High Price: {prices["h"]}</p>
          <p>Low Price: {prices["l"]}</p>
          <p>Open Price: {prices["o"]}</p>
          <p>Close Price: {prices["pc"]}</p>
          <h2>Company Information</h2>
          <p><b>IPO Date: </b>{profile["ipo"]}</p>
          <p><b>Market Cap ($M)</b>{profile["marketCapitalization"]}</p>
          <p><b>Share Outstanding: </b>{profile["shareOutstanding"]}</p>
          <p><b>Website: </b>{profile["weburl"]}</p>
          <p><b>Phone: </b>{profile["phone"]}</p>
        </>
      }
    </>
  )
}

export default Search;