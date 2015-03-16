/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'APP_BG_Layer',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','504px','860px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Social_Media_Buttons_HolderCopy3',
                display: 'none',
                type: 'rect',
                rect: ['0px', '705px','485px','111px','auto', 'auto'],
                opacity: 0.79545453190804,
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'testkellyman',
                display: 'none',
                type: 'image',
                rect: ['-68px', '127px','635px','787px','auto', 'auto'],
                clip: ['rect(0px 575px 733.666748046875px 65px)'],
                opacity: 0.21367522106211,
                fill: ["rgba(0,0,0,0)",im+"b68a8cf9e296438da0352b4b9cb7254d.jpg",'0px','0px'],
                transform: [[],[],[],['0.99304']]
            },
            {
                id: 'Testmonies_Banner',
                display: 'none',
                type: 'rect',
                rect: ['0px', '69px','505px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Testmonies_Text',
                display: 'block',
                type: 'text',
                rect: ['79px', '96px','356px','44px','auto', 'auto'],
                text: "Testimonies",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Services_Child_Picture',
                display: 'block',
                type: 'image',
                rect: ['-140px', '140px','865px','594px','auto', 'auto'],
                clip: ['rect(0px 602.5924072265625px 594px 192.5px)'],
                fill: ["rgba(0,0,0,0)",im+"Capture.PNG",'0px','0px'],
                transform: [[],[],[],['1.22818']]
            },
            {
                id: 'Social_Media_Buttons_HolderCopy2',
                display: 'block',
                type: 'rect',
                rect: ['0px', '705px','485px','113px','auto', 'auto'],
                opacity: 0.79545453190804,
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Page_Banner_Generic_Sub_Bar_BlogCopy',
                display: 'none',
                type: 'rect',
                rect: ['0px', '69px','504px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Services_Stack',
                display: 'block',
                type: 'text',
                rect: ['49px', '187px','423px','469px','auto', 'auto'],
                text: "Weddings<br>We like to make your day special and in doing so, all our wedding packages are custom made for you.<br><br>Engagement Sessions<br>We're ready to bring your dream engagement pictures to life and bring something special to your photos. Contact us and let us know what you want to do and we'll make them a reality.<br><br>Commercial/Promotional<br>We're available for commercial photography for schools, gyms, restaurants and other businesses for social media, websites and advertisements. We're excited to work with you and your company. <br><br>For an exact prices for services, we encourage you to contact us directly through out email form or by phone. Just send us over your idea with as much detail as you can give us and we'll get back to you with an exact price. ",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(20,20,154,1.00)", "400", "none", "normal"]
            },
            {
                id: 'testmonies',
                display: 'none',
                type: 'text',
                rect: ['49px', '175px','422px','585px','auto', 'auto'],
                overflow: 'scroll',
                text: "<br>\"Not only is Chris Kellyman a gifted photographer, he is very natural and comfortable around children. My son enjoyed a very fun and relaxed photo session with him and it shows in the fabulous photographs that I now have of him. They absolutely reflect my son's personality and I'll treasure them forever,thank you Kellyman Photography for a great experience!\"<br><br>The Wright Family 2015<br><br>Chris was a real great guy to work with! He's good with a camera and he knows just how to shoot you at the proper angles to give you the best possible product. I loved working with him and highly recommend him to all who need head shots, portraits, or anything else<br><br>Erika S. 2014<br><br>Chris was very professional and able to sooth my anxieties with a calm and reassuring demeanor. He was creative, had an eye for my particular need, and was able to accomplish this in an extremely short time frame. The product was sensational and was used for professional journals and news outlets around the country. I highly and very enthusiastically recommend him.<br><br>Donald G. 2014<br><br>\"Chris is an amazing photographer! It was such a blessing to have him do our wedding pictures! He is so organized, thorough and on top of things that I didn't have to worry about the photography at all.  On the day of the wedding, it was so much fun having him take our pictures. His friendly and fun personality made the picture taking a fun experience.  Chris did a great job capturing all the special moments from the beginning to the end of the day.  The pictures from our wedding are absolutely beautiful! I'm so thankful Kellyman Photography did our wedding pictures.\"<br><br>The Miller's Wedding 2014<br><br>\"Chris Kellyman has been our family photographer every year and captures all of our special moments. He takes a personal interest in all our family members, and it's apparent when we see the photos. Chris has a calming way about him which allows him to capture beautifully natural expressions. He has a talented eye and heart.\"<br><br>The Johnson Family 2013<br><br>\"Working with Kellyman Photography was a wonderful experience. Chris was accommodating, attentive and a talented photographer. As he interacted with each of us he was able to evoke a smile, a smirk, a sigh or much laughter. His photographs captured our family story and that is what I was looking for.\"<br><br>The Robins Family 2013",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(20,20,154,1.00)", "400", "none", "normal"]
            },
            {
                id: 'callus',
                display: 'none',
                type: 'rect',
                rect: ['17px', '82px','auto','auto','auto', 'auto'],
                clip: ['rect(656.0001220703125px 387.31976318359375px 712px 106.51325988769531px)'],
                transform: [[],[],[],['1','1.14286']]
            },
            {
                id: 'Services_Text',
                display: 'block',
                type: 'text',
                rect: ['83px', '96px','356px','44px','auto', 'auto'],
                text: "Services<br>",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Services_Footer_Text',
                display: 'none',
                type: 'text',
                rect: ['50px', '761px','415px','33px','auto', 'auto'],
                opacity: 0.61931818181818,
                text: "Quality, Professionalism, Picture Perfect",
                align: "center",
                font: ['Palatino Linotype, Book Antigua, Palatino, serif', 22, "rgba(255,255,255,1.00)", "800", "none", "italic"]
            },
            {
                id: 'updateholder',
                display: 'none',
                type: 'rect',
                rect: ['-5px', '148px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.04802','1.11223']]
            },
            {
                id: 'Page_Banner_Generic_Sub_Bar_Blog',
                display: 'none',
                type: 'rect',
                rect: ['0px', '69px','505px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Blog_text',
                display: 'block',
                type: 'text',
                rect: ['75px', '96px','356px','44px','auto', 'auto'],
                text: "News Feed",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'viiewgal',
                display: 'block',
                type: 'rect',
                rect: ['-1', '143','auto','auto','auto', 'auto']
            },
            {
                id: 'Gallery_Banner',
                display: 'none',
                type: 'rect',
                rect: ['0px', '69px','505px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Gallery_Text',
                display: 'block',
                type: 'text',
                rect: ['80px', '96px','356px','44px','auto', 'auto'],
                text: "Photo Gallery",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Kellyman_Contact_Child_Image',
                display: 'block',
                type: 'image',
                rect: ['11px', '26px','480px','800px','auto', 'auto'],
                clip: ['rect(106.666748046875px 450.1636657714844px 800px 29.83590316772461px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20Contact%20Child%20Image.png",'0px','0px'],
                transform: [[],[],[],['1.2066','1.08709']]
            },
            {
                id: 'contact',
                display: 'none',
                type: 'rect',
                rect: ['17', '184','auto','auto','auto', 'auto']
            },
            {
                id: 'Social_Media_Buttons_Holder',
                display: 'block',
                type: 'rect',
                rect: ['0px', '705px','485px','160px','auto', 'auto'],
                opacity: 0.79545453190804,
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect2Copy2',
                display: 'block',
                type: 'rect',
                rect: ['328px', '749px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.15126051647323,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect2Copy',
                display: 'block',
                type: 'rect',
                rect: ['213px', '748px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.15126051647323,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect2',
                display: 'block',
                type: 'rect',
                rect: ['99px', '749px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.21008403949878,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Kellyman_Contact_Social_Media_Buttons',
                display: 'block',
                type: 'image',
                rect: ['0px', '-9px','480px','800px','auto', 'auto'],
                clip: ['rect(711.6668701171875px 411.58154296875px 800px 71.26905822753906px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20Contact%20Social%20Media%20Buttons.png",'0px','0px']
            },
            {
                id: 'fbclick',
                display: 'block',
                type: 'rect',
                rect: ['99px', '749px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.21008403949878,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'twitclick',
                display: 'block',
                type: 'rect',
                rect: ['214px', '749px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.21008403949878,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'instaclick',
                display: 'block',
                type: 'rect',
                rect: ['329px', '749px','90px','86px','auto', 'auto'],
                borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                opacity: 0.21008403949878,
                fill: ["rgba(36,29,152,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Page_Banner_Generic_Sub_Bar_Contact',
                display: 'none',
                type: 'rect',
                rect: ['0px', '69px','504px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Contact_Us',
                display: 'block',
                type: 'text',
                rect: ['79px', '96px','356px','44px','auto', 'auto'],
                text: "Contact Us",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Social_Media',
                display: 'block',
                type: 'text',
                rect: ['53px', '717px','416px','44px','auto', 'auto'],
                text: "Follow Kellyman Photography on Social Media",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 18, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Kellyman_About_Trans_Photo',
                display: 'block',
                type: 'image',
                rect: ['12px', '32px','480px','800px','auto', 'auto'],
                clip: ['rect(332.5px 466.7342224121094px 759.2685546875px 13.161495208740234px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20TransPhoto.png",'0px','0px'],
                transform: [[],[],[],['1.1173','1.19317']]
            },
            {
                id: 'Social_Media_Buttons_HolderCopy',
                display: 'block',
                type: 'rect',
                rect: ['0px', '705px','485px','113px','auto', 'auto'],
                opacity: 0.79545453190804,
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Kellyman_About_Text',
                display: 'block',
                type: 'image',
                rect: ['12px', '31px','480px','800px','auto', 'auto'],
                clip: ['rect(341.6666259765625px 480px 781.66650390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20Text.png",'0px','0px'],
                transform: [[],[],[],['1','0.97036']]
            },
            {
                id: 'Kellyman_About_Photo_Children',
                display: 'block',
                type: 'image',
                rect: ['0px', '32px','480px','800px','auto', 'auto'],
                clip: ['rect(111.25px 480px 326.25px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20Photo%20Children.png",'0px','0px'],
                transform: [[],[],[],['1','1.03396']]
            },
            {
                id: 'Kellyman_About_View_Profile_Button',
                display: 'block',
                type: 'image',
                rect: ['21px', '4px','480px','800px','auto', 'auto'],
                clip: ['rect(731.6666259765625px 343.333251953125px 785px 145px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20View%20Profile%20Button.png",'0px','0px']
            },
            {
                id: 'Page_Banner_Generic_Sub_Bar_About',
                display: 'block',
                type: 'rect',
                rect: ['0px', '69px','504px','111px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'About_Us_text',
                display: 'block',
                type: 'text',
                rect: ['83px', '96px','356px','44px','auto', 'auto'],
                text: "About Us",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 22, "rgba(255,255,255,1)", "600", "none", "normal"]
            },
            {
                id: 'Mobile_Home_Mid_HolderCopy',
                display: 'none',
                type: 'image',
                rect: ['12px', '7px','480px','800px','auto', 'auto'],
                clip: ['rect(350px 480px 800px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellymanphotography%20Mobile%20%20Home%20Mid.png",'0px','0px'],
                transform: [[],[],[],['1.05208','1.13333']]
            },
            {
                id: 'Home_Footer_Text',
                display: 'block',
                type: 'text',
                rect: ['37px', '761px','415px','33px','auto', 'auto'],
                opacity: 0.61931818181818,
                text: "Quality, Professionalism, Picture Perfect",
                align: "center",
                font: ['Palatino Linotype, Book Antigua, Palatino, serif', 22, "rgba(255,255,255,1.00)", "400", "none", "italic"]
            },
            {
                id: 'Buttons_Movie',
                display: 'block',
                type: 'rect',
                rect: ['-5', '-6','auto','auto','auto', 'auto']
            },
            {
                id: 'Slide_holder_Trans_BG',
                display: 'block',
                type: 'rect',
                rect: ['0px', '69px','502px','365px','auto', 'auto'],
                opacity: 0.69886366345666,
                fill: ["rgba(19,16,16,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Banner_Image',
                type: 'image',
                rect: ['2px', '0px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 480px 90px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Image.png",'0px','0px'],
                transform: [[],[],[],['1.01042']]
            },
            {
                id: 'content',
                display: 'block',
                type: 'rect',
                rect: ['13px', '77','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.0587']]
            },
            {
                id: 'Logo',
                display: 'block',
                type: 'image',
                rect: ['5px', '0px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 182.5px 122.5px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
            },
            {
                id: 'LogoCopy2',
                display: 'none',
                type: 'image',
                rect: ['5px', '0px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 182.5px 122.5px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
            },
            {
                id: 'Flash_Movie',
                display: 'block',
                type: 'rect',
                rect: ['-185', '-181px','auto','auto','auto', 'auto']
            },
            {
                id: 'Flash1',
                display: 'block',
                type: 'image',
                rect: ['235px', '203px','540px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Flash.png",'0px','0px']
            },
            {
                id: 'Flash2Copy',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','540px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Flash.png",'0px','0px']
            },
            {
                id: 'camera-shutter-click-052',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/camera-shutter-click-052.mp3'],
                preload: 'auto'
            },
            {
                id: 'Login_Button',
                display: 'block',
                type: 'image',
                rect: ['0px', '4px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 480px 67.5px 322.5px)'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"Login%20Button.png",'0px','0px']
            },
            {
                id: 'Kellyman_Back_Button',
                display: 'none',
                type: 'image',
                rect: ['19px', '4px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 480px 84px 330px)'],
                fill: ["rgba(0,0,0,0)",im+"Kellyman%20Back%20Button.png",'0px','0px']
            },
            {
                id: 'Services_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['45px', '474px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Galleries_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['303px', '468px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Contact_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['37px', '578px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'About_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['303px', '578px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Blog_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['37px', '694px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Testimonies_Click_Button',
                display: 'block',
                type: 'rect',
                rect: ['303px', '694px','171px','86px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['28px', '787px','451px','66px','auto', 'auto'],
                text: "The Kellyman Photography Experience<br>We provide the best service for you photography needs<br>",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "500", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'contact',
                symbolName: 'blog2_2',
                autoPlay: {

                }
            },
            {
                id: 'Flash_Movie',
                symbolName: 'Flash_Movie',
                autoPlay: {

                }
            },
            {
                id: 'viiewgal',
                symbolName: 'viiewgal'
            },
            {
                id: 'callus',
                symbolName: 'callus'
            },
            {
                id: 'Buttons_Movie',
                symbolName: 'Buttons_Movie',
                autoPlay: {

                }
            },
            {
                id: 'content',
                symbolName: 'content',
                autoPlay: {

                }
            },
            {
                id: 'updateholder',
                symbolName: 'updateholder',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Gallery_Text}": [
                ["style", "top", '96px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '600'],
                ["style", "left", '80px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif']
            ],
            "${_instaclick}": [
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '329px']
            ],
            "${_Services_Text}": [
                ["style", "top", '96px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '600'],
                ["style", "left", '83px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif']
            ],
            "${_Mobile_Home_Mid_HolderCopy}": [
                ["style", "top", '7px'],
                ["transform", "scaleY", '1.13333'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.05208'],
                ["style", "left", '12px'],
                ["style", "clip", [350,480,800,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Services_Footer_Text}": [
                ["color", "color", 'rgba(13,13,155,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '50px'],
                ["style", "width", '415px'],
                ["style", "top", '683px'],
                ["style", "font-weight", '800'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "height", '33px'],
                ["style", "font-family", '\'Palatino Linotype\', \'Book Antigua\', Palatino, serif'],
                ["style", "font-size", '18px'],
                ["style", "font-style", 'italic']
            ],
            "${_Text2}": [
                ["style", "top", '867px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '28px'],
                ["style", "width", '451px']
            ],
            "${_Blog_text}": [
                ["style", "top", '96px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "font-weight", '600'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["style", "left", '75px'],
                ["style", "display", 'block']
            ],
            "${_Testmonies_Text}": [
                ["style", "top", '96px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "font-weight", '600'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["style", "left", '79px'],
                ["style", "display", 'block']
            ],
            "${_twitclick}": [
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '214px'],
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_callus}": [
                ["style", "top", '162px'],
                ["transform", "scaleY", '1.14286'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "clip", [656.0001220703125,387.31976318359375,712,106.51325988769531], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '17px']
            ],
            "${_viiewgal}": [
                ["style", "top", '-216px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.0007'],
                ["style", "display", 'block']
            ],
            "${_Kellyman_Contact_Child_Image}": [
                ["style", "top", '26px'],
                ["transform", "scaleY", '1.08709'],
                ["transform", "scaleX", '1.20283'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.017045454545455'],
                ["style", "clip", [106.666748046875,450.1636657714844,800,29.83590316772461], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '12px']
            ],
            "${_Banner_Image}": [
                ["style", "top", '-80px'],
                ["style", "left", '12px'],
                ["transform", "scaleX", '1.05459'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,480,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Kellyman_About_Photo_Children}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '1.03396'],
                ["transform", "scaleX", '0.01537'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [111.25,480,326.25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1px']
            ],
            "${_Social_Media_Buttons_HolderCopy}": [
                ["style", "top", '760px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["gradient", "background-image", [270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_RoundRect2Copy}": [
                ["style", "top", '748px'],
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '213px'],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_RoundRect2}": [
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '99px'],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_updateholder}": [
                ["style", "top", '179px'],
                ["transform", "scaleY", '1.11223'],
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["transform", "scaleX", '1.04802']
            ],
            "${_Flash1}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1.7'],
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '52px'],
                ["style", "width", '66px'],
                ["style", "top", '24px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '62px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "display", 'block'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Slide_holder_Trans_BG}": [
                ["color", "background-color", 'rgba(19,16,16,1.00)'],
                ["style", "display", 'block'],
                ["style", "top", '69px'],
                ["style", "height", '365px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '502px']
            ],
            "${_contact}": [
                ["style", "top", '154px'],
                ["transform", "scaleY", '1.04259'],
                ["style", "clip", [0,444,-0.9604926109313965,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "opacity", '0.83760702762848'],
                ["style", "left", '29px'],
                ["transform", "scaleX", '1.1402']
            ],
            "${_Social_Media_Buttons_HolderCopy3}": [
                ["style", "top", '760px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '111px'],
                ["gradient", "background-image", [270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_Flash_Movie}": [
                ["style", "top", '-181px'],
                ["style", "opacity", '0.9400000166893'],
                ["style", "display", 'block']
            ],
            "${_Home_Footer_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '37px'],
                ["style", "width", '415px'],
                ["style", "top", '801px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "font-size", '22px'],
                ["style", "height", '33px']
            ],
            "${_testmonies}": [
                ["color", "color", 'rgba(20,20,154,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '49px'],
                ["style", "width", '422px'],
                ["style", "top", '175px'],
                ["style", "opacity", '0'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '585px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-size", '18px']
            ],
            "${_Buttons_Movie}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.07'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1.06'],
                ["style", "opacity", '0'],
                ["style", "clip", [464.000244140625,485,804,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '9px']
            ],
            "${_Kellyman_About_Text}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '0.97036'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [341.6666259765625,480,781.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '19px']
            ],
            "${_APP_BG_Layer}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '860px'],
                ["style", "width", '504px']
            ],
            "${_testkellyman}": [
                ["transform", "scaleX", '0.99304'],
                ["style", "opacity", '0'],
                ["style", "left", '-68px'],
                ["style", "width", '635px'],
                ["style", "top", '127px'],
                ["style", "height", '787px'],
                ["style", "clip", [0,575,733.666748046875,65], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_Services_Click_Button}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '45px'],
                ["style", "top", '474px']
            ],
            "${_Kellyman_About_View_Profile_Button}": [
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "top", '74px'],
                ["style", "display", 'block'],
                ["style", "clip", [731.6666259765625,343.333251953125,785,145], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_camera-shutter-click-052}": [
                ["property", "volume", '0.24360655737705']
            ],
            "${_Logo}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.98887'],
                ["transform", "scaleX", '0.9264'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,181.166748046875,119.83349609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-185px']
            ],
            "${_Social_Media}": [
                ["style", "font-weight", '600'],
                ["style", "left", '53px'],
                ["style", "font-size", '18px'],
                ["style", "top", '717px'],
                ["style", "width", '416px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "display", 'block'],
                ["style", "opacity", '0']
            ],
            "${_Services_Stack}": [
                ["color", "color", 'rgba(20,20,154,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '49px'],
                ["style", "width", '423px'],
                ["style", "top", '201px'],
                ["style", "font-size", '18px'],
                ["style", "height", '469px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'block'],
                ["style", "opacity", '0']
            ],
            "${_Page_Banner_Generic_Sub_Bar_BlogCopy}": [
                ["style", "top", '-1px'],
                ["style", "height", '113px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "width", '504px']
            ],
            "${_About_Click_Button}": [
                ["style", "top", '578px'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "display", 'block']
            ],
            "${_Galleries_Click_Button}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "top", '468px']
            ],
            "${_Testmonies_Banner}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "height", '123px'],
                ["style", "width", '505px']
            ],
            "${_Page_Banner_Generic_Sub_Bar_Blog}": [
                ["style", "top", '-1px'],
                ["style", "height", '106px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "width", '505px']
            ],
            "${_Login_Button}": [
                ["style", "top", '4px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,480,67.5,322.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '140px']
            ],
            "${_About_Us_text}": [
                ["style", "top", '96px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '600'],
                ["style", "left", '83px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif']
            ],
            "${_Blog_Click_Button}": [
                ["style", "top", '694px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block']
            ],
            "${_Contact_Us}": [
                ["style", "top", '96px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "font-weight", '600'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["style", "left", '79px'],
                ["style", "display", 'block']
            ],
            "${_fbclick}": [
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '99px'],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Flash2Copy}": [
                ["style", "top", '-190px'],
                ["style", "display", 'block'],
                ["style", "-webkit-transform-origin", [48.67,45.96], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '0'],
                ["style", "height", '62px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "left", '-185px'],
                ["style", "width", '66px']
            ],
            "${_Services_Child_Picture}": [
                ["style", "top", '185px'],
                ["transform", "scaleY", '1.37374'],
                ["transform", "scaleX", '1.22818'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,602.5924072265625,594,192.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-140px']
            ],
            "${_LogoCopy2}": [
                ["style", "top", '40px'],
                ["transform", "scaleY", '1.11313'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.07797'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,181.166748046875,119.83349609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '16px']
            ],
            "${_Gallery_Banner}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "height", '123px'],
                ["style", "width", '505px']
            ],
            "${_Kellyman_About_Trans_Photo}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '1.19317'],
                ["transform", "scaleX", '1.1173'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [332.5,466.7342224121094,759.2685546875,13.161495208740234], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '12px']
            ],
            "${_Page_Banner_Generic_Sub_Bar_Contact}": [
                ["style", "top", '-1px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "width", '504px']
            ],
            "${_Page_Banner_Generic_Sub_Bar_About}": [
                ["style", "top", '-1px'],
                ["style", "display", 'block'],
                ["style", "height", '111px'],
                ["style", "opacity", '0'],
                ["style", "width", '504px']
            ],
            "${_Contact_Click_Button}": [
                ["style", "top", '578px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block']
            ],
            "${_Kellyman_Back_Button}": [
                ["style", "top", '4px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,480,84,330], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '19px']
            ],
            "${_RoundRect2Copy2}": [
                ["style", "border-bottom-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '328px'],
                ["style", "border-top-right-radius", [15.33349609375,15.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_content}": [
                ["transform", "scaleX", '1.0587'],
                ["style", "display", 'block'],
                ["style", "left", '13px']
            ],
            "${_Social_Media_Buttons_HolderCopy2}": [
                ["style", "top", '760px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '113px'],
                ["gradient", "background-image", [270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "min-width", '20px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '860px'],
                ["style", "width", '505px']
            ],
            "${_Kellyman_Contact_Social_Media_Buttons}": [
                ["style", "top", '91px'],
                ["transform", "scaleY", '1.03396'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.03472'],
                ["style", "opacity", '0'],
                ["style", "clip", [711.6668701171875,411.58154296875,800,71.26905822753906], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '13px']
            ],
            "${_Social_Media_Buttons_Holder}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["gradient", "background-image", [270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                ["style", "height", '160px'],
                ["style", "top", '700px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_Testimonies_Click_Button}": [
                ["style", "top", '694px'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10962,
            autoPlay: true,
            labels: {
                "Intro": 991,
                "Home": 1865,
                "About": 2125,
                "Contact": 3808,
                "Blog": 5037,
                "Services": 6405,
                "Galleries": 8000,
                "Testimonies": 9192
            },
            timeline: [
                { id: "eid201", tween: [ "style", "${_Kellyman_About_Text}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid1057", tween: [ "transform", "${_Flash1}", "rotateZ", '-6deg', { fromValue: '-6deg'}], position: 1298, duration: 0, easing: "easeOutExpo" },
                { id: "eid219", tween: [ "transform", "${_Kellyman_Contact_Social_Media_Buttons}", "scaleX", '0.93542', { fromValue: '0.03472'}], position: 4629, duration: 295, easing: "easeInOutBack" },
                { id: "eid202", tween: [ "style", "${_Kellyman_About_Photo_Children}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid206", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Contact}", "top", '29px', { fromValue: '-1px'}], position: 3808, duration: 250, easing: "easeInOutBack" },
                { id: "eid905", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "top", '760px', { fromValue: '760px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid255", tween: [ "style", "${_Kellyman_Back_Button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid252", tween: [ "style", "${_Kellyman_Back_Button}", "display", 'none', { fromValue: 'none'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid253", tween: [ "style", "${_Kellyman_Back_Button}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0, easing: "easeInOutBack" },
                { id: "eid213", tween: [ "style", "${_Kellyman_Contact_Child_Image}", "opacity", '1', { fromValue: '0.017045454545455'}], position: 4195, duration: 255, easing: "easeInOutBack" },
                { id: "eid931", tween: [ "style", "${_callus}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid927", tween: [ "style", "${_callus}", "display", 'none', { fromValue: 'none'}], position: 6386, duration: 0, easing: "easeInOutBack" },
                { id: "eid928", tween: [ "style", "${_callus}", "display", 'block', { fromValue: 'none'}], position: 7566, duration: 0, easing: "easeInOutBack" },
                { id: "eid926", tween: [ "style", "${_callus}", "display", 'none', { fromValue: 'block'}], position: 7695, duration: 0, easing: "easeInOutBack" },
                { id: "eid455", tween: [ "transform", "${_Services_Child_Picture}", "scaleY", '1.37374', { fromValue: '1.37374'}], position: 7416, duration: 0, easing: "easeInOutBack" },
                { id: "eid930", tween: [ "style", "${_callus}", "top", '82px', { fromValue: '162px'}], position: 7566, duration: 103, easing: "easeInOutBack" },
                { id: "eid933", tween: [ "style", "${_contact}", "left", '31px', { fromValue: '29px'}], position: 4354, duration: 570, easing: "easeInOutBack" },
                { id: "eid386", tween: [ "style", "${_contact}", "top", '151px', { fromValue: '154px'}], position: 4354, duration: 570, easing: "easeInOutBack" },
                { id: "eid166", tween: [ "style", "${_Slide_holder_Trans_BG}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid456", tween: [ "style", "${_Services_Child_Picture}", "top", '185px', { fromValue: '185px'}], position: 7416, duration: 0, easing: "easeInOutBack" },
                { id: "eid1102", tween: [ "style", "${_instaclick}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid1070", tween: [ "style", "${_Flash_Movie}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0, easing: "easeOutExpo" },
                { id: "eid289", tween: [ "style", "${_Services_Text}", "opacity", '1', { fromValue: '0'}], position: 6555, duration: 245, easing: "easeInOutBack" },
                { id: "eid1103", tween: [ "style", "${_instaclick}", "opacity", '0.19658091103929', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid338", tween: [ "style", "${_Testimonies_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid144", tween: [ "style", "${_Buttons_Movie}", "left", '9px', { fromValue: '9px'}], position: 1763, duration: 0, easing: "easeInOutBack" },
                { id: "eid1100", tween: [ "style", "${_twitclick}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid173", tween: [ "color", "${_APP_BG_Layer}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2125, duration: 0, easing: "easeInOutBack" },
                { id: "eid1085", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "display", 'block', { fromValue: 'none'}], position: 9712, duration: 0, easing: "easeInOutBack" },
                { id: "eid1090", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "display", 'block', { fromValue: 'block'}], position: 9863, duration: 0, easing: "easeInOutBack" },
                { id: "eid1086", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "display", 'none', { fromValue: 'block'}], position: 10962, duration: 0, easing: "easeInOutBack" },
                { id: "eid140", tween: [ "transform", "${_Buttons_Movie}", "scaleX", '1.06186', { fromValue: '1.06'}], position: 1763, duration: 0, easing: "easeInOutBack" },
                { id: "eid398", tween: [ "style", "${_contact}", "opacity", '0.91280591888588', { fromValue: '0.83760702762848'}], position: 4898, duration: 26, easing: "easeInOutBack" },
                { id: "eid1099", tween: [ "style", "${_fbclick}", "opacity", '0.19658091103929', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid195", tween: [ "style", "${_Kellyman_About_Text}", "opacity", '1', { fromValue: '0'}], position: 3185, duration: 250, easing: "easeInOutBack" },
                { id: "eid207", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Contact}", "opacity", '1', { fromValue: '0'}], position: 3808, duration: 250, easing: "easeInOutBack" },
                { id: "eid499", tween: [ "style", "${_Mobile_Home_Mid_HolderCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid500", tween: [ "style", "${_Mobile_Home_Mid_HolderCopy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
                { id: "eid501", tween: [ "style", "${_Mobile_Home_Mid_HolderCopy}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid337", tween: [ "style", "${_Services_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid691", tween: [ "style", "${_Banner_Image}", "left", '12px', { fromValue: '12px'}], position: 1620, duration: 0, easing: "easeInOutBack" },
                { id: "eid317", tween: [ "style", "${_Banner_Image}", "left", '12px', { fromValue: '12px'}], position: 2125, duration: 1563, easing: "easeInBack" },
                { id: "eid893", tween: [ "style", "${_Banner_Image}", "left", '11px', { fromValue: '12px'}], position: 3688, duration: 62, easing: "easeInOutBack" },
                { id: "eid895", tween: [ "style", "${_Banner_Image}", "left", '12px', { fromValue: '11px'}], position: 3750, duration: 58, easing: "easeInOutBack" },
                { id: "eid897", tween: [ "style", "${_Banner_Image}", "left", '11px', { fromValue: '12px'}], position: 3808, duration: 1090, easing: "easeOutBack" },
                { id: "eid1062", tween: [ "subproperty", "${_Flash1}", "filter.saturate", '0', { fromValue: '0'}], position: 1045, duration: 0, easing: "easeOutExpo" },
                { id: "eid883", tween: [ "style", "${_Logo}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutBack" },
                { id: "eid884", tween: [ "style", "${_Logo}", "display", 'block', { fromValue: 'none'}], position: 1107, duration: 0, easing: "easeInOutBack" },
                { id: "eid177", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_About}", "top", '29px', { fromValue: '-1px'}], position: 2125, duration: 250, easing: "easeInOutBack" },
                { id: "eid1091", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 9109, duration: 0, easing: "easeInOutBack" },
                { id: "eid1092", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0, easing: "easeInOutBack" },
                { id: "eid204", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_About}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid1052", tween: [ "style", "${_Flash2Copy}", "width", '68px', { fromValue: '66px'}], position: 991, duration: 147, easing: "easeOutSine" },
                { id: "eid1053", tween: [ "style", "${_Flash2Copy}", "width", '68px', { fromValue: '540px'}], position: 1138, duration: 206, easing: "easeOutSine" },
                { id: "eid1089", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "width", '507px', { fromValue: '507px'}], position: 10860, duration: 0, easing: "easeInOutBack" },
                { id: "eid1088", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "left", '-2px', { fromValue: '-2px'}], position: 10860, duration: 0, easing: "easeInOutBack" },
                { id: "eid1087", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "opacity", '0.92150539911094', { fromValue: '0'}], position: 9397, duration: 220, easing: "easeInOutBack" },
                { id: "eid474", tween: [ "style", "${_Gallery_Banner}", "top", '19px', { fromValue: '-1px'}], position: 8000, duration: 250, easing: "easeInOutBack" },
                { id: "eid1058", tween: [ "transform", "${_Flash1}", "scaleX", '7.02993', { fromValue: '1'}], position: 991, duration: 55, easing: "easeOutExpo" },
                { id: "eid659", tween: [ "style", "${_Services_Footer_Text}", "display", 'block', { fromValue: 'none'}], position: 7669, duration: 0 },
                { id: "eid670", tween: [ "style", "${_Services_Footer_Text}", "display", 'none', { fromValue: 'block'}], position: 7937, duration: 0 },
                { id: "eid668", tween: [ "style", "${_Services_Footer_Text}", "display", 'none', { fromValue: 'none'}], position: 8102, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Banner_Image}", "top", '0px', { fromValue: '-80px'}], position: 0, duration: 250, easing: "easeInOutBack" },
                { id: "eid372", tween: [ "style", "${_contact}", "display", 'block', { fromValue: 'none'}], position: 4354, duration: 0, easing: "easeInOutBack" },
                { id: "eid393", tween: [ "style", "${_contact}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid965", tween: [ "style", "${_viiewgal}", "opacity", '1', { fromValue: '0'}], position: 8632, duration: 368, easing: "easeInOutBack" },
                { id: "eid157", tween: [ "style", "${_Slide_holder_Trans_BG}", "opacity", '0.698863685131073', { fromValue: '0'}], position: 1250, duration: 145, easing: "easeInOutBack" },
                { id: "eid969", tween: [ "style", "${_viiewgal}", "top", '143px', { fromValue: '-216px'}], position: 8632, duration: 368, easing: "easeInOutBack" },
                { id: "eid591", tween: [ "style", "${_updateholder}", "top", '179px', { fromValue: '179px'}], position: 8426, duration: 0, easing: "easeInOutBack" },
                { id: "eid669", tween: [ "style", "${_Services_Stack}", "display", 'none', { fromValue: 'block'}], position: 7937, duration: 0 },
                { id: "eid667", tween: [ "style", "${_Services_Stack}", "display", 'none', { fromValue: 'none'}], position: 8102, duration: 0 },
                { id: "eid283", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "top", '29px', { fromValue: '-1px'}], position: 6405, duration: 250, easing: "easeInOutBack" },
                { id: "eid295", tween: [ "style", "${_Services_Child_Picture}", "opacity", '1', { fromValue: '0'}], position: 6800, duration: 247 },
                { id: "eid467", tween: [ "style", "${_Services_Child_Picture}", "opacity", '0.64102564102564', { fromValue: '1'}], position: 7047, duration: 100, easing: "easeInBack" },
                { id: "eid472", tween: [ "style", "${_Services_Child_Picture}", "opacity", '0.37606820196677', { fromValue: '0.64102564102564'}], position: 7147, duration: 303, easing: "easeOutBack" },
                { id: "eid468", tween: [ "style", "${_Services_Child_Picture}", "opacity", '0.24277320253749', { fromValue: '0.37606820196677'}], position: 7450, duration: 219, easing: "easeInOutBack" },
                { id: "eid181", tween: [ "style", "${_About_Us_text}", "opacity", '1', { fromValue: '0'}], position: 2375, duration: 245, easing: "easeInOutBack" },
                { id: "eid967", tween: [ "transform", "${_viiewgal}", "scaleY", '1', { fromValue: '0.0007'}], position: 8632, duration: 368, easing: "easeInOutBack" },
                { id: "eid1071", tween: [ "style", "${_Flash1}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0, easing: "easeOutExpo" },
                { id: "eid588", tween: [ "style", "${_Testmonies_Banner}", "display", 'block', { fromValue: 'none'}], position: 9192, duration: 0, easing: "easeInOutBack" },
                { id: "eid579", tween: [ "style", "${_Testmonies_Banner}", "display", 'block', { fromValue: 'none'}], position: 9275, duration: 0, easing: "easeInOutBack" },
                { id: "eid286", tween: [ "style", "${_Blog_text}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInOutBack" },
                { id: "eid239", tween: [ "style", "${_Blog_text}", "display", 'none', { fromValue: 'none'}], position: 6683, duration: 0, easing: "easeInOutBack" },
                { id: "eid1045", tween: [ "style", "${_Flash2Copy}", "opacity", '0', { fromValue: '0'}], position: 991, duration: 0 },
                { id: "eid1046", tween: [ "style", "${_Flash2Copy}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 1138, duration: 51, easing: "easeOutSine" },
                { id: "eid1047", tween: [ "style", "${_Flash2Copy}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 1190, duration: 155, easing: "easeOutSine" },
                { id: "eid1065", tween: [ "subproperty", "${_Flash1}", "filter.blur", '0px', { fromValue: '0px'}], position: 991, duration: 0, easing: "easeOutExpo" },
                { id: "eid1066", tween: [ "subproperty", "${_Flash1}", "filter.blur", '0px', { fromValue: '0px'}], position: 1045, duration: 0, easing: "easeOutExpo" },
                { id: "eid1064", tween: [ "transform", "${_Flash1}", "scaleY", '6.54906', { fromValue: '1'}], position: 991, duration: 55, easing: "easeOutExpo" },
                { id: "eid287", tween: [ "style", "${_Services_Text}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInOutBack" },
                { id: "eid290", tween: [ "style", "${_Services_Text}", "display", 'block', { fromValue: 'none'}], position: 6555, duration: 0, easing: "easeInOutBack" },
                { id: "eid288", tween: [ "style", "${_Services_Text}", "display", 'block', { fromValue: 'block'}], position: 6628, duration: 0, easing: "easeInOutBack" },
                { id: "eid291", tween: [ "style", "${_Services_Text}", "display", 'block', { fromValue: 'block'}], position: 6800, duration: 0, easing: "easeInOutBack" },
                { id: "eid465", tween: [ "style", "${_Services_Text}", "display", 'none', { fromValue: 'block'}], position: 7789, duration: 0, easing: "easeInOutBack" },
                { id: "eid1056", tween: [ "subproperty", "${_Flash1}", "filter.contrast", '1.8001018460724', { fromValue: '1.7'}], position: 991, duration: 55, easing: "easeOutExpo" },
                { id: "eid1063", tween: [ "style", "${_Flash1}", "top", '24px', { fromValue: '24px'}], position: 1045, duration: 0, easing: "easeOutExpo" },
                { id: "eid1096", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 9750, duration: 113, easing: "easeInOutBack" },
                { id: "eid174", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.053', { fromValue: '1.05459'}], position: 1620, duration: 245, easing: "easeInBack" },
                { id: "eid891", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.05182', { fromValue: '1.053'}], position: 1865, duration: 260, easing: "easeOutBack" },
                { id: "eid316", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.0538', { fromValue: '1.05182'}], position: 2125, duration: 1563, easing: "easeInBack" },
                { id: "eid892", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.05008', { fromValue: '1.0538'}], position: 3688, duration: 62, easing: "easeInOutBack" },
                { id: "eid894", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.05457', { fromValue: '1.05008'}], position: 3750, duration: 58, easing: "easeInOutBack" },
                { id: "eid896", tween: [ "transform", "${_Banner_Image}", "scaleX", '1.05365', { fromValue: '1.05457'}], position: 3808, duration: 1090, easing: "easeOutBack" },
                { id: "eid240", tween: [ "style", "${_Blog_text}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 245, easing: "easeInOutBack" },
                { id: "eid871", tween: [ "transform", "${_LogoCopy2}", "scaleY", '0.98887', { fromValue: '1.11313'}], position: 1000, duration: 95, easing: "easeInOutBack" },
                { id: "eid864", tween: [ "transform", "${_LogoCopy2}", "scaleY", '0.98887', { fromValue: '0.98887'}], position: 2233, duration: 0, easing: "easeInOutBack" },
                { id: "eid1061", tween: [ "style", "${_Flash1}", "left", '52px', { fromValue: '52px'}], position: 1045, duration: 0, easing: "easeOutExpo" },
                { id: "eid910", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0, easing: "easeInOutBack" },
                { id: "eid906", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid231", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Blog}", "opacity", '1', { fromValue: '0'}], position: 5037, duration: 250, easing: "easeInOutBack" },
                { id: "eid943", tween: [ "style", "${_RoundRect2Copy}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid1051", tween: [ "style", "${_Flash2Copy}", "left", '45px', { fromValue: '-185px'}], position: 1138, duration: 206, easing: "easeOutSine" },
                { id: "eid598", tween: [ "style", "${_Flash_Movie}", "opacity", '0.9400000166893', { fromValue: '0.9400000166893'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid1050", tween: [ "subproperty", "${_Flash2Copy}", "filter.blur", '1px', { fromValue: '1px'}], position: 1138, duration: 0, easing: "easeOutExpo" },
                { id: "eid1048", tween: [ "style", "${_Flash2Copy}", "height", '48px', { fromValue: '62px'}], position: 991, duration: 147, easing: "easeOutSine" },
                { id: "eid1049", tween: [ "style", "${_Flash2Copy}", "height", '48px', { fromValue: '500px'}], position: 1138, duration: 206, easing: "easeOutSine" },
                { id: "eid333", tween: [ "style", "${_Galleries_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Kellyman_About_View_Profile_Button}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid1068", tween: [ "property", "${_camera-shutter-click-052}", "volume", '0.24360655737705', { fromValue: '0.24360655737705'}], position: 991, duration: 0, easing: "easeOutSine" },
                { id: "eid1067", tween: [ "property", "${_camera-shutter-click-052}", "volume", '0', { fromValue: '0.24360655737705'}], position: 1298, duration: 0, easing: "easeOutSine" },
                { id: "eid1044", tween: [ "style", "${_Flash2Copy}", "top", '36px', { fromValue: '-190px'}], position: 1138, duration: 206, easing: "easeOutSine" },
                { id: "eid232", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Blog}", "display", 'block', { fromValue: 'none'}], position: 5037, duration: 0, easing: "easeInOutBack" },
                { id: "eid233", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Blog}", "display", 'none', { fromValue: 'block'}], position: 6229, duration: 0, easing: "easeInOutBack" },
                { id: "eid285", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Blog}", "display", 'none', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeInOutBack" },
                { id: "eid187", tween: [ "transform", "${_Kellyman_About_Photo_Children}", "scaleX", '1.05', { fromValue: '0.01537'}], position: 2620, duration: 380, easing: "easeInOutBack" },
                { id: "eid280", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'none'}], position: 6405, duration: 0, easing: "easeInOutBack" },
                { id: "eid281", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7597, duration: 0, easing: "easeInOutBack" },
                { id: "eid696", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7610, duration: 0, easing: "easeInOutBack" },
                { id: "eid695", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7619, duration: 0, easing: "easeInOutBack" },
                { id: "eid694", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7638, duration: 0, easing: "easeInOutBack" },
                { id: "eid693", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7661, duration: 0, easing: "easeInOutBack" },
                { id: "eid655", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'block', { fromValue: 'block'}], position: 7669, duration: 0 },
                { id: "eid692", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'none', { fromValue: 'block'}], position: 7680, duration: 0, easing: "easeInOutBack" },
                { id: "eid656", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "display", 'none', { fromValue: 'none'}], position: 7978, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Contact_Us}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid211", tween: [ "style", "${_Contact_Us}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutBack" },
                { id: "eid229", tween: [ "style", "${_Contact_Us}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid935", tween: [ "style", "${_Kellyman_Contact_Child_Image}", "left", '12px', { fromValue: '12px'}], position: 4924, duration: 0, easing: "easeInOutBack" },
                { id: "eid872", tween: [ "style", "${_LogoCopy2}", "left", '-13px', { fromValue: '16px'}], position: 1000, duration: 95, easing: "easeInOutBack" },
                { id: "eid869", tween: [ "style", "${_LogoCopy2}", "left", '-13px', { fromValue: '-13px'}], position: 2233, duration: 0, easing: "easeInOutBack" },
                { id: "eid155", tween: [ "style", "${_Home_Footer_Text}", "opacity", '0.6193181872367859', { fromValue: '0'}], position: 1549, duration: 214, easing: "easeInOutBack" },
                { id: "eid593", tween: [ "style", "${_updateholder}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid594", tween: [ "style", "${_updateholder}", "display", 'block', { fromValue: 'none'}], position: 5037, duration: 0, easing: "easeInOutBack" },
                { id: "eid592", tween: [ "style", "${_updateholder}", "display", 'none', { fromValue: 'block'}], position: 6229, duration: 0, easing: "easeInOutBack" },
                { id: "eid586", tween: [ "style", "${_Testmonies_Text}", "opacity", '1', { fromValue: '0'}], position: 9305, duration: 246, easing: "easeInOutBack" },
                { id: "eid901", tween: [ "style", "${_Social_Media}", "opacity", '1', { fromValue: '0'}], position: 4583, duration: 245, easing: "easeInOutBack" },
                { id: "eid942", tween: [ "style", "${_RoundRect2Copy2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid661", tween: [ "color", "${_Services_Footer_Text}", "color", 'rgba(13,13,155,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(13,13,155,1.00)'}], position: 7669, duration: 0 },
                { id: "eid946", tween: [ "style", "${_Kellyman_About_Text}", "top", '32px', { fromValue: '32px'}], position: 3688, duration: 0, easing: "easeInOutBack" },
                { id: "eid160", tween: [ "style", "${_Logo}", "clip", [0,181.166748046875,119.83349609375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,181.166748046875,119.83349609375,0]}], position: 1865, duration: 0, easing: "easeInOutBack" },
                { id: "eid392", tween: [ "style", "${_contact}", "clip", [0,444,540,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,444,-0.9604926109313965,0]}], position: 4354, duration: 570, easing: "easeInOutBack" },
                { id: "eid939", tween: [ "style", "${_RoundRect2Copy}", "opacity", '0.12', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid908", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "left", '-2px', { fromValue: '-2px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid109", tween: [ "style", "${_Logo}", "left", '-13px', { fromValue: '-185px'}], position: 185, duration: 390, easing: "easeInOutBack" },
                { id: "eid690", tween: [ "style", "${_Logo}", "left", '-13px', { fromValue: '-13px'}], position: 1865, duration: 0, easing: "easeInOutBack" },
                { id: "eid921", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "left", '-2px', { fromValue: '-2px'}], position: 8913, duration: 0, easing: "easeInOutBack" },
                { id: "eid1077", tween: [ "style", "${_testkellyman}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutBack" },
                { id: "eid1076", tween: [ "style", "${_testkellyman}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeInOutBack" },
                { id: "eid123", tween: [ "style", "${_Banner_Image}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutBack" },
                { id: "eid697", tween: [ "style", "${_Flash_Movie}", "top", '-181px', { fromValue: '-181px'}], position: 1526, duration: 0, easing: "easeInOutBack" },
                { id: "eid666", tween: [ "style", "${_Services_Footer_Text}", "opacity", '0.8290600180625916', { fromValue: '0'}], position: 7580, duration: 81 },
                { id: "eid476", tween: [ "style", "${_Gallery_Banner}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInOutBack" },
                { id: "eid576", tween: [ "style", "${_Gallery_Banner}", "display", 'none', { fromValue: 'block'}], position: 9109, duration: 0, easing: "easeInOutBack" },
                { id: "eid477", tween: [ "style", "${_Gallery_Banner}", "display", 'none', { fromValue: 'none'}], position: 9192, duration: 0, easing: "easeInOutBack" },
                { id: "eid478", tween: [ "style", "${_Gallery_Banner}", "display", 'none', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeInOutBack" },
                { id: "eid385", tween: [ "transform", "${_contact}", "scaleY", '1.03241', { fromValue: '1.04259'}], position: 4354, duration: 570, easing: "easeInOutBack" },
                { id: "eid970", tween: [ "style", "${_viiewgal}", "display", 'none', { fromValue: 'block'}], position: 9109, duration: 0, easing: "easeInOutBack" },
                { id: "eid1080", tween: [ "style", "${_testmonies}", "opacity", '1', { fromValue: '0'}], position: 9551, duration: 139 },
                { id: "eid949", tween: [ "style", "${_Kellyman_About_Text}", "left", '19px', { fromValue: '19px'}], position: 3688, duration: 0, easing: "easeInOutBack" },
                { id: "eid1098", tween: [ "style", "${_fbclick}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid217", tween: [ "style", "${_Kellyman_Contact_Social_Media_Buttons}", "top", '21px', { fromValue: '91px'}], position: 4629, duration: 295, easing: "easeInOutBack" },
                { id: "eid193", tween: [ "style", "${_Kellyman_About_Trans_Photo}", "opacity", '0.45378130023219', { fromValue: '0'}], position: 2943, duration: 307, easing: "easeInOutBack" },
                { id: "eid944", tween: [ "style", "${_RoundRect2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid581", tween: [ "style", "${_Testmonies_Banner}", "opacity", '1', { fromValue: '0'}], position: 9192, duration: 250, easing: "easeInOutBack" },
                { id: "eid164", tween: [ "style", "${_Logo}", "top", '0px', { fromValue: '0px'}], position: 1865, duration: 0, easing: "easeInOutBack" },
                { id: "eid1054", tween: [ "subproperty", "${_Flash1}", "filter.sepia", '0.41666666666667', { fromValue: '0'}], position: 991, duration: 54, easing: "easeOutExpo" },
                { id: "eid1055", tween: [ "subproperty", "${_Flash1}", "filter.sepia", '0.41', { fromValue: '0.416667'}], position: 1045, duration: 253, easing: "easeOutExpo" },
                { id: "eid941", tween: [ "style", "${_RoundRect2}", "opacity", '0.11965811965812', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid215", tween: [ "style", "${_Social_Media_Buttons_Holder}", "opacity", '0.92150539911094', { fromValue: '0'}], position: 4409, duration: 220, easing: "easeInOutBack" },
                { id: "eid226", tween: [ "style", "${_Social_Media_Buttons_Holder}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid934", tween: [ "transform", "${_Kellyman_Contact_Child_Image}", "scaleX", '1.20283', { fromValue: '1.20283'}], position: 4924, duration: 0, easing: "easeInOutBack" },
                { id: "eid197", tween: [ "style", "${_Kellyman_About_View_Profile_Button}", "top", '49px', { fromValue: '74px'}], position: 3435, duration: 253, easing: "easeInOutBack" },
                { id: "eid125", tween: [ "style", "${_Login_Button}", "left", '19px', { fromValue: '140px'}], position: 500, duration: 425, easing: "easeInOutBack" },
                { id: "eid319", tween: [ "style", "${_Social_Media_Buttons_Holder}", "top", '700px', { fromValue: '700px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid168", tween: [ "style", "${_Home_Footer_Text}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid161", tween: [ "transform", "${_Logo}", "scaleX", '0.9264', { fromValue: '0.9264'}], position: 1865, duration: 0, easing: "easeInOutBack" },
                { id: "eid920", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "opacity", '0.92150539911094', { fromValue: '0'}], position: 7416, duration: 220, easing: "easeInOutBack" },
                { id: "eid223", tween: [ "style", "${_Kellyman_Contact_Social_Media_Buttons}", "opacity", '1', { fromValue: '0'}], position: 4629, duration: 295, easing: "easeInOutBack" },
                { id: "eid888", tween: [ "style", "${_content}", "display", 'none', { fromValue: 'block'}], position: 2125, duration: 0, easing: "easeInOutBack" },
                { id: "eid320", tween: [ "style", "${_Social_Media_Buttons_Holder}", "left", '-2px', { fromValue: '-2px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid918", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "display", 'none', { fromValue: 'block'}], position: 7765, duration: 0, easing: "easeInOutBack" },
                { id: "eid919", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "display", 'none', { fromValue: 'none'}], position: 9015, duration: 0, easing: "easeInOutBack" },
                { id: "eid660", tween: [ "style", "${_Services_Footer_Text}", "font-size", '18px', { fromValue: '18px'}], position: 7669, duration: 0 },
                { id: "eid917", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "top", '760px', { fromValue: '760px'}], position: 8913, duration: 0, easing: "easeInOutBack" },
                { id: "eid482", tween: [ "style", "${_Gallery_Text}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 246, easing: "easeInOutBack" },
                { id: "eid907", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "opacity", '0.92150539911094', { fromValue: '0'}], position: 3435, duration: 220, easing: "easeInOutBack" },
                { id: "eid909", tween: [ "style", "${_Social_Media_Buttons_HolderCopy}", "width", '507px', { fromValue: '507px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid1059", tween: [ "style", "${_Flash1}", "opacity", '1', { fromValue: '0.000000'}], position: 991, duration: 54, easing: "easeOutExpo" },
                { id: "eid1060", tween: [ "style", "${_Flash1}", "opacity", '0.000000', { fromValue: '1'}], position: 1045, duration: 198, easing: "easeOutExpo" },
                { id: "eid898", tween: [ "style", "${_Social_Media}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid899", tween: [ "style", "${_Social_Media}", "display", 'block', { fromValue: 'none'}], position: 4583, duration: 0, easing: "easeInOutBack" },
                { id: "eid900", tween: [ "style", "${_Social_Media}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid236", tween: [ "style", "${_Slide_holder_Trans_BG}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid153", tween: [ "style", "${_Home_Footer_Text}", "top", '799px', { fromValue: '801px'}], position: 1549, duration: 214, easing: "easeInOutBack" },
                { id: "eid148", tween: [ "style", "${_Buttons_Movie}", "opacity", '0.88000001907349', { fromValue: '0'}], position: 1250, duration: 513, easing: "easeInOutBack" },
                { id: "eid651", tween: [ "style", "${_Services_Stack}", "opacity", '1', { fromValue: '0'}], position: 7580, duration: 89 },
                { id: "eid664", tween: [ "style", "${_Services_Footer_Text}", "top", '683px', { fromValue: '683px'}], position: 7669, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_About}", "opacity", '1', { fromValue: '0'}], position: 2125, duration: 250, easing: "easeInOutBack" },
                { id: "eid1072", tween: [ "style", "${_Flash2Copy}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0, easing: "easeOutExpo" },
                { id: "eid870", tween: [ "transform", "${_LogoCopy2}", "scaleX", '0.9264', { fromValue: '1.07797'}], position: 1000, duration: 95, easing: "easeInOutBack" },
                { id: "eid865", tween: [ "transform", "${_LogoCopy2}", "scaleX", '0.9264', { fromValue: '0.9264'}], position: 2233, duration: 0, easing: "easeInOutBack" },
                { id: "eid200", tween: [ "style", "${_Kellyman_About_Trans_Photo}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid227", tween: [ "style", "${_Kellyman_Contact_Social_Media_Buttons}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid922", tween: [ "style", "${_Social_Media_Buttons_HolderCopy2}", "width", '507px', { fromValue: '507px'}], position: 8913, duration: 0, easing: "easeInOutBack" },
                { id: "eid111", tween: [ "style", "${_Logo}", "opacity", '1', { fromValue: '0'}], position: 185, duration: 390, easing: "easeInOutBack" },
                { id: "eid230", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Blog}", "top", '36px', { fromValue: '-1px'}], position: 5037, duration: 250, easing: "easeInOutBack" },
                { id: "eid254", tween: [ "style", "${_Login_Button}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid945", tween: [ "style", "${_Services_Stack}", "top", '186px', { fromValue: '201px'}], position: 7661, duration: 8, easing: "easeInOutBack" },
                { id: "eid199", tween: [ "style", "${_Kellyman_About_View_Profile_Button}", "opacity", '1', { fromValue: '0'}], position: 3435, duration: 253, easing: "easeInOutBack" },
                { id: "eid162", tween: [ "transform", "${_Logo}", "scaleY", '0.98887', { fromValue: '0.98887'}], position: 1865, duration: 0, easing: "easeInOutBack" },
                { id: "eid151", tween: [ "style", "${_Buttons_Movie}", "clip", [464.000244140625,485,754.666748046875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [464.000244140625,485,804,0]}], position: 1498, duration: 265, easing: "easeInOutBack" },
                { id: "eid873", tween: [ "style", "${_LogoCopy2}", "top", '0px', { fromValue: '40px'}], position: 1000, duration: 95, easing: "easeInOutBack" },
                { id: "eid863", tween: [ "style", "${_LogoCopy2}", "top", '0px', { fromValue: '0px'}], position: 2233, duration: 0, easing: "easeInOutBack" },
                { id: "eid292", tween: [ "style", "${_Services_Child_Picture}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid293", tween: [ "style", "${_Services_Child_Picture}", "display", 'block', { fromValue: 'none'}], position: 6800, duration: 0 },
                { id: "eid466", tween: [ "style", "${_Services_Child_Picture}", "display", 'none', { fromValue: 'block'}], position: 7789, duration: 0, easing: "easeInOutBack" },
                { id: "eid903", tween: [ "style", "${_Kellyman_Contact_Social_Media_Buttons}", "left", '13px', { fromValue: '13px'}], position: 4629, duration: 0, easing: "easeInOutBack" },
                { id: "eid904", tween: [ "style", "${_Kellyman_Contact_Social_Media_Buttons}", "left", '17px', { fromValue: '13px'}], position: 4924, duration: 0, easing: "easeInOutBack" },
                { id: "eid1101", tween: [ "style", "${_twitclick}", "opacity", '0.19658091103929', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid867", tween: [ "style", "${_LogoCopy2}", "clip", [0,181.166748046875,119.83349609375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,181.166748046875,119.83349609375,0]}], position: 2233, duration: 0, easing: "easeInOutBack" },
                { id: "eid583", tween: [ "style", "${_Testmonies_Text}", "display", 'none', { fromValue: 'block'}], position: 9109, duration: 0, easing: "easeInOutBack" },
                { id: "eid587", tween: [ "style", "${_Testmonies_Text}", "display", 'block', { fromValue: 'none'}], position: 9192, duration: 0, easing: "easeInOutBack" },
                { id: "eid584", tween: [ "style", "${_Testmonies_Text}", "display", 'none', { fromValue: 'block'}], position: 9255, duration: 0, easing: "easeInOutBack" },
                { id: "eid585", tween: [ "style", "${_Testmonies_Text}", "display", 'none', { fromValue: 'none'}], position: 9305, duration: 0, easing: "easeInOutBack" },
                { id: "eid589", tween: [ "style", "${_Testmonies_Text}", "display", 'block', { fromValue: 'none'}], position: 9397, duration: 0, easing: "easeInOutBack" },
                { id: "eid335", tween: [ "style", "${_About_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid321", tween: [ "style", "${_Social_Media_Buttons_Holder}", "width", '507px', { fromValue: '507px'}], position: 4898, duration: 0, easing: "easeInOutBack" },
                { id: "eid475", tween: [ "style", "${_Gallery_Banner}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 250, easing: "easeInOutBack" },
                { id: "eid167", tween: [ "style", "${_Buttons_Movie}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid210", tween: [ "style", "${_Contact_Us}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 245, easing: "easeInOutBack" },
                { id: "eid582", tween: [ "style", "${_Testmonies_Banner}", "top", '19px', { fromValue: '-1px'}], position: 9192, duration: 250, easing: "easeInOutBack" },
                { id: "eid1094", tween: [ "style", "${_Text2}", "top", '787px', { fromValue: '867px'}], position: 9750, duration: 113, easing: "easeInOutBack" },
                { id: "eid334", tween: [ "style", "${_Contact_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid142", tween: [ "transform", "${_Buttons_Movie}", "scaleY", '1.06965', { fromValue: '1.07'}], position: 1763, duration: 0, easing: "easeInOutBack" },
                { id: "eid932", tween: [ "transform", "${_contact}", "scaleX", '1.13577', { fromValue: '1.1402'}], position: 4354, duration: 570, easing: "easeInOutBack" },
                { id: "eid1074", tween: [ "style", "${_testkellyman}", "opacity", '0.21367521584033966', { fromValue: '0'}], position: 9500, duration: 196, easing: "easeInOutBack" },
                { id: "eid878", tween: [ "style", "${_LogoCopy2}", "opacity", '1', { fromValue: '1'}], position: 820, duration: 0, easing: "easeInOutBack" },
                { id: "eid879", tween: [ "style", "${_LogoCopy2}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0, easing: "easeInOutBack" },
                { id: "eid876", tween: [ "style", "${_LogoCopy2}", "opacity", '0', { fromValue: '1'}], position: 1095, duration: 68, easing: "easeInOutBack" },
                { id: "eid205", tween: [ "style", "${_About_Us_text}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid882", tween: [ "style", "${_LogoCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid880", tween: [ "style", "${_LogoCopy2}", "display", 'none', { fromValue: 'none'}], position: 991, duration: 0, easing: "easeInOutBack" },
                { id: "eid881", tween: [ "style", "${_LogoCopy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutBack" },
                { id: "eid189", tween: [ "style", "${_Kellyman_About_Photo_Children}", "left", '12px', { fromValue: '1px'}], position: 2620, duration: 380, easing: "easeInOutBack" },
                { id: "eid208", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Contact}", "display", 'block', { fromValue: 'none'}], position: 3808, duration: 0, easing: "easeInOutBack" },
                { id: "eid228", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_Contact}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid1097", tween: [ "style", "${_testmonies}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid1078", tween: [ "style", "${_testmonies}", "display", 'none', { fromValue: 'none'}], position: 9598, duration: 0 },
                { id: "eid1083", tween: [ "style", "${_testmonies}", "display", 'block', { fromValue: 'none'}], position: 9611, duration: 0, easing: "easeInOutBack" },
                { id: "eid1082", tween: [ "style", "${_testmonies}", "display", 'block', { fromValue: 'block'}], position: 9678, duration: 0, easing: "easeInOutBack" },
                { id: "eid1079", tween: [ "style", "${_testmonies}", "display", 'block', { fromValue: 'block'}], position: 9746, duration: 0 },
                { id: "eid590", tween: [ "style", "${_updateholder}", "left", '14px', { fromValue: '14px'}], position: 8426, duration: 0, easing: "easeInOutBack" },
                { id: "eid282", tween: [ "style", "${_Page_Banner_Generic_Sub_Bar_BlogCopy}", "opacity", '1', { fromValue: '0'}], position: 6405, duration: 250, easing: "easeInOutBack" },
                { id: "eid237", tween: [ "style", "${_APP_BG_Layer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid170", tween: [ "style", "${_APP_BG_Layer}", "display", 'none', { fromValue: 'none'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid172", tween: [ "style", "${_APP_BG_Layer}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0, easing: "easeInOutBack" },
                { id: "eid575", tween: [ "style", "${_Gallery_Text}", "display", 'none', { fromValue: 'block'}], position: 9109, duration: 0, easing: "easeInOutBack" },
                { id: "eid480", tween: [ "style", "${_Gallery_Text}", "display", 'none', { fromValue: 'none'}], position: 9255, duration: 0, easing: "easeInOutBack" },
                { id: "eid481", tween: [ "style", "${_Gallery_Text}", "display", 'none', { fromValue: 'none'}], position: 9690, duration: 0, easing: "easeInOutBack" },
                { id: "eid336", tween: [ "style", "${_Blog_Click_Button}", "display", 'none', { fromValue: 'block'}], position: 2024, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Kellyman_Contact_Child_Image}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid127", tween: [ "style", "${_Login_Button}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 425, easing: "easeInOutBack" },
                { id: "eid1084", tween: [ "style", "${_Social_Media_Buttons_HolderCopy3}", "top", '760px', { fromValue: '760px'}], position: 10860, duration: 0, easing: "easeInOutBack" },
                { id: "eid937", tween: [ "style", "${_RoundRect2Copy2}", "opacity", '0.12', { fromValue: '0'}], position: 4864, duration: 60, easing: "easeInOutBack" },
                { id: "eid146", tween: [ "style", "${_Buttons_Movie}", "top", '5px', { fromValue: '5px'}], position: 1763, duration: 0, easing: "easeInOutBack" },
                { id: "eid191", tween: [ "style", "${_Kellyman_About_Photo_Children}", "opacity", '1', { fromValue: '0'}], position: 2620, duration: 380, easing: "easeInOutBack" },
                { id: "eid224", tween: [ "transform", "${_Kellyman_Contact_Social_Media_Buttons}", "scaleY", '1.03396', { fromValue: '1.03396'}], position: 4924, duration: 0, easing: "easeInOutBack" },
                { id: "eid975", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_content}', [] ], ""], position: 0 },
                { id: "eid976", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_content}', [] ], ""], position: 991 },
                { id: "eid1069", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_camera-shutter-click-052}', [] ], ""], position: 991 }            ]
        }
    }
},
"Buttons_Holders": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '2px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['218px', '2px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['0px', '118px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['218px', '118px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['0px', '242px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['218px', '242px', '158px', '96px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRectCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRectCopy}": [
                ["style", "display", 'none'],
                ["style", "left", '218px'],
                ["style", "top", '0px']
            ],
            "${_RoundRect}": [
                ["style", "display", 'none'],
                ["style", "left", '5px'],
                ["style", "top", '0px']
            ],
            "${_RoundRectCopy3}": [
                ["style", "display", 'none'],
                ["style", "left", '218px'],
                ["style", "top", '118px']
            ],
            "${symbolSelector}": [
                ["style", "height", '338px'],
                ["style", "width", '376px']
            ],
            "${_RoundRectCopy6}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '242px']
            ],
            "${_RoundRectCopy4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '118px']
            ],
            "${_RoundRectCopy5}": [
                ["style", "display", 'none'],
                ["style", "left", '218px'],
                ["style", "top", '242px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_RoundRectCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_RoundRectCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid91", tween: [ "style", "${_RoundRect}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid41", tween: [ "style", "${_RoundRectCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_RoundRectCopy3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_RoundRectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_RoundRectCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_RoundRectCopy6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid90", tween: [ "style", "${_RoundRect}", "left", '5px', { fromValue: '5px'}], position: 2000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_RoundRectCopy}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_RoundRectCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_RoundRectCopy5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Buttons_Movie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '4px', '480px', '800px', 'auto', 'auto'],
                    id: 'Services_Button',
                    type: 'image',
                    clip: ['rect(447.5px 225px 550px 32.5px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Services%20Button.png', '0px', '0px']
                },
                {
                    rect: ['5px', '0px', '480px', '800px', 'auto', 'auto'],
                    id: 'Galleries__Button',
                    type: 'image',
                    clip: ['rect(447.5px 455px 552.5px 270px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Galleries%20%20Button.png', '0px', '0px']
                },
                {
                    rect: ['0px', '4px', '480px', '800px', 'auto', 'auto'],
                    id: 'Contact_Button',
                    type: 'image',
                    clip: ['rect(542.5px 225px 647.5px 35px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Contact%20Button.png', '0px', '0px']
                },
                {
                    rect: ['0px', '4px', '480px', '800px', 'auto', 'auto'],
                    id: 'Blog_Button',
                    type: 'image',
                    clip: ['rect(647.5px 220px 755px 32.5px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Blog%20Button.png', '0px', '0px']
                },
                {
                    rect: ['2px', '2px', '480px', '800px', 'auto', 'auto'],
                    id: 'About_Us_Button',
                    type: 'image',
                    clip: ['rect(545px 455px 647.5px 272.5px)'],
                    fill: ['rgba(0,0,0,0)', 'images/About%20Us%20Button.png', '0px', '0px']
                },
                {
                    rect: ['2px', '4px', '480px', '800px', 'auto', 'auto'],
                    id: 'Testimonials_Button',
                    type: 'image',
                    clip: ['rect(635px 457.5px 755px 265px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Testimonials%20Button.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Testimonials_Button}": [
                ["style", "top", '4px'],
                ["style", "left", '2px'],
                ["style", "clip", [635,457.5,755,265], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Blog_Button}": [
                ["style", "top", '4px'],
                ["style", "left", '0px'],
                ["style", "clip", [647.5,220,755,32.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '804px'],
                ["style", "width", '485px']
            ],
            "${_Services_Button}": [
                ["style", "top", '4px'],
                ["style", "left", '0px'],
                ["style", "clip", [447.5,225,550,32.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_About_Us_Button}": [
                ["style", "top", '2px'],
                ["style", "left", '2px'],
                ["style", "clip", [545,455,647.5,272.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Galleries__Button}": [
                ["style", "top", '0px'],
                ["style", "left", '5px'],
                ["style", "clip", [447.5,455,552.5,270], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Contact_Button}": [
                ["style", "top", '4px'],
                ["style", "left", '0px'],
                ["style", "clip", [542.5,225,647.5,35], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"blog2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.79858', '0.98145']],
                    rect: ['-56px', '3px', '547px', '532px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'container2',
                    opacity: 0.94000001907349,
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_container2}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.79858'],
                ["style", "opacity", '0.94000001907349'],
                ["style", "left", '-56px'],
                ["style", "width", '547px'],
                ["style", "top", '3px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.98145'],
                ["style", "height", '532px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '530px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '436px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"blog2_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '5px', '503px', '373px', 'auto', 'auto'],
                    id: 'container3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_container3}": [
                ["style", "height", '373px'],
                ["style", "top", '5px'],
                ["style", "left", '0px'],
                ["style", "width", '503px']
            ],
            "${symbolSelector}": [
                ["style", "height", '616px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '505px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"conview": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '603px', '479px', '543px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.0477']],
                    type: 'rect',
                    id: 'contactframe',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '569px'],
                ["style", "width", '479px']
            ],
            "${_contactframe}": [
                ["color", "background-color", 'rgba(152,146,146,1.00)'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '479px'],
                ["style", "top", '13px'],
                ["transform", "scaleY", '1.0477'],
                ["style", "height", '543px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid360", tween: [ "style", "${_contactframe}", "display", 'none', { fromValue: 'block'}], position: 3773, duration: 0, easing: "easeInOutBack" },
                { id: "eid361", tween: [ "style", "${_contactframe}", "display", 'block', { fromValue: 'none'}], position: 4728, duration: 0, easing: "easeInOutBack" },
                { id: "eid366", tween: [ "style", "${_contactframe}", "display", 'block', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutBack" },
                { id: "eid365", tween: [ "style", "${_contactframe}", "opacity", '1', { fromValue: '0'}], position: 4728, duration: 170, easing: "easeInOutBack" },
                { id: "eid363", tween: [ "style", "${_contactframe}", "top", '601px', { fromValue: '13px'}], position: 4728, duration: 170, easing: "easeInOutBack" },
                { id: "eid370", tween: [ "color", "${_contactframe}", "background-color", 'rgba(152,146,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(152,146,146,1.00)'}], position: 4898, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"blog2_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '444px', '540px', 'auto', 'auto'],
                    id: 'contactview',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contactview}": [
                ["style", "height", '540px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '540px'],
                ["style", "width", '444px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_movie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '69px', '480px', '353px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Slide_holder',
                    opacity: 0.96000001907349,
                    display: 'block',
                    fill: ['rgba(15,15,15,1.00)']
                },
                {
                    id: 'Slide2',
                    type: 'image',
                    rect: ['2px', '76px', '480px', '362px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Slide2.jpg', '0px', '0px']
                },
                {
                    id: 'Slide1',
                    type: 'image',
                    rect: ['2px', '76px', '480px', '362px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Slide1.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '0px']
            ],
            "${_Slide2}": [
                ["style", "top", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '480px']
            ],
            "${_Slide_holder}": [
                ["color", "background-color", 'rgba(15,15,15,1.00)'],
                ["style", "top", '69px'],
                ["style", "display", 'block'],
                ["style", "height", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '480px']
            ],
            "${_Slide1}": [
                ["style", "top", '76px'],
                ["style", "clip", [0,473.116943359375,359,12.876307487487793], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1.0476'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14500,
            autoPlay: true,
            timeline: [
                { id: "eid129", tween: [ "style", "${_Slide_holder}", "height", '353px', { fromValue: '0px'}], position: 855, duration: 395, easing: "easeInOutBack" },
                { id: "eid432", tween: [ "style", "${_Slide1}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 500, easing: "easeInOutBack" },
                { id: "eid437", tween: [ "style", "${_Slide1}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 6500, easing: "easeInOutBack" },
                { id: "eid438", tween: [ "style", "${_Slide1}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "easeInOutBack" },
                { id: "eid452", tween: [ "transform", "${_Slide1}", "scaleX", '1.0476', { fromValue: '1.0476'}], position: 14500, duration: 0, easing: "easeInOutBack" },
                { id: "eid423", tween: [ "style", "${_Slide_holder}", "left", '2px', { fromValue: '2px'}], position: 1500, duration: 0, easing: "easeInOutBack" },
                { id: "eid453", tween: [ "style", "${_Slide1}", "left", '-2px', { fromValue: '-2px'}], position: 14500, duration: 0, easing: "easeInOutBack" },
                { id: "eid425", tween: [ "style", "${_Slide2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutBack" },
                { id: "eid430", tween: [ "style", "${_Slide2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500, easing: "easeInOutBack" },
                { id: "eid165", tween: [ "style", "${_Slide_holder}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" },
                { id: "eid131", tween: [ "style", "${_Slide_holder}", "opacity", '0.9600000381469727', { fromValue: '0'}], position: 855, duration: 395, easing: "easeInOutBack" },
                { id: "eid449", tween: [ "style", "${_Slide1}", "clip", [0,473.116943359375,359,12.876307487487793], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,473.116943359375,359,12.876307487487793]}], position: 14500, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"Flash_Movie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Flash2',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash2Copy',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash2Copy4',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash2Copy2',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash2Copy3',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash1',
                    type: 'image',
                    rect: ['235px', '203px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash1Copy2',
                    type: 'image',
                    rect: ['235px', '203px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    id: 'Flash1Copy',
                    type: 'image',
                    rect: ['235px', '203px', '540px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                },
                {
                    preload: 'metadata',
                    type: 'audio',
                    source: ['media/camera-shutter-click-05.mp3', 'media/camera-shutter-click-05.wav'],
                    id: 'camera-shutter-click-05',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    display: 'none',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Flash1Copy2}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1.7'],
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '259px'],
                ["style", "width", '66px'],
                ["style", "top", '687px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '62px'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Flash1Copy}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1.7'],
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '239px'],
                ["style", "width", '66px'],
                ["style", "top", '207px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '62px'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Flash1}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1.7'],
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '399px'],
                ["style", "width", '66px'],
                ["style", "top", '697px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '62px'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Flash2Copy}": [
                ["style", "top", '582px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '285px'],
                ["style", "width", '66px']
            ],
            "${_camera-shutter-click-05}": [
                ["style", "display", 'none'],
                ["property", "volume", '0.24']
            ],
            "${_Flash2Copy2}": [
                ["style", "top", '818px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '530px'],
                ["style", "width", '66px']
            ],
            "${_Flash2Copy3}": [
                ["style", "top", '478px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '292px'],
                ["style", "width", '66px']
            ],
            "${_Flash2}": [
                ["style", "top", '801px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '252px'],
                ["style", "width", '66px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '540px']
            ],
            "${_Flash2Copy4}": [
                ["style", "top", '-7px'],
                ["style", "-webkit-transform-origin", [48.67,45.96], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.67,45.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '66px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2277,
            autoPlay: true,
            timeline: [
                { id: "eid831", tween: [ "style", "${_Flash2Copy4}", "top", '207px', { fromValue: '-7px'}], position: 988, duration: 206, easing: "easeOutSine" },
                { id: "eid511", tween: [ "style", "${_Flash2}", "width", '68px', { fromValue: '66px'}], position: 1500, duration: 166, easing: "easeOutExpo" },
                { id: "eid533", tween: [ "style", "${_Flash2}", "width", '68px', { fromValue: '540px'}], position: 1666, duration: 232, easing: "easeOutExpo" },
                { id: "eid777", tween: [ "subproperty", "${_Flash1Copy}", "filter.sepia", '0.41666666666667', { fromValue: '0'}], position: 1087, duration: 55, easing: "easeOutExpo" },
                { id: "eid778", tween: [ "subproperty", "${_Flash1Copy}", "filter.sepia", '0.41', { fromValue: '0.416667'}], position: 1141, duration: 253, easing: "easeOutExpo" },
                { id: "eid742", tween: [ "transform", "${_Flash1}", "rotateZ", '-6deg', { fromValue: '-6deg'}], position: 1786, duration: 0, easing: "easeOutExpo" },
                { id: "eid787", tween: [ "transform", "${_Flash1Copy}", "scaleY", '6.54906', { fromValue: '1'}], position: 1087, duration: 55, easing: "easeOutExpo" },
                { id: "eid507", tween: [ "style", "${_Flash2}", "top", '805px', { fromValue: '801px'}], position: 1500, duration: 115, easing: "easeOutExpo" },
                { id: "eid617", tween: [ "style", "${_Flash2}", "top", '811px', { fromValue: '805px'}], position: 1615, duration: 23, easing: "easeOutExpo" },
                { id: "eid769", tween: [ "style", "${_Flash2}", "top", '801px', { fromValue: '811px'}], position: 1638, duration: 14, easing: "easeOutExpo" },
                { id: "eid772", tween: [ "style", "${_Flash2}", "top", '602px', { fromValue: '801px'}], position: 1652, duration: 14, easing: "easeOutExpo" },
                { id: "eid529", tween: [ "style", "${_Flash2}", "top", '690px', { fromValue: '602px'}], position: 1666, duration: 21, easing: "easeOutExpo" },
                { id: "eid774", tween: [ "style", "${_Flash2}", "top", '749px', { fromValue: '690px'}], position: 1687, duration: 16, easing: "easeOutExpo" },
                { id: "eid775", tween: [ "style", "${_Flash2}", "top", '767px', { fromValue: '749px'}], position: 1703, duration: 21, easing: "easeOutExpo" },
                { id: "eid762", tween: [ "style", "${_Flash2}", "top", '810px', { fromValue: '767px'}], position: 1724, duration: 174, easing: "easeOutExpo" },
                { id: "eid829", tween: [ "style", "${_Flash2Copy3}", "width", '68px', { fromValue: '66px'}], position: 1739, duration: 147, easing: "easeOutExpo" },
                { id: "eid830", tween: [ "style", "${_Flash2Copy3}", "width", '68px', { fromValue: '540px'}], position: 1887, duration: 206, easing: "easeOutExpo" },
                { id: "eid826", tween: [ "style", "${_Flash2Copy3}", "left", '389px', { fromValue: '292px'}], position: 1887, duration: 18, easing: "easeOutExpo" },
                { id: "eid827", tween: [ "style", "${_Flash2Copy3}", "left", '458px', { fromValue: '389px'}], position: 1904, duration: 19, easing: "easeOutExpo" },
                { id: "eid828", tween: [ "style", "${_Flash2Copy3}", "left", '524px', { fromValue: '458px'}], position: 1923, duration: 169, easing: "easeOutExpo" },
                { id: "eid788", tween: [ "subproperty", "${_Flash1Copy}", "filter.blur", '0px', { fromValue: '0px'}], position: 1087, duration: 0, easing: "easeOutExpo" },
                { id: "eid789", tween: [ "subproperty", "${_Flash1Copy}", "filter.blur", '0px', { fromValue: '0px'}], position: 1141, duration: 0, easing: "easeOutExpo" },
                { id: "eid509", tween: [ "style", "${_Flash2}", "left", '251px', { fromValue: '252px'}], position: 1500, duration: 115, easing: "easeOutExpo" },
                { id: "eid618", tween: [ "style", "${_Flash2}", "left", '252px', { fromValue: '251px'}], position: 1615, duration: 23, easing: "easeOutExpo" },
                { id: "eid770", tween: [ "style", "${_Flash2}", "left", '260px', { fromValue: '252px'}], position: 1638, duration: 14, easing: "easeOutExpo" },
                { id: "eid771", tween: [ "style", "${_Flash2}", "left", '25px', { fromValue: '260px'}], position: 1652, duration: 14, easing: "easeOutExpo" },
                { id: "eid532", tween: [ "style", "${_Flash2}", "left", '133px', { fromValue: '25px'}], position: 1666, duration: 21, easing: "easeOutExpo" },
                { id: "eid773", tween: [ "style", "${_Flash2}", "left", '182px', { fromValue: '133px'}], position: 1687, duration: 16, easing: "easeOutExpo" },
                { id: "eid776", tween: [ "style", "${_Flash2}", "left", '218px', { fromValue: '182px'}], position: 1703, duration: 21, easing: "easeOutExpo" },
                { id: "eid761", tween: [ "style", "${_Flash2}", "left", '259px', { fromValue: '218px'}], position: 1724, duration: 174, easing: "easeOutExpo" },
                { id: "eid780", tween: [ "transform", "${_Flash1Copy}", "rotateZ", '-6deg', { fromValue: '-6deg'}], position: 1394, duration: 0, easing: "easeOutExpo" },
                { id: "eid748", tween: [ "style", "${_Flash2Copy}", "opacity", '0', { fromValue: '0'}], position: 1261, duration: 0 },
                { id: "eid749", tween: [ "style", "${_Flash2Copy}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 1408, duration: 51, easing: "easeOutExpo" },
                { id: "eid750", tween: [ "style", "${_Flash2Copy}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 1460, duration: 155, easing: "easeOutExpo" },
                { id: "eid756", tween: [ "style", "${_Flash2Copy}", "left", '513px', { fromValue: '285px'}], position: 1408, duration: 206, easing: "easeOutExpo" },
                { id: "eid784", tween: [ "style", "${_Flash1Copy}", "left", '239px', { fromValue: '239px'}], position: 1141, duration: 0, easing: "easeOutExpo" },
                { id: "eid714", tween: [ "subproperty", "${_Flash1}", "filter.sepia", '0.41666666666667', { fromValue: '0'}], position: 1527, duration: 46, easing: "easeOutExpo" },
                { id: "eid743", tween: [ "subproperty", "${_Flash1}", "filter.sepia", '0.41', { fromValue: '0.416667'}], position: 1573, duration: 213, easing: "easeOutExpo" },
                { id: "eid781", tween: [ "transform", "${_Flash1Copy}", "scaleX", '7.02993', { fromValue: '1'}], position: 1087, duration: 55, easing: "easeOutExpo" },
                { id: "eid795", tween: [ "style", "${_Flash1Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1379, duration: 46, easing: "easeOutExpo" },
                { id: "eid796", tween: [ "style", "${_Flash1Copy2}", "opacity", '0.000000', { fromValue: '1'}], position: 1425, duration: 167, easing: "easeOutExpo" },
                { id: "eid804", tween: [ "style", "${_Flash2Copy2}", "opacity", '0', { fromValue: '0'}], position: 1923, duration: 0 },
                { id: "eid805", tween: [ "style", "${_Flash2Copy2}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 2071, duration: 51, easing: "easeOutExpo" },
                { id: "eid806", tween: [ "style", "${_Flash2Copy2}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 2122, duration: 155, easing: "easeOutExpo" },
                { id: "eid799", tween: [ "style", "${_Flash1Copy2}", "top", '687px', { fromValue: '687px'}], position: 1425, duration: 0, easing: "easeOutExpo" },
                { id: "eid785", tween: [ "subproperty", "${_Flash1Copy}", "filter.saturate", '0', { fromValue: '0'}], position: 1141, duration: 0, easing: "easeOutExpo" },
                { id: "eid809", tween: [ "subproperty", "${_Flash2Copy2}", "filter.blur", '1px', { fromValue: '1px'}], position: 2071, duration: 0, easing: "easeOutExpo" },
                { id: "eid798", tween: [ "subproperty", "${_Flash1Copy2}", "filter.saturate", '0', { fromValue: '0'}], position: 1425, duration: 0, easing: "easeOutExpo" },
                { id: "eid505", tween: [ "style", "${_Flash2}", "height", '48px', { fromValue: '62px'}], position: 1500, duration: 166, easing: "easeOutExpo" },
                { id: "eid530", tween: [ "style", "${_Flash2}", "height", '48px', { fromValue: '500px'}], position: 1666, duration: 232, easing: "easeOutExpo" },
                { id: "eid839", tween: [ "style", "${_Flash2Copy4}", "width", '68px', { fromValue: '66px'}], position: 841, duration: 147, easing: "easeOutSine" },
                { id: "eid840", tween: [ "style", "${_Flash2Copy4}", "width", '68px', { fromValue: '540px'}], position: 988, duration: 206, easing: "easeOutSine" },
                { id: "eid779", tween: [ "subproperty", "${_Flash1Copy}", "filter.contrast", '1.8001018460724', { fromValue: '1.7'}], position: 1087, duration: 55, easing: "easeOutExpo" },
                { id: "eid794", tween: [ "transform", "${_Flash1Copy2}", "scaleX", '7.02993', { fromValue: '1'}], position: 1379, duration: 46, easing: "easeOutExpo" },
                { id: "eid837", tween: [ "subproperty", "${_Flash2Copy4}", "filter.blur", '1px', { fromValue: '1px'}], position: 988, duration: 0, easing: "easeOutExpo" },
                { id: "eid823", tween: [ "style", "${_Flash2Copy3}", "opacity", '0', { fromValue: '0'}], position: 1739, duration: 0 },
                { id: "eid824", tween: [ "style", "${_Flash2Copy3}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 1887, duration: 51, easing: "easeOutExpo" },
                { id: "eid825", tween: [ "style", "${_Flash2Copy3}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 1938, duration: 155, easing: "easeOutExpo" },
                { id: "eid820", tween: [ "subproperty", "${_Flash2Copy3}", "filter.blur", '1px', { fromValue: '1px'}], position: 1886, duration: 0, easing: "easeOutExpo" },
                { id: "eid807", tween: [ "style", "${_Flash2Copy2}", "height", '48px', { fromValue: '62px'}], position: 1923, duration: 147, easing: "easeOutExpo" },
                { id: "eid808", tween: [ "style", "${_Flash2Copy2}", "height", '48px', { fromValue: '500px'}], position: 2071, duration: 206, easing: "easeOutExpo" },
                { id: "eid793", tween: [ "transform", "${_Flash1Copy2}", "rotateZ", '-6deg', { fromValue: '-6deg'}], position: 1638, duration: 0, easing: "easeOutExpo" },
                { id: "eid716", tween: [ "transform", "${_Flash1}", "scaleX", '7.02993', { fromValue: '1'}], position: 1527, duration: 46, easing: "easeOutExpo" },
                { id: "eid984", tween: [ "property", "${_camera-shutter-click-05}", "volume", '0.24', { fromValue: '0.24'}], position: 841, duration: 0, easing: "easeInOutBack" },
                { id: "eid792", tween: [ "subproperty", "${_Flash1Copy2}", "filter.contrast", '1.8001018460724', { fromValue: '1.7'}], position: 1379, duration: 46, easing: "easeOutExpo" },
                { id: "eid524", tween: [ "style", "${_Flash2}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid531", tween: [ "style", "${_Flash2}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 1666, duration: 58, easing: "easeOutExpo" },
                { id: "eid534", tween: [ "style", "${_Flash2}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 1724, duration: 175, easing: "easeOutExpo" },
                { id: "eid800", tween: [ "transform", "${_Flash1Copy2}", "scaleY", '6.54906', { fromValue: '1'}], position: 1379, duration: 46, easing: "easeOutExpo" },
                { id: "eid751", tween: [ "style", "${_Flash2Copy}", "height", '48px', { fromValue: '62px'}], position: 1261, duration: 147, easing: "easeOutExpo" },
                { id: "eid752", tween: [ "style", "${_Flash2Copy}", "height", '48px', { fromValue: '500px'}], position: 1408, duration: 206, easing: "easeOutExpo" },
                { id: "eid797", tween: [ "style", "${_Flash1Copy2}", "left", '259px', { fromValue: '259px'}], position: 1425, duration: 0, easing: "easeOutExpo" },
                { id: "eid803", tween: [ "style", "${_Flash2Copy2}", "top", '700px', { fromValue: '818px'}], position: 2071, duration: 18, easing: "easeOutExpo" },
                { id: "eid814", tween: [ "style", "${_Flash2Copy2}", "top", '744px', { fromValue: '700px'}], position: 2089, duration: 19, easing: "easeOutExpo" },
                { id: "eid816", tween: [ "style", "${_Flash2Copy2}", "top", '825px', { fromValue: '744px'}], position: 2108, duration: 169, easing: "easeOutExpo" },
                { id: "eid763", tween: [ "subproperty", "${_Flash1}", "filter.blur", '0px', { fromValue: '0px'}], position: 1527, duration: 0, easing: "easeOutExpo" },
                { id: "eid764", tween: [ "subproperty", "${_Flash1}", "filter.blur", '0px', { fromValue: '0px'}], position: 1573, duration: 0, easing: "easeOutExpo" },
                { id: "eid765", tween: [ "style", "${_Flash1}", "top", '697px', { fromValue: '697px'}], position: 1572, duration: 0, easing: "easeOutExpo" },
                { id: "eid718", tween: [ "subproperty", "${_Flash1}", "filter.contrast", '1.8001018460724', { fromValue: '1.7'}], position: 1527, duration: 46, easing: "easeOutExpo" },
                { id: "eid835", tween: [ "style", "${_Flash2Copy4}", "height", '48px', { fromValue: '62px'}], position: 841, duration: 147, easing: "easeOutSine" },
                { id: "eid836", tween: [ "style", "${_Flash2Copy4}", "height", '48px', { fromValue: '500px'}], position: 988, duration: 206, easing: "easeOutSine" },
                { id: "eid715", tween: [ "transform", "${_Flash1}", "scaleY", '6.54906', { fromValue: '1'}], position: 1527, duration: 46, easing: "easeOutExpo" },
                { id: "eid786", tween: [ "style", "${_Flash1Copy}", "top", '207px', { fromValue: '207px'}], position: 1141, duration: 0, easing: "easeOutExpo" },
                { id: "eid821", tween: [ "style", "${_Flash2Copy3}", "height", '48px', { fromValue: '62px'}], position: 1739, duration: 147, easing: "easeOutExpo" },
                { id: "eid822", tween: [ "style", "${_Flash2Copy3}", "height", '48px', { fromValue: '500px'}], position: 1887, duration: 206, easing: "easeOutExpo" },
                { id: "eid817", tween: [ "style", "${_Flash2Copy3}", "top", '570px', { fromValue: '478px'}], position: 1887, duration: 18, easing: "easeOutExpo" },
                { id: "eid818", tween: [ "style", "${_Flash2Copy3}", "top", '635px', { fromValue: '570px'}], position: 1904, duration: 19, easing: "easeOutExpo" },
                { id: "eid819", tween: [ "style", "${_Flash2Copy3}", "top", '687px', { fromValue: '635px'}], position: 1923, duration: 169, easing: "easeOutExpo" },
                { id: "eid811", tween: [ "style", "${_Flash2Copy2}", "width", '68px', { fromValue: '66px'}], position: 1923, duration: 147, easing: "easeOutExpo" },
                { id: "eid812", tween: [ "style", "${_Flash2Copy2}", "width", '68px', { fromValue: '540px'}], position: 2071, duration: 206, easing: "easeOutExpo" },
                { id: "eid744", tween: [ "subproperty", "${_Flash2}", "filter.blur", '1px', { fromValue: '1px'}], position: 1666, duration: 0, easing: "easeOutExpo" },
                { id: "eid739", tween: [ "subproperty", "${_Flash1}", "filter.saturate", '0', { fromValue: '0'}], position: 1572, duration: 0, easing: "easeOutExpo" },
                { id: "eid832", tween: [ "style", "${_Flash2Copy4}", "opacity", '0', { fromValue: '0'}], position: 841, duration: 0 },
                { id: "eid833", tween: [ "style", "${_Flash2Copy4}", "opacity", '0.82051282051282', { fromValue: '1'}], position: 988, duration: 51, easing: "easeOutSine" },
                { id: "eid834", tween: [ "style", "${_Flash2Copy4}", "opacity", '0', { fromValue: '0.82051282051282'}], position: 1040, duration: 155, easing: "easeOutSine" },
                { id: "eid838", tween: [ "style", "${_Flash2Copy4}", "left", '236px', { fromValue: '2px'}], position: 988, duration: 206, easing: "easeOutSine" },
                { id: "eid753", tween: [ "subproperty", "${_Flash2Copy}", "filter.blur", '1px', { fromValue: '1px'}], position: 1408, duration: 0, easing: "easeOutExpo" },
                { id: "eid747", tween: [ "style", "${_Flash2Copy}", "top", '801px', { fromValue: '582px'}], position: 1408, duration: 206, easing: "easeOutExpo" },
                { id: "eid790", tween: [ "subproperty", "${_Flash1Copy2}", "filter.sepia", '0.41666666666667', { fromValue: '0'}], position: 1379, duration: 46, easing: "easeOutExpo" },
                { id: "eid791", tween: [ "subproperty", "${_Flash1Copy2}", "filter.sepia", '0.41', { fromValue: '0.416667'}], position: 1425, duration: 213, easing: "easeOutExpo" },
                { id: "eid810", tween: [ "style", "${_Flash2Copy2}", "left", '394px', { fromValue: '530px'}], position: 2071, duration: 18, easing: "easeOutExpo" },
                { id: "eid813", tween: [ "style", "${_Flash2Copy2}", "left", '455px', { fromValue: '394px'}], position: 2089, duration: 19, easing: "easeOutExpo" },
                { id: "eid815", tween: [ "style", "${_Flash2Copy2}", "left", '524px', { fromValue: '455px'}], position: 2108, duration: 169, easing: "easeOutExpo" },
                { id: "eid720", tween: [ "style", "${_Flash1}", "opacity", '1', { fromValue: '0.000000'}], position: 1527, duration: 46, easing: "easeOutExpo" },
                { id: "eid719", tween: [ "style", "${_Flash1}", "opacity", '0.000000', { fromValue: '1'}], position: 1573, duration: 167, easing: "easeOutExpo" },
                { id: "eid766", tween: [ "style", "${_Flash1}", "left", '399px', { fromValue: '399px'}], position: 1572, duration: 0, easing: "easeOutExpo" },
                { id: "eid757", tween: [ "style", "${_Flash2Copy}", "width", '68px', { fromValue: '66px'}], position: 1261, duration: 147, easing: "easeOutExpo" },
                { id: "eid758", tween: [ "style", "${_Flash2Copy}", "width", '68px', { fromValue: '540px'}], position: 1408, duration: 206, easing: "easeOutExpo" },
                { id: "eid782", tween: [ "style", "${_Flash1Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 1087, duration: 55, easing: "easeOutExpo" },
                { id: "eid783", tween: [ "style", "${_Flash1Copy}", "opacity", '0.000000', { fromValue: '1'}], position: 1141, duration: 198, easing: "easeOutExpo" },
                { id: "eid982", tween: [ "style", "${_camera-shutter-click-05}", "display", 'block', { fromValue: 'none'}], position: 1766, duration: 0, easing: "easeInOutBack" },
                { id: "eid983", tween: [ "style", "${_camera-shutter-click-05}", "display", 'block', { fromValue: 'block'}], position: 1832, duration: 0, easing: "easeInOutBack" },
                { id: "eid801", tween: [ "subproperty", "${_Flash1Copy2}", "filter.blur", '0px', { fromValue: '0px'}], position: 1379, duration: 0, easing: "easeOutExpo" },
                { id: "eid802", tween: [ "subproperty", "${_Flash1Copy2}", "filter.blur", '0px', { fromValue: '0px'}], position: 1425, duration: 0, easing: "easeOutExpo" },
                { id: "eid985", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_camera-shutter-click-05}', [] ], ""], position: 841 }            ]
        }
    }
},
"Flash_Timer": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'FlashCopy',
                    opacity: 0.37606837606838,
                    rect: ['0px', '0px', '194px', '177px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_FlashCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '177px'],
                ["style", "opacity", '0.58119610563303'],
                ["style", "left", '0px'],
                ["style", "width", '194px']
            ],
            "${symbolSelector}": [
                ["style", "height", '177px'],
                ["style", "width", '194px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid559", tween: [ "style", "${_FlashCopy}", "height", '29px', { fromValue: '177px'}], position: 0, duration: 1000 },
                { id: "eid558", tween: [ "style", "${_FlashCopy}", "height", '29px', { fromValue: '177px'}], position: 1000, duration: 1000 },
                { id: "eid557", tween: [ "style", "${_FlashCopy}", "top", '74px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid556", tween: [ "style", "${_FlashCopy}", "top", '74px', { fromValue: '0px'}], position: 1000, duration: 1000 },
                { id: "eid565", tween: [ "style", "${_FlashCopy}", "width", '29px', { fromValue: '194px'}], position: 0, duration: 1000 },
                { id: "eid564", tween: [ "style", "${_FlashCopy}", "width", '29px', { fromValue: '194px'}], position: 1000, duration: 1000 },
                { id: "eid561", tween: [ "style", "${_FlashCopy}", "opacity", '0', { fromValue: '0.58119610563303'}], position: 0, duration: 1000 },
                { id: "eid560", tween: [ "style", "${_FlashCopy}", "opacity", '0', { fromValue: '0.58119610563303'}], position: 1000, duration: 1000 },
                { id: "eid563", tween: [ "style", "${_FlashCopy}", "left", '76px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid562", tween: [ "style", "${_FlashCopy}", "left", '76px', { fromValue: '0px'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"updateholder": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '479px', '646px', 'auto', 'auto'],
                    id: 'updateframe',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(215,215,215,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_updateframe}": [
                ["color", "background-color", 'rgba(215,215,215,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '646px']
            ],
            "${symbolSelector}": [
                ["style", "height", '646px'],
                ["style", "width", '479px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"content": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '477px', '347px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'photoholder',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '347px'],
                ["style", "width", '477px']
            ],
            "${_photoholder}": [
                ["color", "background-color", 'rgba(25,2,2,1.00)'],
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '477px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2070,
            autoPlay: true,
            timeline: [
                { id: "eid886", tween: [ "color", "${_photoholder}", "background-color", 'rgba(25,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(25,2,2,1.00)'}], position: 692, duration: 0, easing: "easeInOutBack" },
                { id: "eid885", tween: [ "style", "${_photoholder}", "opacity", '1', { fromValue: '0'}], position: 283, duration: 410, easing: "easeInOutBack" },
                { id: "eid889", tween: [ "style", "${_photoholder}", "display", 'block', { fromValue: 'none'}], position: 283, duration: 0, easing: "easeInOutBack" },
                { id: "eid887", tween: [ "style", "${_photoholder}", "display", 'block', { fromValue: 'block'}], position: 2070, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"callus": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-70px', '480px', '800px', 'auto', 'auto'],
                    id: 'thumbstackbtn',
                    type: 'image',
                    clip: ['rect(720px 377.5px 800px 105px)'],
                    fill: ['rgba(0,0,0,0)', 'images/thumbstackbtn.png', '0px', '0px']
                },
                {
                    rect: ['133px', '675px', '225px', '26px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(36,29,152,1.00)']
                },
                {
                    rect: ['183px', '677px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(195,0,0,1.00)', '600', 'none', 'normal'],
                    id: 'Text',
                    text: 'Call Us Today',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(36,29,152,1.00)'],
                ["style", "top", '745px'],
                ["style", "opacity", '0'],
                ["style", "left", '133px'],
                ["style", "width", '225px']
            ],
            "${_Text}": [
                ["style", "top", '747px'],
                ["color", "color", 'rgba(195,0,0,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '183px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '800px'],
                ["style", "width", '480px']
            ],
            "${_thumbstackbtn}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [720,377.5,800,105], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid461", tween: [ "style", "${_thumbstackbtn}", "top", '-70px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid462", tween: [ "style", "${_thumbstackbtn}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid911", tween: [ "style", "${_RoundRect}", "top", '674px', { fromValue: '745px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid913", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid914", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid912", tween: [ "style", "${_Text}", "top", '676px', { fromValue: '747px'}], position: 0, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"viiewgal": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '506px', '717px', 'auto', 'auto'],
                    id: 'gframe',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '717px'],
                ["style", "width", '506px']
            ],
            "${_gframe}": [
                ["style", "height", '717px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '506px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-341792330");
