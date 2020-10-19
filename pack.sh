mkdir -p debfiles
pkgs=`ls pkgs | xargs -n 1 basename`;
for entry in $pkgs
do
	dpkg-deb --build pkgs/$entry debfiles/$entry.deb;
done