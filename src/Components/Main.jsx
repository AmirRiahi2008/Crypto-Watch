import { useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import Cards from "./Cards.jsx";
import { fetchApi } from "../Services/FetchApi.js";
import { coins } from "./Coins.js";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price_change_percent, setPrice_change_percent] = useState([]);
  const [cardsCount, setCardsCount] = useState(8);

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether,tron,dogecoin,solana,ripple,cardano,avalanche-2,shiba-inu,chainlink,bitcoin-cash,litecoin,polkadot&vs_currencies=usd";

    const fetchPrices = async () => {
      try {
        const data = await fetchApi(url);
        const prices = {
          Bitcoin: { USD: data.bitcoin?.usd || "N/A" },
          Ethereum: { USD: data.ethereum?.usd || "N/A" },
          BNB: { USD: data.binancecoin?.usd || "N/A" },
          Tether: { USD: data.tether?.usd || "N/A" },
          Tron: { USD: data.tron?.usd || "N/A" },
          Dogecoin: { USD: data.dogecoin?.usd || "N/A" },
          Solana: { USD: data.solana?.usd || "N/A" },
          XRP: { USD: data.ripple?.usd || "N/A" },
          Cardano: { USD: data.cardano?.usd || "N/A" },
          Avalanche: { USD: data["avalanche-2"]?.usd || "N/A" },
          Shiba: { USD: data["shiba-inu"]?.usd || "N/A" },
          Chainlink: { USD: data.chainlink?.usd || "N/A" },
          "Bitcoin Cash": { USD: data["bitcoin-cash"]?.usd || "N/A" },
          Litecoin: { USD: data.litecoin?.usd || "N/A" },
          Polkadot: { USD: data.polkadot?.usd || "N/A" },
        };
        setData(prices);
      } catch (error) {
        alert(
          "سایت ترکید بعدا تلاش کن شاید جواب بده و اگر نشد بهم ایمیل بزن و اطلاع بده... مرسی ازت 👨‍💻🫡"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether,tron,dogecoin,solana,ripple,cardano,avalanche-2,shiba-inu,chainlink,bitcoin-cash,litecoin,polkadot";

    const fetchPriceChanges = async () => {
      try {
        const data = await fetchApi(url);
        console.log(data);
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
      } catch (error) {
        alert(
          "سایت ترکید بعدا تلاش کن شاید جواب بده و اگر نشد بهم ایمیل بزن و اطلاع بده... مرسی ازت 👨‍💻🫡"
        );
      }
    };

    fetchPriceChanges();
  }, []);
  function handleCardsCountClick(e) {
    if (cardsCount === 8) {
      setCardsCount((c) => c + 7);
    } else {
      setCardsCount(8);
    }
  }
  return (
    <>
      <Logo />

      <section className="crypto">
       <Header/>

        <div className="grid-container">
          {coins.slice(0, cardsCount).map((coin, index) => {
            return (
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
            );
          })}
        </div>

        <div className="show-more-less" onClick={handleCardsCountClick}>
          <p className="show-more" id="show-more2">
            {cardsCount > 8 ? "نمایش کمتر" : "نمایش بیشتر"}
          </p>
          <i className={`fa-solid  show-more-icon icon2`}></i>
          <p className="update-show-more">... درحال توسعه</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
