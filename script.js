//things to add
//conversions by day (conversion time vs last impression time) & hour/day of week
//distribution time from last impression to conversion? time from first impression to conversion? time between impressions? impressions/conversion
//specific pages by device type

//Bugs - HTML entity for Apostrophe? Check Kanes


let intlDateBool = false;
function handleDateCheckboxChange(){
    intlDateBool = !intlDateBool;
}

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
        document.getElementById('welcome').classList.add('hide');
        document.getElementById("file-selector").classList.add('hide');
        document.getElementById("upload-gif").classList.remove('hide');
    }


    if (event.type === "load") {
        document.getElementById("upload-gif").classList.add('hide');
        document.getElementById("results-container").classList.remove('hide');
        console.log("Load End")

        let dataArray = [];

        function readData(event){

            function findLastNewlineFromUint8Array(array) {
                const newlineByte = 10;
                let lastIndex = -1;
              
                for (let i = array.length - 1; i >= 0; i--) {
                  if (array[i] === newlineByte) {
                    lastIndex = i;
                    break;
                  }
                }
              
                return lastIndex;
            } 

            const CHUNK_SIZE = 10000000;
            let uint8Content = new Uint8Array(event.target.result);
            let firstCHUNK = uint8Content.slice(0, CHUNK_SIZE);
            let decodedFirstChunk = new TextDecoder().decode(firstCHUNK);
            let firstLineEnd = decodedFirstChunk.indexOf('\n');
            const firstLine = decodedFirstChunk.substring(0, firstLineEnd-1);
            let reEncodedLine = new TextEncoder().encode(firstLine);
            const reEncodedLineLength = reEncodedLine.length;
            uint8Content = uint8Content.slice(reEncodedLineLength);
            while (uint8Content.length > 5){
                let chunkednewContent = uint8Content.slice(0, CHUNK_SIZE);
                let lastLineEnd = findLastNewlineFromUint8Array(chunkednewContent);
                let nextENcodedChunkWOLastLine = chunkednewContent.slice(0, lastLineEnd-1);
                let nextDecodedChunkWOLastLine = new TextDecoder().decode(nextENcodedChunkWOLastLine);
                let headerAndNextChunckWOLastLine = firstLine + nextDecodedChunkWOLastLine;
                uint8Content = uint8Content.slice(lastLineEnd-1);
                const papaParseResults = Papa.parse(headerAndNextChunckWOLastLine, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: function(results) {
                        dataArray.push(...results.data)
                    }
                });
            }
        }

        
        readData(event);
        let millis = Date.now() - start;
        console.log(`milliseconds elapsed = ${Math.floor(millis)}`);
        console.log("csvtoObject done");
        millis = Date.now() - start;

        console.log(`milliseconds elapsed from load = ${Math.floor(millis)}`);
        validateFileType(dataArray);
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
            document.getElementById("apply-filters-button").classList.remove("apply-filters-button-grey");
            document.getElementById("apply-filters-button").classList.add("apply-filters-button-blue");

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
        document.getElementById("apply-filters-button").classList.add("apply-filters-button-grey");
        document.getElementById("apply-filters-button").classList.remove("apply-filters-button-blue");
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

function parseInternationalDates(intlDate){
    if(intlDateBool === true){
        const dateString = intlDate; // DD/MM/YYYY HH:mm:ss format

        const dateTimeParts = dateString.split(" ");
        const dateParts = dateTimeParts[0].split("/");
        const timeParts = dateTimeParts[1].split(":");
    
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based (0-11)
        const year = parseInt(dateParts[2], 10);
        const hour = parseInt(timeParts[0], 10);
        const minute = parseInt(timeParts[1], 10);
        const second = parseInt(timeParts[2], 10);
    
        const date = new Date(year, month, day, hour, minute, second);
        const timestamp = date.getTime();
    
        return timestamp;
    }
    else{
        return Date.parse(intlDate)
    }
}

