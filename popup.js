var i = setInterval(() => {
  const code = document.getElementById("modifiedUrl");
  chrome.storage.sync.get(["finalUrl"]).then((result) => {
    if (result) {
      code.value = result.finalUrl || "Website is waiting to load!!!!";
    } else {
      clearInterval(i);
    }
  });
}, 100);

const copyUrl = () => {
  const code = document.getElementById("modifiedUrl");
  const url = code.value;

  // Tạo một input ẩn để sao chép nội dung vào clipboard
  const tempInput = document.createElement("input");
  tempInput.value = url;
  document.body.appendChild(tempInput);

  // Chọn và sao chép nội dung trong input
  tempInput.select();
  document.execCommand("copy");

  // Xóa input ẩn
  document.body.removeChild(tempInput);

  alert("URL đã được sao chép vào clipboard: ");
};

document.getElementById("btnCopy").addEventListener("click", copyUrl);
