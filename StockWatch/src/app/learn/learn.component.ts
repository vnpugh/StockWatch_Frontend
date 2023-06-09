import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { Learn } from '../models/learn';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})

export class LearnComponent {
  displayedColumns: string[] = ['Term', 'Definition'];
  dataSource: Learn[] = terms;

  constructor(private router: Router) {} 

  navigateToLearnPage() {
    this.router.navigate(['/learn']);
  }
}

  const terms: Learn[] = [
    {
      Term: 'Aggregate',
      Definition: 'A whole formed by combining several (typically disparate) elements.',
    },
    {
      Term: 'American Depository Shares',
      Definition: 'A U.S. dollar-denominated equity share of a foreign-based company available for purchase on an American stock exchange.',
    },
    {
      Term: ' Annual Report',
      Definition: 'Annual reports inform shareholders about the company’s operations. It includes information about its finances like the company’s cash flow and management strategy.',
    },
    {
      Term: 'Arbitrage',
      Definition: 'The simultaneous buying and selling of a security at two different prices in two different markets, resulting in profits without risk.',
    },
    {
      Term: 'Ask',
      Definition: 'This is the quoted ask, or the lowest price an investor will accept to sell a stock.',
    },
    {
      Term: 'Basic Earnings per share',
      Definition: 'The amount of a company\'s earnings allocable to each share of its company\'s stock.',
    },
    {
      Term: 'Bear',
      Definition: 'An investor who believes a stock or the overall market will decline. A bear market is a prolonged period of falling stock prices, usually by 20% or more.',
    },
    {
      Term: 'Bear Market',
      Definition: 'Any market in which prices exhibit a declining trend. For a prolonged period, usually falling by 20% or more.',
    },
    {
      Term: 'Block',
      Definition: '	Large quantity of stock or large dollar amount of bonds held or traded. As a rule of thumb, 10,000 shares or more of stock and $200,000 or more worth of bonds would be described as a block.',
    },
    {
      Term: 'Blue Chip Company',
      Definition: 'Used in the context of general equities. Large and creditworthy company. Company renowned for the quality and wide acceptance of its products or services, and for its ability to make money and pay dividends. Gilt-edged security.',
    },
    {
      Term: 'Bull',
      Definition: '	An investor who thinks the market will rise.',
    },
    {
      Term: 'Bull Market',
      Definition: 'A period of increased stock trading and rising stock prices.',
    },
    {
      Term: 'Broker',
      Definition: 'A firm or person who executes your buy and sell orders for stocks or other securities.',
    },
    {
      Term: 'Close',
      Definition: 'The time the market closes. The major exchanges close at 4 p.m. Eastern, with after-hours trading continuing until 8 p.m.',
    },
    {
      Term: 'Day Trading',
      Definition: 'Day trading is the practice of buying and selling a stock or security within the same trading day. This is my go-to trading strategy.',
    },
    {
      Term: 'Dividend',
      Definition: 'A dividend is a portion of a company’s earnings paid to shareholders quarterly or annually.',
    },
    {
      Term: ' Equity',
      Definition: 'A measure of the cash value of everything a company owns, minus its debts.',
    },
    {
      Term: 'Exchange',
      Definition: 'A place where investors and traders buy and sell stocks. The most well-known exchanges in the U.S. are the New York Stock Exchange (NYSE) and Nasdaq. ',
    },
    {
      Term: 'Growth Stock',
      Definition: 'A stock from a company that is expected to grow significantly in the near future.',
    },
    {
      Term: 'High',
      Definition: 'A place where investors and traders buy and sell stocks. The most well-known exchanges in the U.S. are the New York Stock Exchange (NYSE) and Nasdaq. ',
    },
    {
      Term: 'Index',
      Definition: ' An index is a benchmark used as a reference marker for traders and investors. The Dow Jones Industrial Average (the Dow) and S&P 500 are examples of indexes',
    },
    {
      Term: 'Stock Market',
      Definition: 'A high refers to a stock or index reaching a greater price point than it had previously reached. A high can refer to a daily, weekly, or monthly high. 52-week highs and all-time highs can be bullish signals for traders.',
    },

  ];





