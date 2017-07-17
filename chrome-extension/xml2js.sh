#!/bin/bash

export IFS='
'

echo '
var svatky = {}
'

for MESIC in `seq -w 1 12`
do
	echo "svatky[$MESIC] = {}"
	for DENFILE in `ls ../$MESIC/*.xml`
	do
		DEN=`basename $DENFILE .xml`
		PSI=`cat $DENFILE | grep '<pes>' | sed "s/.*>\(.*\)<.*/\1/" | jq -R -s -c 'split("\n")' | sed 's/,""//'`
  echo "svatky[$MESIC][$DEN] = $PSI"
	done
done
