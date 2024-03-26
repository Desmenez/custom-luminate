#!/bin/bash

# This script is used to pull all subtrees in softnetics directory

if [ $# -ne 1 ]; then
    for i in `ls softnetics`; do
        echo "Pulling $i"
        git subtree pull --prefix=softnetics/$i git@github.com:softnetics/$i.git main --squash
    done
    exit 0
fi

# check if directory exists

if [ ! -d "softnetics/$1" ]; then
    echo "Directory softnetics/$1 does not exist"
    exit 1
fi

git subtree pull --prefix=softnetics/$1 git@github.com:softnetics/$1.git main --squash
