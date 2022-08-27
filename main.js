Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
    }
    console.log('ml5version',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XohzLo4Up/',model_loaded);
    function model_loaded(){
    console.log("model loaded");
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_date1="The first prediction is"+prediction_1;
        speak_date2="And The second prediction is"+prediction_2;
        utter_this=new SpeechSynthesisUtterance(speak_date1+speak_date2);
        synth.speak(utter_this);
        }
        function Check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,got_results);
        }
        function got_results(error,results)
        {
        if(error){
        console.error(error);}
        else{
        console.log(results);
        document.getElementById("result_")
        }}