// クラス=>テンプレ
// インスタンス=>出力
// ex.ツイッター

(() => {

  class Accordion {
    // 初期化
    constructor(obj) {
      console.log('obj', obj.hookName);
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
      $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
      index++;
      }
    }

    // クリックされたら実行される処理
    clickHandler = (e) => {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === 'block'){
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
  }
  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });
  const fuckingAccordion2nd = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });
  const fuckingAccordion3rd = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });

})();