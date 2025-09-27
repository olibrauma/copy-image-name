// コンテキストメニューに「Copy image name」を追加
browser.contextMenus.create({
  id: "copy-image-name",
  title: "Copy image name",
  contexts: ["image"]
});

// コンテキストメニューがクリックされたときの処理
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-image-name") {
    // コンテンツスクリプトにメッセージを送信
    browser.tabs.sendMessage(tab.id, {
      command: "copyImageName",
      srcUrl: info.srcUrl
    });
  }
});
