# remis-food

nvm install 22
nvm use 22
npm install -g @ionic/cli
ionic start nome-app
cd nome-app
ionic serve

# CAPACITOR
npm install @capacitor/android

npx cap add android

ionic build --prod (cria pasta www de prod)

npx cap sync  (sincroniza wwww com projeto )

npx cap open android

# INTEGRANDO FIREBASE

npm i @angular/fire
