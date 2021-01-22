# Nodejs, Express, Typescript, BoJack Horseman Quotes, USSD Application

[![Project Screenshot-1][product-screenshot-1]](http://www.muguku.co.ke/)

1 . Dial ussd code on gsm handset (mobile phone) e.g `*384*21011#`

2 . Select Option 1 to get a random quote from the netflix show 'BoJack Horseman'

3 . Select Option 2 to exit the application

4 . Select nested option 1 on subsequent menus to generate another random quote

5 . Select nested option 2 on subsequent menus to exit the application

6 . Powered by [AfricasTalking API](https://africastalking.com/)

7 . There're more screenshots in /src/screenshots

## Technologies

- [Nodejs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [ngrok](https://ngrok.com/)

## Installation & Usage

clone, install dependencies, run in dev, build for prod

N/B: If you need to run on dev tunnel localhost/port to the internet with [ngrok](https://ngrok.com/)

```bash
git clone https://github.com/machariamuguku/bojack_horseman_ussd_nodejs_typescript.git

cd bojack_horseman_ussd_nodejs_typescript

# Dev

yarn #Install dependencies

yarn dev #Run the app on dev mode

./ngrok http 8000 # Tunnel port to internet via ngrok

# Prod

yarn build # Build for prod

cd ./build && node index.js # Run prod build locally
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

[product-screenshot-1]: src/screenshots/3.png
