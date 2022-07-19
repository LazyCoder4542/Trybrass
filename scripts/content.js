fetch("./scripts/JSON/data.json")
    .then(
        function(resp) {
            return resp.json();
        }
    )
    .then(
        function(data) {
            var content = new pageContent(data)
            content.initialize()
        }
    );

var preloadedImages = new Array()
function preloadImg() {
    for (i = 0; i < preloadImg.arguments.length; i++) {
        preloadedImages[i] = new Image()
        preloadedImages[i].src = preloadImg.arguments[i]
    }
}
var preloadedVideos = new Array()
function preloadVid() {
    for (i = 0; i < preloadVid.arguments.length; i++) {
        preloadedVideos[i] = document.createElement('video')
        preloadedVideos[i].src = preloadVid.arguments[i]
    }
}
preloadImg(
    "images/speed.gif",
    "images/security.gif",
    "images/support.gif"
)
preloadVid(
    "videos/Payments.mp4",
    "videos/Invoices.mp4",
    "videos/CashflowSupport.mp4",
    "videos/Integrations.mp4",
    "videos/CashflowSupport.mp4"
)
console.log(preloadedImages)
console.log(preloadedVideos)

class pageContent {
    constructor(data) {
        this.data = data
    }
    initialize() {
        let self = this
        console.log(this.data)
        this.videosNeeds(0)
        this.testimonials(0)
        $('#needs #scroll-navigation span').each(
            function (index) {
                $(this).click(function() {
                    //$(this).siblings().removeClass('active')
                    //$(this).addClass('active');
                    self.videosNeeds(index)
                })
            }
        );
    }
    videosNeeds(i) {
        let data = this.data["video-slide"][i]
        $('#needs .videos video')[0].src = data
        $('#needs #current-video')[0].innerHTML = $(`#needs #scroll-navigation-desktop span:nth-child(${i + 1})`)[0].innerHTML
        $('#needs #scroll-navigation span').removeClass('active')
        $(`#needs #scroll-navigation span:nth-child(${i + 1})`).addClass('active')
    }
    testimonials(i) {
        let data = this.data["testimonials"][i]
        $('#testimonial-image')[0].src = data["testimonial-image"]
        $('#testimony')[0].innerText = data["testimony"]
        $('#testimonial-name')[0].innerText = data["testimonial-name"]
        $('#company-icon')[0].src = data["company-icon"]

    }
}