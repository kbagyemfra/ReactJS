#!/usr/bin/env bash

# Input array is read and stored in to my_array variable. 
# You can view the code by pressing > button above. 

function clean_text() {
  typeset -a data=("$@")
  # Write your code here
  
  function lower_case() {
    echo "$1" | tr '[:upper:]' '[:lower:]'
  }
    cleanToken() {
    [[ $1 =~ [^a-z\;,\"] ]]
    }

# if cleanToken ';abc,"'; then
#    echo "not clean token"
# else
#    echo "clean token"
# fi

function exists_in_list() {
    LIST=$1
    DELIMITER=$2
    VALUE=$3
    LIST_WHITESPACES=`echo $LIST | tr "$DELIMITER" " "`
    for x in $LIST_WHITESPACES; do
        if [ "$x" = "$VALUE" ]; then
            return 0
        fi
    done
    return 1
}

    stop_words="of the a by is was for with were in on there this that at be been to or and if then else will would shall should could are am an I we you your me has he she him her them their there"

if exists_in_list "$stop_words" " " their; then
    echo "their is in the list"
else
    echo "their is not in the list"
fi

}



clean_text "On Dec 31st, 2022 we wish you \"Happy New Year\"!"
exit 0