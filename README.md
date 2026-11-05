# Map Showcase Demo

This project is a demo of how an interactive map made in QGIS can be shown on an ordinary webpage.

## Steps taken

1. Made the map in QGIS and exported it with the qgis2web plugin. This created the `index.html` file, and the `resources`, `layers`, `styles`, `images`, `webfonts` folders which were left unedited.
2. Renamed original `index.html` to `map.html`.
3. Added a new home page named `index.html`.
4. Created `style.css`.
5. Added an ```<iframe>``` to `index.html` to display the exported map within the `index.html`.


To view it, the map needs to be hosted, otherwise the OpenStreetMap basemap is blocked.
([More information](https://wiki.openstreetmap.org/wiki/Blocked_tiles)). To my knowledge this can be done by two ways; Hosting the webpage online or by using the Live Server extension in VS Code. Other methods
and IDEs were not tested. 

All files and folders must be kept together.
