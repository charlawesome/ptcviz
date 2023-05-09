//things to add
//conversions by day (conversion time vs last impression time) & hour/day of week
//distribution time from last impression to conversion? time from first impression to conversion? time between impressions? impressions/conversion
//specific pages by device type

//Bugs - HTML entity for Apostrophe? Check Kanes

const CtvAppLookUp = {
    "457877": "Pluto",
    "g15147002586": "Samsung TV Plus",
    "www.720pstream.me": "720p stream",
"vizio.viziochannels.food52": "Food 52",
"up8834-npup31377_00-tubitvps30000000": "TubiTV",
"up8834-cusa08686_00-tubitvps40000000": "TubiTV",
"up8815-cusa05365_00-cbsiallaccessps4": "CBS",
"up8813-cusa05214_00-watchespnps40000": "ESPN",
"tv.pluto.xbox360": "Pluto",
"tv.pluto.u5plus-slim": "Pluto",
"tv.pluto.ps4": "Pluto",
"tv.pluto.ps3": "Pluto",
"tv.pluto.playstation4": "Pluto",
"tv.pluto.playstation3": "Pluto",
"tubitv.ps4": "TubiTV",
"tubitv.ps3": "TubiTV",
"ss|otto|xbox1|scripps|travel channel|vod": "Travel Channel",
"ss|otto|xbox1|scripps|travel channel|live": "Travel Channel",
"ss|otto|xbox1|scripps|hgtv|vod": "HGTV",
"ss|otto|xbox1|scripps|food network|vod": "Food Network",
"ss|otto|xbox1|discovery|tlc|vod": "TLC",
"ss|otto|xbox1|discovery|science|vod": "Science Channel",
"ss|otto|xbox1|discovery|motortrend|vod": "Motortrend",
"ss|otto|xbox1|discovery|motortrend|live": "Motortrend",
"ss|otto|xbox1|discovery|investigation discovery|vod": "Investigation Discovery",
"ss|otto|xbox1|discovery|destination america|vod": "Destination America",
"ss|otto|xbox1|discovery|american heroes|vod": "American Heroes",
"sling-production-6.13.2.247-tv": "NBC",
"redbox.food52": "Food 52",
"ps4.tubitv": "TubiTV",
"ps3.tubitv": "TubiTV",
"pluto.tv.ps4": "Pluto",
"id675276583": "Cooking Channel",
"id642410271": "Food Network",
"id596546023": "Travel Channel",
"id485756277": "DIY",
"id376038666": "HGTV",
"g17102009673": "Turner",
"g16222008329": "NBC",
"g15115002089": "TubiTV",
"fubotv.roku.vh1": "VH1",
"fubotv.roku.pac-12 washington": "Pac 12 Network",
"fubotv.roku.pac-12 oregon": "Pac 12 Network",
"fubotv.roku.pac-12 network": "Pac 12 Network",
"fubotv.roku.pac-12 mountain": "Pac 12 Network",
"fubotv.roku.pac-12 los angeles": "Pac 12 Network",
"fubotv.roku.pac-12 bay area": "Pac 12 Network",
"fubotv.roku.pac-12 arizona": "Pac 12 Network",
"fubotv.roku.mtv2": "MTV",
"fubotv.roku.msg2": "MSG",
"fubotv.roku.msg+2": "MSG",
"fubotv.roku.msg 2": "MSG",
"fubotv.roku.fox sports 2": "Fox Sports",
"fubotv.roku.fox sports 1": "Fox Sports",
"fubotv.ps4": "Fubo TV",
"fubotv.ios.mobile.vh1": "VH1",
"fubotv.ios.mobile.pac-12 oregon": "Pac 12 Network",
"fubotv.ios.mobile.pac-12 network": "Pac 12 Network",
"fubotv.ios.mobile.pac-12 mountain": "Pac 12 Network",
"fubotv.ios.mobile.mtv2": "MTV",
"fubotv.ios.mobile.msg2": "MSG",
"fubotv.ios.mobile.fox sports 2": "Fox Sports",
"fubotv.ios.mobile.fox sports 1": "Fox Sports",
"fubotv.firetv.vh1": "VH1",
"fubotv.firetv.pac-12 washington": "Pac 12 Network",
"fubotv.firetv.pac-12 oregon": "Pac 12 Network",
"fubotv.firetv.pac-12 network": "Pac 12 Network",
"fubotv.firetv.pac-12 mountain": "Pac 12 Network",
"fubotv.firetv.pac-12 los angeles": "Pac 12 Network",
"fubotv.firetv.pac-12 bay area": "Pac 12 Network",
"fubotv.firetv.pac-12 arizona": "Pac 12 Network",
"fubotv.firetv.mtv2": "MTV",
"fubotv.firetv.msg2": "MSG",
"fubotv.firetv.msg+2": "MSG",
"fubotv.firetv.msg 2": "MSG",
"fubotv.firetv.fox sports 2": "Fox Sports",
"fubotv.firetv.fox sports 1": "Fox Sports",
"fubotv.appletv.vh1": "VH1",
"fubotv.appletv.pac-12 washington": "Pac 12 Network",
"fubotv.appletv.pac-12 oregon": "Pac 12 Network",
"fubotv.appletv.pac-12 network": "Pac 12 Network",
"fubotv.appletv.pac-12 mountain": "Pac 12 Network",
"fubotv.appletv.pac-12 los angeles": "Pac 12 Network",
"fubotv.appletv.pac-12 bay area": "Pac 12 Network",
"fubotv.appletv.pac-12 arizona": "Pac 12 Network",
"fubotv.appletv.mtv2": "MTV",
"fubotv.appletv.msg2": "MSG",
"fubotv.appletv.msg+2": "MSG",
"fubotv.appletv.msg 2": "MSG",
"fubotv.appletv.fox sports 2": "Fox Sports",
"fubotv.appletv.fox sports 1": "Fox Sports",
"fubotv.androidtv.vh1": "VH1",
"fubotv.androidtv.pac-12 oregon": "Pac 12 Network",
"fubotv.androidtv.pac-12 network": "Pac 12 Network",
"fubotv.androidtv.pac-12 los angeles": "Pac 12 Network",
"fubotv.androidtv.pac-12 bay area": "Pac 12 Network",
"fubotv.androidtv.pac-12 arizona": "Pac 12 Network",
"fubotv.androidtv.mtv2": "MTV",
"fubotv.androidtv.msg2": "MSG",
"fubotv.androidtv.msg+2": "MSG",
"fubotv.androidtv.msg 2": "MSG",
"fubotv.androidtv.fox sports 2": "Fox Sports",
"fubotv.androidtv.fox sports 1": "Fox Sports",
"fubotv.android.mobile.pac-12 washington": "Pac 12 Network",
"fubotv.android.mobile.pac-12 oregon": "Pac 12 Network",
"fubotv.android.mobile.pac-12 network": "Pac 12 Network",
"fubotv.android.mobile.pac-12 mountain": "Pac 12 Network",
"fubotv.android.mobile.pac-12 los angeles": "Pac 12 Network",
"fubotv.android.mobile.pac-12 arizona": "Pac 12 Network",
"fubotv.android.mobile.fox sports 2": "Fox Sports",
"fubotv.android.mobile.fox sports 1": "Fox Sports",
"FOX Sports: Watch FIFA Women's World Cup 2019™": "Fox Sports",
"FOX 8 News": "Fox News",
"espninc.359487c84e950": "ESPN",
"dish.stb.dish_stb_vh1_vod": "VH1",
"coA.sling.tennischannel.ctg4t1EtgZ0EcidOoA=hRiV%gn3Ds774SIJ": "Tennis Channel",
"BTN2Go": "Big Ten Network",
"b07xf2p9kr": "Discovery",
"b07rbqx2zp": "NBC",
"b07nbr712v": "XITE ",
"b07mxrchqn": "Hideout.tv",
"b07hxmx81p": "STIRR",
"b07c3gmf4h": "Turner",
"b07bkpfxtj": "FX",
"b07bkpfxtj": "Philo",
"b07bd3vxb2": "Perpetual TV",
"b077v4h3vj": "OWN",
"b077v4h3vj": "Discovery",
"b076tcpkjt": "Turner",
"b075nthvjw": "TubiTV",
"b074vxf9xc": "CW",
"b072fr3fy8": "Velocity",
"b072c5b374": "Destination America",
"b0728kh2k2": "Discovery",
"b072373xyg": "NBC",
"b071lpxmp1": "AHC",
"b06xjr56mg": "TLC",
"b06xjr56mg": "Discovery",
"b06xjqfdms": "Investigation Discovery",
"b06xjmh3qg": "Discovery",
"b06xjdbp17": "Science Channel",
"b06xjdbp17": "Discovery",
"b06xjb3v8t": "Animal Planet",
"b06wwdym5r": "MouseBot",
"b01mdka8eh": "CBS",
"b01lxzlemn": "CW",
"b01lxy9nnr": "The Movie Channel",
"b01kip4t94": "People TV",
"b01j62q632": "DirecTV",
"b01hbxfaye": "DIY",
"b01hbx86vs": "Cooking Channel",
"b018iov40e": "NBC",
"b017jf3exs": "Travel Channel",
"b017jf3exs": "Discovery",
"b017jevtp4": "HGTV",
"b017dvrov6": "Food Network",
"b015ymzzbm": "FX",
"b0124yiky2": "Tennis Channel",
"b00zwr6gze": "The Relax Channel",
"b00v970b0w": "Comedy Central",
"b00v8x7xto": "Fox News",
"b00ub063f0": "MTV",
"b00ub051na": "VH1",
"b00qsnfniw": "Newsy",
"b00oyc7v8o": "Turner",
"b00odc5n80": "SlingTV",
"b00kdsgipk": "Discovery",
"b00hx2cyjs": "Turner",
"b00ft7lgpm": "Bloomberg",
"b00e5q5gn6": "NBC",
"b00e5nh6yg": "Lifetime",
"b00e5nh46q": "History",
"b00e5ngyvm": "A&E",
"b00c25oi36": "Discovery",
"b00bi60dmu": "Turner",
"b00bi583ge": "Turner",
"b008kpb8p8": "ABC",
"b0055dl1g4": "NBC",
"b004u7bxbo": "Crunchyroll",
"att.ott.vh1": "VH1",
"att.ott.mtv2": "MTV",
"att.ott.espn3": "ESPN",
"att.ott.espn2": "ESPN",
"att.ott.espn1": "ESPN",
"att.mobile.espn3": "ESPN",
"att.mobile.espn2": "ESPN",
"att.mobile.espn1": "ESPN",
"Atom VPN (100% free)": "Crunchy",
"9wzdncrfjv7w": "Fox",
"9pjmtvpcn31k": "Turner",
"9ph1tj8nwsxs": "TLC Go",
"9ph1tj8nwsxs": "Discovery",
"9pfjp1q9r4fk": "Conde Nast",
"9p16skp7lvfn": "Science Channel",
"9ncsft53jnhl": "Discovery",
"9nblggh4x7wp": "SlingTV",
"9nbcjx3zvwvn": "Animal Planet",
"9nb4d3vwkb55": "ESPN",
"9n6bb9c17jbl": "Discovery",
"9n613thzwj8r": "NBC",
"9n1sv6841f0b": "TubiTV",
"9mzmphwtsc1s": "Discovery",
"9mzbszmr23gp": "TV Player HD: IPTV, Movies & Sports",
"9mwld6w1j7qp": "HGTV",
"9mwb26grcc4h": "Investigation Discovery GO",
"9mvjwnh8r7mq": "Turner",
"9mv5dllj9bz5": "TV Player Online",
"9live.club": "9Live",
"96972659": "Turner",
"96041": "Discovery",
"9581": "NBC",
"9160": "NBC",
"90767": "Discovery",
"90766": "Discovery",
"90765": "Discovery",
"90764": "Discovery",
"8b851734": "NBC",
"85700": "Discovery",
"85699": "Discovery",
"75636": "Discovery",
"75619": "Discovery",
"75617": "Discovery",
"74519": "Discovery",
"6abc Philadelphia": "ABC",
"68669": "NBC",
"65978": "Turner",
"54000": "Bloomberg",
"511322____philo_scripps_travhd_vod_ott_roku": "Travel Channel",
"511322____philo_scripps_travhd_vod_ott_apple_tv": "Travel Channel",
"511322____philo_scripps_travhd_vod_ott_amazon_fire": "Travel Channel",
"511322____philo_scripps_travhd_vod_android_phone": "Travel Channel",
"511322____philo_scripps_hgtv_vod_ott_roku": "HGTV",
"511322____philo_scripps_hgtv_vod_ott_apple_tv": "HGTV",
"511322____philo_scripps_hgtv_vod_ott_amazon_fire": "HGTV",
"511322____philo_scripps_hgtv_vod_ios_iphone": "HGTV",
"511322____philo_scripps_hgtv_vod_android_phone": "HGTV",
"511322____philo_scripps_foodhd_vod_ott_roku": "Food Network",
"511322____philo_scripps_foodhd_vod_ott_apple_tv": "Food Network",
"511322____philo_scripps_foodhd_vod_ott_amazon_fire": "Food Network",
"511322____philo_scripps_foodhd_vod_ios_iphone": "Food Network",
"511322____philo_scripps_foodhd_vod_android_phone": "Food Network",
"511322____philo_scripps_diyhd_vod_ott_roku": "DIY",
"511322____philo_scripps_diyhd_vod_ott_apple_tv": "DIY",
"511322____philo_scripps_diyhd_vod_ott_amazon_fire": "DIY",
"511322____philo_scripps_diyhd_vod_ios_iphone": "DIY",
"511322____philo_scripps_diyhd_vod_android_phone": "DIY",
"511322____7532701____philo_discovery_velocity_vod_tvos_tv": "Velocity",
"511322____7532700____philo_discovery_velocity_vod_fire_tv": "Velocity",
"511322____7532699____philo_discovery_velocity_vod_roku_tv": "Velocity",
"511322____7532697____philo_discovery_velocity_vod_android_phone": "Velocity",
"511322____7532695____philo_discovery_velocity_vod_ios_phone": "Velocity",
"511322____7532681____philo_discovery_tlc_vod_tvos_tv": "TLC",
"511322____7532680____philo_discovery_tlc_vod_fire_tv": "TLC",
"511322____7532679____philo_discovery_tlc_vod_roku_tv": "TLC",
"511322____7532677____philo_discovery_tlc_vod_android_phone": "TLC",
"511322____7532675____philo_discovery_tlc_vod_ios_phone": "TLC",
"511322____7532661____philo_discovery_sci_vod_tvos_tv": "Science Channel",
"511322____7532660____philo_discovery_sci_vod_fire_tv": "Science Channel",
"511322____7532659____philo_discovery_sci_vod_roku_tv": "Science Channel",
"511322____7532657____philo_discovery_sci_vod_android_phone": "Science Channel",
"511322____7532641____philo_discovery_own_vod_tvos_tv": "Own",
"511322____7532640____philo_discovery_own_vod_fire_tv": "Own",
"511322____7532639____philo_discovery_own_vod_roku_tv": "Own",
"511322____7532637____philo_discovery_own_vod_android_phone": "Own",
"511322____7532635____philo_discovery_own_vod_ios_phone": "Own",
"511322____7532621____philo_discovery_id_vod_tvos_tv": "Investigation Discovery",
"511322____7532620____philo_discovery_id_vod_fire_tv": "Investigation Discovery",
"511322____7532619____philo_discovery_id_vod_roku_tv": "Investigation Discovery",
"511322____7532617____philo_discovery_id_vod_android_phone": "Investigation Discovery",
"511322____7532615____philo_discovery_id_vod_ios_phone": "Investigation Discovery",
"511322____7532601____philo_discovery_discoverylife_vod_tvos_tv": "Discovery",
"511322____7532600____philo_discovery_discoverylife_vod_fire_tv": "Discovery",
"511322____7532599____philo_discovery_discoverylife_vod_roku_tv": "Discovery",
"511322____7532597____philo_discovery_discoverylife_vod_android_phone": "Discovery",
"511322____7532595____philo_discovery_discoverylife_vod_ios_phone": "Discovery",
"511322____7532561____philo_discovery_discovery_vod_tvos_tv": "Discovery",
"511322____7532560____philo_discovery_discovery_vod_fire_tv": "Discovery",
"511322____7532559____philo_discovery_discovery_vod_roku_tv": "Discovery",
"511322____7532557____philo_discovery_discovery_vod_android_phone": "Discovery",
"511322____7532555____philo_discovery_discovery_vod_ios_phone": "Discovery",
"511322____7532541____philo_discovery_destinationamerica_vod_tvos_tv": "Destination America",
"511322____7532540____philo_discovery_destinationamerica_vod_fire_tv": "Destination America",
"511322____7532539____philo_discovery_destinationamerica_vod_roku_tv": "Destination America",
"511322____7532537____philo_discovery_destinationamerica_vod_android_phone": "Destination America",
"511322____7532535____philo_discovery_destinationamerica_vod_ios_phone": "Destination America",
"511322____7532521____philo_discovery_animalplanet_vod_tvos_tv": "Animal Planet",
"511322____7532520____philo_discovery_animalplanet_vod_fire_tv": "Animal Planet",
"511322____7532519____philo_discovery_animalplanet_vod_roku_tv": "Animal Planet",
"511322____7532517____philo_discovery_animalplanet_vod_android_phone": "Animal Planet",
"511322____7532515____philo_discovery_animalplanet_vod_ios_phone": "Animal Planet",
"511322____7532501____philo_discovery_ahc_vod_tvos_tv": "Discovery",
"511322____7532500____philo_discovery_ahc_vod_fire_tv": "Discovery",
"511322____7532499____philo_discovery_ahc_vod_roku_tv": "Discovery",
"511322____7532497____philo_discovery_ahc_vod_android_phone": "Discovery",
"511322____7532495____philo_discovery_ahc_vod_ios_phone": "Discovery",
"511322____15541484____philo_discovery_tlc_vod_android_tv": "TLC",
"511322____15541482____philo_discovery_sci_vod_android_tv": "Science Channel",
"511322____15541480____philo_discovery_own_vod_android_tv": "Own",
"511322____15541478____philo_discovery_id_vod_android_tv": "Investigation Discovery",
"511322____15541476____philo_discovery_discoverylife_vod_android_tv": "Discovery",
"511322____15541474____philo_discovery_discovery_vod_android_tv": "Discovery",
"511322____15541472____philo_discovery_destinationamerica_vod_android_tv": "Destination America",
"511322____15541470____philo_discovery_animalplanet_vod_android_tv": "Animal Planet",
"511322____15541467____philo_discovery_ahc_vod_android_tv": "Discovery",
"511322____15538929____philo_scripps_travel_vod_android_tv": "Travel Channel",
"511322____15538928____philo_scripps_diy_vod_android_tv": "DIY",
"511322____15538927____philo_scripps_hgtv_vod_android_tv": "HGTV",
"511322____15538926____philo_scripps_food_vod_android_tv": "Food Network",
"511322____15538921____philo_scripps_cooking_vod_android_tv": "Cooking Channel",
"505334____9302132____contour_motortrend_vod_android_handheld": "Motortrend",
"505334____8828248____contour_oprah_vod_web_html5": "Own",
"505334____8828246____contour_oprah_vod_ios_iphone": "Own",
"505334____8828245____contour_oprah_vod_ios_ipad": "Own",
"505334____8828244____contour_oprah_vod_android_tablet": "Own",
"505334____8828243____contour_oprah_vod_android_handheld": "Own",
"505334____8828231____contour_discoverylifechannel_vod_android_handheld": "Discovery",
"505334____8828230____contour_destinationameri_vod_web_html5": "Destination America",
"505334____8828228____contour_destinationameri_vod_ios_iphone": "Destination America",
"505334____8828222____contour_americanheroes_vod_ios_iphone": "American Heroes",
"505334____8828221____contour_americanheroes_vod_ios_ipad": "American Heroes",
"505334____8828219____contour_americanheroes_vod_android_handheld": "American Heroes",
"505334____8828218____contour_investigationdsc_vod_web_html5": "Investigation Discovery",
"505334____8828216____contour_investigationdsc_vod_ios_iphone": "Investigation Discovery",
"505334____8828215____contour_investigationdsc_vod_ios_ipad": "Investigation Discovery",
"505334____8828214____contour_investigationdsc_vod_android_tablet": "Investigation Discovery",
"505334____8828213____contour_investigationdsc_vod_android_handheld": "Investigation Discovery",
"505334____8828212____contour_sciencechannel_vod_web_html5": "Science Channel",
"505334____8828210____contour_sciencechannel_vod_ios_iphone": "Science Channel",
"505334____8828209____contour_sciencechannel_vod_ios_ipad": "Science Channel",
"505334____8828207____contour_sciencechannel_vod_android_handheld": "Science Channel",
"505334____8828206____contour_tlc_vod_web_html5": "TLC",
"505334____8828204____contour_tlc_vod_ios_iphone": "TLC",
"505334____8828203____contour_tlc_vod_ios_ipad": "TLC",
"505334____8828202____contour_tlc_vod_android_tablet": "TLC",
"505334____8828201____contour_tlc_vod_android_handheld": "TLC",
"505334____8828200____contour_discovery_vod_web_html5": "Discovery",
"505334____8828198____contour_discovery_vod_ios_iphone": "Discovery",
"505334____8828197____contour_discovery_vod_ios_ipad": "Discovery",
"505334____8828195____contour_discovery_vod_android_handheld": "Discovery",
"505334____8828194____contour_animalplanet_vod_web_html5": "Animal Planet",
"505334____8828192____contour_animalplanet_vod_ios_iphone": "Animal Planet",
"505334____8828191____contour_animalplanet_vod_ios_ipad": "Animal Planet",
"505334____8828189____contour_animalplanet_vod_android_handheld": "Animal Planet",
"505334____8828158____contour_travelchannel_vod_web_html5": "Travel Channel",
"505334____8828156____contour_travelchannel_vod_ios_iphone": "Travel Channel",
"505334____8828155____contour_travelchannel_vod_ios_ipad": "Travel Channel",
"505334____8828154____contour_travelchannel_vod_android_tablet": "Travel Channel",
"505334____8828153____contour_travelchannel_vod_android_handheld": "Travel Channel",
"505334____8828152____contour_cookingchannel_vod_web_html5": "Cooking Channel",
"505334____8828150____contour_cookingchannel_vod_ios_iphone": "Cooking Channel",
"505334____8828149____contour_cookingchannel_vod_ios_ipad": "Cooking Channel",
"505334____8828148____contour_cookingchannel_vod_android_tablet": "Cooking Channel",
"505334____8828147____contour_cookingchannel_vod_android_handheld": "Cooking Channel",
"505334____8828146____contour_diynetwork_vod_web_html5": "DIY",
"505334____8828144____contour_diynetwork_vod_ios_iphone": "DIY",
"505334____8828143____contour_diynetwork_vod_ios_ipad": "DIY",
"505334____8828140____contour_foodnetwork_vod_web_html5": "Food Network",
"505334____8828138____contour_foodnetwork_vod_ios_iphone": "Food Network",
"505334____8828137____contour_foodnetwork_vod_ios_ipad": "Food Network",
"505334____8828136____contour_foodnetwork_vod_android_tablet": "Food Network",
"505334____8828135____contour_foodnetwork_vod_android_handheld": "Food Network",
"505334____8828134____contour_hgtv_vod_web_html5": "HGTV",
"505334____8828133____contour_hgtv_vod_ios_iphone": "HGTV",
"505334____8828132____contour_hgtv_vod_ios_ipad": "HGTV",
"505334____8828131____contour_hgtv_vod_android_tablet": "HGTV",
"505334____8828130____contour_hgtv_vod_android_handheld": "HGTV",
"46041.381963____otto_roku_hgtv_vod": "HGTV",
"46041": "Discovery",
"41468": "TubiTV",
"393638____fubo_web_desktop_vod": "Fubo",
"393638____fubo_travel_roku_vod": "Travel Channel",
"393638____fubo_travel_iphone_vod": "Travel Channel",
"393638____fubo_travel_ipad_vod": "Travel Channel",
"393638____fubo_travel_desktop_vod": "Travel Channel",
"393638____fubo_travel_chromecast_vod": "Travel Channel",
"393638____fubo_travel_appletv_vod": "Travel Channel",
"393638____fubo_travel_androidtv_vod": "Travel Channel",
"393638____fubo_travel_android_tablet_vod": "Travel Channel",
"393638____fubo_travel_android_phone_vod": "Travel Channel",
"393638____fubo_travel_amazon_fire_vod": "Travel Channel",
"393638____fubo_tlc_roku_vod": "TLC",
"393638____fubo_tlc_iphone_vod": "TLC",
"393638____fubo_tlc_ipad_vod": "TLC",
"393638____fubo_tlc_desktop_vod": "TLC",
"393638____fubo_tlc_chromecast_vod": "TLC",
"393638____fubo_tlc_appletv_vod": "TLC",
"393638____fubo_tlc_androidtv_vod": "TLC",
"393638____fubo_tlc_android_tablet_vod": "TLC",
"393638____fubo_tlc_android_phone_vod": "TLC",
"393638____fubo_tlc_amazon_fire_vod": "TLC",
"393638____fubo_science_roku_vod": "Science Channel",
"393638____fubo_science_iphone_vod": "Science Channel",
"393638____fubo_science_ipad_vod": "Science Channel",
"393638____fubo_science_desktop_vod": "Science Channel",
"393638____fubo_science_chromecast_vod": "Science Channel",
"393638____fubo_science_appletv_vod": "Science Channel",
"393638____fubo_science_androidtv_vod": "Science Channel",
"393638____fubo_science_android_phone_vod": "Science Channel",
"393638____fubo_science_amazon_fire_vod": "Science Channel",
"393638____fubo_own_roku_vod": "Own",
"393638____fubo_own_iphone_vod": "Own",
"393638____fubo_own_ipad_vod": "Own",
"393638____fubo_own_desktop_vod": "Own",
"393638____fubo_own_chromecast_vod": "Own",
"393638____fubo_own_appletv_vod": "Own",
"393638____fubo_own_androidtv_vod": "Own",
"393638____fubo_own_android_tablet_vod": "Own",
"393638____fubo_own_android_phone_vod": "Own",
"393638____fubo_own_amazon_fire_vod": "Own",
"393638____fubo_motor_trend_roku_vod": "Fubo",
"393638____fubo_motor_trend_iphone_vod": "Fubo",
"393638____fubo_motor_trend_ipad_vod": "Fubo",
"393638____fubo_motor_trend_desktop_vod": "Fubo",
"393638____fubo_motor_trend_chromecast_vod": "Motortrend",
"393638____fubo_motor_trend_appletv_vod": "Fubo",
"393638____fubo_motor_trend_androidtv_vod": "Fubo",
"393638____fubo_motor_trend_android_tablet_vod": "Fubo",
"393638____fubo_motor_trend_android_phone_vod": "Fubo",
"393638____fubo_motor_trend_amazon_fire_vod": "Fubo",
"393638____fubo_mobile_app_iphone_vod": "Fubo",
"393638____fubo_mobile_app_ipad_vod": "Fubo",
"393638____fubo_mobile_app_android_tablet_vod": "Fubo",
"393638____fubo_investigation_discovery_roku_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_iphone_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_ipad_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_desktop_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_chromecast_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_appletv_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_androidtv_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_android_tablet_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_android_phone_vod": "Investigation Discovery",
"393638____fubo_investigation_discovery_amazon_fire_vod": "Investigation Discovery",
"393638____fubo_hgtv_roku_vod": "HGTV",
"393638____fubo_hgtv_iphone_vod": "HGTV",
"393638____fubo_hgtv_ipad_vod": "HGTV",
"393638____fubo_hgtv_desktop_vod": "HGTV",
"393638____fubo_hgtv_chromecast_vod": "HGTV",
"393638____fubo_hgtv_appletv_vod": "HGTV",
"393638____fubo_hgtv_androidtv_vod": "HGTV",
"393638____fubo_hgtv_android_tablet_vod": "HGTV",
"393638____fubo_hgtv_android_phone_vod": "HGTV",
"393638____fubo_hgtv_amazon_fire_vod": "HGTV",
"393638____fubo_food_roku_vod": "Food Network",
"393638____fubo_food_iphone_vod": "Food Network",
"393638____fubo_food_ipad_vod": "Food Network",
"393638____fubo_food_desktop_vod": "Food Network",
"393638____fubo_food_chromecast_vod": "Food Network",
"393638____fubo_food_appletv_vod": "Food Network",
"393638____fubo_food_androidtv_vod": "Food Network",
"393638____fubo_food_android_tablet_vod": "Food Network",
"393638____fubo_food_android_phone_vod": "Food Network",
"393638____fubo_food_amazon_fire_vod": "Food Network",
"393638____fubo_diy_roku_vod": "DIY",
"393638____fubo_diy_iphone_vod": "DIY",
"393638____fubo_diy_desktop_vod": "DIY",
"393638____fubo_diy_appletv_vod": "DIY",
"393638____fubo_diy_androidtv_vod": "DIY",
"393638____fubo_diy_amazon_fire_vod": "DIY",
"393638____fubo_discovery_roku_vod": "Discovery",
"393638____fubo_discovery_life_roku_vod": "Discovery",
"393638____fubo_discovery_life_amazon_fire_vod": "Discovery",
"393638____fubo_discovery_iphone_vod": "Discovery",
"393638____fubo_discovery_ipad_vod": "Discovery",
"393638____fubo_discovery_desktop_vod": "Discovery",
"393638____fubo_discovery_chromecast_vod": "Discovery",
"393638____fubo_discovery_appletv_vod": "Discovery",
"393638____fubo_discovery_androidtv_vod": "Discovery",
"393638____fubo_discovery_android_tablet_vod": "Discovery",
"393638____fubo_discovery_android_phone_vod": "Discovery",
"393638____fubo_discovery_amazon_fire_vod": "Discovery",
"393638____fubo_destination_america_roku_vod": "Destination America",
"393638____fubo_destination_america_iphone_vod": "Destination America",
"393638____fubo_destination_america_amazon_fire_vod": "Destination America",
"393638____fubo_cooking_roku_vod": "Cooking Channel",
"393638____fubo_cooking_iphone_vod": "Cooking Channel",
"393638____fubo_cooking_ipad_vod": "Cooking Channel",
"393638____fubo_cooking_desktop_vod": "Cooking Channel",
"393638____fubo_cooking_appletv_vod": "Cooking Channel",
"393638____fubo_cooking_android_phone_vod": "Cooking Channel",
"393638____fubo_cooking_amazon_fire_vod": "Cooking Channel",
"393638____fubo_connected_tv_roku_vod": "Fubo",
"393638____fubo_connected_tv_appletv_vod": "Fubo",
"393638____fubo_connected_tv_androidtv_vod": "Fubo",
"393638____fubo_connected_tv_amazon_fire_vod": "Fubo",
"393638____fubo_animal_planet_roku_vod": "Animal Planet",
"393638____fubo_animal_planet_iphone_vod": "Animal Planet",
"393638____fubo_animal_planet_ipad_vod": "Animal Planet",
"393638____fubo_animal_planet_desktop_vod": "Animal Planet",
"393638____fubo_animal_planet_chromecast_vod": "Animal Planet",
"393638____fubo_animal_planet_appletv_vod": "Animal Planet",
"393638____fubo_animal_planet_androidtv_vod": "Animal Planet",
"393638____fubo_animal_planet_android_tablet_vod": "Animal Planet",
"393638____fubo_animal_planet_android_phone_vod": "Animal Planet",
"393638____fubo_animal_planet_amazon_fire_vod": "Animal Planet",
"393638____fubo_american_heroes_roku_vod": "American Heroes",
"393638____fubo_american_heroes_ipad_vod": "American Heroes",
"393638____fubo_american_heroes_desktop_vod": "American Heroes",
"393638____fubo_american_heroes_chromecast_vod": "American Heroes",
"393638____fubo_american_heroes_appletv_vod": "American Heroes",
"393638____fubo_american_heroes_androidtv_vod": "American Heroes",
"393638____fubo_american_heroes_amazon_fire_vod": "American Heroes",
"384777____xtv_velocity_vod_ios_iphone": "Velocity",
"384777____xtv_velocity_vod_ios_ipad": "Velocity",
"384777____xtv_velocity_vod_android_handheld": "Velocity",
"384777____xtv_travelchannel_vod_web_html5": "Travel Channel",
"384777____xtv_travelchannel_vod_ios_iphone": "Travel Channel",
"384777____xtv_travelchannel_vod_ios_ipad": "Travel Channel",
"384777____xtv_travelchannel_vod_android_tablet": "Travel Channel",
"384777____xtv_travelchannel_vod_android_handheld": "Travel Channel",
"384777____xtv_tlc_vod_web_html5": "TLC",
"384777____xtv_tlc_vod_ios_iphone": "TLC",
"384777____xtv_tlc_vod_ios_ipad": "TLC",
"384777____xtv_tlc_vod_android_tablet": "TLC",
"384777____xtv_tlc_vod_android_handheld": "TLC",
"384777____xtv_sciencechannel_vod_web_html5": "Science Channel",
"384777____xtv_sciencechannel_vod_ios_iphone": "Science Channel",
"384777____xtv_sciencechannel_vod_ios_ipad": "Science Channel",
"384777____xtv_sciencechannel_vod_android_tablet": "Science Channel",
"384777____xtv_sciencechannel_vod_android_handheld": "Science Channel",
"384777____xtv_own_vod_web_html5": "Own",
"384777____xtv_own_vod_ios_iphone": "Own",
"384777____xtv_own_vod_ios_ipad": "Own",
"384777____xtv_own_vod_android_tablet": "Own",
"384777____xtv_own_vod_android_handheld": "Own",
"384777____xtv_investigationdiscovery_vod_web_html5": "Investigation Discovery",
"384777____xtv_investigationdiscovery_vod_ios_iphone": "Investigation Discovery",
"384777____xtv_investigationdiscovery_vod_ios_ipad": "Investigation Discovery",
"384777____xtv_investigationdiscovery_vod_android_tablet": "Investigation Discovery",
"384777____xtv_investigationdiscovery_vod_android_handheld": "Investigation Discovery",
"384777____xtv_hgtv_vod_web_html5": "HGTV",
"384777____xtv_hgtv_vod_ios_iphone": "HGTV",
"384777____xtv_hgtv_vod_ios_ipad": "HGTV",
"384777____xtv_hgtv_vod_android_tablet": "HGTV",
"384777____xtv_hgtv_vod_android_handheld": "HGTV",
"384777____xtv_foodnetwork_vod_web_html5": "Food Network",
"384777____xtv_foodnetwork_vod_ios_iphone": "Food Network",
"384777____xtv_foodnetwork_vod_ios_ipad": "Food Network",
"384777____xtv_foodnetwork_vod_android_tablet": "Food Network",
"384777____xtv_foodnetwork_vod_android_handheld": "Food Network",
"384777____xtv_diy_vod_web_html5": "DIY",
"384777____xtv_diy_vod_ios_iphone": "DIY",
"384777____xtv_diy_vod_ios_ipad": "DIY",
"384777____xtv_diy_vod_android_tablet": "DIY",
"384777____xtv_diy_vod_android_handheld": "DIY",
"384777____xtv_discoverylife_vod_web_html5": "Discovery",
"384777____xtv_discoverylife_vod_ios_iphone": "Discovery",
"384777____xtv_discoverylife_vod_ios_ipad": "Discovery",
"384777____xtv_discoverylife_vod_android_tablet": "Discovery",
"384777____xtv_discoverylife_vod_android_handheld": "Discovery",
"384777____xtv_discoverychannel_vod_web_html5": "Discovery",
"384777____xtv_discoverychannel_vod_ios_iphone": "Discovery",
"384777____xtv_discoverychannel_vod_ios_ipad": "Discovery",
"384777____xtv_discoverychannel_vod_android_tablet": "Discovery",
"384777____xtv_discoverychannel_vod_android_handheld": "Discovery",
"384777____xtv_destinationamerica_vod_web_html5": "Destination America",
"384777____xtv_destinationamerica_vod_ios_iphone": "Destination America",
"384777____xtv_destinationamerica_vod_ios_ipad": "Destination America",
"384777____xtv_destinationamerica_vod_android_tablet": "Destination America",
"384777____xtv_destinationamerica_vod_android_handheld": "Destination America",
"384777____xtv_cookingchannel_vod_web_html5": "Cooking Channel",
"384777____xtv_cookingchannel_vod_ios_iphone": "Cooking Channel",
"384777____xtv_cookingchannel_vod_ios_ipad": "Cooking Channel",
"384777____xtv_cookingchannel_vod_android_tablet": "Cooking Channel",
"384777____xtv_cookingchannel_vod_android_handheld": "Cooking Channel",
"384777____xtv_animalplanet_vod_web_html5": "Animal Planet",
"384777____xtv_animalplanet_vod_ios_iphone": "Animal Planet",
"384777____xtv_animalplanet_vod_ios_ipad": "Animal Planet",
"384777____xtv_animalplanet_vod_android_tablet": "Animal Planet",
"384777____xtv_animalplanet_vod_android_handheld": "Animal Planet",
"384777____xtv_americanheroes_vod_web_html5": "American Heroes",
"384777____xtv_americanheroes_vod_ios_iphone": "American Heroes",
"384777____xtv_americanheroes_vod_ios_ipad": "American Heroes",
"384777____xtv_americanheroes_vod_android_tablet": "American Heroes",
"384777____xtv_americanheroes_vod_android_handheld": "American Heroes",
"381963____otto_xbox1_travel_channel_vod": "Travel Channel",
"381963____otto_xbox1_travel_channel_live": "Travel Channel",
"381963____otto_xbox1_tlc_vod": "TLC",
"381963____otto_xbox1_science_vod": "Science Channel",
"381963____otto_xbox1_motortrend_vod": "Motortrend",
"381963____otto_xbox1_motortrend_live": "Motortrend",
"381963____otto_xbox1_id_vod": "Investigation Discovery",
"381963____otto_xbox1_hgtv_vod": "HGTV",
"381963____otto_xbox1_food_network_vod": "Food Network",
"381963____otto_xbox1_diy_vod": "DIY",
"381963____otto_xbox1_discovery_vod": "Discovery",
"381963____otto_xbox1_destination_america_vod": "Destination America",
"381963____otto_xbox1_cooking_channel_vod": "Cooking Channel",
"381963____otto_xbox1_american_heroes_vod": "American Heroes",
"381963____otto_tvos_travel_channel_vod": "Travel Channel",
"381963____otto_tvos_travel_channel_live": "Travel Channel",
"381963____otto_tvos_tlc_vod": "TLC",
"381963____otto_tvos_science_vod": "Science Channel",
"381963____otto_tvos_motortrend_vod": "Motortrend",
"381963____otto_tvos_motortrend_live": "Motortrend",
"381963____otto_tvos_id_vod": "Investigation Discovery",
"381963____otto_tvos_hgtv_vod": "HGTV",
"381963____otto_tvos_food_network_vod": "Food Network",
"381963____otto_tvos_diy_vod": "DIY",
"381963____otto_tvos_discovery_vod": "Discovery",
"381963____otto_tvos_destination_america_vod": "Destination America",
"381963____otto_tvos_cooking_channel_vod": "Cooking Channel",
"381963____otto_tvos_american_heroes_vod": "American Heroes",
"381963____otto_samsung_travel_channel_vod": "Travel Channel",
"381963____otto_samsung_travel_channel_live": "Travel Channel",
"381963____otto_samsung_tlc_vod": "TLC",
"381963____otto_samsung_science_vod": "Science Channel",
"381963____otto_samsung_motortrend_vod": "Motortrend",
"381963____otto_samsung_motortrend_live": "Motortrend",
"381963____otto_samsung_id_vod": "Investigation Discovery",
"381963____otto_samsung_hgtv_vod": "HGTV",
"381963____otto_samsung_food_network_vod": "Food Network",
"381963____otto_samsung_diy_vod": "DIY",
"381963____otto_samsung_discovery_vod": "Discovery",
"381963____otto_samsung_destination_america_vod": "Destination America",
"381963____otto_samsung_cooking_channel_vod": "Cooking Channel",
"381963____otto_samsung_american_heroes_vod": "American Heroes",
"381963____otto_roku_travel_channel_vod": "Travel Channel",
"381963____otto_roku_travel_channel_live": "Travel Channel",
"381963____otto_roku_tlc_vod": "TLC",
"381963____otto_roku_science_vod": "Science Channel",
"381963____otto_roku_motortrend_vod": "Motortrend",
"381963____otto_roku_motortrend_live": "Motortrend",
"381963____otto_roku_id_vod": "Investigation Discovery",
"381963____otto_roku_hgtv_vod": "HGTV",
"381963____otto_roku_food_network_vod": "Food Network",
"381963____otto_roku_diy_vod": "DIY",
"381963____otto_roku_discovery_vod": "Discovery",
"381963____otto_roku_destination_america_vod": "Destination America",
"381963____otto_roku_cooking_channel_vod": "Cooking Channel",
"381963____otto_roku_american_heroes_vod": "American Heroes",
"381963____otto_lg_travel_channel_vod": "Travel Channel",
"381963____otto_lg_travel_channel_live": "Travel Channel",
"381963____otto_lg_tlc_vod": "TLC",
"381963____otto_lg_science_vod": "Science Channel",
"381963____otto_lg_motortrend_vod": "Motortrend",
"381963____otto_lg_motortrend_live": "Motortrend",
"381963____otto_lg_id_vod": "Investigation Discovery",
"381963____otto_lg_hgtv_vod": "HGTV",
"381963____otto_lg_diy_vod": "DIY",
"381963____otto_lg_discovery_vod": "Discovery",
"381963____otto_lg_destination_america_vod": "Destination America",
"381963____otto_lg_cooking_channel_vod": "Cooking Channel",
"381963____otto_lg_american_heroes_vod": "American Heroes",
"381963____otto_iphone_travel_channel_vod": "Travel Channel",
"381963____otto_iphone_travel_channel_live": "Travel Channel",
"381963____otto_iphone_tlc_vod": "TLC",
"381963____otto_iphone_science_vod": "Science Channel",
"381963____otto_iphone_motortrend_vod": "Motortrend",
"381963____otto_iphone_motortrend_live": "Motortrend",
"381963____otto_iphone_id_vod": "Investigation Discovery",
"381963____otto_iphone_hgtv_vod": "HGTV",
"381963____otto_iphone_food_network_vod": "Food Network",
"381963____otto_iphone_diy_vod": "DIY",
"381963____otto_iphone_discovery_vod": "Discovery",
"381963____otto_iphone_cooking_channel_vod": "Cooking Channel",
"381963____otto_iphone_american_heroes_vod": "American Heroes",
"381963____otto_ipad_travel_channel_vod": "Travel Channel",
"381963____otto_ipad_travel_channel_live": "Travel Channel",
"381963____otto_ipad_tlc_vod": "TLC",
"381963____otto_ipad_science_vod": "Science Channel",
"381963____otto_ipad_motortrend_vod": "Motortrend",
"381963____otto_ipad_motortrend_live": "Motortrend",
"381963____otto_ipad_id_vod": "Investigation Discovery",
"381963____otto_ipad_hgtv_vod": "HGTV",
"381963____otto_ipad_food_network_vod": "Food Network",
"381963____otto_ipad_diy_vod": "DIY",
"381963____otto_ipad_discovery_vod": "Discovery",
"381963____otto_ipad_cooking_channel_vod": "Cooking Channel",
"381963____otto_ipad_american_heroes_vod": "American Heroes",
"381963____otto_desktop_travel_channel_live": "Travel Channel",
"381963____otto_chromecast_travel_channel_vod": "Travel Channel",
"381963____otto_chromecast_travel_channel_live": "Travel Channel",
"381963____otto_chromecast_tlc_vod": "TLC",
"381963____otto_chromecast_science_vod": "Science Channel",
"381963____otto_chromecast_motortrend_vod": "Motortrend",
"381963____otto_chromecast_motortrend_live": "Motortrend",
"381963____otto_chromecast_id_vod": "Investigation Discovery",
"381963____otto_chromecast_hgtv_vod": "HGTV",
"381963____otto_chromecast_food_network_vod": "Food Network",
"381963____otto_chromecast_diy_vod": "DIY",
"381963____otto_chromecast_discovery_vod": "Discovery",
"381963____otto_chromecast_destination_america_vod": "Destination America",
"381963____otto_chromecast_cooking_channel_vod": "Cooking Channel",
"381963____otto_chromecast_american_heroes_vod": "American Heroes",
"381963____otto_browser_travel_channel_live": "Travel Channel",
"381963____otto_browser_motortrend_vod": "Motortrend",
"381963____otto_browser_motortrend_live": "Motortrend",
"381963____otto_android_tv_tlc_vod": "TLC",
"381963____otto_android_tv_science_vod": "Science Channel",
"381963____otto_android_tv_motortrend_vod": "Motortrend",
"381963____otto_android_tv_motortrend_live": "Motortrend",
"381963____otto_android_tv_id_vod": "Investigation Discovery",
"381963____otto_android_tv_diy_vod": "DIY",
"381963____otto_android_tv_discovery_vod": "Discovery",
"381963____otto_android_tv_destination_america_vod": "Destination America",
"381963____otto_android_tv_cooking_channel_vod": "Cooking Channel",
"381963____otto_android_tv_american_heroes_vod": "American Heroes",
"381963____otto_android_tablet_travel_channel_vod": "Travel Channel",
"381963____otto_android_tablet_travel_channel_live": "Travel Channel",
"381963____otto_android_tablet_tlc_vod": "TLC",
"381963____otto_android_tablet_science_vod": "Science Channel",
"381963____otto_android_tablet_motortrend_vod": "Motortrend",
"381963____otto_android_tablet_motortrend_live": "Motortrend",
"381963____otto_android_tablet_id_vod": "Investigation Discovery",
"381963____otto_android_tablet_hgtv_vod": "HGTV",
"381963____otto_android_tablet_food_network_vod": "Food Network",
"381963____otto_android_tablet_diy_vod": "DIY",
"381963____otto_android_tablet_discovery_vod": "Discovery",
"381963____otto_android_tablet_destination_america_vod": "Destination America",
"381963____otto_android_tablet_cooking_channel_vod": "Cooking Channel",
"381963____otto_android_tablet_american_heroes_vod": "American Heroes",
"381963____otto_android_phone_travel_channel_vod": "Travel Channel",
"381963____otto_android_phone_travel_channel_live": "Travel Channel",
"381963____otto_android_phone_tlc_vod": "TLC",
"381963____otto_android_phone_science_vod": "Science Channel",
"381963____otto_android_phone_motortrend_vod": "Motortrend",
"381963____otto_android_phone_motortrend_live": "Motortrend",
"381963____otto_android_phone_id_vod": "Investigation Discovery",
"381963____otto_android_phone_hgtv_vod": "HGTV",
"381963____otto_android_phone_food_network_vod": "Food Network",
"381963____otto_android_phone_diy_vod": "DIY",
"381963____otto_android_phone_discovery_vod": "Discovery",
"381963____otto_android_phone_destination_america_vod": "Destination America",
"381963____otto_android_phone_cooking_channel_vod": "Cooking Channel",
"381963____otto_android_phone_american_heroes_vod": "American Heroes",
"381963____otto_amazon_tv_travel_channel_vod": "Travel Channel",
"381963____otto_amazon_tv_travel_channel_live": "Travel Channel",
"381963____otto_amazon_tv_tlc_vod": "TLC",
"381963____otto_amazon_tv_science_vod": "Science Channel",
"381963____otto_amazon_tv_motortrend_vod": "Motortrend",
"381963____otto_amazon_tv_motortrend_live": "Motortrend",
"381963____otto_amazon_tv_id_vod": "Investigation Discovery",
"381963____otto_amazon_tv_id_live": "Investigation Discovery",
"381963____otto_amazon_tv_hgtv_vod": "HGTV",
"381963____otto_amazon_tv_food_network_vod": "Food Network",
"381963____otto_amazon_tv_diy_vod": "DIY",
"381963____otto_amazon_tv_discovery_vod": "Discovery",
"381963____otto_amazon_tv_destination_america_vod": "Destination America",
"381963____otto_amazon_tv_cooking_channel_vod": "Cooking Channel",
"381963____otto_amazon_tv_american_heroes_vod": "American Heroes",
"381963____otto_amazon_tablet_travel_channel_vod": "Travel Channel",
"381963____otto_amazon_tablet_travel_channel_live": "Travel Channel",
"381963____otto_amazon_tablet_tlc_vod": "TLC",
"381963____otto_amazon_tablet_science_vod": "Science Channel",
"381963____otto_amazon_tablet_motortrend_live": "Motortrend",
"381963____otto_amazon_tablet_id_vod": "Investigation Discovery",
"381963____otto_amazon_tablet_hgtv_vod": "HGTV",
"381963____otto_amazon_tablet_food_network_vod": "Food Network",
"381963____otto_amazon_tablet_diy_vod": "DIY",
"381963____otto_amazon_tablet_discovery_vod": "Discovery",
"381963____otto_amazon_tablet_destination_america_vod": "Destination America",
"381963____otto_amazon_tablet_cooking_channel_vod": "Cooking Channel",
"381963____otto_amazon_tablet_american_heroes_vod": "American Heroes",
"381963____otto_amazon_fire_travel_channel_vod": "Travel Channel",
"381963____otto_amazon_fire_travel_channel_live": "Travel Channel",
"381963____otto_amazon_fire_hgtv_vod": "HGTV",
"381963____otto_amazon_fire_food_network_vod": "Food Network",
"381963____otto_airtvplayer_travel_channel_vod": "Travel Channel",
"381963____otto_airtvplayer_travel_channel_live": "Travel Channel",
"381963____otto_airtvplayer_tlc_vod": "TLC",
"381963____otto_airtvplayer_science_vod": "Science Channel",
"381963____otto_airtvplayer_motortrend_vod": "Motortrend",
"381963____otto_airtvplayer_motortrend_live": "Motortrend",
"381963____otto_airtvplayer_id_vod": "Investigation Discovery",
"381963____otto_airtvplayer_hgtv_vod": "HGTV",
"381963____otto_airtvplayer_food_network_vod": "Food Network",
"381963____otto_airtvplayer_diy_vod": "DIY",
"381963____otto_airtvplayer_discovery_vod": "Discovery",
"381963____otto_airtvplayer_destination_america_vod": "Destination America",
"381963____otto_airtvplayer_cooking_channel_vod": "Cooking Channel",
"381963____otto_airtvplayer_american_heroes_vod": "American Heroes",
"381963____dany_iphone_tlc_vod": "TLC",
"381963____dany_ipad_tlc_vod": "TLC",
"381963____dany_ipad_own_vod": "Own",
"381963____dany_fire_tv_own_vod": "Own",
"381963____dany_fire_tv_diy_vod": "DIY",
"381963____dany_desktop_travel_channel_vod": "Travel Channel",
"381963____dany_desktop_tlc_vod": "TLC",
"381963____dany_desktop_science_vod": "Science Channel",
"381963____dany_desktop_own_vod": "Own",
"381963____dany_desktop_motortrend_vod": "Motortrend",
"381963____dany_desktop_investigation_discovery_vod": "Investigation Discovery",
"381963____dany_desktop_hgtv_vod": "HGTV",
"381963____dany_desktop_food_network_vod": "Food Network",
"381963____dany_desktop_diy_vod": "DIY",
"381963____dany_desktop_discovery_vod": "Discovery",
"381963____dany_desktop_cooking_channel_vod": "Cooking Channel",
"381963____dany_desktop_american_heroes_vod": "American Heroes",
"381963____dany_android_tablet_travel_channel_vod": "Travel Channel",
"381963____dany_android_tablet_tlc_vod": "TLC",
"381963____dany_android_tablet_science_vod": "Science Channel",
"381963____dany_android_tablet_own_vod": "Own",
"381963____dany_android_tablet_motortrend_vod": "Motortrend",
"381963____dany_android_tablet_investigation_discovery_vod": "Investigation Discovery",
"381963____dany_android_tablet_hgtv_vod": "HGTV",
"381963____dany_android_tablet_food_network_vod": "Food Network",
"381963____dany_android_tablet_diy_vod": "DIY",
"381963____dany_android_tablet_discovery_vod": "Discovery",
"381963____dany_android_tablet_cooking_channel_vod": "Cooking Channel",
"381963____dany_android_tablet_animal planet_vod": "Animal Planet",
"381963____dany_android_phone_travel_channel_vod": "Travel Channel",
"381963____dany_android_phone_tlc_vod": "TLC",
"381963____dany_android_phone_science_vod": "Science Channel",
"381963____dany_android_phone_own_vod": "Own",
"381963____dany_android_phone_motortrend_vod": "Motortrend",
"381963____dany_android_phone_investigation_discovery_vod": "Investigation Discovery",
"381963____dany_android_phone_hgtv_vod": "HGTV",
"381963____dany_android_phone_food_network_vod": "Food Network",
"381963____dany_android_phone_diy_vod": "DIY",
"381963____dany_android_phone_discovery_vod": "Discovery",
"381963____dany_android_phone_cooking_channel_vod": "Cooking Channel",
"372496____zulu_tvos_watch_vod_velocity_hd": "Velocity",
"372496____zulu_tvos_watch_vod_tlc": "TLC",
"372496____zulu_tvos_watch_vod_own": "Own",
"372496____zulu_tvos_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_tvos_watch_vod_hgtv": "HGTV",
"372496____zulu_tvos_watch_vod_food_network": "Food Network",
"372496____zulu_tvos_watch_vod_discovery": "Discovery",
"372496____zulu_tvos_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_ios_tablet_watch_vod_velocity_hd": "Velocity",
"372496____zulu_ios_tablet_watch_vod_tlc": "TLC",
"372496____zulu_ios_tablet_watch_vod_own": "Own",
"372496____zulu_ios_tablet_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_ios_tablet_watch_vod_hgtv": "HGTV",
"372496____zulu_ios_tablet_watch_vod_food_network": "Food Network",
"372496____zulu_ios_tablet_watch_vod_discovery": "Discovery",
"372496____zulu_ios_tablet_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_ios_mobile_watch_vod_velocity_hd": "Velocity",
"372496____zulu_ios_mobile_watch_vod_tlc": "TLC",
"372496____zulu_ios_mobile_watch_vod_own": "Own",
"372496____zulu_ios_mobile_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_ios_mobile_watch_vod_hgtv": "HGTV",
"372496____zulu_ios_mobile_watch_vod_food_network": "Food Network",
"372496____zulu_ios_mobile_watch_vod_discovery": "Discovery",
"372496____zulu_ios_mobile_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_firetv_watch_vod_velocity_hd": "Velocity",
"372496____zulu_firetv_watch_vod_tlc": "TLC",
"372496____zulu_firetv_watch_vod_own": "Own",
"372496____zulu_firetv_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_firetv_watch_vod_hgtv": "HGTV",
"372496____zulu_firetv_watch_vod_food_network": "Food Network",
"372496____zulu_firetv_watch_vod_discovery": "Discovery",
"372496____zulu_firetv_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_desktop_watch_vod_velocity_hd": "Velocity",
"372496____zulu_desktop_watch_vod_tlc": "TLC",
"372496____zulu_desktop_watch_vod_own": "Own",
"372496____zulu_desktop_watch_vod_hgtv": "HGTV",
"372496____zulu_desktop_watch_vod_food_network": "Food Network",
"372496____zulu_desktop_watch_vod_discovery": "Discovery",
"372496____zulu_desktop_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_chromecast_watch_vod_velocity_hd": "Velocity",
"372496____zulu_chromecast_watch_vod_tlc": "TLC",
"372496____zulu_chromecast_watch_vod_own": "Own",
"372496____zulu_chromecast_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_chromecast_watch_vod_hgtv": "HGTV",
"372496____zulu_chromecast_watch_vod_food_network": "Food Network",
"372496____zulu_chromecast_watch_vod_discovery": "Discovery",
"372496____zulu_chromecast_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_android_tablet_watch_vod_velocity_hd": "Velocity",
"372496____zulu_android_tablet_watch_vod_tlc": "TLC",
"372496____zulu_android_tablet_watch_vod_own": "Own",
"372496____zulu_android_tablet_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_android_tablet_watch_vod_hgtv": "HGTV",
"372496____zulu_android_tablet_watch_vod_food_network": "Food Network",
"372496____zulu_android_tablet_watch_vod_discovery": "Discovery",
"372496____zulu_android_tablet_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_android_mobile_watch_vod_velocity_hd": "Velocity",
"372496____zulu_android_mobile_watch_vod_tlc": "TLC",
"372496____zulu_android_mobile_watch_vod_own": "Own",
"372496____zulu_android_mobile_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____zulu_android_mobile_watch_vod_hgtv": "HGTV",
"372496____zulu_android_mobile_watch_vod_food_network": "Food Network",
"372496____zulu_android_mobile_watch_vod_discovery": "Discovery",
"372496____zulu_android_mobile_watch_vod_animal_planet": "Animal Planet",
"372496____zulu_amazon_smarttv_watch_vod_tlc": "TLC",
"372496____zulu_amazon_smarttv_watch_vod_own": "Own",
"372496____zulu_amazon_smarttv_watch_vod_food_network": "Food Network",
"372496____nextgen_dtve_tvos_watch_vod_travel": "Travel Channel",
"372496____nextgen_dtve_tvos_watch_vod_tlc": "TLC",
"372496____nextgen_dtve_tvos_watch_vod_own": "Own",
"372496____nextgen_dtve_tvos_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____nextgen_dtve_tvos_watch_vod_hgtv": "HGTV",
"372496____nextgen_dtve_tvos_watch_vod_food_network": "Food Network",
"372496____nextgen_dtve_tvos_watch_vod_diy": "DIY",
"372496____nextgen_dtve_tvos_watch_vod_discovery": "Discovery",
"372496____nextgen_dtve_tvos_watch_vod_destination_america": "Destination America",
"372496____nextgen_dtve_tvos_watch_vod_cooking": "Cooking Channel",
"372496____nextgen_dtve_tvos_watch_vod_animal_planet": "Animal Planet",
"372496____nextgen_dtve_ios_tablet_watch_vod_velocity_hd": "Velocity",
"372496____nextgen_dtve_ios_tablet_watch_vod_travel": "Travel Channel",
"372496____nextgen_dtve_ios_tablet_watch_vod_tlc": "TLC",
"372496____nextgen_dtve_ios_tablet_watch_vod_own": "Own",
"372496____nextgen_dtve_ios_tablet_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____nextgen_dtve_ios_tablet_watch_vod_hgtv": "HGTV",
"372496____nextgen_dtve_ios_tablet_watch_vod_food_network": "Food Network",
"372496____nextgen_dtve_ios_tablet_watch_vod_discovery": "Discovery",
"372496____nextgen_dtve_ios_tablet_watch_vod_cooking": "Cooking Channel",
"372496____nextgen_dtve_ios_tablet_watch_vod_animal_planet": "Animal Planet",
"372496____nextgen_dtve_ios_mobile_watch_vod_velocity_hd": "Velocity",
"372496____nextgen_dtve_ios_mobile_watch_vod_tlc": "TLC",
"372496____nextgen_dtve_ios_mobile_watch_vod_own": "Own",
"372496____nextgen_dtve_ios_mobile_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____nextgen_dtve_ios_mobile_watch_vod_hgtv": "HGTV",
"372496____nextgen_dtve_ios_mobile_watch_vod_food_network": "Food Network",
"372496____nextgen_dtve_ios_mobile_watch_vod_discovery": "Discovery",
"372496____nextgen_dtve_ios_mobile_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_tvos_watch_vod_velocity_hd": "Velocity",
"372496____gmott_tvos_watch_vod_travel": "Travel Channel",
"372496____gmott_tvos_watch_vod_tlc": "TLC",
"372496____gmott_tvos_watch_vod_own": "Own",
"372496____gmott_tvos_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_tvos_watch_vod_hgtv": "HGTV",
"372496____gmott_tvos_watch_vod_food_network": "Food Network",
"372496____gmott_tvos_watch_vod_diy": "DIY",
"372496____gmott_tvos_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_tvos_watch_vod_discovery": "Discovery",
"372496____gmott_tvos_watch_vod_destination_america": "Destination America",
"372496____gmott_tvos_watch_vod_cooking": "Cooking Channel",
"372496____gmott_tvos_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_tvos_watch_vod_american_heroes": "American Heroes",
"372496____gmott_tizentv_watch_vod_velocity_hd": "Velocity",
"372496____gmott_tizentv_watch_vod_travel": "Travel Channel",
"372496____gmott_tizentv_watch_vod_tlc": "TLC",
"372496____gmott_tizentv_watch_vod_own": "Own",
"372496____gmott_tizentv_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_tizentv_watch_vod_hgtv": "HGTV",
"372496____gmott_tizentv_watch_vod_food_network": "Food Network",
"372496____gmott_tizentv_watch_vod_diy": "DIY",
"372496____gmott_tizentv_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_tizentv_watch_vod_discovery": "Discovery",
"372496____gmott_tizentv_watch_vod_cooking": "Cooking Channel",
"372496____gmott_tizentv_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_tizentv_watch_vod_american_heroes": "American Heroes",
"372496____gmott_roku_watch_vod_velocity_hd": "Velocity",
"372496____gmott_roku_watch_vod_travel": "Travel Channel",
"372496____gmott_roku_watch_vod_tlc": "TLC",
"372496____gmott_roku_watch_vod_own": "Own",
"372496____gmott_roku_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_roku_watch_vod_hgtv": "HGTV",
"372496____gmott_roku_watch_vod_food_network": "Food Network",
"372496____gmott_roku_watch_vod_diy": "DIY",
"372496____gmott_roku_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_roku_watch_vod_discovery": "Discovery",
"372496____gmott_roku_watch_vod_destination_america": "Destination America",
"372496____gmott_roku_watch_vod_cooking": "Cooking Channel",
"372496____gmott_roku_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_roku_watch_vod_american_heroes": "American Heroes",
"372496____gmott_osprey_watch_vod_velocity_hd": "Velocity",
"372496____gmott_osprey_watch_vod_travel": "Travel Channel",
"372496____gmott_osprey_watch_vod_tlc": "TLC",
"372496____gmott_osprey_watch_vod_own": "Own",
"372496____gmott_osprey_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_osprey_watch_vod_hgtv": "HGTV",
"372496____gmott_osprey_watch_vod_food_network": "Food Network",
"372496____gmott_osprey_watch_vod_diy": "DIY",
"372496____gmott_osprey_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_osprey_watch_vod_discovery": "Discovery",
"372496____gmott_osprey_watch_vod_destination_america": "Destination America",
"372496____gmott_osprey_watch_vod_cooking": "Cooking Channel",
"372496____gmott_osprey_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_osprey_watch_vod_american_heroes": "American Heroes",
"372496____gmott_ios_tablet_watch_vod_velocity_hd": "Velocity",
"372496____gmott_ios_tablet_watch_vod_travel": "Travel Channel",
"372496____gmott_ios_tablet_watch_vod_tlc": "TLC",
"372496____gmott_ios_tablet_watch_vod_own": "Own",
"372496____gmott_ios_tablet_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_ios_tablet_watch_vod_hgtv": "HGTV",
"372496____gmott_ios_tablet_watch_vod_food_network": "Food Network",
"372496____gmott_ios_tablet_watch_vod_diy": "DIY",
"372496____gmott_ios_tablet_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_ios_tablet_watch_vod_discovery": "Discovery",
"372496____gmott_ios_tablet_watch_vod_cooking": "Cooking Channel",
"372496____gmott_ios_tablet_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_ios_tablet_watch_vod_american_heroes": "American Heroes",
"372496____gmott_ios_mobile_watch_vod_velocity_hd": "Velocity",
"372496____gmott_ios_mobile_watch_vod_travel": "Travel Channel",
"372496____gmott_ios_mobile_watch_vod_tlc": "TLC",
"372496____gmott_ios_mobile_watch_vod_own": "Own",
"372496____gmott_ios_mobile_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_ios_mobile_watch_vod_hgtv": "HGTV",
"372496____gmott_ios_mobile_watch_vod_food_network": "Food Network",
"372496____gmott_ios_mobile_watch_vod_diy": "DIY",
"372496____gmott_ios_mobile_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_ios_mobile_watch_vod_discovery": "Discovery",
"372496____gmott_ios_mobile_watch_vod_cooking": "Cooking Channel",
"372496____gmott_ios_mobile_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_ios_mobile_watch_vod_american_heroes": "American Heroes",
"372496____gmott_firetv_watch_vod_velocity_hd": "Velocity",
"372496____gmott_firetv_watch_vod_travel": "Travel Channel",
"372496____gmott_firetv_watch_vod_tlc": "TLC",
"372496____gmott_firetv_watch_vod_own": "Own",
"372496____gmott_firetv_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_firetv_watch_vod_hgtv": "HGTV",
"372496____gmott_firetv_watch_vod_food_network": "Food Network",
"372496____gmott_firetv_watch_vod_diy": "DIY",
"372496____gmott_firetv_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_firetv_watch_vod_discovery": "Discovery",
"372496____gmott_firetv_watch_vod_destination_america": "Destination America",
"372496____gmott_firetv_watch_vod_cooking": "Cooking Channel",
"372496____gmott_firetv_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_firetv_watch_vod_american_heroes": "American Heroes",
"372496____gmott_desktop_watch_vod_velocity_hd": "Velocity",
"372496____gmott_desktop_watch_vod_travel": "Travel Channel",
"372496____gmott_desktop_watch_vod_tlc": "TLC",
"372496____gmott_desktop_watch_vod_own": "Own",
"372496____gmott_desktop_watch_vod_hgtv": "HGTV",
"372496____gmott_desktop_watch_vod_food_network": "Food Network",
"372496____gmott_desktop_watch_vod_diy": "DIY",
"372496____gmott_desktop_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_desktop_watch_vod_discovery": "Discovery",
"372496____gmott_desktop_watch_vod_destination_america": "Destination America",
"372496____gmott_desktop_watch_vod_cooking": "Cooking Channel",
"372496____gmott_desktop_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_desktop_watch_vod_american_heroes": "American Heroes",
"372496____gmott_chromecast_watch_vod_travel": "Travel Channel",
"372496____gmott_chromecast_watch_vod_tlc": "TLC",
"372496____gmott_chromecast_watch_vod_own": "Own",
"372496____gmott_chromecast_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_chromecast_watch_vod_hgtv": "HGTV",
"372496____gmott_chromecast_watch_vod_food_network": "Food Network",
"372496____gmott_chromecast_watch_vod_discovery": "Discovery",
"372496____gmott_chromecast_watch_vod_destination_america": "Destination America",
"372496____gmott_chromecast_watch_vod_cooking": "Cooking Channel",
"372496____gmott_chromecast_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_android_tablet_watch_vod_velocity_hd": "Velocity",
"372496____gmott_android_tablet_watch_vod_travel": "Travel Channel",
"372496____gmott_android_tablet_watch_vod_tlc": "TLC",
"372496____gmott_android_tablet_watch_vod_own": "Own",
"372496____gmott_android_tablet_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_android_tablet_watch_vod_hgtv": "HGTV",
"372496____gmott_android_tablet_watch_vod_food_network": "Food Network",
"372496____gmott_android_tablet_watch_vod_diy": "DIY",
"372496____gmott_android_tablet_watch_vod_discovery": "Discovery",
"372496____gmott_android_tablet_watch_vod_cooking": "Cooking Channel",
"372496____gmott_android_tablet_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_android_tablet_watch_vod_american_heroes": "American Heroes",
"372496____gmott_android_mobile_watch_vod_velocity_hd": "Velocity",
"372496____gmott_android_mobile_watch_vod_travel": "Travel Channel",
"372496____gmott_android_mobile_watch_vod_tlc": "TLC",
"372496____gmott_android_mobile_watch_vod_own": "Own",
"372496____gmott_android_mobile_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_android_mobile_watch_vod_hgtv": "HGTV",
"372496____gmott_android_mobile_watch_vod_food_network": "Food Network",
"372496____gmott_android_mobile_watch_vod_diy": "DIY",
"372496____gmott_android_mobile_watch_vod_discovery_life_hd": "Discovery",
"372496____gmott_android_mobile_watch_vod_discovery": "Discovery",
"372496____gmott_android_mobile_watch_vod_destination_america": "Destination America",
"372496____gmott_android_mobile_watch_vod_cooking": "Cooking Channel",
"372496____gmott_android_mobile_watch_vod_animal_planet": "Animal Planet",
"372496____gmott_android_mobile_watch_vod_american_heroes": "American Heroes",
"372496____gmott_amazon_smarttv_watch_vod_travel": "Travel Channel",
"372496____gmott_amazon_smarttv_watch_vod_tlc": "TLC",
"372496____gmott_amazon_smarttv_watch_vod_id_discovery_hd": "Investigation Discovery",
"372496____gmott_amazon_smarttv_watch_vod_hgtv": "HGTV",
"372496____gmott_amazon_smarttv_watch_vod_food_network": "Food Network",
"372496____gmott_amazon_smarttv_watch_vod_diy": "DIY",
"372496____dtve_iphone_watch_now_velocity_hd": "Velocity",
"372496____dtve_iphone_watch_now_tlc": "TLC",
"372496____dtve_iphone_watch_now_own": "Own",
"372496____dtve_iphone_watch_now_id_discovery_hd": "Investigation Discovery",
"372496____dtve_iphone_watch_now_hgtv": "HGTV",
"372496____dtve_iphone_watch_now_foodnetwork": "Food Network",
"372496____dtve_iphone_watch_now_diy": "DIY",
"372496____dtve_iphone_watch_now_discovery_life_hd": "Discovery",
"372496____dtve_iphone_watch_now_cookingchannel": "Cooking Channel",
"372496____dtve_iphone_watch_now_american_heroes": "American Heroes",
"372496____dtve_ipad_watch_now_velocity_hd": "Velocity",
"372496____dtve_ipad_watch_now_tlc": "TLC",
"372496____dtve_ipad_watch_now_own": "Own",
"372496____dtve_ipad_watch_now_id_discovery_hd": "Investigation Discovery",
"372496____dtve_ipad_watch_now_hgtv": "HGTV",
"372496____dtve_ipad_watch_now_foodnetwork": "Food Network",
"372496____dtve_ipad_watch_now_diy": "DIY",
"372496____dtve_ipad_watch_now_discovery_life_hd": "Discovery",
"372496____dtve_ipad_watch_now_cookingchannel": "Cooking Channel",
"372496____dtve_ipad_watch_now_american_heroes": "American Heroes",
"372496____dtve_desktop_watch_now_velocity_hd": "Velocity",
"372496____dtve_desktop_watch_now_travel channel media": "Travel Channel",
"372496____dtve_desktop_watch_now_tlc": "TLC",
"372496____dtve_desktop_watch_now_science channel": "Science Channel",
"372496____dtve_desktop_watch_now_own": "Own ",
"372496____dtve_desktop_watch_now_hgtv": "HGTV",
"372496____dtve_desktop_watch_now_foodnetwork": "Food Network",
"372496____dtve_desktop_watch_now_diy": "DIY",
"372496____dtve_desktop_watch_now_discovery_life_hd": "Discovery",
"372496____dtve_desktop_watch_now_discovery channel": "Discovery",
"372496____dtve_desktop_watch_now_destination_america": "Destination America",
"372496____dtve_desktop_watch_now_cookingchannel": "Cooking Channel",
"372496____dtve_desktop_watch_now_animal planet": "Animal Planet",
"372496____dtve_desktop_watch_now_american_heroes": "American Heroes",
"372496____dtve_android_tablet_watch_now_velocity_hd": "Velocity",
"372496____dtve_android_tablet_watch_now_travel channel media": "Travel Channel",
"372496____dtve_android_tablet_watch_now_tlc": "TLC",
"372496____dtve_android_tablet_watch_now_science channel": "Science Channel",
"372496____dtve_android_tablet_watch_now_own": "Own",
"372496____dtve_android_tablet_watch_now_id_discovery_hd": "Investigation Discovery",
"372496____dtve_android_tablet_watch_now_hgtv": "HGTV",
"372496____dtve_android_tablet_watch_now_foodnetwork": "Food Network",
"372496____dtve_android_tablet_watch_now_diy": "DIY",
"372496____dtve_android_tablet_watch_now_discovery_life_hd": "Discovery",
"372496____dtve_android_tablet_watch_now_discovery channel": "Discovery",
"372496____dtve_android_tablet_watch_now_destination_america": "Destination America",
"372496____dtve_android_tablet_watch_now_cookingchannel": "Cooking Channel",
"372496____dtve_android_tablet_watch_now_animal planet": "Animal Planet",
"372496____dtve_android_tablet_watch_now_american_heroes": "American Heroes",
"372496____dtve_android_phone_watch_now_travel channel media": "Travel Channel",
"372496____dtve_android_phone_watch_now_tlc": "TLC",
"372496____dtve_android_phone_watch_now_science channel": "Science Channel",
"372496____dtve_android_phone_watch_now_own": "Own",
"372496____dtve_android_phone_watch_now_id_discovery_hd": "Investigation Discovery",
"372496____dtve_android_phone_watch_now_hgtv": "HGTV",
"372496____dtve_android_phone_watch_now_foodnetwork": "Food Network",
"372496____dtve_android_phone_watch_now_diy": "DIY",
"372496____dtve_android_phone_watch_now_discovery_life_hd": "Discovery",
"372496____dtve_android_phone_watch_now_discovery channel": "Discovery",
"372496____dtve_android_phone_watch_now_destination_america": "Destination America",
"372496____dtve_android_phone_watch_now_cookingchannel": "Cooking Channel",
"372496____dtve_android_phone_watch_now_animal planet": "Animal Planet",
"372496____dtve_android_phone_watch_now_american_heroes": "American Heroes",
"2946": "Fox News",
"246412": "Turner",
"196460": "Discovery",
"195316": "Discovery",
"187665": "Turner",
"18746": "Fox News",
"173516": "Turner",
"154157": "Turner",
"154149": "Turner",
"153241": "Discovery",
"153231": "Discovery",
"153170": "Discovery",
"1508": "Turner",
"145039": "Discovery",
"140474": "Discovery",
"289598": "Smart Tech",
"288753": "Court TV",
"288554": "Measure & Mix",
"287976": "Vegetable Garden",
"287486": "Science Of Grilling",
"287485": "BeautyKLove TV",
"286511": "Foody Tube",
"286499": "Trucos de Cocina",
"286413": "Make Sushi",
"286333": "Bestie",
"286316": "Easy Tricks and Hacks",
"285606": "Okaylaaa",
"285392": "Coach Ali Fitness",
"285231": "Julia Nunes",
"284394": "Elementary School Kids",
"284384": "Getaway",
"284383": "Careers in Coding",
"284351": "Vacation Planner",
"284329": "Weekday Meals",
"284255": "Meal Planning",
"284150": "Geek Speak",
"283162": "Freebie TV",
"279770": "Flow with Adee",
"279725": "Driven Car Reviews",
"279142": "Culinary School",
"279087": "MasterChef",
"278957": "Technology Now",
"278922": "Coding Channel",
"278841": "Financial Guide Channel",
"278809": "The Career Channel",
"278783": "Gamers Realm",
"278464": "Professor Dave Explains",
"278102": "Matt Belair",
"275894": "Old Time Classics",
"275332": "Home RenoVision",
"274836": "Popcornflix",
"271679": "Cook with Anisa - TV",
"271657": "The Commando Coach",
"269141": "Gomer Pyle",
"265875": "The Addams Family",
"265832": "The Munsters",
"264050": "Law Nation",
"263977": "SERIES-LY",
"263954": "Time Value of Tennis",
"263657": "Bounce - On Demand",
"263329": "SAVOR",
"263287": "The Goss",
"263014": "Wally and the Beaver",
"262152": "Freak Eating",
"262143": "GlowBodyPT",
"262005": "Fritz Entertainment",
"261987": "The Tao of David",
"261927": "Walter Football",
"261333": "Entertainment Tonight",
"261063": "Sports Eating Conquests",
"260953": "Economy",
"260857": "Liv B's Vegan Kitchen",
"260823": "CastIronSkilletKitchen",
"260738": "Fishing With Nordbye",
"260298": "Sports Squad",
"259885": "Discover With Dia",
"259852": "The Real Show BBQ",
"259703": "Myss Hobbs",
"259617": "Cooking With CJ",
"259485": "Notorious B.O.B.",
"257973": "Protecting The Environment",
"257920": "Football Debates",
"257799": "Nutritional Insights",
"257603": "Backseat Driver Reviews",
"257250": "Swift Karate Chop",
"257241": "Coach Lax",
"256551": "Coding Insights",
"254487": "Gaming Mania",
"254425": "Gaming News and Notes",
"253126": "Indi Rights FREE MOVIES & TV",
"252529": "Winning on Wall Street",
"252469": "Market Trend Today",
"252427": "Stock Tips and Tricks",
"252307": "Cowboy Kent Rollins",
"252291": "SBTV Plus",
"252014": "ITECHOM",
"252013": "Foundations of Technology",
"251088": "STIRR",
"250626": "POV Italian Cooking",
"250240": "International News Center",
"250197": "Get Flash News",
"250175": "What's Trending Now",
"249958": "G7 Life",
"249883": "Da Garbage Disposal",
"246412": "Bleacher Report Live",
"244288": "Weekly Tasting ",
"244016": "ROBANDJAS HOMEMADE COOKED FOOD",
"241946": "Travel Pockets",
"241893": "Kusina Chef",
"240520": "Miliken Fishing",
"239705": "The Planet D",
"238323": "The Untold Stories of Rappers",
"237298": "RapStar The Series",
"237103": "Ares Gaming",
"236284": "Triple-X Motorsports & Outdoor",
"235592": "Food Connection Triple0X Motorsports & Outdoor",
"235581": "SoulfulT",
"235081": "WLUC TV6 & FOX UP",
"233807": "Bhavna In The Kitchen",
"233255": "Southern Food Junkie",
"233248": "NerdWire",
"232412": "Mind Over Munch",
"231473": "Flavcity",
"231463": "Food Challenges",
"231015": "Chi Universe Yoga",
"224734": "Movie Talk",
"224725": "Fishing Hacks",
"224638": "Gripes",
"222355": "Winter's Magic",
"221816": "Baseball Update",
"221487": "Pure Nature",
"220874": "Timeless Reels",
"220737": "PowerTrip TV",
"220605": "A History of Warfare",
"216111": "Fireplace Dreams",
"213075": "Life on the Farm",
"212400": "A Study of Birds",
"212389": "Olympic Events",
"211594": "Wrestling Talk",
"211423": "Silver Ball Madness",
"211124": "Guardians of the Sea",
"211113": "Wildlife of North America",
"211048": "Cinematic Treasures",
"210892": "OnDemandKorea",
"209781": "Fighting for Freedom",
"209133": "Forged by the Sea",
"209113": "Fly, Fight, Win.",
"208143": "First to Fight",
"203751": "Extreme Adventure",
"199664": "Stadium",
"196460": "A&E",
"196460": "AMC",
"196460": "Discovery",
"196460": "Philo",
"196460": "Viacom",
"195316": "Discovery",
"187665": "Turner",
"163348": "WCJB TV-20 News",
"163283": "ABC",
"163200": "KCRG TV9 News",
"154157": "Turner",
"154149": "Turner",
"153241": "Destination America GO - Fire TV",
"153231": "AHC",
"153170": "Velocity GO - Fire TV",
"153169": "Discovery",
"147401": "KWQC-TV6",
"145039": "OWN",
"143156": "PGA",
"143105": "VRV",
"140474": "DirecTV",
"140472": "KOTA News",
"140443": "KTUU News",
"140441": "KWCH News",
"140390": "KY3News",
"140389": "WDBJ News",
"135932": "Outside TV",
"122460": "Univision",
"116043": "Zypy.TV",
"111255": "CW",
"104764": "People TV",
"104676": "Cocoro",
"97955": "Local Now",
"96041": "Discovery",
"95307": "Fox Sports",
"94362": "BET",
"90767": "Discovery",
"90767": "Science Channel",
"90766": "Discovery",
"90766": "Investigation Discovery",
"90765": "Discovery",
"90765": "TLC",
"90764": "Animal Planet",
"90764": "Discovery",
"90570": "KMGH Denver7 Colorado",
"90131": "Yuyu TV",
"88587": "The Fishing Channel",
"87285": "The Gun Channel",
"85700": "DIY Network",
"85699": "Cooking Channel",
"85100": "VH1",
"85100": "Viacom",
"82324": "Gumby Remodeled",
"75650": "BonanzaChannel",
"75636": "Discovery",
"75636": "Travel Channel",
"75619": "HGTV",
"75617": "Food Network",
"75058": "Travel Savvy",
"74218": "Paramount",
"74218": "Viacom",
"73386": "MTV",
"73386": "Viacom",
"71845": "News ON",
"71698": "CW",
"65978": "Turner",
"63344": "Comedy Central",
"63344": "Viacom",
"62089": "NBC",
"62025": "KNOW News",
"61583": "ABC",
"61582": "ABC",
"59712": "247 Retro",
"58597": "StarGazer",
"58179": "The Music Channel",
"57376": "The Movie Channel",
"55268": "Tennis Channel",
"54924": "Chive",
"54065": "ABC",
"54065": "Disney",
"54000": "Bloomberg",
"51045": "Popeye Channel",
"47447": "Wyoming News Now",
"47443": "WYMT News",
"47442": "WVLT News",
"47440": "WTOK News",
"47437": "WSAZ News",
"47435": "WRDW News",
"47434": "WNDU News",
"47432": "WKYT News",
"47431": "WJHG News",
"47428": "23 News HD",
"47426": "WSV News",
"47424": "WCTV News",
"47422": "KXII News",
"47421": "KJCT News 8",
"47420": "KKTV News",
"47419": "KWTX News",
"47415": "KKCO 11 News",
"47413": "Fox News",
"47412": "KCWY News",
"45437": "Film Rise",
"42958": "The Cruise Channel",
"42936": "WOWT 6 News",
"40738": "Perfect 1080",
"38896": "WatchFreeFlix",
"36949": "Fawesome.tv",
"35442": "A&E",
"34543": "Noel",
"34376": "Disney",
"34376": "ESPN",
"33140": "The Gardening Channel",
"32840": "The Relax Channel",
"31644": "SKOPE",
"31638": "VAPE",
"31610": "FisHi",
"31606": "PRESTO",
"27536": "CBS",
"18746": "Fox Business",
"18746": "Fox News",
"17639": "Midnight Pulp",
"11055": "Newsy",
"8965": "iFood.tv",
"6119": "Popcornflix",
"5980": "Baby First",
"2946": "Fox News",
"2595": "Crunchy Roll",
};

