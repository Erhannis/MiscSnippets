// javascript:tracking%20%3D%20prompt%28%22Enter%20DHL%20tracking%20number%22%29%3B%0Aurl%20%3D%20%22https%3A%2F%2Fwww.dhl.com%2Fus-en%2Fhome%2Ftracking%2Ftracking-express.html%3Fsubmit%3D1%26tracking-id%3D%22%2Btracking%3B%0Awindow.open%28url%2C%20%27_blank%27%29%3B%0Avoid%280%29%3B



javascript:tracking = prompt("Enter DHL tracking number");
url = "https://www.dhl.com/us-en/home/tracking/tracking-express.html?submit=1&tracking-id="+tracking;
window.open(url, '_blank');
void(0);