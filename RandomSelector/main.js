
var path = ['https://sainteat.tw/wp-content/uploads/0cb318da45d2ab4a88db723ed80e11cd.jpg'
, 'https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg'
, 'https://banbi.tw/wp-content/uploads/20190509230042_82.jpg'];

$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    $("img").attr("src",path[randomChildNumber]);
    // if(randomChildNumber==0){
    // $("img").attr("src", "https://tw.savorjapan.com/gg/content_image/t0039_002_20180115022046.jpg");
    // }
    // else if(randomChildNumber==1){
    // $("img").attr("src", "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg");
    // }
    // else if(randomChildNumber==2){
    // $("img").attr("src", "https://banbi.tw/wp-content/uploads/20190509230042_82.jpg");
    // }
});
    });