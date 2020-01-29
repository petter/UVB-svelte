ssh root@142.93.235.31 <<EOF
		cd app/UVB-svelte
		pm2 stop all
		git fetch --all
		git reset --hard origin/master
		sed -i 's/link rel="stylesheet" href="index.css?v=DATE"/link rel="stylesheet" href="index.css?v=$(date +%F)"' 
		npm install
		npm run build
		pm2 start __sapper__/build
EOF
