jQuery(document).ready(function() {
    const e = jQuery("a[rel='m_PageScroll2id']"),
        n = jQuery("#video-wrap"),
        a = jQuery("#nav-mobile"),
        i = jQuery("#nav-mobile-btn");
    var o = [{
        photo: "./img/photos/juless.jpg",
        name: "Jules Brenner",
        link: "https://www.linkedin.com/in/jules-brenner/",
        position: "Founder",
        short: "Jules founded Industrial Succession with the goal of leveraging years of experience in sales, manufacturing, and engineering in order to acquire and grow established manufacturing operations. He blends a passion for creative engineering solutions with a love for well branded and marketed products.",
        long: ["In his latest projects, he was the first sales hire at ampUp, where he built a sales team to sell software for electric vehicle charging equipment. Prior, he was the first sales hire at XOS Trucks, an electric truck manufacturer, where he sold over 7 figures of electric trucks. Before XOS, Jules worked at Vengo Labs, a compact vending machine manufacturer, and was the founder of a high-end tutoring business in New York City. Prior to those projects, Jules was Project Manager at Duro UAS, an underwater vehicle manufacturer, where he managed a team of 30 engineers.", "Prior to Duro, he Co-Founded New York University’s first Baja Car Racing team, where he was the manufacturing lead for the 30-person team. Some of his additional projects include the design and manufacture of 3D printed tooling, Pro Bono consulting at NYOrtho (an established manufacturer of medical equipment) and manufacturing a mini jet engine.", "Jules received a Bachelor of Science Degree in Mechanical Engineering with Minors in Aerospace and Business from New York University."]
     }, 
     {
        photo: "./img/photos/photo-2.png",
        name: "Ron DaVella",
        link: "https://www.linkedin.com/in/ron-davella-a9893a3/",
        position: "CFO Advisor",
        short: "Ron DaVella has been a member of the Joint Corporation’s Board of Directors since it went public in November 2014. He serves as the Audit Committee chair and has assisted the company with its quarterly and annual financial statements, SEC reporting, hiring needs (CFO, controller, assistant controller), etc. He is also a member of its finance committee which evaluates and approves all acquisitions of clinics from existing franchisees and all new greenfield locations and is a member of the Nominating and Governance Committee. The Joint Corp is an operator and franchisor of over 500 chiropractic clinics throughout the US. He has also served on several, not for profit boards including Lura Turner Homes, The American Red Cross and the Girl Scouts of AZ.",
        long: ["Ron DaVella was the Executive VP of Finance for the Alkaline Water Company from April 1, 2019, through January 2020. The Alkaline Water Company Inc. (NASDAQ and TSXV: WTER) is a leading producer of premium bottled alkaline drinking water sold under the brand name Alkaline88®. He was also the Chief Financial Officer for Amazing Lash Franchise LLC from March 2016 to May 2017, a franchisor of eyelash extension studios and was the Chief Financial Officer at NanoFlex Power Corporation from May 2017 to March 2019, a disruptive solar technology company.", "Ron DaVella holds a Bachelor of Arts degree in accounting from Queens College and an MBA in Finance from Pace University. Ron DaVella is a CPA and was an audit partner with Deloitte from 1989 to 2014. Ron DaVella has an extensive background in accounting, finance, SEC reporting, and internal controls and has worked on several mergers and acquisitions, public offerings and financings. As a partner at Deloitte, he focused on the retail, technology and manufacturing industries."]
    }, 
    {
        photo: "./img/photos/photo-5.jpg",
         name: "Kenneth Pettibone",
         link: " https://www.linkedin.com/in/kenneth-pettibone-36116a1b3/",
         position: "Associate",
         short: "As an Associate, Kenneth’s responsibilities include supporting the strategic initiatives of portfolio companies, evaluating investment opportunities, and assisting in the deal execution and diligence of new investments.",
         long: ["Since joining Industrial Succession, he has helped to source a growing list of potential platform and add-on acquisitions using data analytics and strategic growth strategies. Prior to joining Industrial Succession, Kenneth spent time working in commercial real estate where he was part of a team that was involved in multiple successful investment opportunities in the Southwest. While touching on a variety of steps along the process, his main responsibilities were analyzing cash flows and assessing returns for clients.", "Kenneth obtained his Bachelor of Arts degree in Business Management from Azusa Pacific University in 3 years while pitching competitively for the school’s NCAA baseball team. Kenneth also holds an MBA in Finance from Azusa Pacific University. Born and raised in Orange County, CA, Kenneth enjoys surfing, hiking and playing tennis."]
     },
     {
        photo: "./img/photos/photo-4.jpg",
        name: "Mike Moser",
        link: "https://www.linkedin.com/in/mike-moser-a96142b",
        position: "COO Pen Manufacturing, ",
        short: "Mike is a highly accomplished senior-level executive with an extensive background in aerospace manufacturing. He has been successfully leading teams of professionals with sound strategy and decisive leadership for over two decades. With a demonstrated talent for reviving businesses and implementing strategic corporate infrastructure adjustments., he has been able to successfully work with senior leadership to meet growth expectations while improving efficiency, quality, and customer satisfaction. With his analytical mind and decisive nature, Mike is a proven leader with a high level of manufacturing and technical expertise. ",
        long: ["In his role as Director of Operations at Cadence Aerospace from February 2016 through July 2017, Mike was responsible for the smooth integration of two manufacturing companies into a single $95 million dollar entity. He also successfully turned around three critical customers, returning them from years of delinquency. After a private equity sale and merger in 2017, Mike took on the role of Director of Operations at Precision Components, owned by Triumph Group. In this role, Mike was responsible for guiding and overseeing the various control departments of a $40m Aerospace Gantry facility. Mike successfully increased manufacturing throughput by over 32% by implementing innovative SMED techniques and also revised ERP standards that drove company-wide use of metric-driven performance measurements. In his role with US Precision Sheet Metal he began in December of 2018, Mike was able to turn the company around from a $1.8M loss in 2018 to a $2.0M NI profit in 2019. In just a year’s time, he implemented a new ERP system that grew annual gross margins from 23% to 51%. Also, he obtained Nadcap certification while decreasing the overall cost of quality by 47%. <br> <br>As a trusted partner and direct collaborator with Presidents and CEOs on all operational matters and P&L results, Mike is focused on facilitating high-level strategy improvement and implementation of initiatives on schedule, and on budget through, progressive levels of command.  Mike holds degrees in economics and business administration and certificates in Lean Manufacturing, Zero-Defect Planning, and Statistical Process Control."]

    },
     {
        photo: "./img/photos/photo-4.jpeg",
        name: "Sam Rosati",
        link: "http://linkedin.com/in/sam-rosati-68787a8",
        position: "Investor-ASM",
        short: "Sam Rosati has been the Founder of the Pursuant Capital since 2016.",
        long: ["Pursuant Capital is a Micro Private Equity firm that buys and grows Florida-based businesses with a “forever” holding period. After acquiring 6 companies, Sam supports other Micro PE groups and Industrial Succession through co-investments and post-close experience.<br><br>Sam Rosati holds a JD degree in Law from the University of Virginia School of Law. You can learn more about Sam and his support for Industrial Succession investments at<a href='https://www.pursuantcapital.com/' target='blank' style='font-size: 14px;font-weight: 500; color: #8c0000;  line-height: 21px;'>  PursuantCapital.com</a>"]
    },
       
    {
        photo: "./img/photos/ericodmark.jpeg",
        name: "Eric Odmark",
        link: "https://www.linkedin.com/in/ericodmark",
        position: "Investor-ASM",
        short: "Eric Odmark has been the Co-founder of the Trailside Equity Partners since 2022 ",
        long: ["Trailside Equity Partners is a Micro Private Equity firm that buys and grows Midwest-based businesses with a “forever” holding period. After acquiring 7 companies under the metal fabricator, IMH’s, umbrella, Eric and his partner Mark support Industrial Succession through co-investments and post-close experience. Eric Odmark holds an MBA in Finance from Butler University. You can learn more about Eric and his support for Industrial Succession investments at IMH.com"]

    },
    {
        photo: "./img/photos/oneida_nunez.png",
        name: "Oneida Nunez",
        link: "https://www.linkedin.com/",
        position: "VP of Construction-ASM",
        short: "",
        long: [""]

    }
        
	];
    if (1200 < jQuery(window).width()) {
        const t = jQuery("#manufacturing"),
            s = jQuery("#attributes-row");
        jQuery(window).scroll(function() {
            jQuery(window).scrollTop() >= t.offset().top - 500 && t.find(".row").addClass("active");
            jQuery(window).scrollTop() >= s.offset().top - 700 && s.find(".card").addClass("active")
        })
    }

    function r() {
        jQuery("#play-icon").addClass("hidden"), jQuery("#video").addClass("active"), n.find("iframe").attr("src", "https://player.vimeo.com/video/487010306?autoplay=1")
    }
    jQuery("[data-video]").on("click", function() {
        jQuery("html, body").animate({
            scrollTop: n.offset().top - 15
        }, 1e3), setTimeout(function() {
            r()
        }, 1e3)
    }), n.on("click", function() {
        r()
    }), e.mPageScroll2id({
        offset: 15,
        highlightClass: "active"
    }), jQuery("[data-modal]").on("click", function() {
        var e = jQuery(this).attr("data-info");
        const n = jQuery("#info");
        n.find("[data-photo]").attr("src", o[e].photo), n.find("[data-name]").text(o[e].name),n.find("[data-position]").text(o[e].position), n.find("[data-link]").attr("href", o[e].link), n.find("[data-short]").text(o[e].short);
        let a = "";
        return jQuery.each(o[e].long, function(e, n) {
            a += "<p>" + n + "</p>"
        }), n.find("[data-long]").html(a), a = "", jQuery(jQuery(this).data("modal")).modal({
            fadeDuration: 100,
            closeClass: "icon-remove",
            closeText: ""
        }), !1
    }), i.on("click", function() {
        jQuery(this).toggleClass("open"), a.toggleClass("active")
    }), jQuery("[data-mob]").on("click", function() {
        i.removeClass("open"), a.removeClass("active")
    }), jQuery(window).on("scroll", function() {
        a.hasClass("active") && (i.removeClass("open"), a.removeClass("active"))
    })
});
//# sourceMappingURL=script.min.js.map