import React, { useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import Cards from "./Cards.jsx";
import { fetchApi } from "../Services/FetchApi.js";
import { coins } from "./Coins.js";
import Footer from "./Footer.jsx";
import Loading from "./Loading/Loading.jsx";
export default function Main() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price_change_percent, setPrice_change_percent] = useState([]);

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether,tron,dogecoin,solana,ripple,cardano,avalanche-2,shiba-inu,chainlink,bitcoin-cash,litecoin,polkadot&vs_currencies=usd";

    fetchApi(url).then((data) => {
      const prices = {
        Bitcoin: { USD: data.bitcoin.usd },
        Ethereum: { USD: data.ethereum.usd },
        BNB: { USD: data.binancecoin.usd },
        Tether: { USD: data.tether.usd },
        Tron: { USD: data.tron.usd },
        Dogecoin: { USD: data.dogecoin.usd },
        Solana: { USD: data.solana.usd },
        XRP: { USD: data.ripple.usd },
        Cardano: { USD: data.cardano.usd },
        Avalanche: { USD: data["avalanche-2"].usd },
        Shiba: { USD: data["shiba-inu"].usd },
        Chainlink: { USD: data.chainlink.usd },
        "Bitcoin Cash": { USD: data["bitcoin-cash"].usd },
        Litecoin: { USD: data.litecoin.usd },
        Polkadot: { USD: data.polkadot.usd },
      };
      setData(prices);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether,tron,dogecoin,solana,ripple,cardano,avalanche-2,shiba-inu,chainlink,bitcoin-cash,litecoin,polkadot`;

    fetchApi(url).then((data) => {
      const percents = {
        Bitcoin: {
          change_24h:
            data.find((coin) => coin.id === "bitcoin")
              ?.price_change_percentage_24h || "N/A",
        },
        Ethereum: {
          change_24h:
            data.find((coin) => coin.id === "ethereum")
              ?.price_change_percentage_24h || "N/A",
        },
        BNB: {
          change_24h:
            data.find((coin) => coin.id === "binancecoin")
              ?.price_change_percentage_24h || "N/A",
        },
        Tether: {
          change_24h:
            data.find((coin) => coin.id === "tether")
              ?.price_change_percentage_24h || "N/A",
        },
        Tron: {
          change_24h:
            data.find((coin) => coin.id === "tron")
              ?.price_change_percentage_24h || "N/A",
        },
        Dogecoin: {
          change_24h:
            data.find((coin) => coin.id === "dogecoin")
              ?.price_change_percentage_24h || "N/A",
        },
        Solana: {
          change_24h:
            data.find((coin) => coin.id === "solana")
              ?.price_change_percentage_24h || "N/A",
        },
        XRP: {
          change_24h:
            data.find((coin) => coin.id === "ripple")
              ?.price_change_percentage_24h || "N/A",
        },
        Cardano: {
          change_24h:
            data.find((coin) => coin.id === "cardano")
              ?.price_change_percentage_24h || "N/A",
        },
        Avalanche: {
          change_24h:
            data.find((coin) => coin.id === "avalanche-2")
              ?.price_change_percentage_24h || "N/A",
        },
        Shiba: {
          change_24h:
            data.find((coin) => coin.id === "shiba-inu")
              ?.price_change_percentage_24h || "N/A",
        },
        Chainlink: {
          change_24h:
            data.find((coin) => coin.id === "chainlink")
              ?.price_change_percentage_24h || "N/A",
        },
        "Bitcoin Cash": {
          change_24h:
            data.find((coin) => coin.id === "bitcoin-cash")
              ?.price_change_percentage_24h || "N/A",
        },
        Litecoin: {
          change_24h:
            data.find((coin) => coin.id === "litecoin")
              ?.price_change_percentage_24h || "N/A",
        },
        Polkadot: {
          change_24h:
            data.find((coin) => coin.id === "polkadot")
              ?.price_change_percentage_24h || "N/A",
        },
      };

      setPrice_change_percent(percents);
    });
  }, []);

  function handleShowMore() {
    if (visibleCount > 8) {
      setVisibleCount(8);
    } else {
      setVisibleCount(visibleCount + 7);
    }
  }

  return (
    <>
      <Logo />

      <section className="crypto">
        <div className="header-section-arz">
          <div className="line line2"></div>
          <p className="title title2">کریپتوکارنسی</p>
        </div>

        <div className="grid-container">
          {coins.slice(0, visibleCount).map((coin, index) => (
            <Cards
              key={index}
              coinName={coin.coinName}
              unit={coin.unit}
              shortened={coin.shortened}
              imageUrl={coin.imageUrl}
              data={data}
              loadingState={loading}
              price_change_percent={price_change_percent}
            />
          ))}
        </div>

        <div className="show-more-less" onClick={handleShowMore}>
          <p className="show-more" id="show-more2">
            {visibleCount > 8 ? "نمایش کمتر" : "نمایش بیشتر"}
          </p>
          <i className={`fa-solid  show-more-icon icon2`}></i>
          <p className="update-show-more">... درحال توسعه</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