function createConversionsObject(filteredData, breakdown){
    let conversionsObj = {};

    filteredData.forEach(row=>{
        let eventTime = parseInternationalDates(row["Event Time UTC"])
        let conversionTime = parseInternationalDates(row["Conversion Time UTC"])

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
        else if(eventTime > parseInternationalDates(conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Event Time UTC"])){
            conversionsObj[row["Conversion ID"]]["Last Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["Last Impression Data"]["Last Imp to Conversion MS"] = conversionTime - eventTime;
        }
        if(!conversionsObj[row["Conversion ID"]]["First Impression Data"] ){
            conversionsObj[row["Conversion ID"]]["First Impression Data"] = row;
            conversionsObj[row["Conversion ID"]]["First Impression Data"]["First Imp to Conversion MS"] = conversionTime - eventTime;
        }
        else if(eventTime < parseInternationalDates(conversionsObj[row["Conversion ID"]]["First Impression Data"]["Event Time UTC"])){
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
    let specialTDIDs = {};

    filteredData.forEach(row=>{
        let conversionTime = parseInternationalDates(row["Conversion Time UTC"]);
        let eventTime = parseInternationalDates(row["Event Time UTC"]);
        if(!TDIDObject[row["Conversion TDID"]]){
            TDIDObject[row["Conversion TDID"]] = {}
            TDIDObject[row["Conversion TDID"]][conversionTime] = {};
            TDIDObject[row["Conversion TDID"]][conversionTime][row["Conversion ID"]] = 1;
            TDIDObject[row["Conversion TDID"]][conversionTime]["Event Type"] = "Conversion";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Conversion Sub Category"] = row["Conversion Tracking Tag Name"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Device"] = "";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Site"] = row["Conversion Referrer URL"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Cross Device Vendor"] = row["Event Cross Device Attribution Model"];
            TDIDObject[row["Conversion TDID"]][conversionTime]["Campaign"] = "";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Ad Group"] = "";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Audience"] = "";
            TDIDObject[row["Conversion TDID"]][conversionTime]["Time"] = row["Conversion Time UTC"];
            if(row["utm_source"]){TDIDObject[row["Conversion TDID"]][conversionTime]["utm_source"] = row["utm_source"];}

            // TDIDObject[row["Conversion TDID"]][row["Event Time UTC"]] = {}
            TDIDObject[row["Conversion TDID"]][eventTime] = {
                "Event Type": row["Event Type"],
                "Conversion Sub Category" : row["Event Type"],
                "Device": row["Event Device Type"],
                "Site": row["Event Site"],
                "Cross Device Vendor": row["Event Cross Device Attribution Model"],
                "Campaign" : row["Event Campaign Name"],
                "Ad Group" : row["Event Ad Group Name"],
                "Audience" : row["Event Audience Name"],
                "Time": row["Event Time UTC"]
            }

            TDIDObject[row["Conversion TDID"]]["uniqueDevices"] = {};
            TDIDObject[row["Conversion TDID"]]["uniqueDevices"][row["Event Device Type"]] = 1;
            TDIDObject[row["Conversion TDID"]]["numUniqueDevices"] = 1;

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
                TDIDObject[row["Conversion TDID"]][conversionTime]["Campaign"] = "";
                TDIDObject[row["Conversion TDID"]][conversionTime]["Ad Group"] = "";
                TDIDObject[row["Conversion TDID"]][conversionTime]["Audience"] = "";
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
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Campaign"] = row["Event Campaign Name"];
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Ad Group"] = row["Event Ad Group Name"];
                    TDIDObject[row["Conversion TDID"]][conversionTime]["Audience"] = row["Event Audience Name"];
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
                    "Campaign" : row["Event Campaign Name"],
                    "Ad Group" : row["Event Ad Group Name"],
                    "Audience" : row["Event Audience Name"],
                    "Time": row["Event Time UTC"]
                }
            }

            if(!TDIDObject[row["Conversion TDID"]]["uniqueDevices"]){
                TDIDObject[row["Conversion TDID"]]["uniqueDevices"] = {};
                TDIDObject[row["Conversion TDID"]]["uniqueDevices"][row["Event Device Type"]] = 1;
                TDIDObject[row["Conversion TDID"]]["numUniqueDevices"] = 1;
            }
            else if(!TDIDObject[row["Conversion TDID"]]["uniqueDevices"][row["Event Device Type"]]){
                TDIDObject[row["Conversion TDID"]]["uniqueDevices"][row["Event Device Type"]] = 1;
                TDIDObject[row["Conversion TDID"]]["numUniqueDevices"]++;
                specialTDIDs[row["Conversion TDID"]] = 1;
            }

        }
    })

    let users = Object.keys(TDIDObject);
    users.forEach(user =>{
        let timeStamps = Object.keys(TDIDObject[user]);
        timeStamps = timeStamps.filter(timestamp => timestamp > 0);
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
    return {
        'TDIDObject' : TDIDObject,
        'specialTDIDs' : specialTDIDs
    };
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

function printAUserPath(TDIDObject, specialTDIDs){



    let userIDs = Object.keys(TDIDObject);
    let usersWMultDevices = Object.keys(specialTDIDs);
    let chosenUser = TDIDObject[usersWMultDevices[0]];
    if(chosenUser == undefined){
        chosenUser = TDIDObject[userIDs[0]];
    }

    document.getElementById("sampleImpression-section").classList.remove("hide");
    document.getElementById("sampleImpression-section").classList.add("show-flex");
    document.getElementById("generate-random-button").classList.remove("hide");
    document.getElementById("generate-random-button").classList.add("show-flex");
    if(usersWMultDevices.length>0){
        document.getElementById("filter-two-devices-button").classList.remove("hide");
        document.getElementById("filter-two-devices-button").classList.add("show-flex");
        document.getElementById("filter-two-devices-count").innerHTML = `&nbsp;(${usersWMultDevices.length} users)`
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let filterbyTwoSelected = -1;

    function generateNewRandomPath(){
        if(filterbyTwoSelected == -1){
            let randomnumber = getRandomInt(userIDs.length-1);
            displayPath(TDIDObject[userIDs[randomnumber]]);
        }
        else{
            let randomnumber = getRandomInt(usersWMultDevices.length-1);
            displayPath(TDIDObject[usersWMultDevices[randomnumber]]);
        }
    }

    document.getElementById("generate-random-button").addEventListener('click', generateNewRandomPath)

    document.getElementById("filter-two-devices-button").addEventListener('click', function filterToTwoDevicesPlus(){
        filterbyTwoSelected *= -1;
        document.getElementById("filter-two-devices-button").classList.toggle("two-devices-filter-selected");
        document.getElementById("filter-two-devices-button").classList.toggle("two-devices-filter-unselected");
        generateNewRandomPath();
    })


    function displayPath(chosenUser){

        document.getElementById("results-sample-path").innerHTML = "";
        let timeStampOrder = chosenUser["TimestampOrder"];

        addElement("div", "", "results-sample-path", "sample-path-person-outercontainer", "sample-path-person-outercontainer");
        addElement("div", "", "sample-path-person-outercontainer", "sample-path-person-img", "sample-path-person-img-id");
        addElement("div", "Example User", "sample-path-person-outercontainer", "sample-path-person-text");

        for(let i = 0; i<timeStampOrder.length; i++){

            // if(timeStampOrder[i] > 0){
                    let eventTime = timeStampOrder[i]
                    let eventType = chosenUser[eventTime]["Event Type"]
                    let event = chosenUser[eventTime]["Conversion Sub Category"];
                    let time = chosenUser[eventTime]["Time"];
                    let device = chosenUser[eventTime]["Device"];
                    let site = chosenUser[eventTime]["Site"];
                    let campaign = "<span class='subdetail-title'>Campaign: </span>" + chosenUser[eventTime]["Campaign"];
                    if(chosenUser[eventTime]["Campaign"] == ""){campaign = "";}
                    let adGroup = "<span class='subdetail-title'>Ad Group: </span>" + chosenUser[eventTime]["Ad Group"];
                    if(chosenUser[eventTime]["Ad Group"] == ""){adGroup = "";}
                    let audience = "<span class='subdetail-title'>Audience: </span>" + chosenUser[eventTime]["Audience"];
                    if(chosenUser[eventTime]["Audience"] == ""){audience = "";}
                    
                    if(CtvAppLookUp[site]){
                        site = `${CtvAppLookUp[site]} (${site})`;
                    }
        
                    addElement("div", "&#8594", "results-sample-path", "arrow");
                    addElement("div", "", "results-sample-path", `pathnode-container ${eventType}-pathnode-container`, eventTime+"ID");
                    addElement("div", "", eventTime+"ID", `pathnode-stat ${device}-pathnode-image device-pathnode-image`);
                    addElement("div", time, eventTime+"ID", `${eventType}-stat pathnode-stat`);
                    if(eventType == "Impression"){addElement("div", `${device}&nbsp<span>${eventType}</span>`, eventTime+"ID", `${eventType}-stat pathnode-stat`);}
                    if(eventType == "Click"){
                        addElement("div", `<span class="click-image"></span>${device}&nbsp<span>${eventType}</span>`, eventTime+"ID", `${eventType}-stat pathnode-stat`);
                    }

                    if(eventType == "Conversion"){
                        addElement("div", `${eventType}`, eventTime+"ID", `${eventType}-stat pathnode-stat bold`);
                        addElement("div", event, eventTime+"ID", `${eventType}-stat pathnode-stat`)
                        addElement("div", site, eventTime+"ID", `pathnode-stat conversion-site-stat`);
                    }
        

                    if(eventType != "Conversion"){
                        addElement("div", site, eventTime+"ID", `pathnode-stat bold`);
                        addElement("div", campaign, eventTime+"ID", "pathnode-stat subdetails-pathnode-stat");
                        addElement("div", adGroup, eventTime+"ID", "pathnode-stat subdetails-pathnode-stat");
                        addElement("div", audience, eventTime+"ID", "pathnode-stat subdetails-pathnode-stat");
                    }
                // }
            }


    }
    displayPath(chosenUser)

}

function createCtvVnoCTVResultsObject(filteredData){
            
    const filters = {"Event Device Type": ["PC","Mobile","Tablet","OutOfHome","Other"]}
    const refilteredData = filterData(filteredData, filters)

    const noCTVStats = summaryStats(refilteredData);
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
        let conversionTime = parseInternationalDates(row["Conversion Time UTC"]);
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
    printAUserPath(TDIDObject.TDIDObject, TDIDObject.specialTDIDs);
    getLPToConversionRate(TDIDObject.TDIDObject);
    listenForTrackingTagSelections(TDIDObject.TDIDObject);
    printDataByUTMParameter(filteredData, "utm_source");

    printSunBurstChart(filteredData);


    // createTDIDSiteObject(filteredData); ---> remove for now

    console.log("results done")
    document.getElementById("upload-gif").classList.add('hide');
}


