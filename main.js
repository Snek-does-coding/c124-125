nose_x = 0;
nose_y = 0;
function preload()
{
    mustache = loadImage('m.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    image(mustache,nose_x-20,nose_y-12.5,50,50)
}
function takeSnapshot()
{
    save('myFilter.png');
}
function modelLoaded()
{
    console.log('Posenet is ready');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("Nose x ="+results[0].pose.nose.x)
        console.log("Nose y ="+results[0].pose.nose.y)
    }
}
