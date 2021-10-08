# first-js

### Cypress POC

- Clone & Install
  
```bash
git clone https://github.com/danrusu/first-js.git

cd first-js

npm install
```

- Open Cypress UI

```bash
yarn dev
#OR
npm run dev
#OR
npx cypress open
```

- Run Cypress tests 
```bash
yarn test
#OR
npm test
#OR
npx cypress run --browser chrome
#OR run single spec
npx cypress run --browser chrome --spec cypress/integration/_poc/qatools.js
```