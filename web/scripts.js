function play() {
  const audio2 = document.getElementById("audio2");
  if (audio2 !== null && audio2 !== undefined) {
    if (audio2.paused) {
      audio2.play();
    } else {
      audio2.pause();
    }
  } else {
    alert("没有音乐");
  }
}

function pauseMusic() {
  const audio1 = document.getElementById("audio1");
  const button = document.getElementById("btn-11");
  if (audio1 !== null && audio1 !== undefined) {
    if (audio1.paused) {
      audio1.play();
      button.textContent = "暂停音乐";
      console.log("1");
    } else {
      audio1.pause();
      button.textContent = "播放音乐";
      console.log("2");
    }
  } else {
    alert("没有音乐");
  }
}

function jumpSpy() {
  window.open(
    "https://search.bilibili.com/bangumi?keyword=%E9%97%B4%E8%B0%8D%E8%BF%87%E5%AE%B6%E5%AE%B6"
  );
}
function jumpSummer() {
  window.open("https://www.bilibili.com/bangumi/play/ss41417");
}
function jumpchoni() {
  window.open(
    "https://search.bilibili.com/bangumi?keyword=%E4%B8%AD%E4%BA%8C%E7%97%85%E4%B9%9F%E8%A6%81%E8%B0%88%E6%81%8B%E7%88%B1"
  );
}
function jumptime() {
  window.open(
    "https://search.bilibili.com/bangumi?keyword=%E6%97%B6%E5%85%89%E4%BB%A3%E7%90%86%E4%BA%BA"
  );
}
function jumpflower() {
  window.open("https://www.bilibili.com/bangumi/play/ep15014");
}