const reader = new FileReader()
const fileInput = document.getElementById('file-selector');

fileInput.addEventListener('change', handleSelected);

function handleSelected(e) {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        // reader.readAsText(selectedFile);
        reader.readAsArrayBuffer(selectedFile);
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleEvent(event) {
    let start = Date.now();
    if (event.type === "loadstart") {
        console.log("Load Start");
        console.log('starting timer...');
        document.getElementById('welcome').classList.add('hide');
        document.getElementById("file-selector").classList.add('hide');
        document.getElementById("upload-gif").classList.remove('hide');
    }


    if (event.type === "load") {
        document.getElementById("upload-gif").classList.add('hide');
        document.getElementById("results-container").classList.remove('hide');
        console.log("Load End")

        let dataArray = [];

        async function readData(event){

            const content = event.target.result;
            const CHUNK_SIZE = 50000;
            const totalChunks = event.target.result.byteLength / CHUNK_SIZE;
            
            let firstCHUNK = content.slice(0, CHUNK_SIZE)
            let firstChunkStrData = new TextDecoder().decode(firstCHUNK);
            let firstLine = firstChunkStrData.split('\n')[0];

            let leftoverData = ''
            
            for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
                let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)
            
                let strData = new TextDecoder().decode(CHUNK);
                let lastRowStart = strData.lastIndexOf('\n');
                let strWOLastRow = '';
                if(lastRowStart>-1){strWOLastRow = strData.substring(0, lastRowStart-1);}
                let modifiedStrData = '';
                if(chunk === 0){
                    modifiedStrData = leftoverData + strWOLastRow;
                }
                else if(chunk === totalChunks){
                    modifiedStrData = firstLine + leftoverData + strWOLastRow;
                }
                else{modifiedStrData = firstLine + leftoverData + strWOLastRow;}
            
                const papaParseResults = Papa.parse(modifiedStrData, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: function(results) {dataArray.push(...results.data)}
                });
                leftoverData = strData.substring(lastRowStart);
            
            }
        }
        
        readData(event);


        let millis = Date.now() - start;
        console.log(`milliseconds elapsed = ${Math.floor(millis)}`);
        console.log("csvtoObject done");
        millis = Date.now() - start;

        
        console.log(`milliseconds elapsed from load = ${Math.floor(millis)}`);
        validateFileType(dataArray);
        // findAllUTMTypes(dataArray);
        getSubDirectoryBreakout(dataArray);
        const dataWithUTMs = addAllUTMData(dataArray);
        addFilterOptionsToDOM(dataWithUTMs);
        filterButton(dataWithUTMs);
        displayResults(dataWithUTMs);


        millis = Date.now() - start;
        console.log(`milliseconds elapsed from load = ${Math.floor(millis)}`);

    }
}

