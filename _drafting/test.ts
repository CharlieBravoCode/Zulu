  // console.log the content of shit

/*

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.crises).subscribe((res: any) => {
      const fuck_geojson = this.shit(res);
      //const markers = L.markerClusterGroup();
      const geojsonMarkers = L.geoJSON(fuck_geojson, {
        pointToLayer: (feature, latlng) => {
          const marker = L.marker(latlng, {
            icon: L.icon({
              iconSize: [25, 41],
              iconAnchor: [13, 41],
              iconUrl: 'assets/marker-icon.png',
              shadowUrl: 'assets/marker-shadow.png'
            })
          });
          marker.bindPopup(this.popupService.makeEventPopup(feature.properties));
          return marker;
        }
      });
      geojsonMarkers.addTo(map);
    });
  }


// ORIGINAL BACK-Up

makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.crises).subscribe((res: any) => {

      const maxPop = Math.max(...res.features.map(x => x.properties.population), 0);

      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});

        circle.bindPopup(this.popupService.makeEventPopup(c.properties));

        circle.addTo(map);
      }
    });
  }
}


// -----------------------

fuck_geojson = {
    "type": 'Feature' as const,
    "geometry": {
      "type": 'Point' as const,
      "coordinates": [0, 0]
    },
    "properties": {
      "title": "",
      "identifier": "",
      "location": ""
    }
  };


  //------------

  
  makeCapitalCircleMarkers(map: L.Map): void {
    const fuck_geojson = this.shit(this.eventsList);
    const markers = L.markerClusterGroup();
    const geojsonMarkers = L.geoJSON(fuck_geojson, {
      pointToLayer: (feature, latlng) => {
        const marker = L.marker(latlng, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
        marker.bindPopup(this.popupService.makeEventPopup(feature.properties));
        return marker;
      },

    });
    geojsonMarkers.addTo(map);
    map.addLayer(markers);
  }


  // --------------

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.crises).subscribe((res: any) => {
      const marker = L.markerClusterGroup();
      const geojsonMarkers = L.geoJSON(res, {
        pointToLayer: (feature, latlng) => {
          const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
          circle.setStyle({color: 'red'});
          circle.bindPopup(this.popupService.makeEventPopup(feature.properties));
          return circle;
        }
      });
      geojsonMarkers.addTo(map);
    });





    makeCapitalCircleMarkers(map: L.Map, crises: any): void {) {
      const fuck_geojson = this.crises;
      const marker = L.markerClusterGroup();
      const geojsonMarkers = L.geoJSON(fuck_geojson, {
        pointToLayer: (feature, latlng) => {
          const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
          circle.setStyle({color: 'red'});
          circle.bindPopup(this.popupService.makeEventPopup(feature.properties));
          circle.addTo(map);
        }
      });
      marker.addTo(map);
        
    }


    */
   


    // -------------- Code from maker.serivce.ts




  /*
ngOnInit() {
    this.eventsListSubsGeoJSON = this.mapApi
      .getGeoJSON()
      .subscribe(res => {
          this.eventsList = res;
        } ,
        console.error,
        //console.log(JSON.stringify(this.eventsList))
      );
  }
  */
  
/*
  fun() {
    return get('https://localhost:5000/events/geojson').then(res => res.json());
  }
   
  crises  = this.fun();

*/


/*
   
  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.crises).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        
        marker.addTo(map);
      }
    });
  }

*/


  // Convert eventsList into GeoJSON --------------
/*
  shit = (eventsList) => {
    return {
      type: "FeatureCollection" as const,
      features: eventsList.map(x => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [x.longitud, x.latitud]
          },
          properties: {
            title: x.title,
            identifier: x.identifier,
            location: x.location,
          }
        }
      })
    }
  }
  



 getGeoJSON_data() {
  //return this.http.get(this.mapApi.getGeoJSON()).map(res => res.json());
  this.eventsListSubsGeoJSON = this.mapApi
    .getGeoJSON()
    .subscribe(res => {
        this.eventsList = res;
        // this.eventsList = res.json();
      } ,
      console.error,
    );
}



  
 

    //crises: string = '/assets/data/Crisis_Kreis.Steinfurt.geojson';


  ngOnInit(): void {
    const request = this.mapApi.getGeoJSON_new();
    
    request.subscribe(data => {
      this.crises = data;
      console.log(this.crises);
    });
  }



  // crises: string = JSON.stringify(this.getGeoJSON_data());



  crises: any;

  ngOnInit() {
    this.fuckyou();
  }
        

  fuckyou() {
    this.http.get<any>(`${API_URL}/events/geojson`).subscribe({
      next: data => {
        this.crises = data;
        console.log(this.crises);
      },
      error: err => console.error(err),
      complete: () => console.log('done loading crises')
    });
  }
  

  makeCapitalCircleMarkers(map: L.Map): void {
    console.log("this is the fuck")
    console.log(this.crises);
    //this.http.get(JSON.stringify(this.crises)).subscribe((res: any) => {
    this.http.get(this.crises).subscribe((data: any) => {
    const marker = L.markerClusterGroup();
    const geojsonMarkers = L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});
        circle.bindPopup(this.popupService.makeEventPopup(feature.properties));
        return circle;
      }
    });
    geojsonMarkers.addTo(map);
  });      


}