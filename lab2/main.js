$(function () { 
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>"); 
    let topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>"+
        `<td>${x+1}</td>`+
        `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString('en-US',{month: '2-digit',day: '2-digit'})}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");
        if((x+1)%2 == 0)
            $("#courseTable tr").eq(x+1).css("background-color", "pink");
        else
            $("#courseTable tr").eq(x+1).css("background-color", "orange");
        
        var $topic = $("#courseTable tr:eq(" + (x+1) + ") td:eq(2)");
        //console.log($topic.text())
        if($topic.text() == '停課')
            $("#courseTable tr").eq(x+1).css("background-color", "gray");
    }

});

$(function(){
    var today = new Date();

    var year = today.getFullYear();
    var month = (today.getMonth()+1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2,'0');
    var formattedDate = year + '-' + month + '-' + day;

    document.getElementById('first_date').value = formattedDate;
});

$(function(){
    $("#update_date_button").on("click",function(){
        var date_value = document.getElementById('first_date').value;
        date_value = date_value.split('-');
        setMonthAndDay(date_value[1],date_value[2]);
        
        // 修改第一列日期
        var $first_td = $("#courseTable tr:eq(1) td:eq(1)");
        var first_date = new Date(Date.parse(date_value[0] + "/" + date_value[1] + "/" + date_value[2]));
        $first_td.text(first_date.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' }));
       
        var date = new Date(first_date);
        $("#courseTable tr:gt(1)").each(function() {
            var $td = $(this).find("td:eq(1)");
            //console.log($td.text());
            var old_date = $td.text();
            //console.log(old_date);
            date.setDate(date.getDate() + 7);
            var new_date = date.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' });
            if (old_date !== "時間") {
                $td.text(new_date);
            }
        });
    });
});
/**/
$(function(){
    $("#update_topic_button").on("click",function(){
        var topic_value = document.getElementById('new_topic').value;
        topic.push(topic_value);
        let topicCount = topic.length;

        var date_value = document.getElementById('first_date').value;
        date_value = date_value.split('-');
        var first_date = new Date(Date.parse(date_value[0] + "/" + date_value[1] + "/" + date_value[2]));
        var date = new Date(first_date);
        date.setDate(date.getDate() + 7*(topicCount-1));
        var new_date = date.toLocaleDateString('zh-TW', {month: '2-digit', day:'2-digit'});

        //console.log(old_date);
        $("#courseTable").append("<tr>"+
        `<td>${topicCount}</td>`+
        `<td>${(new_date)}</td>`+
        `<td>${topic[topicCount-1]}</td>`+
        "</tr>");

        
        var $topic = $("#courseTable tr:eq(" + (topicCount) + ") td:eq(2)");

        if((topicCount)%2 == 0)
            $("#courseTable tr").eq(topicCount).css("background-color", "pink");
        else
            $("#courseTable tr").eq(topicCount).css("background-color", "orange");
        //console.log($topic.text())
        if($topic.text() == '停課')
            $("#courseTable tr").eq(topicCount).css("background-color", "gray");
    });
});