function validateFileType(data){
    if(!data[0]["Event Type"]){
        document.getElementById("error-message").classList.remove('hide');
        document.getElementById("results-container").classList.add('hide');
    }
}

function reload(){
    window.location.reload();
}

function createUserFilterOptions(data){
    let filterBreakdowns = {
        "Conversion Tracking Tag Name": {}, 
        "Event Cross Device Attribution Model": {}, 
        "Event Campaign Name": {} 
    };

    let filterBreakdownKeys = Object.keys(filterBreakdowns)
    filterBreakdownKeys.forEach(field =>{
        data.forEach(row=>{
            if(!filterBreakdowns[field][row[field]]){
                if(row[field]){
                    filterBreakdowns[field][row[field]] = row[field];
                }
            }
        })
    })
    return filterBreakdowns;
}

function addFilterOptionsToDOM(data){
    const filterBreakdowns = createUserFilterOptions(data);
    let filterBreakdownKeys = Object.keys(filterBreakdowns);
    filterBreakdownKeys.forEach(field =>{
        addElement("div", "", "filters", "filter-option-container", field+"ID") 
        addElement("div", "", field+"ID", "FilterHeader", "FilterHeader"+field+"ID") 
        addElement("h3", field, "FilterHeader"+field+"ID", "Filter-header-title", "") 
        addElement("div", "", "FilterHeader"+field+"ID", "Filter-content-wrapper", "Filter-content-wrapper"+field+"ID") 
        let filterBreakdownValues = Object.keys(filterBreakdowns[field]);
        filterBreakdownValues.forEach(value=>{
            addElement("div", value, "Filter-content-wrapper"+field+"ID", "FilterContent selected-Filter", "") 
            //selected-Filter
        })
    })
    listenForFilterSelections(data);

    let trackingTags = Object.keys(filterBreakdowns["Conversion Tracking Tag Name"])

    addTrackingTagsToDOM(trackingTags);

}


