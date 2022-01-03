function Start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MUSwB2XFM/model.json' , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(e){

}