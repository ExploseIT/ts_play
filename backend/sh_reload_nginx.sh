
sudo ln -s /etc/nginx/sites-available/ts_play.conf /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default 
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
sudo systemctl restart ts_play.service