function addTrackingTagsToDOM(trackingTags){
    // document.getElementById("landing-page-pixels-options").innerHTML = "";
    // document.getElementById("conversion-pixels-options").innerHTML = "";
    // document.getElementById("sunburst-pixels-options").innerHTML = "";

    if(trackingTags.length>1){
        document.getElementById("LPtoConv-outer-section").classList.remove("hide");

        trackingTags.forEach(trackingTag=>{
            addElement("div", trackingTag, "landing-page-pixels-options", "pixels landing-page-pixels", "");
            addElement("div", trackingTag, "conversion-pixels-options", "pixels conversion-pixels", "");
            addElement("div", trackingTag, "sunburst-pixels-options", "pixels sunburst-pixels", "");
        })

        // selectLPPixelButton("landing-page");
        // selectLPPixelButton("conversion");
        // selectLPPixelButton("sunburst");
    }
}

function listenForFilterSelections(data){
    let filterContent = document.getElementsByClassName("FilterContent");

    for(let i = 0; i<filterContent.length; i++){
        filterContent[i].addEventListener("click", function(){
            filterContent[i].classList.toggle("selected-Filter");
            // let filters = createFilterBasedOnSelection();
            let trackingTags = filters["Conversion Tracking Tag Name"];

            // addTrackingTagsToDOM(trackingTags);


            // filterButton(data, filters);
            
            // const filteredData = filterData(data, filters);
            // displayResults(filteredData);

        })
    }
}

