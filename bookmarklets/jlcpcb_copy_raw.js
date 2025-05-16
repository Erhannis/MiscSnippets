// javascript:a1%20%3D%20document.evaluate%28%22%2F%2Fdl%5Bcontains%28.%2C%20%27MFR.Part%20%23%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0Aa2%20%3D%20a1.iterateNext%28%29%3B%0A%0Aif%20%28a2%20%3D%3D%20null%29%20%7B%0A%20%20a1%20%3D%20document.evaluate%28%22%2F%2Ftr%5Bcontains%28.%2C%20%27Mfr.%20Part%20%23%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0A%20%20a2%20%3D%20a1.iterateNext%28%29%3B%0A%7D%0A%0Ab1%20%3D%20document.evaluate%28%22%2F%2Fdl%5Bcontains%28.%2C%20%27JLCPCB%20Part%20%23%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0Ab2%20%3D%20b1.iterateNext%28%29%3B%0A%0Aif%20%28b2%20%3D%3D%20null%29%20%7B%0A%20%20b1%20%3D%20document.evaluate%28%22%2F%2Ftr%5Bcontains%28.%2C%20%27LCSC%20Part%20%23%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0A%20%20b2%20%3D%20b1.iterateNext%28%29%3B%0A%7D%0A%0Ac1%20%3D%20document.evaluate%28%22%2F%2Fdl%5Bcontains%28.%2C%20%27Description%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0Ac2%20%3D%20c1.iterateNext%28%29%3B%0A%0Aif%20%28c2%20%3D%3D%20null%29%20%7B%0A%20%20c1%20%3D%20document.evaluate%28%22%2F%2Ftr%5Bcontains%28.%2C%20%27Description%27%29%5D%22%2C%20document%2C%20null%2C%20XPathResult.ANY_TYPE%2C%20null%20%29%3B%0A%20%20c2%20%3D%20c1.iterateNext%28%29%3B%0A%7D%0A%0A%2F%2Fnavigator.clipboard.writeText%28%22MFR%5Ct%22%2Ba2.childNodes%5B2%5D.textContent.trim%28%29%2B%22%5Cn%22%2B%22LCSC%5Ct%22%2Bb2.childNodes%5B2%5D.textContent.trim%28%29%2B%22%5Cn%22%2B%22Description%5Ct%22%2Bc2.childNodes%5B2%5D.textContent.trim%28%29%2B%22%5Cn%22%2B%22URL%5Ct%22%2Bwindow.location%29%3B%0Anavigator.clipboard.writeText%28%60%20%20%20%20%28property%20%22Description%22%20%22%60%2Bc2.childNodes%5B2%5D.textContent.trim%28%29%2B%60%22%0A%20%20%20%20%20%20%28effects%20%28font%20%28size%201.524%201.524%29%29%20hide%29%0A%20%20%20%20%29%0A%20%20%20%20%28property%20%22MFR%22%20%22%60%2Ba2.childNodes%5B2%5D.textContent.trim%28%29%2B%60%22%0A%20%20%20%20%20%20%28effects%20%28font%20%28size%201.524%201.524%29%29%20hide%29%0A%20%20%20%20%29%0A%20%20%20%20%28property%20%22LCSC%22%20%22%60%2Bb2.childNodes%5B2%5D.textContent.trim%28%29%2B%60%22%0A%20%20%20%20%20%20%28effects%20%28font%20%28size%201.524%201.524%29%29%20hide%29%0A%20%20%20%20%29%0A%20%20%20%20%28property%20%22URL%22%20%22%60%2Bwindow.location%2B%60%22%0A%20%20%20%20%20%20%28effects%20%28font%20%28size%201.524%201.524%29%29%20hide%29%0A%20%20%20%20%29%0A%60%29%3B%0A



a1 = document.evaluate("//dl[contains(., 'MFR.Part #')]", document, null, XPathResult.ANY_TYPE, null );
a2 = a1.iterateNext();

if (a2 == null) {
  a1 = document.evaluate("//tr[contains(., 'Mfr. Part #')]", document, null, XPathResult.ANY_TYPE, null );
  a2 = a1.iterateNext();
}

b1 = document.evaluate("//dl[contains(., 'JLCPCB Part #')]", document, null, XPathResult.ANY_TYPE, null );
b2 = b1.iterateNext();

if (b2 == null) {
  b1 = document.evaluate("//tr[contains(., 'LCSC Part #')]", document, null, XPathResult.ANY_TYPE, null );
  b2 = b1.iterateNext();
}

c1 = document.evaluate("//dl[contains(., 'Description')]", document, null, XPathResult.ANY_TYPE, null );
c2 = c1.iterateNext();

if (c2 == null) {
  c1 = document.evaluate("//tr[contains(., 'Description')]", document, null, XPathResult.ANY_TYPE, null );
  c2 = c1.iterateNext();
}

//navigator.clipboard.writeText("MFR\t"+a2.childNodes[2].textContent.trim()+"\n"+"LCSC\t"+b2.childNodes[2].textContent.trim()+"\n"+"Description\t"+c2.childNodes[2].textContent.trim()+"\n"+"URL\t"+window.location);
navigator.clipboard.writeText(`    (property "Description" "`+c2.childNodes[2].textContent.trim()+`"
      (effects (font (size 1.524 1.524)) hide)
    )
    (property "MFR" "`+a2.childNodes[2].textContent.trim()+`"
      (effects (font (size 1.524 1.524)) hide)
    )
    (property "LCSC" "`+b2.childNodes[2].textContent.trim()+`"
      (effects (font (size 1.524 1.524)) hide)
    )
    (property "URL" "`+window.location+`"
      (effects (font (size 1.524 1.524)) hide)
    )
`);
