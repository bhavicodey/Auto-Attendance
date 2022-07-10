
Webcam.set({
    width:350,
    height:250,
    image_format : 'png',
    png_quality:100
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("currentTime").value = time;


 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/juEZCkRJI/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
     
  function check()
  {
    Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    object_name = document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
  if (object_name == "Bhavishyaa") {
    document.getElementById("spark").innerHTML = "✅ Marked Present";

  }
  if (object_name == "Suchitra S") {
    document.getElementById("spark").innerHTML = "✅ Marked Present";

  }
  if (object_name == "Mrs Sumathi") {
    document.getElementById("spark").innerHTML = "✅ Marked Present";

  }
 
}