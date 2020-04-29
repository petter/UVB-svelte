#!/bin/bash
for file in **/*.jpg
do 
    #echo "${file::-3}"
    cwebp -preset photo "$file" -o "${file::-4}.webp"
done