function createFilterBasedOnSelection(){
    let selectedFilterContent = document.getElementsByClassName("selected-Filter");
    let filters = {}
    for(let i = 0; i<selectedFilterContent.length; i++){
        let breakdown = selectedFilterContent[i]["parentElement"]["id"];
        breakdown = breakdown.slice(0, breakdown.length-2);
        breakdown = breakdown.replace('Filter-content-wrapper','');
        breakdown = breakdown.replace('ID','')
        breakdownSelection = selectedFilterContent[i]["innerHTML"];
        filters[breakdown] = [];
    }
    for(let i = 0; i<selectedFilterContent.length; i++){
        let breakdown = selectedFilterContent[i]["parentElement"]["id"];
        breakdown = breakdown.slice(0, breakdown.length-2);
        breakdown = breakdown.replace('Filter-content-wrapper','');
        breakdown = breakdown.replace('ID','')
        breakdownSelection = selectedFilterContent[i]["innerHTML"];
        if(breakdownSelection){
            filters[breakdown].push(breakdownSelection);
        }

    }

    return filters;
}

function findAllUTMTypes(data){
    let UTMTypeArray = [];
    data.forEach(row => {
        for(let i=0; i<10; i++){
            let referrerURL = row["Conversion Referrer URL"];
            if(referrerURL){
                let utmStart = referrerURL.search("utm");
                referrerURL = referrerURL.substr(utmStart);//start the string at the first UTM
                let utmEnd = referrerURL.search("=");
                let utmString = referrerURL.substr(0,utmEnd);
                let searchIndex = UTMTypeArray.indexOf(utmString);
                if(searchIndex==-1 && utmString !==''){
                    UTMTypeArray.push(utmString);
                }
                if(utmString ==''){i=10}//look for a max of 20 UTM types
            }
        }
    })
    return UTMTypeArray;
}

function getUTMBreakout(data, parameter){
    data.forEach(row => {
        let referrerURL = row["Conversion Referrer URL"]
        if(referrerURL){
            let sourcestart = referrerURL.search(parameter) //"utm_source"
            let substring = ""
            if(sourcestart > 0){
                let trimmedreferrerURL = referrerURL.substr(sourcestart)
                let sourceEnd = trimmedreferrerURL.search("&")
                if(sourceEnd == -1){sourceEnd = trimmedreferrerURL.search(/\?/)}
                if(sourceEnd == -1){sourceEnd = trimmedreferrerURL.length}
                substring = trimmedreferrerURL.substr(0, sourceEnd)
            }
            row[parameter]=substring
        }
    })
}

function addAllUTMData(data){
    let UTMTypeArray = findAllUTMTypes(data)
    UTMTypeArray.forEach(e => {
        getUTMBreakout(data, e)
    })
    return data
}

function getSubDirectoryBreakout(data){
    data.forEach(e => {
        let referrerURL = e["Conversion Referrer URL"];
        let subdomainOne = "";
        let subdomainTwo = "";
        if(referrerURL){
            let firstQuestionMark = referrerURL.search(/\?/);
                if(firstQuestionMark == -1){firstQuestionMark = referrerURL.length}
            let referrerURLTrim1 = referrerURL.substring(8,firstQuestionMark);
            let firstSlash = referrerURLTrim1.search("/");

            if(firstSlash > 0){
                let referrerURLTrim2 = referrerURL.substring(firstSlash+8+1,firstQuestionMark);
                let secondSlash = referrerURLTrim2.search("/");
                if (secondSlash == -1){
                    secondSlash = referrerURL.length;
                }
                else{
                    let referrerURLTrim3 = referrerURLTrim2.substring(secondSlash+1,firstQuestionMark);
                    let thirdSlash = referrerURLTrim3.search("/");
                    if (thirdSlash == -1){
                        thirdSlash = referrerURL.length;
                    }
                    subdomainTwo = referrerURLTrim3.substring(0, thirdSlash);
                }
                subdomainOne = referrerURLTrim2.substring(0, secondSlash);
            }
        e['Subdomain One'] = subdomainOne;
        e['Subdomain Two'] = subdomainTwo;
        if(subdomainTwo.length > 0)
            {e['Subdomain One + Two'] = subdomainOne+'/'+subdomainTwo}
        else {e['Subdomain One + Two'] = subdomainOne}
    }
    })
}

function filterButton(data){
    document.getElementById("apply-filters-button").addEventListener("click", function(){
        let filters = createFilterBasedOnSelection();
        document.getElementById("upload-gif").classList.remove('hide');
        const filteredData = filterData(data, filters);
        displayResults(filteredData);
    }
    );
}

function filterData(data, filters){
    function filterBooleanArray(row, filters) {
        function replaceWithHTMLEntities(str) {
            const htmlEntities = {
                "'": "&apos;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;",
              "/": "&#x2F;",
              "`": "&#x60;",
              "¡": "&iexcl;",
              "¢": "&cent;",
              "£": "&pound;",
              "¤": "&curren;",
              "¥": "&yen;",
              "¦": "&brvbar;",
              "§": "&sect;",
              "¨": "&uml;",
              "©": "&copy;",
              "ª": "&ordf;",
              "«": "&laquo;",
              "¬": "&not;",
              "®": "&reg;",
              "¯": "&macr;",
              "°": "&deg;",
              "±": "&plusmn;",
              "²": "&sup2;",
              "³": "&sup3;",
              "´": "&acute;",
              "µ": "&micro;",
              "¶": "&para;",
              "·": "&middot;",
              '`': '&#x60;',
              '¡': '&iexcl;',
              '¢': '&cent;',
              '£': '&pound;',
              '¤': '&curren;',
              '¥': '&yen;',
              '¦': '&brvbar;',
              '§': '&sect;',
              '¨': '&uml;',
              '©': '&copy;',
              'ª': '&ordf;',
              '«': '&laquo;',
              '¬': '&not;',
              '®': '&reg;',
              '¯': '&macr;',
              '°': '&deg;',
              '±': '&plusmn;',
              '²': '&sup2;',
              '³': '&sup3;',
              '´': '&acute;',
              'µ': '&micro;',
              '¶': '&para;',
              '·': '&middot;',
              '¸': '&cedil;',
              '¹': '&sup1;',
              'º': '&ordm;',
              '»': '&raquo;',
              '¼': '&frac14;',
              '½': '&frac12;',
              '¾': '&frac34;',
              '¿': '&iquest;',
              'À': '&Agrave;',
              'Á': '&Aacute;',
              'Â': '&Acirc;',
              'Ã': '&Atilde;',
              'Ä': '&Auml;',
              'Å': '&Aring;',
              'Æ': '&AElig;',
              'Ç': '&Ccedil;',
              'È': '&Egrave;',
              'É': '&Eacute;',
              'Ê': '&Ecirc;',
              'Ë': '&Euml;',
              'Ì': '&Igrave;',
              'Í': '&Iacute;',
              'Î': '&Icirc;',
              'Ï': '&Iuml;',
              'Ð': '&ETH;',
              'Ñ': '&Ntilde;',
              'Ò': '&Ograve;',
              'Ó': '&Oacute;',
              'Ô': '&Ocirc;',
              'Õ': '&Otilde;',
              'Ö': '&Ouml;',
              'Ø': '&Oslash;',
              'Ù': '&Ugrave;',
              'Ú': '&Uacute;',
              'Û': '&Ucirc;',
              'Ü': '&Uuml;',
              'Ý': '&Yacute;',
              'Þ': '&THORN;',
              'ß': '&szlig;',
              'à': '&agrave;',
              'á': '&aacute;',
              'â': '&acirc;',
              'ã': '&atilde;',
              'ä': '&auml;',
              'å': '&aring;',
              'æ': '&aelig;',
              'ç': '&ccedil;',
              'è': '&egrave;',
              'é': '&eacute;',
              'ê': '&ecirc;',
              'ë': '&euml;',
              'ì': '&igrave;',
              'í': '&iacute;',
              'î': '&icirc;',
              'ï': '&iuml;',
              'ð': '&eth;',
              'ñ': '&ntilde;',
              'ò': '&ograve;',
              'ó': '&oacute;',
              'ô': '&ocirc;',
              'õ': '&otilde;'
            };
            
            if(str){
                return str.replace(/[&<>"'/`¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·]/g, (char) => {
                return htmlEntities[char];
                });
            }
          }

        let booleanArrayForANDStatements = [];
        let differentFilterBreakdowns = Object.keys(filters);
        for (let i = 0; i < differentFilterBreakdowns.length; i++) {
          let filterBreakdown = differentFilterBreakdowns[i];
          let filterBreakdownValueArray = filters[filterBreakdown];
          let booleanArrayForORStatements = [];
          for (let j = 0; j < filterBreakdownValueArray.length; j++) {
            let filterBreakdownValue = filterBreakdownValueArray[j];
            let escapedRowValue = replaceWithHTMLEntities(row[filterBreakdown]);
            booleanArrayForORStatements.push(filterBreakdownValue==escapedRowValue);
          }
          const combinedORStatement = booleanArrayForORStatements.reduce((accumulator, currentValue) => accumulator || currentValue, false);
          booleanArrayForANDStatements.push(combinedORStatement);
        }
        return booleanArrayForANDStatements;
      }
      
    let filteredData = [];
    if(!filters){filteredData = data}
    else{
        filteredData = data.filter(row => {
            const filterArray = filterBooleanArray(row, filters);
            const combinedANDStatement = filterArray.reduce((accumulator, currentValue) => accumulator && currentValue, true);
            return combinedANDStatement
            }
        );
    }

    return filteredData;

}

function createConversionsObject(filteredData, breakdown){
    let conversionsObj = {};

    filteredData.forEach(row=>{
        let eventTime = Date.parse(row["Event Time UTC"])
        let conversionTime = Date.parse(row["Conversion Time UTC"])

        if(!conversionsObj[row["Conversion ID"]]){
            conversionsObj[row["Conversion ID"]] = {}
            conversionsObj[row["Conversion ID"]]["Number of X Touched PTC"] = 0;
            conversionsObj[row["Conversion ID"]]["Breakdowns"] = {};
            conversionsObj[row["Conversion ID"]]["Impressions on Path"] = 1;
        }
        else{
            conversionsObj[row["Conversion ID"]]["Impressions on Path"]++
        }
        if(!conversionsObj[row["Conversion ID"]]["Last Impression Data"] ){
            conversionsObj[row["Conversion ID"]]["Last Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Last Imp to Conversion MS"] = conversionTime - eventTime;
        }
        else if(eventTime > Date.parse(conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Event Time UTC"])){
            conversionsObj[row["Conversion ID"]]["Last Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Last Imp to Conversion MS"] = conversionTime - eventTime;
        }
        if(!conversionsObj[row["Conversion ID"]]["First Impression Data"] ){
            conversionsObj[row["Conversion ID"]]["First Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["First Impression Data"]["First Imp to Conversion MS"] = conversionTime - eventTime;
        }
        else if(eventTime < Date.parse(conversionsObj[row["Conversion ID"]]["First Impression Data"]["Event Time UTC"])){
            conversionsObj[row["Conversion ID"]]["First Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["First Impression Data"]["First Imp to Conversion MS"] = conversionTime - eventTime;
        }
        //unique devices/adgroups/campaigns on conversion path
        if(breakdown !== undefined){
            if(!conversionsObj[row["Conversion ID"]]["Breakdowns"][row[breakdown]]){
                conversionsObj[row["Conversion ID"]]["Breakdowns"][row[breakdown]] = row[breakdown];
                conversionsObj[row["Conversion ID"]]["Number of X Touched PTC"]++;
            }
        }
    })
    return conversionsObj;
} 

function createResultsObject(filteredData, breakdown, conversionsObj){
    let resultsObj = {};

    filteredData.forEach(row=>{

        if(!resultsObj[row[breakdown]]){
            resultsObj[row[breakdown]] = {};
            resultsObj[row[breakdown]]["ConversionIDs"] = {};
            resultsObj[row[breakdown]]["Conversions"] = 0;
            resultsObj[row[breakdown]]["Time From Last Imp To Conv"] = 0;
            resultsObj[row[breakdown]]["Time From First Imp To Conv"] = 0;
            resultsObj[row[breakdown]]["ConversionIDs-LastImp"] = {};
            resultsObj[row[breakdown]]["Conversions-LastImp"] = 0;//Note not technically last touch
            resultsObj[row[breakdown]]["ConversionIDs-FirstImp"] = {};
            resultsObj[row[breakdown]]["Conversions-FirstImp"] = 0;//Note not technically last touch
            resultsObj[row[breakdown]]["ConversionIDs-MidImp"] = {};
            resultsObj[row[breakdown]]["Conversions-MidImp"] = 0;//Not first or last touch
            resultsObj[row[breakdown]]["Impressions"] = 1;
        }
        else{
            resultsObj[row[breakdown]]["Impressions"]++;
        }
        if(!resultsObj[row[breakdown]]["ConversionIDs"][row["Conversion ID"]]){
            resultsObj[row[breakdown]]["ConversionIDs"][row["Conversion ID"]] = 1;
            resultsObj[row[breakdown]]["Time From Last Imp To Conv"] += conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Last Imp to Conversion MS"];
            resultsObj[row[breakdown]]["Time From First Imp To Conv"] += conversionsObj[row["Conversion ID"]]["First Impression Data"]["First Imp to Conversion MS"];
            resultsObj[row[breakdown]]["Conversions"]++;
        }
        if(!resultsObj[row[breakdown]]["ConversionIDs-LastImp"][row["Conversion ID"]]){
            resultsObj[row[breakdown]]["ConversionIDs-LastImp"][row["Conversion ID"]] = 1;
            if(conversionsObj[row["Conversion ID"]]["Last Impression Data"][breakdown] == row[breakdown]){
            resultsObj[row[breakdown]]["Conversions-LastImp"]++;
            }
        }
        if(!resultsObj[row[breakdown]]["ConversionIDs-FirstImp"][row["Conversion ID"]]){
            resultsObj[row[breakdown]]["ConversionIDs-FirstImp"][row["Conversion ID"]] = 1;
            if(conversionsObj[row["Conversion ID"]]["First Impression Data"][breakdown] == row[breakdown]){
            resultsObj[row[breakdown]]["Conversions-FirstImp"]++;
            }
        }
        if(!resultsObj[row[breakdown]]["ConversionIDs-MidImp"][row["Conversion ID"]]){
            resultsObj[row[breakdown]]["ConversionIDs-MidImp"][row["Conversion ID"]] = 1;
            if(conversionsObj[row["Conversion ID"]]["First Impression Data"][breakdown] !== row[breakdown] && conversionsObj[row["Conversion ID"]]["Last Impression Data"][breakdown] !== row[breakdown]){
            resultsObj[row[breakdown]]["Conversions-MidImp"]++;
            }
        }
    })

    // resultsObj[row[breakdown]]["ConversionIDs-MidImp"] = {};
    // resultsObj[row[breakdown]]["Conversions-MidImp"] = 0;//Not first or last touch

    for(keys in resultsObj){
        resultsObj[keys]["Average Days From Last Imp To Conversion"] = (resultsObj[keys]["Time From Last Imp To Conv"]/resultsObj[keys]["Conversions"])/(1000*60*60*24);
        resultsObj[keys]["Average Days From First Imp To Conversion"] = (resultsObj[keys]["Time From First Imp To Conv"]/resultsObj[keys]["Conversions"])/(1000*60*60*24);
        resultsObj[keys]["Impressions per Conversion"] = (resultsObj[keys]["Impressions"]/resultsObj[keys]["Conversions"]);
    }


    return resultsObj;
}

function createTDIDObject(filteredData){
    let TDIDObject = {};

    filteredData.forEach(row=>{
        let conversionTime = Date.parse(row["Conversion Time UTC"]);
        let eventTime = Date.parse(row["Event Time UTC"]);
        if(!TDIDObject[row["Conversion TDID"]]){
            TDIDObject[row["Conversion TDID"]] = {}
            TDIDObject[row["Conversion TDID"]][conversionTime] = {};
            TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]] = 1;
            TDIDObject[row["Conversion TDID"]][conversionTime]["Event Type"] = "Conversion";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Conversion Sub Category"] = row["Conversion Tracking Tag Name"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Device"] = "";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Site"] = row["Conversion Referrer URL"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Cross Device Vendor"] = row["Event Cross Device Attribution Model"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Time"] = row["Conversion Time UTC"];
            if(row["utm_source"]){TDIDObject[row["Conversion TDID"]][conversionTime]["utm_source"] = row["utm_source"];}

            // TDIDObject[row["Conversion TDID"]][row["Event Time UTC"]] = {}
            TDIDObject[row["Conversion TDID"]][eventTime] = {
                "Event Type": row["Event Type"],
                "Conversion Sub Category" : row["Event Type"],
                "Device": row["Event Device Type"],
                "Site": row["Event Site"],
                "Cross Device Vendor": row["Event Cross Device Attribution Model"],
                "Time": row["Event Time UTC"]
            }
        }
        else{
            if(!TDIDObject[row["Conversion TDID"]][conversionTime]){
                TDIDObject[row["Conversion TDID"]][conversionTime] = {};
                TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]] = 1;
                TDIDObject[row["Conversion TDID"]][conversionTime]["Event Type"] = "Conversion";
                TDIDObject[row["Conversion TDID"]][conversionTime]["Conversion Sub Category"] = row["Conversion Tracking Tag Name"];
                TDIDObject[row["Conversion TDID"]][conversionTime]["Device"] = "";
                TDIDObject[row["Conversion TDID"]][conversionTime]["Site"] = row["Conversion Referrer URL"];
                TDIDObject[row["Conversion TDID"]][conversionTime]["Cross Device Vendor"] = row["Event Cross Device Attribution Model"];
                TDIDObject[row["Conversion TDID"]][conversionTime]["Time"] = row["Conversion Time UTC"];
                if(row["utm_source"]){TDIDObject[row["Conversion TDID"]][conversionTime]["utm_source"] = row["utm_source"];}
            }
            else{
                if(!TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]]){
                    TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]] = 1;
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Event Type"] = "Conversion";
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Conversion Sub Category"] = row["Conversion Tracking Tag Name"];
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Device"] = "";
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Site"] = row["Conversion Referrer URL"];
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Cross Device Vendor"] = row["Event Cross Device Attribution Model"];
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Time"] = row["Conversion Time UTC"];
                    if(row["utm_source"]){TDIDObject[row["Conversion TDID"]][conversionTime]["utm_source"] = row["utm_source"];}
                }
                else{
                    TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]]++
                }
            }
            if(!TDIDObject[row["Conversion TDID"]][eventTime]){
                TDIDObject[row["Conversion TDID"]][eventTime] = {
                    "Event Type": row["Event Type"],
                    "Conversion Sub Category" : row["Event Type"],
                    "Device": row["Event Device Type"],
                    "Site": row["Event Site"],
                    "Cross Device Vendor": row["Event Cross Device Attribution Model"],
                    "Time": row["Event Time UTC"]
                }
            }
        }
    })

    let users = Object.keys(TDIDObject);
    users.forEach(user =>{
        let timeStamps = Object.keys(TDIDObject[user])
        timeStamps.sort(function compareNumbers(a, b) {
            return a - b;
        })
        TDIDObject[user]["TimestampOrder"] = timeStamps;
        let dates = []
        timeStamps.forEach(ts =>{
            dates.push(new Date(parseInt(ts)));
        })
        TDIDObject[user]["TimestampOrder Dates"] = dates;
    })
    // console.log("TDIDObject")
    // console.log(TDIDObject)
    return TDIDObject;
}

