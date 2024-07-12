# Heystack Server Setup

A breif description of what we have to do

### On AWS

```
- navigate to heystack folder
- npm i
- vim .env ( add envs )
- run npm run build
- make sure pm2 is installed ( sudo npm install pm2 -g )
- pm2 start ecosystem.config.js
- pm2 save
- pm2 startup systemd
- sudo env PATH=$PATH:/home/bitnami/.nvm/versions/node/v16.20.2/bin /home/bitnami/.nvm/versions/node/v16.20.2/lib/node_modules/pm2/bin/pm2 startup systemd -u bitnami --hp /home/bitnami
- pm2 status
- pm2 list
- pm2 logs
- copy files ( cp -a Hey-Stack/. heystack/ ) ( if you have other folder )
```
