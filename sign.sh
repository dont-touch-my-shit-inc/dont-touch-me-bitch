dpkg-scanpackages -m ./debfiles > Packages
    gzip -c Packages > Packages.gz
    xz -c Packages > Packages.xz
    bzip2 -c Packages > Packages.bz2

git add --all
git commit -m "dont touch my shit"
git push