function listenForTrackingTagSelections(TDIDObject){
    let landingPagePixels = document.getElementsByClassName("landing-page-pixels");
    let conversionPixels = document.getElementsByClassName("conversion-pixels");
    for(let i = 0; i<landingPagePixels.length; i++){
        let LPItem = landingPagePixels[i];
        landingPagePixels[i].addEventListener("click", function(){
            LPItem.classList.toggle("selected-landing-page-pixel")
            if(LPItem.parentElement["id"] == "landing-page-pixels-options"){
                document.getElementById("landing-page-pixels-chosen").append(LPItem);
                hidePixelOptions("landing-page");
            }
            else if(LPItem.parentElement["id"] == "landing-page-pixels-chosen"){
                document.getElementById("landing-page-pixels-options").append(LPItem);
            }
            printLPToConversionRate(TDIDObject);
        })
    }
    for(let i = 0; i<conversionPixels.length; i++){
        let LPItem = conversionPixels[i];
        conversionPixels[i].addEventListener("click", function(){
            LPItem.classList.toggle("selected-conversion-pixel")
            if(LPItem.parentElement["id"] == "conversion-pixels-options"){
                document.getElementById("conversion-pixels-chosen").append(LPItem);
                hidePixelOptions("conversion");
            }
            else if(LPItem.parentElement["id"] == "conversion-pixels-chosen"){
                document.getElementById("conversion-pixels-options").append(LPItem);
            }
            printLPToConversionRate(TDIDObject);
        })
    }

    selectLPPixelButton("landing-page");
    selectLPPixelButton("conversion");
}

function hidePixelOptions(buttonType){
    document.getElementById(`${buttonType}-pixel-arrow`).classList.toggle("down");
    document.getElementById(`${buttonType}-pixel-arrow`).classList.toggle("right");

    document.getElementById(`${buttonType}-pixels-options`).classList.toggle("hide");
}


function selectLPPixelButton(buttonType){
    document.getElementById(`select-${buttonType}-button`).addEventListener("click", 
    function (){
        document.getElementById(`${buttonType}-pixel-arrow`).classList.toggle("down");
        document.getElementById(`${buttonType}-pixel-arrow`).classList.toggle("right");
        document.getElementById(`${buttonType}-pixels-options`).classList.toggle("hide");
    }
    )
}

function addSelectedTrackingTagsToBox(){ 
    document.getElementById("landing-page-pixels-chosen").innerHTML = ""
    document.getElementById("conversion-pixels-chosen").innerHTML = ""
    let landingPagePixelsHTML = document.getElementsByClassName("selected-landing-page-pixel");
    for(let i = 0; i<landingPagePixelsHTML.length; i++){
        let node = addElement("div", landingPagePixelsHTML[i]["innerHTML"], "landing-page-pixels-chosen", "displayed-pixel displayed-landingpage-pixel")
        node.addEventListener('click', function(){
        })
    }

    let conversionPixelsHTML = document.getElementsByClassName("selected-conversion-pixel");
    for(let i = 0; i<conversionPixelsHTML.length; i++){
        let node = addElement("div", conversionPixelsHTML[i]["innerHTML"], "conversion-pixels-chosen", "displayed-pixel displayed-conversion-pixel")
        node.addEventListener('click', function(){
        })
    }
}

function getLPToConversionRate(TDIDObject){
    let landingPagePixelsHTML = document.getElementsByClassName("selected-landing-page-pixel");
    const landingPagePixels = []
    for(let i = 0; i<landingPagePixelsHTML.length; i++){landingPagePixels.push(landingPagePixelsHTML[i]["innerHTML"])}
    let conversionPixelsHTML = document.getElementsByClassName("selected-conversion-pixel");
    const conversionPixels = []
    for(let i = 0; i<conversionPixelsHTML.length; i++){conversionPixels.push(conversionPixelsHTML[i]["innerHTML"])}

    if(landingPagePixels.length>=1 && conversionPixels.length>=1){

        let users = Object.keys(TDIDObject);
        const landingPageConversionRateResults = {};
        landingPageConversionRateResults["Overall"]={};
        landingPageConversionRateResults["Overall"]["LP Users"] = 0;
        landingPageConversionRateResults["Overall"]["LP And Conversion Users"] = 0;
        users.forEach(user =>{
            let landingPageFireCount = 0;
            let conversionFireCount = 0;
            let auxObj = {}
            TDIDObject[user]["TimestampOrder"].forEach(timestamp =>{
                let eventDevice = TDIDObject[user][timestamp]["Device"];
                if(!landingPageConversionRateResults[eventDevice]){
                    landingPageConversionRateResults[eventDevice] = {
                        "LP Users" : 0,
                        "LP And Conversion Users" : 0
                    }
                }
                auxObj[eventDevice] = eventDevice;
                if(landingPagePixels.includes(TDIDObject[user][timestamp]["Conversion Sub Category"])){
                    landingPageFireCount++;
                }
                if(conversionPixels.includes(TDIDObject[user][timestamp]["Conversion Sub Category"]) && landingPageFireCount>0){
                    conversionFireCount++;
                }
            })
            if(landingPageFireCount>0){ landingPageConversionRateResults["Overall"]["LP Users"]++};
            if(conversionFireCount>0){ landingPageConversionRateResults["Overall"]["LP And Conversion Users"]++};
            let devicesOnPath = Object.keys(auxObj);
            devicesOnPath.forEach(device =>{
                if(landingPageFireCount>0){ landingPageConversionRateResults[device]["LP Users"]++};
                if(conversionFireCount>0){ landingPageConversionRateResults[device]["LP And Conversion Users"]++};
            })
        })

        let devices = Object.keys(landingPageConversionRateResults);
        devices.forEach(device =>{
            landingPageConversionRateResults[device]["LP to Conversion Rate"] = landingPageConversionRateResults[device]["LP And Conversion Users"]/landingPageConversionRateResults[device]["LP Users"];
        })

        return landingPageConversionRateResults;
    }
}

function printLPToConversionRate(TDIDObject){
    let landingPageConversionRateResults = getLPToConversionRate(TDIDObject);


    // Create chart
    let resultKeys = Object.keys(landingPageConversionRateResults);
    let xValues = []
    resultKeys.forEach(x=>{
        if(x !== "" && x !== "Overall"){
            xValues.push(x);
        }
    })

    // let xValues = Object.keys(landingPageConversionRateResults);
    let yValues1 = [];
    let yValues1Number = [];
    let yValues2 = [];
    let text = [];
    xValues.forEach(x=>{
        let y1 = landingPageConversionRateResults[x]["LP to Conversion Rate"];
        yValues1Number.push(y1);
        y1 = Number(y1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1});
        yValues1.push(y1);

        let y2 = landingPageConversionRateResults[x]["LP And Conversion Users"];
        yValues2.push(y2);

        text.push("Conversion Rate: "+ y1 + "<br>Converters: "+ y2);
    })

    let trace1 = {
        x: xValues,
        y: yValues1,
        text: text,
        name: "Landing-Page-Visit To Conversion Rate (%)",
        type: 'bar',
        marker: {color: '#0098FA'},

    };


    let data = [trace1];
   
    let config = {responsive: true}
    let layout = {
        barmode: 'group',
        title: "Landing-Page-Visit To Conversion Rate (%)",
        xaxis: {
            tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
            tickvals: xValues,
            ticktext: xValues,
            type: 'category',
            automargin: true
        },
        hoverlabel: { bgcolor: "#FFF" },
        yaxis: {title: 'Landing Page to Conversion Rate (%)'},
        yaxis2: {
          title: 'Number of Converters',
          overlaying: 'y',
          side: 'right'
        }
    };

    Plotly.newPlot('LPtoConversionChart-1', data, layout, config);

    document.getElementById("LPtoConversionChart-Placeholder-Outer").classList.add("hide")
    document.getElementById("LPtoConversion-callout-container").innerHTML = "";

    let highestVal = Math.max(...yValues1Number);
    let highestValPercent = Number(highestVal).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});;
    let highestIndex = xValues[yValues1Number.indexOf(highestVal)]
    //Callout Insights
    let calloutContent = "";
    
    if(highestIndex){
        if(highestVal > 0 && highestVal < 1){
            calloutContent = `When <span class="bold emph-color-2">${highestIndex}</span> is on the conversion path, a user is most likely to <span class="bold emph-color">convert after visiting the landing page</span>.
    <br><span class="callout-elaboration">${highestValPercent} of users who visit the landing page after seeing an ad on ${highestIndex} convert.</span>`;
        }
        if(highestVal == 0){
            calloutContent = `There were no users who converted on key event after visiting the landing page. Check that your landing page and key conversion events are selected correctly.`;
        }
        addElement("div", calloutContent, "LPtoConversion-callout-container", "LPtoConversion-callout");
    }

    //download data
    let downloadTable = "Device Type, LP Visitors, LP Visitors Who Convert, LP to Conversion Rate";
    for(key in landingPageConversionRateResults){
        if(key !== ""){
            downloadTable += "\r\n" + key + "," + landingPageConversionRateResults[key]["LP Users"] 
            + "," + landingPageConversionRateResults[key]["LP And Conversion Users"]
            + "," + landingPageConversionRateResults[key]["LP to Conversion Rate"];
        }
    }

    document.getElementById("LPtoConversion-download-button-container").innerHTML = "";
    addElement("div", "", "LPtoConversion-download-button-container", "download-button", "download-button-container-LPtoConvRate")
    addElement("a", "Download data", "download-button-container-LPtoConvRate", "download-button-a-tag", "download-LPtoConvRate-chartdata")
    downloadData("download-LPtoConvRate-chartdata", downloadTable);


}

function numberOfConversionsWithMultipleGrainsOnPath(conversionsObj){
    let conversionsArray = Object.values(conversionsObj);
    let numConversionsWithMoreThanOneGrain = 0;
    conversionsArray.forEach(conversion=>{
        if(conversion["Number of X Touched PTC"] >1){
            numConversionsWithMoreThanOneGrain++;
        }
    })
    return numConversionsWithMoreThanOneGrain;
}

function impressionsByBreakdown(filteredData, breakdown){

    const conversionsObj = createConversionsObject(filteredData, breakdown);
    const totalNumberOfXTouched = Object.values(conversionsObj).reduce(
        (accumulator, currentValue) => accumulator + currentValue["Number of X Touched PTC"],
        0,
    );
    
    const averageNumberofXTouched = totalNumberOfXTouched/Object.values(conversionsObj).length;

    let numConversionsWithMoreThanOneGrain = numberOfConversionsWithMultipleGrainsOnPath(conversionsObj);

    const resultsObj = {}
    resultsObj["Breakdown Data"] = createResultsObject(filteredData, breakdown, conversionsObj);
    resultsObj["numConversionsWithMoreThanOneGrain"] = numConversionsWithMoreThanOneGrain;
    resultsObj["percentConversionsWithMoreThanOneGrain"] = numConversionsWithMoreThanOneGrain/Object.values(conversionsObj).length;
    resultsObj["averageNumberofXTouched"] = averageNumberofXTouched;
    resultsObj["Total Conversions"] = Object.values(conversionsObj).length;
    for(key in resultsObj["Breakdown Data"]){
        resultsObj["Breakdown Data"][key]["Percent of Conversions Last Touch"] = resultsObj["Breakdown Data"][key]["Conversions-LastImp"]/resultsObj["Breakdown Data"][key]["Conversions"]
        resultsObj["Breakdown Data"][key]["Percent of Conversions First Touch"] = resultsObj["Breakdown Data"][key]["Conversions-FirstImp"]/resultsObj["Breakdown Data"][key]["Conversions"]    
    }

    function findGrainWithLowestValueForAStat(stat){
        let lowestValue = Infinity;
        let grainWithLowestValue = '';
        for(key in resultsObj["Breakdown Data"]){
            if(key !== "Other" && key !== ""){
                if(resultsObj["Breakdown Data"][key][stat] < lowestValue){
                    lowestValue = resultsObj["Breakdown Data"][key][stat];
                    grainWithLowestValue = key;
                }
            }
        }
        resultsObj["Least "+stat] = {};
        resultsObj["Least "+stat][grainWithLowestValue] = lowestValue;
    }

    findGrainWithLowestValueForAStat("Impressions per Conversion");
    findGrainWithLowestValueForAStat("Percent of Conversions Last Touch");
    findGrainWithLowestValueForAStat("Average Days From Last Imp To Conversion");

    return resultsObj;
}

