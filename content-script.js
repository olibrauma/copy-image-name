browser.runtime.onMessage.addListener((request) => {
  if (request.command === "copyImageName") {
    // URLからファイル名を抽出
    const url = new URL(request.srcUrl);
    const fileNameWithExtension = url.pathname.split('/').pop();
    const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
    
    // クリップボードにコピー
    navigator.clipboard.writeText(fileNameWithoutExtension).then(() => {
      console.log('Image name copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
});
