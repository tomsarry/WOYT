# Wasted on Youtube

[![forthebadge](https://forthebadge.com/images/badges/made-with-go.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## General information

Ever wondered how much of your time was spent on YouTube ?

If so you are in luck because I may have a solution for you !

WOYT if a fullStack app that will analyze your youtube history and compute an estimate of the time you spent looking at cute cat videos instead of studying for your degree.

_Note: Use with care, the result can be quite shocking..._

## How to get started

This website needs you to first download the .json file giving you your full youtube history, available [here](https://takeout.google.com/settings/takeout "Google Takeout").
Only select youtube, viewed history, and JSON for the file format.
You can then create the takeout request and will have to wait a few minutes before downloading the folder.

After receiving the email that your information is ready to be downloaded, you can simply download the folder, and extract its content.

Folder downloaded : takeout-YEARMONTHDAY...-001

. \
└── Takeout \
   ├── Youtube and Youtube Music \
   │    └── history \
   │       ├── search-history.json \
   │       └── **watch-history.json** \
   └── archive_browser.html

## Additional Notes

You will not be able to obtain results for the time spent watching videos if you disabled your YouTube history.

But wait, what if you still want to have a look at the project ?

**I got you !** Simply download [this sample youtube history](https://github.com/tomsarry/WOYT/blob/master/src/assets/sample_history.json) and test it on the [website](https://wasted-on-yt.netlify.app/) !