function summaryStats(filteredData){
    let impressions = filteredData.length;

    let TDIDsObj = {};
    filteredData.forEach(row=>{
        TDIDsObj[row["Conversion TDID"]] = row["Conversion TDID"];
    })

    let TDIDsArray = Object.keys(TDIDsObj);
    let numberOfTDIDs = TDIDsArray.length;
    let conversionsObj = createConversionsObject(filteredData);
    let conversionArray = Object.values(conversionsObj);
    let numberOfConversions = conversionArray.length;
    let totalMSFirstImpToConv = conversionArray.reduce((accumulator, currentValue) => accumulator + currentValue["First Impression Data"]["First Imp to Conversion MS"], 0,);
    let avgDaysFirstImpToConv = (totalMSFirstImpToConv/numberOfConversions)/(1000*60*60*24)
    let totalMSLastImpToConv = conversionArray.reduce((accumulator, currentValue) => accumulator + currentValue["Last Impression Data"]["Last Imp to Conversion MS"], 0,);
    let avgDaysLastImpToConv = (totalMSLastImpToConv/numberOfConversions)/(1000*60*60*24)

    let summaryObj = {
        "Number of Impressions" : impressions,
        "Number of Conversions" : numberOfConversions,
        "Number of Users" : numberOfTDIDs,
        "Impressions per Converting User" : impressions/numberOfTDIDs,
        "Impressions per Conversion" : impressions/numberOfConversions,
        "Conversions per Person" : numberOfConversions/numberOfTDIDs,
        "Avg. Days From First Impression to Conversion" : avgDaysFirstImpToConv,
        "Avg. Days From Last Impression to Conversion" : avgDaysLastImpToConv,
    }
    return summaryObj;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//Delete function getImpressionsByKeyBreakdowns?
function getImpressionsByKeyBreakdowns(data){
    let filters = [{"Event Device Type": ["Mobile", "PC"]}, {"Event City": ["Kent", "Cuyahoga Falls"]}];
    filters = [];
    impressionsByBreakdown(data, "Event Device Type", filters);
    impressionsByBreakdown(data, "Event Audience Name");
    return impressionsByBreakdown(data, "Event Device Type", filters);
}

function addElement(elementType, content, originalElID, className, IDName) {
    const node = document.createElement(elementType);
    if(className !== undefined){
        // node.classList.add(className);
        node.setAttribute("class", className);
    }
    if(IDName !== undefined){node.setAttribute('id', IDName);}
    // const textnode = document.createTextNode(content);
    // node.appendChild(textnode);
    node.innerHTML = content;
    document.getElementById(originalElID).appendChild(node);
    return node;
}

function addOverallStats(resultsObj, grain){
        // Add overall stats
        let averageNumberofGrains = Number(resultsObj["averageNumberofXTouched"]).toLocaleString(undefined,{maximumFractionDigits:2});
        let percentConversionsWithMoreThanOneGrain = Number(resultsObj["percentConversionsWithMoreThanOneGrain"]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
    
        addElement("div", "", `results-lastImpression-${grain}-pt1`, `avg-num-grains-container`, `avg-num-${grain}s-container-ID-1`);
        addElement("div", averageNumberofGrains, `avg-num-${grain}s-container-ID-1`, `avg-num-grains-stat`);
        addElement("div", `On average, a user was served ads across ${averageNumberofGrains} ${grain}s before converting.`, `avg-num-${grain}s-container-ID-1`, `avg-num-grains-description`);
        addElement("div", "", `results-lastImpression-${grain}-pt1`, `avg-num-grains-container`, `avg-num-${grain}s-container-ID-2`);
        addElement("div", percentConversionsWithMoreThanOneGrain, `avg-num-${grain}s-container-ID-2`, `avg-num-grains-stat`);
        addElement("div", `${percentConversionsWithMoreThanOneGrain} of the time, a user was served an ad on more than one ${grain} before converting.`, `avg-num-${grain}s-container-ID-2`, `avg-num-grains-description`);
    
}

function addBulletsForLeast(resultsObj, grain){
    let leastPercLastTouchGrain = Object.keys(resultsObj["Least Percent of Conversions Last Touch"])[0];
    let notLastTouch = Number(1-resultsObj["Least Percent of Conversions Last Touch"][leastPercLastTouchGrain]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
    addElement(`ul`, ``, `results-lastImpression-${grain}-pt2`, `grain-bullets-container`, `results-lastImpression-${grain}-pt2-outer-container`);
    addElement(`li`, `<span class="bold emph-color-2">${leastPercLastTouchGrain}</span> impressions are <span class="bold emph-color">least likely to be the last touchpoint</span> on the conversion path. ${notLastTouch} of the time, ${leastPercLastTouchGrain} was not the last touchpoint, indicating this may be an upper funnel ${grain}.`, `results-lastImpression-${grain}-pt2-outer-container`, `callouts`);
    let leastImpPConversionGrain = Object.keys(resultsObj["Least Impressions per Conversion"])[0];
    let leastImpPConversionValue = Number(resultsObj["Least Impressions per Conversion"][leastImpPConversionGrain]).toLocaleString(undefined,{maximumFractionDigits:2});
    addElement("li", `Users needed the <span class="bold emph-color">fewest number of impressions to convert</span> when <span class="bold emph-color-2">${leastImpPConversionGrain}</span> was on the conversion path - it only took an average of ${leastImpPConversionValue} impressions for a user to convert.`, `results-lastImpression-${grain}-pt2-outer-container`, `callouts`);
    let leastDaysGrain = Object.keys(resultsObj["Least Average Days From Last Imp To Conversion"])[0];
    let leastDaysValue = Number(resultsObj["Least Average Days From Last Imp To Conversion"][leastDaysGrain]).toLocaleString(undefined,{maximumFractionDigits:2});
    addElement("li", `When <span class="bold emph-color-2">${leastDaysGrain}</span> was on the conversion path, the <span class="bold emph-color">time to convert was the shortest</span>. On average it only took  ${leastDaysValue} days for a user to convert after last impression.`, `results-lastImpression-${grain}-pt2-outer-container`, `callouts`);
}

function printAUserPath(TDIDObject){

    document.getElementById("sampleImpression-section").classList.remove("hide");
    document.getElementById("sampleImpression-section").classList.add("show-flex");
    document.getElementById("generate-random-button").classList.remove("hide");
    document.getElementById("generate-random-button").classList.add("show-flex");

    let users = Object.values(TDIDObject);
    let chosenUser = users[1];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    document.getElementById("generate-random-button").addEventListener('click', function generateNewRandomPath(){
        let randomnumber = getRandomInt(users.length-1);
        displayPath(users[randomnumber]);
    })


    function displayPath(chosenUser){

        document.getElementById("results-sample-path").innerHTML = "";
        let timeStampOrder = chosenUser["TimestampOrder"];

        addElement("div", "", "results-sample-path", "sample-path-person-outercontainer", "sample-path-person-outercontainer");
        addElement("div", "", "sample-path-person-outercontainer", "sample-path-person-img", "sample-path-person-img-id");
        addElement("div", "Example User", "sample-path-person-outercontainer", "sample-path-person-text");

        for(let i = 0; i<timeStampOrder.length; i++){
            let eventTime = timeStampOrder[i]
            let eventType = chosenUser[eventTime]["Event Type"]
            let event = chosenUser[eventTime]["Conversion Sub Category"];
            let time = chosenUser[eventTime]["Time"];
            let device = chosenUser[eventTime]["Device"];
            let site = chosenUser[eventTime]["Site"];
            if(CtvAppLookUp[site]){
                site = `${CtvAppLookUp[site]} (${site})`;
            }

            addElement("div", "&#8594", "results-sample-path", "arrow");
            addElement("div", "", "results-sample-path", `pathnode-container ${eventType}-pathnode-container`, eventTime+"ID");
            addElement("div", time, eventTime+"ID", "pathnode-stat");
            addElement("div", event, eventTime+"ID", "pathnode-stat");
            addElement("div", device, eventTime+"ID", "pathnode-stat");
            addElement("div", site, eventTime+"ID", "pathnode-stat");
        }
    }
    displayPath(chosenUser)

}

function createCtvVnoCTVResultsObject(filteredData){
            
    const filters = {"Event Device Type": ["PC","Mobile","Tablet","OutOfHome","Other"]}
    const refilteredData = filterData(filteredData, filters)

    const noCTVStats = summaryStats(refilteredData);
    console.log("noCTVStats")
    console.log(noCTVStats)
    return noCTVStats;
}

function createCTVComparisonCharts(noCTVStats, resultsObj){
    if(resultsObj["Breakdown Data"]["ConnectedTV"]){
        let impressionsPerConversionNOCTV = noCTVStats["Impressions per Conversion"];
        let impressionsPerConversionCTV = resultsObj["Breakdown Data"]["ConnectedTV"]["Impressions per Conversion"];
        let timeLastImptoConvNOCTV = noCTVStats["Avg. Days From Last Impression to Conversion"];
        let timeLastImptoConvCTV = resultsObj["Breakdown Data"]["ConnectedTV"]["Average Days From Last Imp To Conversion"];
        let conversionsNOCTV = noCTVStats["Number of Conversions"];
        let conversionsCTV = resultsObj["Breakdown Data"]["ConnectedTV"]["Conversions"];

        function printComparisonCharts(nonctvStat, CTVstat, chartID, title, calloutID){

            if(nonctvStat && CTVstat){
                if(nonctvStat > CTVstat){
                document.getElementById(chartID).classList.remove("hide");
                document.getElementById(calloutID).classList.remove("hide");
                document.getElementById(calloutID).innerHTML = ""



                let roundedNonCtvStat = Number(nonctvStat).toLocaleString(undefined,{maximumFractionDigits:2})
                let roundedCtvStat = Number(CTVstat).toLocaleString(undefined,{maximumFractionDigits:2})
                let roundedDifference = Number(1 - (CTVstat/nonctvStat)).toLocaleString(undefined,{style: 'percent', maximumFractionDigits:2})


                if(title == "Impression Per Conversion"){
                    document.getElementById(calloutID).innerHTML = "When CTV was on the conversion path, it took <span class='bold emph-color'>" + roundedDifference 
                    + " fewer impressions</span> for a user to convert."
                }
                if(title == "Avg Days to Conversion From Last Impression"){
                    document.getElementById(calloutID).innerHTML = "When CTV was on the conversion path, conversions took <span class='bold emph-color'>" 
                    + roundedDifference + " fewer days</span> to (from last impression)."
                }

                let trace1 = {
                    x: ["No CTV On Path", "CTV On Path"],
                    y: [nonctvStat, CTVstat],
                    text: [title+": "+  roundedNonCtvStat+ "<br>Conversions: "+ conversionsNOCTV,
                            title+": "+  roundedCtvStat+ "<br>Conversions: "+ conversionsCTV],
                    name: title,
                    type: 'bar',
                    marker: {color: '#0098FA'}
                };
            
                let data = [trace1];
                let config = {responsive: true}
                let layout = {
                    barmode: 'group',
                    title: title,
                    xaxis: {
                        tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
                        tickvals: ["No CTV On Path", "CTV On Path"],
                        ticktext: ["No CTV On Path", "CTV On Path"],
                        type: 'category',
                        automargin: true
                    }
                };
                Plotly.newPlot(chartID, data, layout, config);
                }
                else{
                    document.getElementById(chartID).classList.add("hide");
                    document.getElementById(calloutID).classList.add("hide");
                }
            }
            else{
                document.getElementById(chartID).classList.add("hide");
                document.getElementById(calloutID).classList.add("hide");
            }
        }

        printComparisonCharts(impressionsPerConversionNOCTV, impressionsPerConversionCTV, "CTV-Comparison-Chart-1", "Impression Per Conversion", "impressions-per-conversion-callout")
        printComparisonCharts(timeLastImptoConvNOCTV, timeLastImptoConvCTV, "CTV-Comparison-Chart-2", "Avg Days to Conversion From Last Impression", "time-to-convert-callout")

    }
}

function printDataByDevice(filteredData){


    document.getElementById("device-section").classList.remove("hide");
    document.getElementById("device-section").classList.add("show-flex");
    document.getElementById("results-lastImpression-device").innerHTML = "";
    document.getElementById("results-lastImpression-device-pt1").innerHTML = "";
    document.getElementById("results-lastImpression-device-pt2").innerHTML = "";

    document.getElementById("results-lastImpression-device-pt1").classList.remove("hide");
    document.getElementById("results-lastImpression-device-pt2").classList.remove("hide");
    document.getElementById("results-lastImpression-device").classList.remove("hide");

    const resultsObj = impressionsByBreakdown(filteredData, "Event Device Type");

    let numberOfDevices = Object.keys(resultsObj["Breakdown Data"]).length

    if(numberOfDevices == 1){

        document.getElementById("no-results-device-callout").classList.remove("hide");
        document.getElementById("no-results-device-callout").innerHTML = `All conversions were from media served on ${Object.keys(resultsObj["Breakdown Data"])[0]}. `
        +`If you measure other channels, this section will show more insights.`;

        document.getElementById("results-lastImpression-device-pt1").classList.add("hide");
        document.getElementById("results-lastImpression-device-pt2").classList.add("hide");
        document.getElementById("results-lastImpression-device").classList.add("hide");
    }
    else{
        document.getElementById("no-results-device-callout").classList.add("hide");

        if(resultsObj["Breakdown Data"]["ConnectedTV"]){
            document.getElementById("results-CTV-Comparison").classList.remove("hide");
            const noCTVStats = createCtvVnoCTVResultsObject(filteredData);
            createCTVComparisonCharts(noCTVStats, resultsObj);
        }
        else{
            document.getElementById("results-CTV-Comparison").classList.add("hide");
        }


        // Add overall stats
        addOverallStats(resultsObj, "device");


        // Add bullets for devices with least X
        addBulletsForLeast(resultsObj, "device");

        // Add data for all devices
        const devices = Object.keys(resultsObj["Breakdown Data"]);
        devices.forEach(device =>{

            if(device !== "Other"){
            let conversionsWithDeviceOnPath = resultsObj["Breakdown Data"][device]["Conversions"]/resultsObj["Total Conversions"];
            conversionsWithDeviceOnPath = Number(conversionsWithDeviceOnPath).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            let percentLastTouch = resultsObj["Breakdown Data"][device]["Percent of Conversions Last Touch"];
            percentLastTouch = Number(percentLastTouch).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            let percentFirstTouch = resultsObj["Breakdown Data"][device]["Percent of Conversions First Touch"];
            percentFirstTouch = Number(percentFirstTouch).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
            let daysFromLastImpToConversion = resultsObj["Breakdown Data"][device]["Average Days From Last Imp To Conversion"];
            daysFromLastImpToConversion = Number(daysFromLastImpToConversion).toLocaleString(undefined,{maximumFractionDigits:2});
            let impressionsPerConversion = resultsObj["Breakdown Data"][device]["Impressions per Conversion"];
            impressionsPerConversion = Number(impressionsPerConversion).toLocaleString(undefined,{maximumFractionDigits:2});


            addElement("div", "", "results-lastImpression-device", "device-stats-outer-container", device+"ID");
            addElement("div", "", device+"ID", "device-label-inner-container", device+"-Label-Container-ID");
            addElement("div", "", device+"-Label-Container-ID", "device-label-image", device+"-device-label-image");
            addElement("div", device, device+"-Label-Container-ID", "device-label-text", device+"label-ID");
            addElement("div", "", device+"ID", "device-stats-inner-container", device+"Stats-Container-ID");

            addElement("div", `${device} was <span class="bold">on the conversion path</span> for <span class="bold emph-color">${conversionsWithDeviceOnPath}</span> of all conversions`, device+"Stats-Container-ID", "statsByDevice");
            addElement("div", `${device} was the <span class="bold">last impression</span> for <span class="bold emph-color">${percentLastTouch}</span> of conversions and the <span class="bold">first impression</span> for <span class="bold emph-color">${percentFirstTouch}</span> of conversions with ${device} on conversion path`, device+"Stats-Container-ID", "statsByDevice");
            addElement("div", `When ${device} was on the conversion path, the average <span class="bold">time to convert</span> from last impression was <span class="bold emph-color">${daysFromLastImpToConversion}</span> days`, device+"Stats-Container-ID", "statsByDevice");
            addElement("div", `Users were served an avg. of <span class="bold emph-color">${impressionsPerConversion}</span> <span class="bold">impressions per conversion</span> when ${device} was on the conversion path`, device+"Stats-Container-ID", "statsByDevice");

            }
        })
    }
}

function printDataBySite(filteredData){

    document.getElementById("site-section").classList.remove("hide");
    document.getElementById("site-section").classList.add("show-flex");
    document.getElementById("results-lastImpression-site").innerHTML = "";
    document.getElementById("results-lastImpression-site-pt1").innerHTML = "";
    document.getElementById("results-lastImpression-site-pt2").innerHTML = "";

    const resultsObj = impressionsByBreakdown(filteredData, "Event Site");

    // Add overall stats
    addOverallStats(resultsObj, "site");

    // addBulletsForLeast(resultsObj, "site");

    const sites = Object.keys(resultsObj["Breakdown Data"]);
    let AvgConvPerSite = resultsObj["Total Conversions"]/sites.length;


    const trimmedResultsObj = {};
    trimmedResultsObj["Breakdown Data Obj"] = {};

    sites.forEach(site =>{
        if(resultsObj["Breakdown Data"][site]["Conversions"] > AvgConvPerSite*5){
            trimmedResultsObj["Breakdown Data Obj"][site] = resultsObj["Breakdown Data"][site];
        }
    })

    let trimmedSites = Object.keys(trimmedResultsObj["Breakdown Data Obj"]);
    let numberOfTrimmedSites = trimmedSites.length;


    if(numberOfTrimmedSites < 20){
        sites.forEach(site =>{trimmedResultsObj["Breakdown Data Obj"][site] = resultsObj["Breakdown Data"][site];});
        trimmedSites = Object.keys(trimmedResultsObj["Breakdown Data Obj"]);
        numberOfTrimmedSites = trimmedSites.length;
    }

    trimmedResultsObj["Breakdown Data ARRAY"] = [];
    trimmedSites.forEach(trimmedSite => {
        trimmedResultsObj["Breakdown Data ARRAY"].push([trimmedSite, trimmedResultsObj["Breakdown Data Obj"][trimmedSite]["Conversions"]]);
    })

    trimmedResultsObj["Breakdown Data ARRAY"].sort(function compareNumbers(a, b) {
        return b[1] - a[1];
    })

    let top10ResultsObj = {};
    top10ResultsObj["Breakdown Data Obj"] = {};
    for(let i = 0; i<10; i++){
        if(trimmedResultsObj["Breakdown Data ARRAY"][i] !== undefined){
            let site = trimmedResultsObj["Breakdown Data ARRAY"][i][0];
            top10ResultsObj["Breakdown Data Obj"][site] = {};
            top10ResultsObj["Breakdown Data Obj"][site] = trimmedResultsObj["Breakdown Data Obj"][site];
        }
    }

    function findGrainWithLowestValueForAStat(stat){
        let lowestValue = Infinity;
        let grainWithLowestValue = '';
        for(key in top10ResultsObj["Breakdown Data Obj"]){
            if(key !== "Other" && key !== ""){
                if(top10ResultsObj["Breakdown Data Obj"][key][stat] < lowestValue){
                    lowestValue = top10ResultsObj["Breakdown Data Obj"][key][stat];
                    grainWithLowestValue = key;
                }
            }
        }
        top10ResultsObj["Least "+stat] = {};
        top10ResultsObj["Least "+stat][grainWithLowestValue] = lowestValue;
    }

    findGrainWithLowestValueForAStat("Impressions per Conversion");
    findGrainWithLowestValueForAStat("Percent of Conversions Last Touch");
    findGrainWithLowestValueForAStat("Average Days From Last Imp To Conversion");

    // // Add bullets for devices with least X
    addBulletsForLeast(top10ResultsObj, "site");


    createChart("First and Last Impression Conversions By Site",top10ResultsObj["Breakdown Data Obj"], 'sitesChart-1', 'First Impression Conversions', "Conversions-FirstImp", 'Last Impression Conversions', "Conversions-LastImp")
    createChart("Impressions Per Conversion By Site", top10ResultsObj["Breakdown Data Obj"], 'sitesChart-2', 'Impressions Per Conversion', "Impressions per Conversion")
    createChart("Days To Convert (From Last Impression) By Site",top10ResultsObj["Breakdown Data Obj"], 'sitesChart-3', 'Average Days From Last Imp To Conversion', "Average Days From Last Imp To Conversion")

}

function printDataByCampaign(filteredData){
    document.getElementById("campaign-section").classList.remove("hide");
    document.getElementById("campaign-section").classList.add("show-flex");
    document.getElementById("results-lastImpression-campaign").innerHTML = "";
    document.getElementById("results-lastImpression-campaign-pt1").innerHTML = "";
    document.getElementById("results-lastImpression-campaign-pt2").innerHTML = "";

    const resultsObj = impressionsByBreakdown(filteredData, "Event Campaign Name");

    // Add overall stats
    addOverallStats(resultsObj, "campaign");


    // Add bullets for devices with least X
    addBulletsForLeast(resultsObj, "campaign");

    createChart("First and Last Impression Conversions By Campaign",resultsObj["Breakdown Data"], 'campaignsChart-1', 'First Impression Conversions', "Conversions-FirstImp", 'Last Impression Conversions', "Conversions-LastImp")
    createChart("Impressions Per Conversion By Campaign", resultsObj["Breakdown Data"], 'campaignsChart-2', 'Impressions Per Conversion', "Impressions per Conversion")
    createChart("Days To Convert (From Last Impression) By Campaign", resultsObj["Breakdown Data"], 'campaignsChart-3', 'Average Days From Last Imp To Conversion', "Average Days From Last Imp To Conversion")

}

function createChart(title, BreakdownObject, chartID, yValues1Name, yValues1Key, yValues2Name, yValues2Key){
    // let xValues =  Object.keys(BreakdownObject)
    let xValues = Object.keys(BreakdownObject);
    let yValues1 = [];
    xValues.forEach(x=>{
        yValues1.push(BreakdownObject[x][yValues1Key]);
    })


    let trace1 = {
        x: xValues,
        y: yValues1,
        name: yValues1Name,
        type: 'bar',
        marker: {color: '#0098FA'}
    };

    let data = [trace1];
   
    if(yValues2Name !== undefined){
        let yValues2 = [];
        xValues.forEach(x=>{
            yValues2.push(BreakdownObject[x][yValues2Key]);
        })
        let trace2 = {
            x: xValues,
            y: yValues2,
            name: yValues2Name,
            type: 'bar',
            marker: {color: '#002E87'}
        };
        data = [trace1, trace2];
    }
    let config = {responsive: true}
    let layout = {
        barmode: 'group',
        title: title,
        xaxis: {
            tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
            tickvals: xValues,
            ticktext: xValues,
            type: 'category',
            automargin: true
        }
    };

    Plotly.newPlot(chartID, data, layout, config);
}

function countConvByUTMParam(filteredData, UTMParameter){
    //For each tracking tag, show number of fires by each UTM_Source (or other paramter)
    const conversionsWithUTMParam = {};
    

    filteredData.forEach(row=>{
        if(!conversionsWithUTMParam[row["Conversion Tracking Tag Name"]]){
            conversionsWithUTMParam[row["Conversion Tracking Tag Name"]] = {};
            conversionsWithUTMParam[row["Conversion Tracking Tag Name"]][row[UTMParameter]] = 1;
        }
        else if(!conversionsWithUTMParam[row["Conversion Tracking Tag Name"]][row[UTMParameter]]){
            conversionsWithUTMParam[row["Conversion Tracking Tag Name"]][row[UTMParameter]] = 1;
        }
        else if(conversionsWithUTMParam[row["Conversion Tracking Tag Name"]][row[UTMParameter]]){
            conversionsWithUTMParam[row["Conversion Tracking Tag Name"]][row[UTMParameter]]++;
        }
    })

    return conversionsWithUTMParam;
}

function listenForSunburstTrackingTagSelections(filteredData, conversionsWithSubdomains){
    let pixelOptions = document.getElementsByClassName("sunburst-pixels");
    for(let i = 0; i<pixelOptions.length; i++){
        let LPItem = pixelOptions[i];
        pixelOptions[i].addEventListener("click", function(){

            let pixelWithMostConversions = LPItem.innerHTML;
            createSunBurstChart(filteredData, conversionsWithSubdomains, pixelWithMostConversions);
            document.getElementById("select-sunburst-pixel-button-text").innerHTML = pixelWithMostConversions;
            hidePixelOptions("sunburst");
        })
    }
}

function createSunBurstChart(filteredData, conversionsWithSubdomains, primaryPixel){
    // let primaryPixel = pixelWithMostConversions
    let subDomainObj = conversionsWithSubdomains[primaryPixel];

    if(subDomainObj){
        document.getElementById('sunburst-warning').classList.add("hide");
        document.getElementById('sunburst-chart').classList.remove("hide");
        let subDomains = Object.keys(subDomainObj)

        const labels = []
        const parents = []
        const values = []
        const ids = []
    
        const conversionsWithSubdomainOne = countConvByUTMParam(filteredData, 'Subdomain One');
        const subDomainOneObj = conversionsWithSubdomainOne[primaryPixel];
    
        let subDomainOneKeys = Object.keys(subDomainOneObj);
    
        subDomainOneKeys.forEach(subdomainOne =>{
            ids.push(subdomainOne);
            labels.push(subdomainOne);
            parents.push("root");
            values.push(subDomainOneObj[subdomainOne]);
        })
    
        subDomains.forEach(subdomain =>{
            function splitString(str) {
                const index = str.indexOf("/");
                if (index !== -1) {
                  return [str.slice(0, index), str.slice(index + 1)];
                }
                return [str, ""];
            }
            let [part1, part2] = splitString(subdomain);
    
            if(part1==""){
                part1 = "root"
            }
            if(part2==""){
                part2 = ""
            }
    
            ids.push(part1 + " - " + part2);
            labels.push(part2);
            parents.push(part1);
            values.push(subDomainObj[subdomain]);
        })
    
        var data = [{
            type: "sunburst",
            ids: ids,
            labels: labels,
            parents: parents,
            values:  values,
            outsidetextfont: {size: 20, color: "#377eb8"},
            leaf: {opacity: 0.4},
            marker: {line: {width: 2}},
            branchvalues: 'total'
          }];
          
          var layout = {
            margin: {l: 0, r: 0, b: 0, t: 0},
            sunburstcolorway:["#F7D031","#F9A326","#F98321", "#FC5D1F", "#0099FA", "#0372E2", "#024CB7", "#002F87"],
          };
          
          Plotly.newPlot('sunburst-chart', data, layout);
    }
    else{
        document.getElementById('sunburst-warning').classList.remove("hide");
        document.getElementById('sunburst-chart').classList.add("hide");
    }
}

function printSunBurstChart(filteredData){
    // document.getElementById("sunburst-outer-section").classList.remove("hide");
    selectLPPixelButton("sunburst");
    const conversionsWithSubdomains = countConvByUTMParam(filteredData, 'Subdomain One + Two');
    listenForSunburstTrackingTagSelections(filteredData, conversionsWithSubdomains);

    function identifyPrimaryPixel(){
        let highestValue = -Infinity;
        let pixelWithMostSubdomains = null;

        const pixels = Object.keys(conversionsWithSubdomains)
        for(let i = 0; i<pixels.length; i++){
            let numberOfSubdomains = Object.keys(conversionsWithSubdomains[pixels[i]]).length;
            if(numberOfSubdomains>highestValue){
                highestValue = numberOfSubdomains;
                pixelWithMostSubdomains = pixels[i];
            }
        }
        return pixelWithMostSubdomains;
    }

    let keyPixel = identifyPrimaryPixel();
    document.getElementById("select-sunburst-pixel-button-text").innerHTML = keyPixel;

    if(Object.keys(conversionsWithSubdomains[keyPixel]).length>5){
        document.getElementById("sunburst-outer-section").classList.remove("hide");
        createSunBurstChart(filteredData, conversionsWithSubdomains, keyPixel);
    }
}

function createTDIDConvPathObj(filteredData, UTMParameter){

     const pathPerTDID = {};

            //First: create an object that has information on each user and the conversions on the path
            //For each user, keep track of the first time we see "UTM_source = X"
    filteredData.forEach(row=>{
        let conversionTime = Date.parse(row["Conversion Time UTC"]);
        if(!pathPerTDID[row["Conversion TDID"]]){
            pathPerTDID[row["Conversion TDID"]] = {
                "conversions": {},
            };
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]] = {};
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Time UTC"] = conversionTime;
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]][UTMParameter] = row[UTMParameter];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Tracking Tag Name"] = row["Conversion Tracking Tag Name"];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Monetary Value"] = row["Conversion Monetary Value"];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["UTMsEarlierOnPath"] = {} //May not really use this
            pathPerTDID[row["Conversion TDID"]]["timestamps"] = [conversionTime];

            pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"] = {};
            pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"][row[UTMParameter]] = conversionTime; //this will be the first timestamp where we see the "UTM_source = X"
        }

        if(!pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]){
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]] = {};
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Time UTC"] = conversionTime;
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]][UTMParameter] = row[UTMParameter];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Tracking Tag Name"] = row["Conversion Tracking Tag Name"];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["Conversion Monetary Value"] = row["Conversion Monetary Value"];
            pathPerTDID[row["Conversion TDID"]]["conversions"][row["Conversion ID"]]["UTMsEarlierOnPath"] = {} //May not really use this
            pathPerTDID[row["Conversion TDID"]]["timestamps"].push(conversionTime);

            if(!pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"][row[UTMParameter]]){
                pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"][row[UTMParameter]] = conversionTime;
            }
            else if(conversionTime < pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"][row[UTMParameter]]){ 
                //if for this conversion, "UTM_source = X" and the conversion time is earlier
                //update the record for the first timestamp where we see the "UTM_source = X"
                pathPerTDID[row["Conversion TDID"]][UTMParameter + "_FirstInstances"][row[UTMParameter]] = conversionTime;
            }

        }
    })


            // const users = Object.keys(pathPerTDID);
            // users.forEach(user =>{
            //     let timestamps = Object.values(pathPerTDID[user]["timestamps"]);
            //     timestamps.sort(function compareNumbers(a, b) {
            //         return a - b;
            //     })
            //     pathPerTDID[user]["timestamps"] = timestamps;
            // })



    return pathPerTDID;
}

