import type { ConfigModel } from '../composables/themes/themes.model'

export const themesApiFixture = (): ConfigModel => ({
    "ogcServers": {
        "Main no WFS": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+no+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+no+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "mapserver",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": false,
            "isSingleTile": false,
            "namespace": null,
            "attributes": null
        },
        "WMS CH topo fr": {
            "url": "https://wms.geo.admin.ch?lang=fr",
            "urlWfs": "https://wms.geo.admin.ch?lang=fr",
            "type": "mapserver",
            "credential": false,
            "imageType": "image/png",
            "wfsSupport": false,
            "isSingleTile": false,
            "namespace": null,
            "attributes": null
        },
        "ArcGIS VD WFS": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=ArcGIS+VD+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=ArcGIS+VD+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "arcgis",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": true,
            "isSingleTile": false,
            "namespace": null,
            "attributes": {}
        },
        "ArcGIS VD noWFS 2": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=ArcGIS+VD+noWFS+2&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=ArcGIS+VD+noWFS+2&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "arcgis",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": false,
            "isSingleTile": false,
            "namespace": null,
            "attributes": null
        },
        "Main PNG": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+PNG&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+PNG&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "mapserver",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": true,
            "isSingleTile": false,
            "namespace": "http://mapserver.gis.umn.edu/mapserver",
            "attributes": {
                "post_office": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "fuel": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "parking": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "many_attributes": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name2": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name3": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name4": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name5": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name6": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "bus_stop": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "accommodation": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "tourism_activity": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "bank": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "place_of_worship": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "sustenance": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "entertainment": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_scale": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_open": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "open": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "autolink_url": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "autolink_email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "cinema": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "point": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "line": {
                    "geom": {
                        "type": "LineStringPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "polygon": {
                    "geom": {
                        "type": "MultiPolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "tinyows": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "floor_slider": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                }
            }
        },
        "Main PNG test": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+PNG+test&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=Main+PNG+test&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "mapserver",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": true,
            "isSingleTile": false,
            "namespace": "http://mapserver.gis.umn.edu/mapserver",
            "attributes": {
                "hotel_label": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "hotel": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "police": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "post_office": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "fuel": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "many_attributes": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name2": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name3": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name4": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name5": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name6": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "bus_stop": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "accommodation": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "information": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "tourism_activity": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "bank": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "place_of_worship": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "sustenance": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "entertainment": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time2": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time_default": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time_default_slider": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time_year_mounth": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_time_mount_year": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_scale": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "osm_open": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "open": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "autolink_url": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "autolink_email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "double",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "timestamp": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "cinema": {
                    "way": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "access": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "aerialway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "amenity": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "barrier": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "bicycle": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "brand": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "covered": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "denomination": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ele": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "foot": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "highway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "layer": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "leisure": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "man_made": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "motorcar": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "natural": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "operator": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "population": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "power": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "place": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "railway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "ref": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "religion": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "shop": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "sport": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "surface": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "tourism": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "waterway": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "wood": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "buildings_query": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "point": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "line": {
                    "geom": {
                        "type": "LineStringPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "polygon": {
                    "geom": {
                        "type": "MultiPolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "kind": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "buildings": {
                    "geom": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "number": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "building": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "tinyows": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "hospitals": {
                    "geom": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "integer",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "link": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "firestations": {
                    "geom": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "display_name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "osm_id": {
                        "type": "integer",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "minOccurs": "0"
                    }
                },
                "places0": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places1": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places2": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places3": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse4": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea4": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places4": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse5": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea5": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads5": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places5": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse6": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea6": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways6": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads6": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places6": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse7": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea7": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways7": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads7": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places7": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places8": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places9": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places10": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places11": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places12": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places13": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places14": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "buildings15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places15": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "buildings16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places16": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "buildings17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places17": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "landuse18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterarea18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "waterways18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "railways18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "roads18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "aeroways18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "buildings18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "places18": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                },
                "floor_slider": {
                    "msGeometry": {
                        "type": "GeometryPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    }
                }
            }
        },
        "QGIS server": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=QGIS+server&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=QGIS+server&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "qgisserver",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": true,
            "isSingleTile": false,
            "namespace": "http://www.qgis.org/gml",
            "attributes": {
                "landuse": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "landuse_ingrp": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "landuse_alias": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true",
                        "alias": "ID Alias"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true",
                        "alias": "Name Alias"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true",
                        "alias": "Type Alias"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_firestations": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_firestations_ingrp": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_firestations_restricted_ingrp": {
                    "geometry": {
                        "type": "PolygonPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_hospitals_ingrp": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "link": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_hospitals": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "link": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "osm_hospitals_restricted_ingrp": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "osm_id": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "email": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "link": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "datetime": {
                        "type": "dateTime",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "date": {
                        "type": "date",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "time": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "points": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "pointscopier": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "points_ingrp": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "pointslabels": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "railways_ingrp": {
                    "geometry": {
                        "type": "LineStringPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "railways": {
                    "geometry": {
                        "type": "LineStringPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                },
                "time_ingrp": {
                    "geometry": {
                        "type": "PointPropertyType",
                        "namespace": "http://www.opengis.net/gml",
                        "minOccurs": "0",
                        "maxOccurs": "1"
                    },
                    "fid": {
                        "type": "int",
                        "namespace": "http://www.w3.org/2001/XMLSchema"
                    },
                    "osm_id": {
                        "type": "long",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "timestamp": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "name": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "type": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    },
                    "geom_4326": {
                        "type": "string",
                        "namespace": "http://www.w3.org/2001/XMLSchema",
                        "nillable": "true"
                    }
                }
            }
        },
        "QGIS server no WFS": {
            "url": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=QGIS+server+no+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "urlWfs": "https://geomapfish-demo-2-7.camptocamp.com/mapserv_proxy?ogcserver=QGIS+server+no+WFS&cache_version=9ae51a7e9c9d47daaff3bda60169c213",
            "type": "qgisserver",
            "credential": true,
            "imageType": "image/png",
            "wfsSupport": false,
            "isSingleTile": false,
            "namespace": null,
            "attributes": null
        }
    },
    "themes": [
        {
            "id": 29,
            "name": "Cadastre",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/cadastre.jpeg",
            "children": [
                {
                    "id": 30,
                    "name": "Cadastre",
                    "children": [
                        {
                            "id": 125,
                            "name": "asitvd.fond_pourortho",
                            "metadata": {
                                "disclaimer": "\u00a9 <a href='http://asitvd.ch'>ASIT VD</a>, Contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "isChecked": true,
                                "legend": true,
                                "maxResolution": 100.0,
                                "minResolution": 1.0
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml",
                            "matrixSet": "2056",
                            "layer": "asitvd.fond_pourortho",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 119,
                            "name": "ch.are.alpenkonvention",
                            "metadata": {
                                "copyable": true,
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "maxResolution": 50.0,
                                "minQueryResolution": 5.0,
                                "minResolution": 10.0,
                                "ogcServer": "WMS CH topo fr",
                                "wmsLayers": "ch.are.alpenkonvention"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr",
                            "matrixSet": "2056_26",
                            "layer": "ch.are.alpenkonvention",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 120,
                            "name": "ch.astra.hauptstrassennetz",
                            "metadata": {
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                "opacity": 0.8,
                                "queryLayers": "ch.astra.ausnahmetransportrouten"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr",
                            "matrixSet": "2056_26",
                            "layer": "ch.astra.hauptstrassennetz",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 260,
                            "name": "Sub group",
                            "children": [
                                {
                                    "id": 115,
                                    "name": "ch.swisstopo.dreiecksvermaschung",
                                    "metadata": {
                                        "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                        "legend": true
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "ch.swisstopo.dreiecksvermaschung",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "ch.swisstopo.dreiecksvermaschung",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "WMS CH topo fr"
                                },
                                {
                                    "id": 118,
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                    "metadata": {
                                        "directedFilterAttributes": [
                                            "Classification_des_roches"
                                        ],
                                        "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                        "legend": true,
                                        "opacity": 0.25
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "WMS CH topo fr"
                                },
                                {
                                    "id": 117,
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                                    "metadata": {
                                        "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                        "legend": true
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "WMS CH topo fr"
                                },
                                {
                                    "id": 116,
                                    "name": "ch.swisstopo.geologie-gravimetrischer_atlas",
                                    "metadata": {
                                        "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                        "legend": true
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "ch.swisstopo.geologie-gravimetrischer_atlas",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "ch.swisstopo.geologie-gravimetrischer_atlas",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": false
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "WMS CH topo fr"
                                }
                            ],
                            "metadata": {
                                "isExpanded": true
                            },
                            "mixed": true
                        }
                    ],
                    "metadata": {
                        "exclusiveGroup": true,
                        "isExpanded": true
                    },
                    "mixed": true
                },
                {
                    "id": 686,
                    "name": "BS WMTS",
                    "children": [
                        {
                            "id": 684,
                            "name": "BS Offizieller Stadtplan farbig 1:12'500",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "SP_StadtplanFarbig_12500",
                            "imageType": "image/png"
                        },
                        {
                            "id": 665,
                            "name": "BS Orthofoto 1990",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto1990",
                            "imageType": "image/png"
                        },
                        {
                            "id": 666,
                            "name": "BS Orthofoto 1995 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto1995Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 667,
                            "name": "BS Orthofoto 1999 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto1999Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 668,
                            "name": "BS Orthofoto 2001 Juli",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2001Juli",
                            "imageType": "image/png"
                        },
                        {
                            "id": 669,
                            "name": "BS Orthofoto 2002 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2002Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 670,
                            "name": "BS Orthofoto 2005 April",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2005April",
                            "imageType": "image/png"
                        },
                        {
                            "id": 671,
                            "name": "BS Orthofoto 2008 April",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2008April",
                            "imageType": "image/png"
                        },
                        {
                            "id": 672,
                            "name": "BS Orthofoto 2010 April",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2010April",
                            "imageType": "image/png"
                        },
                        {
                            "id": 673,
                            "name": "BS Orthofoto 2012 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2012Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 674,
                            "name": "BS Orthofoto 2012 Juli",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2012Juli",
                            "imageType": "image/png"
                        },
                        {
                            "id": 675,
                            "name": "BS Orthofoto 2015 April",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2015April",
                            "imageType": "image/png"
                        },
                        {
                            "id": 676,
                            "name": "BS Orthofoto 2017 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2017Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 677,
                            "name": "BS True Orthofoto 2017 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_TrueOrthofoto2017Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 678,
                            "name": "BS True Orthofoto 2020 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_TrueOrthofoto2020Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 679,
                            "name": "BS Orthofoto 2020 M\u00e4rz",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_Orthofoto2020Maerz",
                            "imageType": "image/png"
                        },
                        {
                            "id": 680,
                            "name": "BS Orthofoto Aktuell",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "OF_OrthofotoAktuell",
                            "imageType": "image/png"
                        },
                        {
                            "id": 681,
                            "name": "BS Parzellenplan farbig",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "Parzellenplan_Bodenbedeckung_farbig",
                            "imageType": "image/png"
                        },
                        {
                            "id": 682,
                            "name": "BS Parzellenplan grau",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "Parzellenplan_Bodenbedeckung_grau",
                            "imageType": "image/png"
                        },
                        {
                            "id": 683,
                            "name": "BS Parzellenplan schwarz-weiss",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "Parzellenplan_Bodenbedeckung_sw",
                            "imageType": "image/png"
                        },
                        {
                            "id": 685,
                            "name": "BS \u00dcbersichtskarte farbig 1:40'000",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.bs.ch/1.0.0/WMTSCapabilities.xml",
                            "layer": "SU_UebersichtskarteFarbig_40",
                            "imageType": "image/png"
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": true
                }
            ],
            "functionalities": {
                "default_basemap": [
                    "blank"
                ]
            },
            "metadata": {}
        },
        {
            "id": 64,
            "name": "Demo",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/osm.png",
            "children": [
                {
                    "id": 68,
                    "name": "OSM functions mixed",
                    "children": [
                        {
                            "id": 114,
                            "name": "osm_scale",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendRule": "OSM"
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_scale",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_scale",
                                    "minResolutionHint": 0.53,
                                    "maxResolutionHint": 1.41,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.53,
                            "maxResolutionHint": 1.41,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 140,
                            "name": "Layer with very very very very very long name",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "bank",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "bank",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 145,
                            "name": "osm_time",
                            "children": [
                                {
                                    "id": 110,
                                    "name": "osm_time_r_s",
                                    "metadata": {
                                        "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                        "editingAttributesOrder": [
                                            "osm_id",
                                            "name",
                                            "type",
                                            "timestamp"
                                        ],
                                        "identifierAttributeField": "name",
                                        "legend": true,
                                        "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "range",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 143,
                                    "name": "osm_time_v_s",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 144,
                                    "name": "osm_time_v_dp",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "datepicker"
                                    }
                                },
                                {
                                    "id": 126,
                                    "name": "osm_time_r_dp",
                                    "metadata": {
                                        "identifierAttributeField": "name",
                                        "legend": true,
                                        "legendRule": "Dans les temps",
                                        "queryLayers": "5",
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "range",
                                        "widget": "datepicker"
                                    }
                                },
                                {
                                    "id": 177,
                                    "name": "osm_time_r_year_mounth",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_year_mounth",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_year_mounth",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-01-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "year",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "range",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 178,
                                    "name": "osm_time_d_year_mounth",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_year_mounth",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_year_mounth",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-01-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "year",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 179,
                                    "name": "osm_time_r_mounth_year",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_mount_year",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_mount_year",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            1,
                                            0,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "range",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 180,
                                    "name": "osm_time_v_mounth_year",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_mount_year",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_mount_year",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            1,
                                            0,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 184,
                                    "name": "long wms-t layer name name name name name name name",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_mount_year",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_mount_year",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2006-01-01T00:00:00Z",
                                        "maxValue": "2013-12-01T00:00:00Z",
                                        "interval": [
                                            1,
                                            0,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": null,
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 277,
                                    "name": "osm_time_r_dp_default",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_default_slider",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_default_slider",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2010-01-01T00:00:00Z",
                                        "maxValue": "2019-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": "2015-06-01T00:00:00Z",
                                        "maxDefValue": "2017-06-01T00:00:00Z",
                                        "mode": "range",
                                        "widget": "datepicker"
                                    }
                                },
                                {
                                    "id": 278,
                                    "name": "osm_time_r_s_default",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_default_slider",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_default_slider",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2010-01-01T00:00:00Z",
                                        "maxValue": "2019-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": "2015-06-01T00:00:00Z",
                                        "maxDefValue": "2017-06-01T00:00:00Z",
                                        "mode": "range",
                                        "widget": "slider"
                                    }
                                },
                                {
                                    "id": 276,
                                    "name": "osm_time_v_dp_default",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_default",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_default",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2010-01-01T00:00:00Z",
                                        "maxValue": "2019-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": "2015-06-01T00:00:00Z",
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "datepicker"
                                    }
                                },
                                {
                                    "id": 275,
                                    "name": "osm_time_v_s_default",
                                    "metadata": {
                                        "timeAttribute": "timestamp"
                                    },
                                    "dimensions": {},
                                    "type": "WMS",
                                    "layers": "osm_time_default",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "osm_time_default",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "ogcServer": "Main PNG",
                                    "time": {
                                        "minValue": "2010-01-01T00:00:00Z",
                                        "maxValue": "2019-12-01T00:00:00Z",
                                        "interval": [
                                            0,
                                            1,
                                            0,
                                            0
                                        ],
                                        "resolution": "month",
                                        "minDefValue": "2015-06-01T00:00:00Z",
                                        "maxDefValue": null,
                                        "mode": "value",
                                        "widget": "slider"
                                    }
                                }
                            ],
                            "metadata": {},
                            "mixed": true
                        },
                        {
                            "id": 141,
                            "name": "two_layers",
                            "metadata": {
                                "legend": true
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "sustenance,entertainment",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "sustenance",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "entertainment",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 120,
                            "name": "ch.astra.hauptstrassennetz",
                            "metadata": {
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                "opacity": 0.8,
                                "queryLayers": "ch.astra.ausnahmetransportrouten"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr",
                            "matrixSet": "2056_26",
                            "layer": "ch.astra.hauptstrassennetz",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 181,
                            "name": "no_wfs",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main no WFS"
                        },
                        {
                            "id": 119,
                            "name": "ch.are.alpenkonvention",
                            "metadata": {
                                "copyable": true,
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "maxResolution": 50.0,
                                "minQueryResolution": 5.0,
                                "minResolution": 10.0,
                                "ogcServer": "WMS CH topo fr",
                                "wmsLayers": "ch.are.alpenkonvention"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr",
                            "matrixSet": "2056_26",
                            "layer": "ch.are.alpenkonvention",
                            "imageType": "image/jpeg"
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": true
                },
                {
                    "id": 596,
                    "name": "Layers",
                    "children": [
                        {
                            "id": 99,
                            "name": "cinema",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                "queryIconPosition": [
                                    "5"
                                ]
                            },
                            "type": "WMS",
                            "layers": "cinema",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "cinema",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 106,
                            "name": "post_office",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Office de poste",
                                "queryIconPosition": [
                                    "30",
                                    "15"
                                ]
                            },
                            "type": "WMS",
                            "layers": "post_office",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "post_office",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 126,
                            "name": "osm_time_r_dp",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "legend": true,
                                "legendRule": "Dans les temps",
                                "queryLayers": "5",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        },
                        {
                            "id": 137,
                            "name": "Loisirs",
                            "children": [
                                {
                                    "id": 102,
                                    "name": "entertainment",
                                    "metadata": {
                                        "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                        "identifierAttributeField": "display_name",
                                        "legend": true,
                                        "legendRule": "Caf\u00e9s",
                                        "queryIconPosition": [
                                            "30",
                                            "15",
                                            "0"
                                        ]
                                    },
                                    "type": "WMS",
                                    "layers": "entertainment",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "entertainment",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0
                                },
                                {
                                    "id": 107,
                                    "name": "sustenance",
                                    "metadata": {
                                        "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                        "identifierAttributeField": "display_name",
                                        "legend": true,
                                        "legendRule": "Restaurant",
                                        "queryIconPosition": [
                                            "30",
                                            "15",
                                            "0"
                                        ]
                                    },
                                    "type": "WMS",
                                    "layers": "sustenance",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "sustenance",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0
                                }
                            ],
                            "metadata": {},
                            "mixed": false
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 597,
                    "name": "Layers-exclusive",
                    "children": [
                        {
                            "id": 99,
                            "name": "cinema",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                "queryIconPosition": [
                                    "5"
                                ]
                            },
                            "type": "WMS",
                            "layers": "cinema",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "cinema",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 106,
                            "name": "post_office",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Office de poste",
                                "queryIconPosition": [
                                    "30",
                                    "15"
                                ]
                            },
                            "type": "WMS",
                            "layers": "post_office",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "post_office",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 126,
                            "name": "osm_time_r_dp",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "legend": true,
                                "legendRule": "Dans les temps",
                                "queryLayers": "5",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        },
                        {
                            "id": 137,
                            "name": "Loisirs",
                            "children": [
                                {
                                    "id": 102,
                                    "name": "entertainment",
                                    "metadata": {
                                        "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                        "identifierAttributeField": "display_name",
                                        "legend": true,
                                        "legendRule": "Caf\u00e9s",
                                        "queryIconPosition": [
                                            "30",
                                            "15",
                                            "0"
                                        ]
                                    },
                                    "type": "WMS",
                                    "layers": "entertainment",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "entertainment",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0
                                },
                                {
                                    "id": 107,
                                    "name": "sustenance",
                                    "metadata": {
                                        "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                        "identifierAttributeField": "display_name",
                                        "legend": true,
                                        "legendRule": "Restaurant",
                                        "queryIconPosition": [
                                            "30",
                                            "15",
                                            "0"
                                        ]
                                    },
                                    "type": "WMS",
                                    "layers": "sustenance",
                                    "imageType": "image/png",
                                    "childLayers": [
                                        {
                                            "name": "sustenance",
                                            "minResolutionHint": 0.0,
                                            "maxResolutionHint": 999999999.0,
                                            "queryable": true
                                        }
                                    ],
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0
                                }
                            ],
                            "metadata": {},
                            "mixed": false
                        }
                    ],
                    "metadata": {
                        "exclusiveGroup": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 66,
                    "name": "Group",
                    "children": [
                        {
                            "id": 109,
                            "name": "osm",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isLegendExpanded": true,
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "osm",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "bank",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "place_of_worship",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "opacity": 0.654321
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 146,
                    "name": "OSM functions",
                    "children": [
                        {
                            "id": 281,
                            "name": "filter_double",
                            "metadata": {
                                "queryLayers": "hotel"
                            },
                            "type": "WMS",
                            "layers": "hotel_filter",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "hotel_label",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "hotel",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 286,
                            "name": "filter_double_all",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "hotel_filter",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "hotel_label",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "hotel",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 126,
                            "name": "osm_time_r_dp",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "legend": true,
                                "legendRule": "Dans les temps",
                                "queryLayers": "5",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 147,
                            "name": "osm_time_r_dp_2",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "identifierAttributeField": "name",
                                "legendRule": "Dans les temps",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time2",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time2",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 114,
                            "name": "osm_scale",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendRule": "OSM"
                            },
                            "type": "WMS",
                            "layers": "osm_scale",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_scale",
                                    "minResolutionHint": 0.53,
                                    "maxResolutionHint": 1.41,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.53,
                            "maxResolutionHint": 1.41
                        },
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 140,
                            "name": "Layer with very very very very very long name",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "bank",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "bank",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 141,
                            "name": "two_layers",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "sustenance,entertainment",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "sustenance",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "entertainment",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 150,
                            "name": "Half query",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "half_query",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "aster",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": false
                                },
                                {
                                    "name": "cinema",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 151,
                            "name": "srtm",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "srtm",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "srtm",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": false
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 152,
                            "name": "aster",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "aster",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "aster",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": false
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 186,
                            "name": "many_attributes",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "many_attributes",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "many_attributes",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "time": {
                        "minValue": "2006-01-01T00:00:00Z",
                        "maxValue": "2013-12-01T00:00:00Z",
                        "interval": [
                            0,
                            1,
                            0,
                            0
                        ],
                        "resolution": "month",
                        "minDefValue": null,
                        "maxDefValue": null,
                        "mode": "range",
                        "widget": "datepicker"
                    },
                    "dimensions": {}
                },
                {
                    "id": 153,
                    "name": "External",
                    "children": [
                        {
                            "id": 115,
                            "name": "ch.swisstopo.dreiecksvermaschung",
                            "metadata": {
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.dreiecksvermaschung",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.dreiecksvermaschung",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 116,
                            "name": "ch.swisstopo.geologie-gravimetrischer_atlas",
                            "metadata": {
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.geologie-gravimetrischer_atlas",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.geologie-gravimetrischer_atlas",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": false
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 117,
                            "name": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                            "metadata": {
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 118,
                            "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "Classification_des_roches"
                                ],
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "opacity": 0.25
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 272,
                            "name": "NPA localite noWFS",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "vd.npa_localite",
                            "imageType": "image/png",
                            "style": "default",
                            "childLayers": [
                                {
                                    "name": "vd.npa_localite",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "ArcGIS VD noWFS 2"
                        },
                        {
                            "id": 274,
                            "name": "ch.bfe.solarenergie-eignung-fassaden",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.bfe.solarenergie-eignung-fassaden",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.bfe.solarenergie-eignung-fassaden",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 26.46,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 26.46,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 273,
                            "name": "ch.bfe.solarenergie-eignung-daecher",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.bfe.solarenergie-eignung-daecher",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.bfe.solarenergie-eignung-daecher",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 26.46,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 26.46,
                            "ogcServer": "WMS CH topo fr"
                        }
                    ],
                    "metadata": {},
                    "mixed": true
                },
                {
                    "id": 174,
                    "name": "Filters mixed",
                    "children": [
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 118,
                            "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "Classification_des_roches"
                                ],
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "opacity": 0.25
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 134,
                            "name": "OSM map",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "ogcServer": "Main PNG",
                                "thumbnail": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/cadastre.jpeg",
                                "wmsLayers": "buildings_query"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://geomapfish-demo-2-7.camptocamp.com/tiles/1.0.0/WMTSCapabilities.xml",
                            "matrixSet": "epsg2056_005",
                            "layer": "map",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 147,
                            "name": "osm_time_r_dp_2",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "identifierAttributeField": "name",
                                "legendRule": "Dans les temps",
                                "timeAttribute": "timestamp"
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_time2",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time2",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG",
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        }
                    ],
                    "metadata": {},
                    "mixed": true
                },
                {
                    "id": 183,
                    "name": "Filters",
                    "children": [
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 147,
                            "name": "osm_time_r_dp_2",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "identifierAttributeField": "name",
                                "legendRule": "Dans les temps",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time2",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time2",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 284,
                    "name": "ESRI no WFS no Geom",
                    "children": [
                        {
                            "id": 272,
                            "name": "NPA localite noWFS",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "vd.npa_localite",
                            "imageType": "image/png",
                            "style": "default",
                            "childLayers": [
                                {
                                    "name": "vd.npa_localite",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "ArcGIS VD noWFS 2"
                        },
                        {
                            "id": 285,
                            "name": "vd.regime_hydrique noWFS",
                            "metadata": {},
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "vd.regime_hydrique",
                            "imageType": "image/png",
                            "style": "default",
                            "childLayers": [
                                {
                                    "name": "vd.regime_hydrique",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 28.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 28.0,
                            "ogcServer": "ArcGIS VD noWFS 2"
                        },
                        {
                            "id": 241,
                            "name": "osm_firestations no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "osm_firestations"
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_firestations",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_firestations",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "QGIS server no WFS"
                        }
                    ],
                    "metadata": {},
                    "mixed": true
                }
            ],
            "functionalities": {
                "default_basemap": [
                    "OSM map"
                ]
            },
            "metadata": {}
        },
        {
            "id": 73,
            "name": "Edit",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/edit.png",
            "children": [
                {
                    "id": 72,
                    "name": "Edit",
                    "children": [
                        {
                            "id": 111,
                            "name": "line",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Line"
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 112,
                            "name": "polygon",
                            "metadata": {
                                "editingAttributesOrder": [
                                    "name",
                                    "kind_id",
                                    "check"
                                ],
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "lastUpdateDateColumn": "last_update_timestamp",
                                "lastUpdateUserColumn": "last_update_user",
                                "legend": true,
                                "legendRule": "Polygon",
                                "readonlyAttributes": [
                                    "datetime",
                                    "kind_id"
                                ]
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 113,
                            "name": "point",
                            "metadata": {
                                "editingEnumerations": {
                                    "kind_id": {
                                        "value": "name2",
                                        "order_by": "to_order"
                                    }
                                },
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Point",
                                "metadataUrl": "https://example.com"
                            },
                            "type": "WMS",
                            "layers": "point",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "point",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 661,
                            "name": "tinyows",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "legend": true,
                                "legendRule": "Tinyows"
                            },
                            "type": "WMS",
                            "layers": "tinyows",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "tinyows",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "disclaimer": "Editing theme",
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 164,
                    "name": "Snapping",
                    "children": [
                        {
                            "id": 154,
                            "name": "point snap",
                            "metadata": {
                                "disclaimer": "Camptocamp",
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "point",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "point",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 155,
                            "name": "line snap",
                            "metadata": {
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 163,
                            "name": "polygon snap",
                            "metadata": {
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 165,
                    "name": "Snapping tollerance",
                    "children": [
                        {
                            "id": 156,
                            "name": "point snap tolerance",
                            "metadata": {
                                "snappingConfig": {
                                    "tolerance": 50
                                }
                            },
                            "type": "WMS",
                            "layers": "point",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "point",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 157,
                            "name": "line snap tolerance",
                            "metadata": {
                                "snappingConfig": {
                                    "tolerance": 50
                                }
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 158,
                            "name": "polygon snap tolerance",
                            "metadata": {
                                "snappingConfig": {
                                    "tolerance": 50
                                }
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 166,
                    "name": "Snapping no edge",
                    "children": [
                        {
                            "id": 159,
                            "name": "line snap no edge",
                            "metadata": {
                                "snappingConfig": {
                                    "edge": false
                                }
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 161,
                            "name": "polygon snap no edge",
                            "metadata": {
                                "snappingConfig": {
                                    "edge": false
                                }
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                },
                {
                    "id": 167,
                    "name": "Snapping no vertex",
                    "children": [
                        {
                            "id": 160,
                            "name": "line snap no vertex",
                            "metadata": {
                                "snappingConfig": {
                                    "vertex": false
                                }
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 162,
                            "name": "polygon snap no vertex",
                            "metadata": {
                                "snappingConfig": {
                                    "vertex": false
                                }
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {
                "disclaimer": "Editing theme"
            }
        },
        {
            "id": 176,
            "name": "Filters",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/filters.png",
            "children": [
                {
                    "id": 174,
                    "name": "Filters mixed",
                    "children": [
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG"
                        },
                        {
                            "id": 118,
                            "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "Classification_des_roches"
                                ],
                                "disclaimer": "<a href=\"http://www.geo.admin.ch/\">Donn\u00e9es publiques de l'infrastructure f\u00e9d\u00e9rale de donn\u00e9es g\u00e9ographiques (IFDG)</a>",
                                "legend": true,
                                "opacity": 0.25
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "WMS CH topo fr"
                        },
                        {
                            "id": 134,
                            "name": "OSM map",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "ogcServer": "Main PNG",
                                "thumbnail": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/cadastre.jpeg",
                                "wmsLayers": "buildings_query"
                            },
                            "dimensions": {},
                            "type": "WMTS",
                            "url": "https://geomapfish-demo-2-7.camptocamp.com/tiles/1.0.0/WMTSCapabilities.xml",
                            "matrixSet": "epsg2056_005",
                            "layer": "map",
                            "imageType": "image/jpeg"
                        },
                        {
                            "id": 147,
                            "name": "osm_time_r_dp_2",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "identifierAttributeField": "name",
                                "legendRule": "Dans les temps",
                                "timeAttribute": "timestamp"
                            },
                            "dimensions": {},
                            "type": "WMS",
                            "layers": "osm_time2",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time2",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "ogcServer": "Main PNG",
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        }
                    ],
                    "metadata": {},
                    "mixed": true
                },
                {
                    "id": 183,
                    "name": "Filters",
                    "children": [
                        {
                            "id": 139,
                            "name": "osm_open",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "osm_id"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "searchAlias": [
                                    "searchalias"
                                ]
                            },
                            "type": "WMS",
                            "layers": "osm_open",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_open",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 147,
                            "name": "osm_time_r_dp_2",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "name",
                                    "type",
                                    "timestamp"
                                ],
                                "enumeratedAttributes": [
                                    "type"
                                ],
                                "identifierAttributeField": "name",
                                "legendRule": "Dans les temps",
                                "timeAttribute": "timestamp"
                            },
                            "type": "WMS",
                            "layers": "osm_time2",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_time2",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0,
                            "time": {
                                "minValue": "2006-01-01T00:00:00Z",
                                "maxValue": "2013-12-01T00:00:00Z",
                                "interval": [
                                    0,
                                    1,
                                    0,
                                    0
                                ],
                                "resolution": "month",
                                "minDefValue": null,
                                "maxDefValue": null,
                                "mode": "range",
                                "widget": "datepicker"
                            }
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        },
        {
            "id": 3,
            "name": "Gestion des eaux",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/gestion_eaux.jpeg",
            "children": [
                {
                    "id": 8,
                    "name": "fuel",
                    "children": [
                        {
                            "id": 124,
                            "name": "fuel",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Station service"
                            },
                            "type": "WMS",
                            "layers": "fuel",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "fuel",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        },
        {
            "id": 168,
            "name": "ObjectEditing",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/edit.png",
            "children": [
                {
                    "id": 169,
                    "name": "ObjectEditing",
                    "children": [
                        {
                            "id": 111,
                            "name": "line",
                            "metadata": {
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Line"
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 112,
                            "name": "polygon",
                            "metadata": {
                                "editingAttributesOrder": [
                                    "name",
                                    "kind_id",
                                    "check"
                                ],
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "lastUpdateDateColumn": "last_update_timestamp",
                                "lastUpdateUserColumn": "last_update_user",
                                "legend": true,
                                "legendRule": "Polygon",
                                "readonlyAttributes": [
                                    "datetime",
                                    "kind_id"
                                ]
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 113,
                            "name": "point",
                            "metadata": {
                                "editingEnumerations": {
                                    "kind_id": {
                                        "value": "name2",
                                        "order_by": "to_order"
                                    }
                                },
                                "identifierAttributeField": "name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Point",
                                "metadataUrl": "https://example.com"
                            },
                            "type": "WMS",
                            "layers": "point",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "point",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 170,
                            "name": "Multi-Polygon Query pas \u00e9ditable mais queryable",
                            "metadata": {
                                "copyable": true
                            },
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 171,
                            "name": "Multi-Polygon Query2 pas \u00e9ditable mais queryable",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "polygon",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "polygon",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 172,
                            "name": "Multi-Line pas \u00e9ditable mais queryable",
                            "metadata": {
                                "copyable": true
                            },
                            "type": "WMS",
                            "layers": "line",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "line",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 173,
                            "name": "Multi-Point pas \u00e9ditable mais queryable",
                            "metadata": {
                                "copyable": true
                            },
                            "type": "WMS",
                            "layers": "point",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "point",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        },
        {
            "id": 4,
            "name": "Patrimoine",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/patrimoine.jpeg",
            "children": [
                {
                    "id": 7,
                    "name": "Patrimoine",
                    "children": [
                        {
                            "id": 100,
                            "name": "bank",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Banques"
                            },
                            "type": "WMS",
                            "layers": "bank",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "bank",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 104,
                            "name": "place_of_worship",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Autre lieux de culte"
                            },
                            "type": "WMS",
                            "layers": "place_of_worship",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "place_of_worship",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        },
        {
            "id": 598,
            "name": "Paysage",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/paysage.jpeg",
            "children": [
                {
                    "id": 9,
                    "name": "Paysage",
                    "children": [
                        {
                            "id": 123,
                            "name": "accommodation",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendRule": "H\u00f4tel"
                            },
                            "type": "WMS",
                            "layers": "alpine_hut",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "accommodation",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 108,
                            "name": "tourism_activity",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Mus\u00e9e"
                            },
                            "type": "WMS",
                            "layers": "tourism_activity",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "tourism_activity",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {
                "disclaimer": "This is a test disclaimer, to test metadata addition."
            }
        },
        {
            "id": 185,
            "name": "Testsearchtheme",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/osm.png",
            "children": [
                {
                    "id": 563,
                    "name": "Gestion des eaux",
                    "children": [
                        {
                            "id": 124,
                            "name": "fuel",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Station service"
                            },
                            "type": "WMS",
                            "layers": "fuel",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "fuel",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 108,
                            "name": "tourism_activity",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Mus\u00e9e"
                            },
                            "type": "WMS",
                            "layers": "tourism_activity",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "tourism_activity",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {
                "location": [
                    "\"Lausanne\": [535436, 155243, 539476, 150443]"
                ],
                "default_theme": [
                    "Cadastre"
                ],
                "default_basemap": [
                    "OSM map"
                ]
            },
            "metadata": {}
        },
        {
            "id": 37,
            "name": "Transport",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/transports.jpeg",
            "children": [
                {
                    "id": 36,
                    "name": "Transport",
                    "children": [
                        {
                            "id": 124,
                            "name": "fuel",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "isChecked": true,
                                "legend": true,
                                "legendRule": "Station service"
                            },
                            "type": "WMS",
                            "layers": "fuel",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "fuel",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 101,
                            "name": "bus_stop",
                            "metadata": {
                                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                                "identifierAttributeField": "display_name",
                                "legend": true,
                                "legendRule": "Arr\u00eat de bus"
                            },
                            "type": "WMS",
                            "layers": "bus_stop",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "bus_stop",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "disclaimer": "Test for a disclaimer to test metadata",
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "Main PNG",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        },
        {
            "id": 221,
            "name": "QGIS server",
            "icon": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/QGIS_logo_2017.png",
            "children": [
                {
                    "id": 235,
                    "name": "QGIS server",
                    "children": [
                        {
                            "id": 237,
                            "name": "points",
                            "metadata": {
                                "legend": true,
                                "legendRule": "points",
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "points",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "points",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 14.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 14.0
                        },
                        {
                            "id": 227,
                            "name": "railways",
                            "metadata": {
                                "hiDPILegendImages": {
                                    "254": "https://geomapfish-demo-2-8.camptocamp.com/static/0/images/railways-600.png"
                                },
                                "legend": true,
                                "legendImage": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/images/railways.png",
                                "legendRule": "railways",
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "railways",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "railways",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 223,
                            "name": "landuse",
                            "metadata": {
                                "legend": true,
                                "legendRule": "landuse",
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "landuse",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "landuse",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 257,
                            "name": "landuse_alias",
                            "metadata": {
                                "legend": true,
                                "legendRule": "landuse_alias"
                            },
                            "type": "WMS",
                            "layers": "landuse_alias",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "landuse_alias",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 247,
                            "name": "points+landuse",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "points,landuse",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "points",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 14.0,
                                    "queryable": true
                                },
                                {
                                    "name": "landuse",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 228,
                            "name": "group",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "group",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "landuse_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "time_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "points_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "railways_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 224,
                            "name": "time",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "time",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "time",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 238,
                            "name": "osm_firestations",
                            "metadata": {
                                "legend": true,
                                "legendRule": "osm_firestations",
                                "snappingConfig": {}
                            },
                            "type": "WMS",
                            "layers": "osm_firestations",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_firestations",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 240,
                            "name": "osm_hospitals",
                            "metadata": {
                                "directedFilterAttributes": [
                                    "date"
                                ],
                                "legend": true,
                                "timeAttribute": "date"
                            },
                            "type": "WMS",
                            "layers": "osm_hospitals",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_hospitals",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 244,
                            "name": "osm_group",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "osm",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_firestations_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "osm_hospitals_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 258,
                            "name": "osm_dual",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "osm_hospitals,osm_firestations",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_hospitals",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "osm_firestations",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 283,
                            "name": "filter_group",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "filter_group",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "pointscopier",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "pointslabels",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 654,
                            "name": "SRTM",
                            "metadata": {},
                            "type": "WMS",
                            "layers": "SRTM",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "SRTM",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {
                        "isExpanded": true
                    },
                    "mixed": false,
                    "ogcServer": "QGIS server",
                    "dimensions": {}
                },
                {
                    "id": 222,
                    "name": "QGIS server no WFS",
                    "children": [
                        {
                            "id": 234,
                            "name": "landuse no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "landuse"
                            },
                            "type": "WMS",
                            "layers": "landuse",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "landuse",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 233,
                            "name": "points no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "points"
                            },
                            "type": "WMS",
                            "layers": "points",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "points",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 14.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 14.0
                        },
                        {
                            "id": 232,
                            "name": "railways no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "railways"
                            },
                            "type": "WMS",
                            "layers": "railways",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "railways",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 248,
                            "name": "points+landuse no wfs",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "points,landuse",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "points",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 14.0,
                                    "queryable": true
                                },
                                {
                                    "name": "landuse",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 56.0
                        },
                        {
                            "id": 236,
                            "name": "group no wfs",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "group",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "landuse_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "time_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "points_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 56.0,
                                    "queryable": true
                                },
                                {
                                    "name": "railways_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 241,
                            "name": "osm_firestations no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "osm_firestations"
                            },
                            "type": "WMS",
                            "layers": "osm_firestations",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_firestations",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 242,
                            "name": "osm_hospitals no wfs",
                            "metadata": {
                                "legend": true,
                                "legendRule": "osm_hospitals"
                            },
                            "type": "WMS",
                            "layers": "osm_hospitals",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_hospitals",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 245,
                            "name": "osm dual no wfs",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "osm_hospitals,osm_firestations",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_hospitals",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "osm_firestations",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        },
                        {
                            "id": 246,
                            "name": "osm group no wfs",
                            "metadata": {
                                "legend": true
                            },
                            "type": "WMS",
                            "layers": "osm",
                            "imageType": "image/png",
                            "childLayers": [
                                {
                                    "name": "osm_firestations_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                },
                                {
                                    "name": "osm_hospitals_ingrp",
                                    "minResolutionHint": 0.0,
                                    "maxResolutionHint": 999999999.0,
                                    "queryable": true
                                }
                            ],
                            "minResolutionHint": 0.0,
                            "maxResolutionHint": 999999999.0
                        }
                    ],
                    "metadata": {},
                    "mixed": false,
                    "ogcServer": "QGIS server no WFS",
                    "dimensions": {}
                }
            ],
            "functionalities": {},
            "metadata": {}
        }
    ],
    "background_layers": [
        {
            "id": 134,
            "name": "OSM map",
            "metadata": {
                "directedFilterAttributes": [
                    "name",
                    "type",
                    "timestamp"
                ],
                "disclaimer": "\u00a9 Les contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                "ogcServer": "Main PNG",
                "thumbnail": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/cadastre.jpeg",
                "wmsLayers": "buildings_query"
            },
            "dimensions": {},
            "type": "WMTS",
            "url": "https://geomapfish-demo-2-7.camptocamp.com/tiles/1.0.0/WMTSCapabilities.xml",
            "matrixSet": "epsg2056_005",
            "layer": "map",
            "imageType": "image/jpeg"
        },
        {
            "id": 175,
            "name": "OSM map WMS",
            "metadata": {
                "thumbnail": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/img/cadastre.jpeg"
            },
            "dimensions": {},
            "type": "WMS",
            "layers": "default",
            "imageType": "image/png",
            "childLayers": [
                {
                    "name": "places0",
                    "minResolutionHint": 117407.28,
                    "maxResolutionHint": 35277758.73,
                    "queryable": false
                },
                {
                    "name": "places1",
                    "minResolutionHint": 58703.64,
                    "maxResolutionHint": 117407.28,
                    "queryable": false
                },
                {
                    "name": "places2",
                    "minResolutionHint": 29351.82,
                    "maxResolutionHint": 58703.64,
                    "queryable": false
                },
                {
                    "name": "places3",
                    "minResolutionHint": 14675.91,
                    "maxResolutionHint": 29351.82,
                    "queryable": false
                },
                {
                    "name": "landuse4",
                    "minResolutionHint": 7337.95,
                    "maxResolutionHint": 14675.91,
                    "queryable": false
                },
                {
                    "name": "waterarea4",
                    "minResolutionHint": 7337.95,
                    "maxResolutionHint": 14675.91,
                    "queryable": false
                },
                {
                    "name": "places4",
                    "minResolutionHint": 7337.95,
                    "maxResolutionHint": 14675.91,
                    "queryable": false
                },
                {
                    "name": "landuse5",
                    "minResolutionHint": 3668.98,
                    "maxResolutionHint": 7337.95,
                    "queryable": false
                },
                {
                    "name": "waterarea5",
                    "minResolutionHint": 3668.98,
                    "maxResolutionHint": 7337.95,
                    "queryable": false
                },
                {
                    "name": "roads5",
                    "minResolutionHint": 3668.98,
                    "maxResolutionHint": 7337.95,
                    "queryable": false
                },
                {
                    "name": "places5",
                    "minResolutionHint": 3668.98,
                    "maxResolutionHint": 7337.95,
                    "queryable": false
                },
                {
                    "name": "landuse6",
                    "minResolutionHint": 1834.49,
                    "maxResolutionHint": 3668.98,
                    "queryable": false
                },
                {
                    "name": "waterarea6",
                    "minResolutionHint": 1834.49,
                    "maxResolutionHint": 3668.98,
                    "queryable": false
                },
                {
                    "name": "waterways6",
                    "minResolutionHint": 1834.49,
                    "maxResolutionHint": 3668.98,
                    "queryable": false
                },
                {
                    "name": "roads6",
                    "minResolutionHint": 1834.49,
                    "maxResolutionHint": 3668.98,
                    "queryable": false
                },
                {
                    "name": "places6",
                    "minResolutionHint": 1834.49,
                    "maxResolutionHint": 3668.98,
                    "queryable": false
                },
                {
                    "name": "landuse7",
                    "minResolutionHint": 917.24,
                    "maxResolutionHint": 1834.49,
                    "queryable": false
                },
                {
                    "name": "waterarea7",
                    "minResolutionHint": 917.24,
                    "maxResolutionHint": 1834.49,
                    "queryable": false
                },
                {
                    "name": "waterways7",
                    "minResolutionHint": 917.24,
                    "maxResolutionHint": 1834.49,
                    "queryable": false
                },
                {
                    "name": "roads7",
                    "minResolutionHint": 917.24,
                    "maxResolutionHint": 1834.49,
                    "queryable": false
                },
                {
                    "name": "places7",
                    "minResolutionHint": 917.24,
                    "maxResolutionHint": 1834.49,
                    "queryable": false
                },
                {
                    "name": "landuse8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "waterarea8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "waterways8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "railways8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "roads8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "places8",
                    "minResolutionHint": 458.62,
                    "maxResolutionHint": 917.24,
                    "queryable": false
                },
                {
                    "name": "landuse9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "waterarea9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "waterways9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "railways9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "roads9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "places9",
                    "minResolutionHint": 229.31,
                    "maxResolutionHint": 458.62,
                    "queryable": false
                },
                {
                    "name": "landuse10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "waterarea10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "waterways10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "railways10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "roads10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "aeroways10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "places10",
                    "minResolutionHint": 114.66,
                    "maxResolutionHint": 229.31,
                    "queryable": false
                },
                {
                    "name": "landuse11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "waterarea11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "waterways11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "railways11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "roads11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "aeroways11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "places11",
                    "minResolutionHint": 57.33,
                    "maxResolutionHint": 114.66,
                    "queryable": false
                },
                {
                    "name": "landuse12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "waterarea12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "waterways12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "railways12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "roads12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "aeroways12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "places12",
                    "minResolutionHint": 28.66,
                    "maxResolutionHint": 57.33,
                    "queryable": false
                },
                {
                    "name": "landuse13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "waterarea13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "waterways13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "railways13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "roads13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "aeroways13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "places13",
                    "minResolutionHint": 14.33,
                    "maxResolutionHint": 28.66,
                    "queryable": false
                },
                {
                    "name": "landuse14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "waterarea14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "waterways14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "railways14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "roads14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "aeroways14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "places14",
                    "minResolutionHint": 7.17,
                    "maxResolutionHint": 14.33,
                    "queryable": false
                },
                {
                    "name": "landuse15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "waterarea15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "waterways15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "railways15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "roads15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "aeroways15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "buildings15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "places15",
                    "minResolutionHint": 3.58,
                    "maxResolutionHint": 7.17,
                    "queryable": false
                },
                {
                    "name": "landuse16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "waterarea16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "waterways16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "railways16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "roads16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "aeroways16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "buildings16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "places16",
                    "minResolutionHint": 1.79,
                    "maxResolutionHint": 3.58,
                    "queryable": false
                },
                {
                    "name": "landuse17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "waterarea17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "waterways17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "railways17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "roads17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "aeroways17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "buildings17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "places17",
                    "minResolutionHint": 0.9,
                    "maxResolutionHint": 1.79,
                    "queryable": false
                },
                {
                    "name": "landuse18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "waterarea18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "waterways18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "railways18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "roads18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "aeroways18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "buildings18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                },
                {
                    "name": "places18",
                    "minResolutionHint": 0.0,
                    "maxResolutionHint": 0.9,
                    "queryable": false
                }
            ],
            "minResolutionHint": 0.0,
            "maxResolutionHint": 35277758.73,
            "ogcServer": "Main PNG"
        },
        {
            "id": 267,
            "name": "orthophoto",
            "children": [
                {
                    "id": 125,
                    "name": "asitvd.fond_pourortho",
                    "metadata": {
                        "disclaimer": "\u00a9 <a href='http://asitvd.ch'>ASIT VD</a>, Contributeurs d\u2019<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
                        "isChecked": true,
                        "legend": true,
                        "maxResolution": 100.0,
                        "minResolution": 1.0
                    },
                    "dimensions": {},
                    "type": "WMTS",
                    "url": "https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml",
                    "matrixSet": "2056",
                    "layer": "asitvd.fond_pourortho",
                    "imageType": "image/jpeg"
                },
                {
                    "id": 268,
                    "name": "ch.swisstopo.swissimage",
                    "metadata": {},
                    "dimensions": {},
                    "type": "WMTS",
                    "url": "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr",
                    "layer": "ch.swisstopo.swissimage",
                    "imageType": "image/png"
                }
            ],
            "metadata": {},
            "mixed": true
        },
        {
            "id": 620,
            "name": "osm_landuse",
            "metadata": {
                "maxResolution": 50.0,
                "ogcServer": "Main PNG",
                "opacity": 0.8,
                "queryLayers": "osm_open"
            },
            "dimensions": {},
            "type": "VectorTiles",
            "style": "https://geomapfish-demo-2-7.camptocamp.com/static/9ae51a7e9c9d47daaff3bda60169c213/mb_styles/osm_landuse.json"
        }
    ],
    "errors": []
} as unknown as ConfigModel)
