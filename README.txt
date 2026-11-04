# Map Showcase Demo

This project is a demo of how an interactive map made in QGIS can be shown on an ordinary webpage.

## Steps taken

1. Made the map in QGIS and exported it with the qgis2web plugin. This created the `index.html` file, `resources`, `layers`, `styles`, `images` and `webfonts` folders which were left unedited.
2. Created `MapShowcase.html` (the webpage) and `style.css` (its styling).
3. Added an iframe to `MapShowcase.html` to display the exported map:
   ```html
   <iframe src="index.html" title="Project Map"></iframe>
   ```
4. In `style.css`, sized and centered the iframe to match the map:
   ```css
   main iframe {
     width: 1140px;
     max-width: 100%;
     height: 761px;
     margin: 0 auto;
     border: 0;
     display: block;
   }
   ```

To view it, the map needs to be hosted, otherwise the OpenStreetMap basemap is blocked
([more information](https://wiki.openstreetmap.org/wiki/Blocked_tiles)). This was done by
hosting the webpage online or by using the Live Server extension in VS Code. Other methods
and IDEs were not tested. All files and folders must be kept together.