function countConvByPRIORUTMParam(filteredData, UTMParameter){
    //---For each tracking tag, show number of conversions where each UTM_Source was on the path---//

    const pathPerTDID = createTDIDConvPathObj(filteredData, UTMParameter);

    //Go through the object with information on each user, and then go through each conversion for that user
    //Loop through each UTM_source types on the path
    //If the conversion time happens after the first instance of the UTM source type, 
            //...then add a key in the "UTMsEarlierOnPath" for that conversion with the value 1

    const convsWithUTMParamsEarlier = {};

    const users = Object.keys(pathPerTDID);

    users.forEach(user =>{
        const conversions = Object.keys(pathPerTDID[user]["conversions"]);
        const UTMParamsOnPath = Object.keys(pathPerTDID[user][UTMParameter + "_FirstInstances"]);
        conversions.forEach(conv =>{
            UTMParamsOnPath.forEach(utmParam =>{
                let earliestInstofUTMParam = pathPerTDID[user][UTMParameter + "_FirstInstances"][utmParam];
                let conversionTime = pathPerTDID[user]["conversions"][conv]["Conversion Time UTC"];
                let conversionTrackingTagName = pathPerTDID[user]["conversions"][conv]["Conversion Tracking Tag Name"];
                let conversionRevenue = pathPerTDID[user]["conversions"][conv]["Conversion Monetary Value"];
                if(earliestInstofUTMParam <= conversionTime){
                    pathPerTDID[user]["conversions"][conv]["UTMsEarlierOnPath"][utmParam] = 1; //May not really use this

                    //For each conversion and each UTM parameter on the path,
                    //if the first instance of the UTM parameter fire occured before the conversion in question
                    //add the data to the "convsWithUTMParamsEarlier" object

                    if(!convsWithUTMParamsEarlier[conversionTrackingTagName]){
                        convsWithUTMParamsEarlier[conversionTrackingTagName] = {};
                        convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam] = {
                            "conversions": 1,
                            "revenue": conversionRevenue 
                        };
                    }
                    else if(!convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam]){
                        convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam] = {
                            "conversions": 1,
                            "revenue": conversionRevenue 
                        };
                    }
                    else if(convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam]){
                        convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam]["conversions"]++;
                        convsWithUTMParamsEarlier[conversionTrackingTagName][utmParam]["revenue"] += conversionRevenue;
                    }

                }
            })
        })
    })

    // console.log(convsWithUTMParamsEarlier)
    return convsWithUTMParamsEarlier;
}

function printDataByUTMParameter(filteredData, UTMParameter){
    const convsWithUTMParamsEarlier = countConvByPRIORUTMParam(filteredData, UTMParameter);
    createUTMParamsTable(convsWithUTMParamsEarlier);
}

function createUTMParamsTable(convsWithUTMParamsEarlier){
    const pixels = Object.keys(convsWithUTMParamsEarlier); //headers
    const UTMParamValues = {};
    document.getElementById("UTMSource-callout-container").innerHTML = "";

    pixels.forEach(pixel =>{
        const UTMParams = Object.keys(convsWithUTMParamsEarlier[pixel]);
        UTMParams.forEach(utmparam =>{
            UTMParamValues[utmparam] = 1;
        })
    })

    const UTMParamValuesArray = Object.keys(UTMParamValues);

    if(UTMParamValuesArray.length>1){
        document.getElementById("UTM-outer-section").classList.remove("hide");

        const header = ["UTM Source"]
        const values = [UTMParamValuesArray];

        pixels.forEach(pixel =>{

            header.push(pixel+ " Conversions");
            header.push(pixel+ " Revenue");

            const UTMconversions = [];
            const UTMrevenue = [];
            let maxValue = 0;
            let maxValueUTMParam = "";

            UTMParamValuesArray.forEach(utmparam =>{
                let conversions = 0;
                let revenue = 0;
                if(convsWithUTMParamsEarlier[pixel][utmparam]){conversions = convsWithUTMParamsEarlier[pixel][utmparam]["conversions"]}
                if(convsWithUTMParamsEarlier[pixel][utmparam]){
                    revenue = convsWithUTMParamsEarlier[pixel][utmparam]["revenue"];
                    // revenue = Number(revenue).toLocaleString("en-US", {style:"currency", currency:"USD"});
                    // revenue = Number(revenue).toLocaleString(undefined,{maximumFractionDigits:2});
                }
                revenue = Number(revenue).toLocaleString("en-US", {style:"currency", currency:"USD"});
                UTMconversions.push(conversions);
                UTMrevenue.push(revenue);
                if(conversions>maxValue && utmparam != ""){
                    maxValue = conversions;
                    maxValueUTMParam = utmparam;
                }
            })

            
            let calloutContent = `For the <span class="bold emph-color-2">${pixel}</span> event, there were `
            +`<span class="bold emph-color">${maxValue}</span> Trade Desk influenced conversions `
            + `that had <span class="bold emph-color-2">${maxValueUTMParam}</span> somewhere earlier on the conversion path`;
            if(maxValue > 0){
                addElement("li", calloutContent, "UTMSource-callout-container", "UTMConversion-callout"); 
            }


            values.push(UTMconversions);
            values.push(UTMrevenue);
        })



        createUTMParamsTableV2(header,values);


            //download data
    let downloadTable = "";
    header.forEach(header =>{
        downloadTable += header + ","
    })



    let numberRows = values[0].length;
    let numberColumns = values.length;

        for(let i = 0; i<numberRows; i++){
            downloadTable += "\r\n"
            for(let j = 0; j<numberColumns; j++){
                let value = values[j][i];
                if(j === 0 && typeof value == 'string'){
                    value = value.replace(/,/g, "")
                }
                if(j>0 && typeof value == 'string'){
                    value = Number(value.replace(/[^0-9.-]+/g,""))
                }
                downloadTable += value + ","
            }
        }
    
    document.getElementById("UTM-download-button-container").innerHTML = "";
    addElement("div", "", "UTM-download-button-container", "download-button", "download-button-container-UTM")
    addElement("a", "Download data", "download-button-container-UTM", "download-button-a-tag", "download-UTMs-chartdata")
    downloadData("download-UTMs-chartdata", downloadTable);

    }
}

function createUTMParamsTableV2(header, values){
    function generateTableHead(table, header) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        header.forEach(x=>{
          let th = document.createElement("th");
          let text = document.createTextNode(x);
          th.appendChild(text);
          row.appendChild(th);
        })
    }
    
      function generateTableContent(table, values) {
        let tbody = table.createTBody();

        let numberRows = values[0].length;
        let numberColumns = values.length;

        for(let i = 0; i<numberRows; i++){
            let row = tbody.insertRow();
            for(let j = 0; j<numberColumns; j++){
                let cell = row.insertCell();
                let number = values[j][i];
                if(!number){number = 0}
                let text = document.createTextNode(number);
                cell.appendChild(text);
            }
        }
    }

    function generateFullTable(header,values){
        let table = document.querySelector("table");
        table.innerHTML = ""
        table = document.querySelector("table")
        generateTableHead(table, header);
        generateTableContent(table, values);
    }

    generateFullTable(header,values);


}

function printSummary(filteredData){
    document.getElementById("results-basics-header").classList.remove("hide");
    document.getElementById("results-basics").innerHTML = "";
    const summaryObj = summaryStats(filteredData);
    const summaryStat = Object.keys(summaryObj);
    summaryStat.forEach(summaryStat =>{
        let stat = Number(summaryObj[summaryStat]).toLocaleString(undefined,{style: 'decimal', maximumFractionDigits:2})
        addElement("div", "", "results-basics", "summmaryStatContainer", summaryStat+"ContainerID");
        addElement("div", stat, summaryStat+"ContainerID", "summmaryStat", summaryStat+"ID");
        addElement("div", summaryStat, summaryStat+"ContainerID", "summmaryStatDescription", summaryStat+"-Description-ID");
    })
}

function getConversionsByFrequency(filteredData){ //refactor to pass through conversions object as parameter
    const conversionsObj = createConversionsObject(filteredData, "Conversion Tracking Tag Name");
    const frequencyObj = {};
    frequencyObj["Overall"] = {}
    for(key in conversionsObj){
        let frequency = conversionsObj[key]["Impressions on Path"];
        let trackingTag = Object.keys(conversionsObj[key]["Breakdowns"])[0];
        if(!frequencyObj["Overall"][frequency]){
            frequencyObj["Overall"][frequency] = 1;
        }
        else(frequencyObj["Overall"][frequency]++)
        if(!frequencyObj[trackingTag]){frequencyObj[trackingTag] = {}}
        if(!frequencyObj[trackingTag][frequency]){
            frequencyObj[trackingTag][frequency] = 1;
        }
        else(frequencyObj[trackingTag][frequency]++)
    }
    return frequencyObj;
}

function printConversionsByFrequency(filteredData){
    document.getElementById("Frequency-outer-section").classList.remove("hide");
    document.getElementById("FrequencyChartInnerContainer").innerHTML = "";

    const frequencyObj = getConversionsByFrequency(filteredData);


    addElement("div", "", "FrequencyChartInnerContainer", "download-button", "download-button-container-overall")
    addElement("a", "Download data", "download-button-container-overall", "download-button-a-tag", "download-frequency-chartdata")
    addElement("div", "", "FrequencyChartInnerContainer", "frequency-charts", "frequency-chart-overall")
    let downloadTable = createFreqDistrChartMultiConv("Frequency Distribution - Total Conversion Count", frequencyObj, "frequency-chart-overall")
    downloadData("download-frequency-chartdata", downloadTable);

    addElement("div", "", "FrequencyChartInnerContainer", "frequency-charts", "frequency-chart-overall-percents")
    createFreqDistrChartMultiConvPERCENTS("Frequency Distribution - Percent of Conversions", frequencyObj, "frequency-chart-overall-percents")


}

function downloadData(buttonID, data){
    let hiddenElement = document.getElementById(buttonID);
    //hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(finalZipListRow);
    hiddenElement.href = 'data:application/vnd.ms-excel,' + encodeURIComponent(data);
    hiddenElement.target = '_blank';
    hiddenElement.download = buttonID+'.csv';
}

function createFreqDistrChartMultiConv(title, frequencyObj, chartID){
    let frequencyBucket = Object.keys(frequencyObj["Overall"]);
    let xValues = [];
    let data = [];
    let frequencyOver30 = false;

    frequencyBucket.forEach(x=>{
        if(x<30){xValues.push(x);}
        if(x>29){frequencyOver30 = true;}
    })
    if(frequencyOver30){xValues.push("30+");}

    for(key in frequencyObj){
        let trackingTagFreqObj = frequencyObj[key];
        let yValues = []
        let over30FreqConversions = 0;
        frequencyBucket.forEach(x=>{
            if(x<30){
                yValues.push(trackingTagFreqObj[x]);
            }
            if(x>29){
                over30FreqConversions += trackingTagFreqObj[x]
            }
        })

        if(frequencyOver30){yValues.push(over30FreqConversions);}

        let trace = {
            x: xValues,
            y: yValues,
            name: key,
            type: 'bar',
            // marker: {color: '#0098FA'}
        }

        data.push(trace)
    }

    let config = {responsive: true}
    let layout = {
        barmode: 'group',
        title: title,
        xaxis: {
            tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
            tickvals: xValues,
            ticktext: xValues,
            type: 'category',
            automargin: true
        }
    };

    Plotly.newPlot(chartID, data, layout, config);

    let downloadTable = "Frequency";
    for(key in frequencyObj){
        downloadTable += "," + key;
    }
    frequencyBucket.forEach(x=>{
        downloadTable += "\r\n" + x 
        for(key in frequencyObj){
            let trackingTagFreqObj = frequencyObj[key];
            let value = trackingTagFreqObj[x];
            if(!value){value = 0};
            downloadTable += "," + value;
        }
    })
    return downloadTable;
}

function createFreqDistrChartMultiConvPERCENTS(title, frequencyObj, chartID){
    let frequencyBucket = Object.keys(frequencyObj["Overall"]);
    let xValues = [];
    let data = [];
    let frequencyOver30 = false;

    frequencyBucket.forEach(x=>{
        if(x<30){xValues.push(x);}
        if(x>29){frequencyOver30 = true;}
    })
    if(frequencyOver30){xValues.push("30+");}

    for(key in frequencyObj){

        const totalConversions = Object.values(frequencyObj[key]).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );

        let trackingTagFreqObj = frequencyObj[key];
        let yValues = []
        let over30FreqConversions = 0;
        frequencyBucket.forEach(x=>{
            if(x<30){
                yValues.push(trackingTagFreqObj[x]/totalConversions);
            }
            if(x>29){
                over30FreqConversions += trackingTagFreqObj[x]
            }
        })

        if(frequencyOver30){yValues.push(over30FreqConversions/totalConversions);}

        let trace = {
            x: xValues,
            y: yValues,
            name: key,
            type: 'line',
            // marker: {color: '#0098FA'}
        }

        data.push(trace)
    }

    let config = {responsive: true}
    let layout = {
        barmode: 'group',
        title: title,
        xaxis: {
            tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
            tickvals: xValues,
            ticktext: xValues,
            type: 'category',
            automargin: true
        }
    };
    
    Plotly.newPlot(chartID, data, layout, config);
}

function createTDIDSiteObject(filteredData){
    let TDIDSiteObj = {};
    let nodesObj = {};
    let nodesArray = [];
    let nodesIndex = 0;

    filteredData.forEach(row=>{
        let TDID = row["Conversion TDID"];
        let site = row["Event Site"];
        let device = row["Event Device Type"];
        if(device == "PC" || device == "Mobile" || device == "Tablet" || device == "Other"){
            device = "PC-Mobile-Tablet"
        }
        if(!TDIDSiteObj[TDID]){TDIDSiteObj[TDID] = {}}
        if(!TDIDSiteObj[TDID][site]){TDIDSiteObj[TDID][site] = 1}
        else{TDIDSiteObj[TDID][site]++}

        if(!nodesObj[site] && nodesObj[site] !== 0){
            nodesObj[site] = nodesIndex;
            nodesIndex++;
            let node = {
                id: site.toString(),
                group: device
            }
            nodesArray.push(node)
        }
    })

    console.log("nodesArray");
    console.log(nodesArray)
    console.log("TDIDSiteObj")
    console.log(TDIDSiteObj)

    let links = createLinks(TDIDSiteObj, nodesObj, nodesArray);
    // console.log(links);

    return TDIDSiteObj
}

function createLinks(TDIDSiteObj, nodesObj, nodesArray){
    const links = []
    let users = Object.keys(TDIDSiteObj);
    users.forEach(user =>{
        let usersSites = Object.keys(TDIDSiteObj[user])
        if (usersSites.length > 1){
            for(let i = 0; i<usersSites.length; i++){
                for(let j = i+1; j<usersSites.length; j++){
                    if(usersSites[i] !== usersSites[j]){
                        let link = {
                            "source": usersSites[i],
                            "target": usersSites[j]
                        }
                        links.push(link)
                    }
                }   
            }
        }
    })
    return links

}


function displayResults(filteredData){
    console.log("displayResults");

    // validateFileType(filteredData);

    printDataByDevice(filteredData);
    printSummary(filteredData);
    printDataBySite(filteredData);
    printDataByCampaign(filteredData);
    printConversionsByFrequency(filteredData);
    const TDIDObject = createTDIDObject(filteredData);
    printAUserPath(TDIDObject);
    getLPToConversionRate(TDIDObject);
    listenForTrackingTagSelections(TDIDObject);
    printDataByUTMParameter(filteredData, "utm_source");

    printSunBurstChart(filteredData);


    // createTDIDSiteObject(filteredData); ---> remove for now

    console.log("results done")
    document.getElementById("upload-gif").classList.add('hide');
}


