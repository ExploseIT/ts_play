sudo systemctl daemon-reload

#sudo systemctl stop ts_play.service
# Clear the terminal: Optional, but helps you see new output clearly.
#clear
# Start the service again:
#sudo systemctl start ts_play.service
#
sudo systemctl restart ts_play.service
sudo systemctl status ts_play.service
sudo journalctl -u ts_play.service --no-pager
