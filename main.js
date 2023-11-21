song1 = "";
song2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;
function setup()
{
    
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.PoseNet(video ,modelLoaded);
    PoseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
        
        leftWristX = results[0].pose.rightWrist.x;
        lefrtWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
    }
}

function preload()
{
    song1 = loadSound("Punch.mp3");
    song2 = loadSound("Rise of the Triad.ogg");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}