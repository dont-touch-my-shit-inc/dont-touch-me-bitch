dpkg-scanpackages -m ./debfiles > Packages
    gzip -c Packages > Packages.gz
    xz -c Packages > Packages.xz
    bzip2 -c Packages > Packages.bz2