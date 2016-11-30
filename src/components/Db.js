import React from 'react';
import base from '../base';

class db extends React.Component{

  addLocation(place){
    base.post(`places/${place}`, {
      data: { capitol: 'richmond', population: 1000 },
      then(err){
        if(!err){
          alert("place saved!");
        }
      }
    })
  }

  updateLocation(place){
    base.update(`places/${place}`,{
      data: { new_field: 'Hey Im new!' },
      then(err){
        if(!err){
          alert("place updated!");
        }
      }
    })
  }

  addImage(place){

    const storageRef = base.storage().ref();

    const selectedFile = document.getElementById('image_one').files;
    if ( selectedFile.length > 0 ){

      let file = selectedFile[0];

      var metadata = {
        'contentType': file.type
      }

      storageRef.child(`images/${file.name}`).put(file,metadata).then(function(snapshot){
        console.log('uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.metadata.downloadURLs[0];
        console.log(`file available at`, url);

        // maybe do something here to show the user what images they have uploaded.
       //  document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';

       base.update(`places/${place}`,{
         data: { image_one: url },
         then(err){
           if(!err){
             console.log('image url added.')
           }
         }
       })

      }).catch(function(error){
        console.log("Upload Failed: ", error);
      })

    }
  }

  getLocationData(location) {

    base.fetch(`places/${location}`, {
      context: this,
      asArray:true
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log("there was an error", error);
    })

  }

  getAllLocations() {

    fetch('https://mobelux.apispark.net/v1/places', {
    	method: 'get'
    }).then(function(response) {
    	return response.json()
    }).then(function(j) {
      console.log(j);
      this.doSomethingWithData(j)
    }.bind(this));
  }

  doSomethingWithData(d){
      d.map(function(key,index){
        console.log(key.capitol);
        if (key.image === null){
          key.image = "https://firebasestorage.googleapis.com/v0/b/codementor-2cba0.appspot.com/o/images%2F12.jpg?alt=media&token=43a7a83c-6a6d-4a11-ad4a-d8012325f13f";
        }
        document.getElementById("demo").innerHTML += "<img src="+ key.image +" />";
      })
  }

  render(){
    return(
      <div>
        <div className="home-page">
          <div className="home-page__navbuttons">
            <h4 className="avenir navlinks">Firebase Stuff</h4>
            <input  id="image_one" type="file" />
            <button onClick={()=> this.addLocation('virginia')} className="home-page__navbuttons--button avenir">Add Location</button>
            <button onClick={()=> this.updateLocation('middleofNoWhere')} className="home-page__navbuttons--button avenir">Update Location</button>
            <button onClick={()=> this.addImage('middleofNoWhere')} className="home-page__navbuttons--button avenir">Add Image</button>
            <button onClick={()=> this.getLocationData('middleofNoWhere')} className="home-page__navbuttons--button avenir">Get Location Data</button>
            <button onClick={()=> this.getAllLocations()} className="home-page__navbuttons--button avenir">Get All Data</button>
            <div id="demo"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default db
