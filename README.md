Steps for deployement

git pull
npm run build
pm2 kill
pm2 start npm --name "website" -- start
pm2 save

cd mateo.yajure; git pull; npm run build; pm2 kill; pm2 start npm --name "website" -- start; pm2 save