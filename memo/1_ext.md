# 拡張

マークダウンのパースを拡張したい。

## HTML5要素

http://www.htmq.com/html5/

## 候補

* `<kbd>`
* `<ruby>`
* `<time>`
* `<cite>` 作品
* `<var>` 変数
* `<samp>` プログラム出力結果

HTML5|説明
-----|----
`<kbd>`|ユーザ入力。キーボード, 音声入力, メニュー選択
`<time>`|時間
`<var>`|変数
`<samp>`|プログラム出力結果
`<cite>`|作品
`<ruby>`|振り仮名


## kbd, samp の併用

HTML5|概要
-----|----
`<kbd>A</kbd>`|Aキー入力
`<kbd>A|B</kbd>`|AまたはBキー入力
`<kbd><kbd>Ctrl</kbd>+<kbd>A</kbd></kbd>`|Ctrl + A キー入力
`<kbd><samp>メニュー項目</samp></kbd>`|システムによって出力された何かを操作させるとき
`<samp><kbd>入力内容</kbd></samp>`|システムによって返された入力内容


### markdownでどう書くか

#### 案1

markdown|例
--------|--
`{kbd *}`|`{kbd Ctrl+A}`, `{kbd.vim yy}`, {kbd.vim dD}`
`{time *}`|
`{var *}`|
`{samp *}`|
`{kbd.samp *}`|
`\`\`\`samp`|`\`\`\``で終了。`<pre><samp>`を表す
`{cite *}`|`{cite 表示名}`
`{cite.a *}`|`{cite.a 表示名 URL title属性値`
`{ruby *}`|`{ruby 漢字|かん|じ}`

* 長所: 多様な要素に統一した表記で対応できる。
* 短所: プレーンテキストで表示したときに見づらい(markdownの特性が喪失する)
