# Pic-Sure!

Pic-Sure is an image sharing single page application.
It is built with a Rails backend and a React frontend.

## Installation

First, clone the repository. Then setup the backend and frontend.

Backend:
cd into backend directory in your terminal, then run:
```
bundle install
rails db:migrate
rails s
```

This will start a rails server on http://localhost/3001

(Note, you can run rails db:seed as well to start off with some pre-seeded data)

Frontend:
cd into frontend directory in your terminal, then run:
```
npm install
npm run
```

This will start React on http://localhost/3000, navigate here to use app


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)