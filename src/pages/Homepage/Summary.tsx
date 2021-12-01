function Summary() {
  return (
    <div className="px-4">
      <div>
        <h3>What is cryptocurrency market cap?</h3>
        <p className="py-6">
          Market cap is one of the most popular metrics in the industry that is
          used to gauge the value of an asset. The market cap of a
          cryptocurrency is calculated based on the coin's total circulating
          supply multiplied by the current price. For detailed examples on how
          the market capitalization of a coin is calculated, please view our
          methodology page.
        </p>
      </div>
      <div>
        <h3>How can I use market cap?</h3>
        <p className="py-6">
          As a financial metric, market cap allows you to compare the total
          circulating value of one cryptocurrency with another. Large cap
          cryptocurrencies such as Bitcoin and Ethereum have a market cap of
          over $10 billion. They typically consist of protocols that have
          demonstrated track record, and have a vibrant ecosystem of developers
          maintaining and enhancing the protocol, as well as building new
          projects on top of them. From a trading perspective, large caps would
          typically be hosted on more exchanges, have higher liquidity, and are
          less volatile when compared against other mid and small cap
          cryptocurrencies.
        </p>
        <p className="py-6">
          While market cap is a simple and intuitive comparison metric, it is
          not a perfect point of comparison. Some cryptocurrency projects may
          appear to have inflated market cap through price swings and the
          tokenomics of their supply. As such, it is best to use this metric as
          a reference alongside other metrics such as trading volume, liquidity,
          fully diluted valuation, and fundamentals during your research
          process.
        </p>
      </div>
      <div>
        <h3>Is it possible to check crypto prices on mobile?</h3>
        <p className="py-6">
          Yes, you can check crypto prices on mobile by using the CoinGecko app
          on <span className="text-green-light">iOS</span> and{" "}
          <span className="text-green-light">Android</span>.
        </p>
      </div>
      <div>
        <h3>What are candlesticks in crypto charts?</h3>
        <p className="py-6">
          Candlestick charts give an overview to traders on the price movement
          based on previous trends. The body of the candlestick shows where the
          price of a coin opened and closed for the particular period of time
          which the candlestick represents. If the candle is green in a crypto
          chart, it represents positive changes in price while red candle
          represents negative changes in price. The shadow indicates the high
          price and low price for the period.
        </p>
      </div>
    </div>
  );
}

export default Summary;
