
//find all the image in answer feed,thumbnail and ad feeds and add blurclasses
// var blurImage = function(){
//     $('.answer_body_preview').find("img").addClass('blurimage');
//     $('.ui_layout_thumbnail').addClass('blurthumb');
//     $('.HyperLinkFeedStory ').find("img").addClass('blurimage');
//     $('.hyperlink_image').addClass('blurthumb');
// }

// //find all the image in answer feed,thumbnail and ad feeds and remove blurclasses
// var unblurImage=function(){
//     $('.answer_body_preview').find("img").removeClass('blurimage');
//     $('.ui_layout_thumbnail').removeClass('blurthumb');
//     $('.HyperLinkFeedStory ').find("img").removeClass('blurimage');
//     $('.hyperlink_image').removeClass('blurthumb');
// }

var addListeners= async function(){
    for (var i= 1; i < 6; i++) {
        document.getElementById('ucAddGoal_txtAddGoal').value = "make portfolio video"
        document.getElementById('ucAddGoal_btnAddGoal').click()
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// var removeListeners=function(){
//     $(window).unbind('scroll');
//     $('.ui_qtext_more_link').unbind('click');
//     $('.blurimage').unbind('click');
//     $('.blurthumb').unbind('click');
//     unblurImage();
// }

//message listener for background
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
    if(request.command === 'init'){
        console.log("here")
        addListeners();
    }else{
        // removeListeners();
    }
    sendResponse({result: "success"});
});

//on init perform based on chrome stroage value
// window.onload=function(){  
//     chrome.storage.sync.get('hide', function(data) {
//         if(data.hide){
//             addListeners();
//         }else{
//             removeListeners();
//         } 
//     });
// }
