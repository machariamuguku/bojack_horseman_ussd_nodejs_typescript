import { Request, Response } from "express";
import fs from "fs";
import { quotes } from "../resources/boJackQuotes";

// handle the ussd post callback requests
export const ussdCallback = (req: Request, res: Response): void => {
  let { phoneNumber, text } = req.body;

  // get last character from string
  // e.g get 1 from 3*2*1
  let lastTextChar = text.charAt(text.length - 1);

  // init response
  let responseText = "";

  // for blank text (initiate connection)
  if (text === "") {
    responseText = handleEmptyText();
  }
  // for all option 1 (random quote)
  // matches for "1","1*1", "2*1" etc
  else if (lastTextChar === "1") {
    responseText = randomBoJackQuote();
  }
  // for all option 2 (exit)
  // matches for "2","1*2", "2*2" etc
  else if (lastTextChar === "2") {
    responseText = exitConnection(phoneNumber);
  }
  // for wrong options show error
  else {
    responseText = wrongOption();
  }

  // successful request with plain text response
  res.status(200).send(responseText);
};

// handle the ussd notification callback
export const ussdNotification = (req: Request, res: Response): void => {
  // write body to log file
  writeToLogFile(req.body);

  // response successful
  res.status(200).end();
};

// handlers for different cases

// empty text
const handleEmptyText = (): string => {
  // compose response string
  let responseText = "CON Welcome to BoJack Horseman Quotes.\n";
  responseText += "1. Random Bojack Horseman Quote \n";
  responseText += "2. Exit";

  return responseText;
};

// random BoJack Horseman Quote
const randomBoJackQuote = (): string => {
  let randomQuote = generateRandomQuote(quotes);

  // compose response string with quote
  let responseText = "CON Random Bojack Horseman Quote:\n";
  responseText += `${randomQuote} \n`;
  responseText += "1. Another Quote \n";
  responseText += "2. Exit";

  return responseText;
};

// exit
const exitConnection = (phoneNumber: string): string => {
  // compose response string with quote
  let responseText = `END Thank you for using our service ${phoneNumber}`;

  return responseText;
};

// wrong option
const wrongOption = (): string => {
  // compose response string with quote
  let responseText = "CON Wrong Option! Try again:\n";
  responseText += "1. Random Bojack Horseman Quote \n";
  responseText += "2. Exit";

  return responseText;
};

// generate random quote
let generateRandomQuote = (quotesArray: Array<string>): string => {
  // ~~ === Math.floor()
  let randomQuoteIndex = ~~(Math.random() * quotesArray.length);
  let quote = quotesArray[randomQuoteIndex];
  return quote;
};

// write to log file
const writeToLogFile = (content: object): void => {
  // content to string
  let bodyString = JSON.stringify(content);

  // {flags: 'a'} to append
  let logStream = fs.createWriteStream("./src/logs/file.log", {
    flags: "a",
  });

  // write content
  logStream.write(bodyString);
  // move to new line
  logStream.end("\n");
};
