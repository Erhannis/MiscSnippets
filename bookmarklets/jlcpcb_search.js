// javascript:block%3A%20%7B%20%20%20%20%0A%20%20%20%20readCookie%20%3D%20function%20%28t%29%20%7B%0A%20%20%20%20%20%20var%20e%20%3D%20document.cookie.match%28new%20RegExp%28%27%28%5E%7C%3B%5C%5Cs%2A%29%28%27%20%2B%20t%20%2B%20%27%29%3D%28%5B%5E%3B%5D%2A%29%27%29%29%3B%0A%20%20%20%20%20%20return%20e%20%3F%20decodeURIComponent%28e%5B3%5D%29%20%3A%20null%0A%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20token%20%3D%20readCookie%28%22XSRF-TOKEN%22%29%3B%0A%20%20%20%20if%20%28%21token%29%20%7B%0A%20%20%20%20%20%20%20%20alert%28%22XSRF-TOKEN%20not%20found%21%22%29%3B%0A%20%20%20%20%20%20%20%20break%20block%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20keyword%20%3D%20prompt%28%22Search%20for%20what%3F%22%29%3B%0A%0A%20%20%20%20fetch%28%22https%3A%2F%2Fjlcpcb.com%2Fapi%2Foverseas-pcb-order%2Fv1%2FshoppingCart%2FsmtGood%2FselectSmtComponentList%22%2C%20%7B%0A%20%20%20%20%20%20method%3A%20%22POST%22%2C%0A%20%20%20%20%20%20body%3A%20JSON.stringify%28%7B%22currentPage%22%3A1%2C%22pageSize%22%3A25%2C%22keyword%22%3Akeyword%2C%22componentLibraryType%22%3Anull%2C%22stockFlag%22%3Anull%2C%22stockSort%22%3Anull%2C%22firstSortName%22%3A%22%22%2C%22secondSortName%22%3A%22%22%2C%22sortMode%22%3A%22STOCK_SORT%22%2C%22sortASC%22%3A%22DESC%22%2C%22resetSearchComponent%22%3Afalse%2C%22startStockNumber%22%3Anull%2C%22endStockNumber%22%3Anull%2C%22searchSource%22%3A%22search%22%2C%22firstSortNameList%22%3A%5B%5D%7D%29%2C%0A%20%20%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20%20%20%22Accept%22%3A%20%22application%2Fjson%2C%20text%2Fplain%2C%20%2A%2F%2A%22%2C%0A%20%20%20%20%20%20%20%20%22Content-type%22%3A%20%22application%2Fjson%22%2C%0A%20%20%20%20%20%20%20%20%22X-XSRF-TOKEN%22%3A%20token%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%29%0A%20%20%20%20%20%20.then%28%28response%29%20%3D%3E%20response.json%28%29%29%0A%20%20%20%20%20%20.then%28%28rj%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log%28rj%29%3B%0A%20%20%20%20%20%20%20%20i0%20%3D%20rj.data.componentPageInfo.list%5B0%5D%3B%0A%20%20%20%20%20%20%20%20MFR%20%3D%20i0.componentModelEn%3B%0A%20%20%20%20%20%20%20%20LCSC%20%3D%20i0.componentCode%3B%0A%20%20%20%20%20%20%20%20Description%20%3D%20i0.describe%3B%0A%20%20%20%20%20%20%20%20Stock%20%3D%20i0.stockCount%3B%0A%20%20%20%20%20%20%20%20URL%20%3D%20%22https%3A%2F%2Fjlcpcb.com%2Fpartdetail%2F%22%2Bi0.urlSuffix%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20For%20this%20to%20work%20%28in%20firefox%29%2C%20config%20dom.events.testing.asyncClipboard%20needs%20to%20be%20true.%20%20I%20don%27t%20know%20if%20there%27s%20a%20feasible%20workaround.%0A%20%20%20%20%20%20%20%20text%20%3D%20%22Description%5Ct%22%2BDescription.trim%28%29%2B%22%5Cn%22%2B%22MFR%5Ct%22%2BMFR.trim%28%29%2B%22%5Cn%22%2B%22LCSC%5Ct%22%2BLCSC.trim%28%29%2B%22%5Cn%22%2B%22URL%5Ct%22%2BURL%3B%0A%20%20%20%20%20%20%20%20navigator.clipboard.writeText%28text%29%3B%0A%20%20%20%20%20%20%20%20alert%28%22Found%20%22%2BLCSC%2B%22%20with%20%22%2BStock%2B%22%20in%20stock%3B%20copied%3A%5Cn%22%2Btext%29%3B%0A%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20



block: {    
  readCookie = function (t) {
    var e = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
    return e ? decodeURIComponent(e[3]) : null
  };
  
  token = readCookie("XSRF-TOKEN");
  if (!token) {
      alert("XSRF-TOKEN not found!");
      break block;
  }
  
  keyword = prompt("Search for what?");

  fetch("https://jlcpcb.com/api/overseas-pcb-order/v1/shoppingCart/smtGood/selectSmtComponentList", {
    method: "POST",
    body: JSON.stringify({"currentPage":1,"pageSize":25,"keyword":keyword,"componentLibraryType":null,"stockFlag":null,"stockSort":null,"firstSortName":"","secondSortName":"","sortMode":"STOCK_SORT","sortASC":"DESC","resetSearchComponent":false,"startStockNumber":null,"endStockNumber":null,"searchSource":"search","firstSortNameList":[]}),
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-type": "application/json",
      "X-XSRF-TOKEN": token,
    },
  })
    .then((response) => response.json())
    .then((rj) => {
      console.log(rj);
      i0 = rj.data.componentPageInfo.list[0];
      MFR = i0.componentModelEn;
      LCSC = i0.componentCode;
      Description = i0.describe;
      Stock = i0.stockCount;
      URL = "https://jlcpcb.com/partdetail/"+i0.urlSuffix
      

      // For this to work (in firefox), config dom.events.testing.asyncClipboard needs to be true.  I don't know if there's a feasible workaround.
      text = "Description\t"+Description.trim()+"\n"+"MFR\t"+MFR.trim()+"\n"+"LCSC\t"+LCSC.trim()+"\n"+"URL\t"+URL;
      navigator.clipboard.writeText(text);
      alert("Found "+LCSC+" with "+Stock+" in stock; copied:\n"+text);
    });
  }
  