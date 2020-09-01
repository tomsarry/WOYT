# Wasted on Youtube

## General information

This project is the front-end of WOYT.
The languages I used are react, TypeScript and SASS.

This website needs you to first download the .json file giving you your full youtube history, available [here](https://takeout.google.com/settings/takeout "Google Takeout").
Only select youtube, viewed history, and JSON for the file format.
You can then create the takeout request and will have to wait a few before downloading the file.

After receiving the email that your information is ready to be downloaded, you can simply download the folder, and extract its content.

Folder downloaded : takeout-YEARMONTHDAY...-001

. \
└── Takeout \
   ├── Youtube and Youtube Music \
   │    └── history \
   │       ├── search-history.json \
   │       └── **watch-history.json** \
   └── archive_browser.html
