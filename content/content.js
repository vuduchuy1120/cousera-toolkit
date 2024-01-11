chrome.storage.sync.remove("finalUrl", function () {
  console.log("Dữ liệu đã được xóa thành công");
});
const internalId = setInterval(() => {
  try {
    const currentUrl = window.location.href;
    var finalUrl = currentUrl.slice(0, -6);

    var textareaElement = document.querySelector(
      'textarea[placeholder="Share your thoughts..."]'
    );
    var fullId = textareaElement ? textareaElement.id : null;
    var cutId = fullId ? fullId.substring(0, fullId.indexOf("~")) : null;

    if (cutId) {
      finalUrl = finalUrl + "review/" + cutId;

      // Lưu finalUrl vào clipboard
      setToStorage("finalUrl", finalUrl);
      console.log("Lấy URL thành công!!" + finalUrl);
      clearInterval(internalId);
    } else {
      console.log("Không tìm thấy textarea hoặc id.");
    }
  } catch (error) {
    console.error("Error during execution:", error);
  }
}, 1000);

// Function to copy text to the clipboard
