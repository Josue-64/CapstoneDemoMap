var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: 'Map data from <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1 = new ol.format.GeoJSON();
var features_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1 = format_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.readFeatures(json_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.addFeatures(features_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1);
var lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1, 
                style: style_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1,
                popuplayertitle: 'DEMO1 (1) — Maryland — pgmc_county_overburdened_underserved_cleaned',
                interactive: true,
                title: '<img src="styles/legend/DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.png" /> DEMO1 (1) — Maryland — pgmc_county_overburdened_underserved_cleaned'
            });
var format_DEMO11CommunityStewardship_2 = new ol.format.GeoJSON();
var features_DEMO11CommunityStewardship_2 = format_DEMO11CommunityStewardship_2.readFeatures(json_DEMO11CommunityStewardship_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMO11CommunityStewardship_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMO11CommunityStewardship_2.addFeatures(features_DEMO11CommunityStewardship_2);
var lyr_DEMO11CommunityStewardship_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEMO11CommunityStewardship_2, 
                style: style_DEMO11CommunityStewardship_2,
                popuplayertitle: 'DEMO1 (1) — Community Stewardship',
                interactive: true,
                title: '<img src="styles/legend/DEMO11CommunityStewardship_2.png" /> DEMO1 (1) — Community Stewardship'
            });
var format_DEMO11YouthPrograms_3 = new ol.format.GeoJSON();
var features_DEMO11YouthPrograms_3 = format_DEMO11YouthPrograms_3.readFeatures(json_DEMO11YouthPrograms_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMO11YouthPrograms_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMO11YouthPrograms_3.addFeatures(features_DEMO11YouthPrograms_3);
var lyr_DEMO11YouthPrograms_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEMO11YouthPrograms_3, 
                style: style_DEMO11YouthPrograms_3,
                popuplayertitle: 'DEMO1 (1) — Youth Programs',
                interactive: true,
                title: '<img src="styles/legend/DEMO11YouthPrograms_3.png" /> DEMO1 (1) — Youth Programs'
            });
var format_DEMO11LandscapingTraining_4 = new ol.format.GeoJSON();
var features_DEMO11LandscapingTraining_4 = format_DEMO11LandscapingTraining_4.readFeatures(json_DEMO11LandscapingTraining_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMO11LandscapingTraining_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMO11LandscapingTraining_4.addFeatures(features_DEMO11LandscapingTraining_4);
var lyr_DEMO11LandscapingTraining_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEMO11LandscapingTraining_4, 
                style: style_DEMO11LandscapingTraining_4,
                popuplayertitle: 'DEMO1 (1) — Landscaping Training',
                interactive: true,
                title: '<img src="styles/legend/DEMO11LandscapingTraining_4.png" /> DEMO1 (1) — Landscaping Training'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.setVisible(true);lyr_DEMO11CommunityStewardship_2.setVisible(true);lyr_DEMO11YouthPrograms_3.setVisible(true);lyr_DEMO11LandscapingTraining_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1,lyr_DEMO11CommunityStewardship_2,lyr_DEMO11YouthPrograms_3,lyr_DEMO11LandscapingTraining_4];
lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Census Tract ID': 'Census Tract ID', 'COUNTYFP20': 'COUNTYFP20', 'TRACTCE20': 'TRACTCE20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'Percent_Population_Below_Poverty': 'Percent_Population_Below_Poverty', 'Percent of Population below poverty level in 2022': 'Percent of Population below poverty level in 2022', 'Below the Poverty Line Percentile': 'Below the Poverty Line Percentile', 'Non_White_Percent': 'Non_White_Percent', 'Non_White_Percentile': 'Non_White_Percentile', 'POLLUTIONBURDEN': 'POLLUTIONBURDEN', 'POLLUTIONENVIRONMENTAL': 'POLLUTIONENVIRONMENTAL', 'SENSITIVEPOPULATIONS': 'SENSITIVEPOPULATIONS', 'UNDERSERVED': 'UNDERSERVED', 'P_POLLUTIONENVIRONMENTAL': 'P_POLLUTIONENVIRONMENTAL', 'P_UNDERSERVED': 'P_UNDERSERVED', 'EJ Score': 'EJ Score', 'Environmental Justice Percentile': 'Environmental Justice Percentile', 'OVERBURDENED': 'OVERBURDENED', 'P_OVERBURDENED': 'P_OVERBURDENED', 'OVERBURDENED_SUM': 'OVERBURDENED_SUM', 'OVERBURDENED_COMMUNITY': 'OVERBURDENED_COMMUNITY', 'UNDERSERVED_COMMUNITY': 'UNDERSERVED_COMMUNITY', 'Hispanic alone': 'Hispanic alone', '≥15th Percent Limited English Proficiency': '≥15th Percent Limited English Proficiency', });
lyr_DEMO11CommunityStewardship_2.set('fieldAliases', {'fid': 'fid', 'Number': 'Number', 'Project Name': 'Project Name', 'Program Area': 'Program Area', 'Service Area/County': 'Service Area/County', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Project Description': 'Project Description', 'Partners': 'Partners', 'Funder': 'Funder', 'Participants': 'Participants', 'Trees Planted': 'Trees Planted', 'Installations': 'Installations', });
lyr_DEMO11YouthPrograms_3.set('fieldAliases', {'fid': 'fid', 'Number': 'Number', 'Project Name': 'Project Name', 'Program Area': 'Program Area', 'Service Area/County': 'Service Area/County', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Project Description': 'Project Description', 'Partners': 'Partners', 'Funder': 'Funder', 'Participants': 'Participants', 'Trees Planted': 'Trees Planted', 'Installations': 'Installations', });
lyr_DEMO11LandscapingTraining_4.set('fieldAliases', {'fid': 'fid', 'Number': 'Number', 'Project Name': 'Project Name', 'Program Area': 'Program Area', 'Service Area/County': 'Service Area/County', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Project Description': 'Project Description', 'Partners': 'Partners', 'Funder': 'Funder', 'Participants': 'Participants', 'Trees Planted': 'Trees Planted', 'Installations': 'Installations', });
lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Census Tract ID': '', 'COUNTYFP20': '', 'TRACTCE20': '', 'INTPTLAT20': '', 'INTPTLON20': '', 'Percent_Population_Below_Poverty': '', 'Percent of Population below poverty level in 2022': '', 'Below the Poverty Line Percentile': '', 'Non_White_Percent': '', 'Non_White_Percentile': '', 'POLLUTIONBURDEN': '', 'POLLUTIONENVIRONMENTAL': '', 'SENSITIVEPOPULATIONS': '', 'UNDERSERVED': '', 'P_POLLUTIONENVIRONMENTAL': '', 'P_UNDERSERVED': '', 'EJ Score': '', 'Environmental Justice Percentile': '', 'OVERBURDENED': '', 'P_OVERBURDENED': '', 'OVERBURDENED_SUM': '', 'OVERBURDENED_COMMUNITY': '', 'UNDERSERVED_COMMUNITY': '', 'Hispanic alone': '', '≥15th Percent Limited English Proficiency': '', });
lyr_DEMO11CommunityStewardship_2.set('fieldImages', {'fid': 'Hidden', 'Number': 'Hidden', 'Project Name': 'TextEdit', 'Program Area': 'TextEdit', 'Service Area/County': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Project Description': 'TextEdit', 'Partners': 'TextEdit', 'Funder': 'TextEdit', 'Participants': 'Range', 'Trees Planted': 'TextEdit', 'Installations': 'CheckBox', });
lyr_DEMO11YouthPrograms_3.set('fieldImages', {'fid': 'Hidden', 'Number': 'Hidden', 'Project Name': 'TextEdit', 'Program Area': 'TextEdit', 'Service Area/County': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Project Description': 'TextEdit', 'Partners': 'TextEdit', 'Funder': 'TextEdit', 'Participants': 'Range', 'Trees Planted': 'TextEdit', 'Installations': 'CheckBox', });
lyr_DEMO11LandscapingTraining_4.set('fieldImages', {'fid': 'Hidden', 'Number': 'Hidden', 'Project Name': 'TextEdit', 'Program Area': 'TextEdit', 'Service Area/County': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Project Description': 'TextEdit', 'Partners': 'TextEdit', 'Funder': 'TextEdit', 'Participants': 'Range', 'Trees Planted': 'TextEdit', 'Installations': 'CheckBox', });
lyr_DEMO11Marylandpgmc_county_overburdened_underserved_cleaned_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Census Tract ID': 'no label', 'COUNTYFP20': 'no label', 'TRACTCE20': 'no label', 'INTPTLAT20': 'no label', 'INTPTLON20': 'no label', 'Percent_Population_Below_Poverty': 'no label', 'Percent of Population below poverty level in 2022': 'no label', 'Below the Poverty Line Percentile': 'no label', 'Non_White_Percent': 'no label', 'Non_White_Percentile': 'no label', 'POLLUTIONBURDEN': 'no label', 'POLLUTIONENVIRONMENTAL': 'no label', 'SENSITIVEPOPULATIONS': 'no label', 'UNDERSERVED': 'no label', 'P_POLLUTIONENVIRONMENTAL': 'no label', 'P_UNDERSERVED': 'no label', 'EJ Score': 'no label', 'Environmental Justice Percentile': 'no label', 'OVERBURDENED': 'no label', 'P_OVERBURDENED': 'no label', 'OVERBURDENED_SUM': 'no label', 'OVERBURDENED_COMMUNITY': 'no label', 'UNDERSERVED_COMMUNITY': 'no label', 'Hispanic alone': 'no label', '≥15th Percent Limited English Proficiency': 'no label', });
lyr_DEMO11CommunityStewardship_2.set('fieldLabels', {'Project Name': 'no label', 'Program Area': 'header label - always visible', 'Service Area/County': 'inline label - always visible', 'City': 'inline label - always visible', 'Project Description': 'inline label - always visible', 'Partners': 'inline label - visible with data', 'Funder': 'inline label - visible with data', 'Participants': 'inline label - visible with data', 'Trees Planted': 'inline label - visible with data', 'Installations': 'no label', });
lyr_DEMO11YouthPrograms_3.set('fieldLabels', {'Project Name': 'header label - always visible', 'Program Area': 'inline label - always visible', 'Service Area/County': 'inline label - always visible', 'City': 'inline label - always visible', 'Project Description': 'inline label - always visible', 'Partners': 'inline label - visible with data', 'Funder': 'inline label - visible with data', 'Participants': 'inline label - visible with data', 'Trees Planted': 'inline label - visible with data', 'Installations': 'inline label - visible with data', });
lyr_DEMO11LandscapingTraining_4.set('fieldLabels', {'Project Name': 'header label - always visible', 'Program Area': 'inline label - always visible', 'Service Area/County': 'inline label - always visible', 'City': 'inline label - always visible', 'Project Description': 'inline label - always visible', 'Partners': 'inline label - visible with data', 'Funder': 'inline label - visible with data', 'Participants': 'inline label - visible with data', 'Trees Planted': 'inline label - visible with data', 'Installations': 'inline label - visible with data', });
lyr_DEMO11LandscapingTraining_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});