(() => {
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;

  //初期化する
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリック後のイベント
  const handleClick = (e) => {
    e.preventDefault();

    //navとdataを取得する
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnavとcontentをリセット
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //すべてのnav要素に対して関数の適応をする
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }
})();
