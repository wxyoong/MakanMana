import React from 'react';
import {View , Text , Button , ScrollView , Image}  from 'react-native'
import MapView  from 'react-native-maps';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      lat: null,
      long: null,
      restaurant_data : [] ,
    }

  }



    componentDidMount() {
      console.log('mounted')

      navigator.geolocation.getCurrentPosition(

         (position) => {

           console.log("wokeeey");

           console.log(position);

           this.setState({

             lat: position.coords.latitude,

             long: position.coords.longitude,

             error: null,

           });

                  console.log(this.state)

         },

         (error) => this.setState({ error: error.message }),

         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },

       );

     }

     fetchData = () => {
         const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat},${this.state.long}&radius=1500&type=restaurant&key=AIzaSyA5Wh0i7U7fsLkCG0FWXZr2X6yqegppIcM`
       return (


         fetch(url)
           .then((response) => response.json())
           .then((responseJson) => {
             // for(i = 0 ; i < responseJson.results.length ; i++)
             // console.log(responseJson.results[i].photos[0].photo_reference)
             this.setState({
               restaurant_data:responseJson.results
             })

           })
           .catch((error) => {
             console.error(error)
           })
       )
     }

  render() {

    return (
      <View style={{flex:1}}>

       <MapView
        style={{ flex: 1/2 }}
        initialRegion={{
          latitude: this.state.lat ,
          longitude: this.state.long ,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

              {!!this.state.lat && !!this.state.long && <MapView.Marker

                 coordinate={{"latitude":this.state.lat,"longitude":this.state.long}}

                 title={"Your Location"}

               />}

               {this.state.restaurant_data.map((restaurant)=>{
                 return (
                    <MapView.Marker onPress={MapView.Marker.showCallout} key={restaurant.name} coordinate = {{'latitude':restaurant.geometry.location.lat , 'longitude':restaurant.geometry.location.lng}} >
                      <MapView.Callout>
                        <View>
                          <Text>this is {restaurant.name}</Text>
                          {/* <Image style={{width:100 , height:100}} source = {{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyA5Wh0i7U7fsLkCG0FWXZr2X6yqegppIcM`}} /> */}
                        </View>
                      </MapView.Callout>
                    </MapView.Marker>
                 )

               })
  }
      </MapView>

      <MapView.Callout>
          <Button title='Click Me!' onPress={this.fetchData}/>
      </MapView.Callout>

      <ScrollView style={{flex: 1/2}}>
        {
          this.state.restaurant_data.map ((restaurant) => {
            return (
              <Text >{restaurant.name}</Text>
            )
          })
        }
      </ScrollView>
    </View>
    )
  }
}
