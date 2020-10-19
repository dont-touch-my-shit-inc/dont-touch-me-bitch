#!/bin/bash
find debfiles -type f -name '*.deb' -delete
rm -r Packages.gz
rm -r Packages.xz
rm -r Packages.bz2
rm -r Packages

