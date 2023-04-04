window.onload = function () {
    //document.write("HelloJavaScript");
};
$(function () {
    var prev = -1
    $("input").on("click", function () {
        //alert("Hi");
        var image_list = ["https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
                          "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
                          "https://tokyo-kitchen.icook.network/uploads/recipe/cover/355834/b8ce15624e2ddb11.jpg"
                        ]
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem); 

        while(prev == randomChildNumber)
            randomChildNumber = Math.floor(Math.random() * numberOfListItem); 
        prev = randomChildNumber;

        var img = document.getElementById("food")
        $("h1").text($("li").eq(randomChildNumber).text());
        img.setAttribute("src",image_list[randomChildNumber])
    });
});
