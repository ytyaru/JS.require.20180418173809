# 拡張

マークダウンのパースを拡張したい。

## 方針

* プレーンテキストで見やすい状態を維持できる範囲
* 自然言語が主体であること

### 課題

* 埋め込みデータをどうするか
    * データ構造
        * list
        * tree
        * graph
    * 表現
        * chart, diagram, mindmap, UML, logicTree, ...
    * audio, video, object, embed

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
`<samp>`|プログラム出力結果
`<var>`|変数。`<code>`内で使用。(不要?)
`<time>`|時間
`<cite>`|作品
`<ruby>`|振り仮名

* 外部読込
    * .csv, .tsv: `<table>`
    * .py, sh, ...: `<pre><code>`
    * .tree: `<ul><li>`
    * .menu: `<menu>` (テキストファイルの内容は`.tree`と同様で改行とインデント区切り)
    * Markdownでどう表現させるのがいいか
        * `{include path.ext}`
            * 拡張子によって最適な表示形式にする
* データ構造
    * `<li>`
        * 手順
        * なぜなぜ分析
        * パンくずリスト (階層位置)
        * メニュー（横）
        * 複数行
            * テキスト
            * HTML要素
    * `<table>`
        * 外部読込
            * tsv, csvから読み込める
        * `<caption>`
        * `<td>`
            * 複数行可
            * 任意の要素可(`<ul><li>`, `<pre><code>`)
        * `<th>`
            * ヘッダが横にある表
            * ヘッダが行と列の先頭や末尾に設定できる
            * ヘッダが一定間隔の行や列に設定できる
        * 複雑なUI化
            * 並べ替え(sort)
            * 絞り込み(filter)
            * ページ(page)
            * スクロール(scroll)
    * 木構造
        * ファイルツリーを表す表示が欲しい
            * `<ul class="file"><li>`で可能か
            * ディレクトリの開閉をするなら`<details>`?
            * jsライブラリを使ってまでやりたくない
            * `\`\`\`filesystem`のようにブロック構文にする？
        * 種類
            * filesystem
            * グループ化 (左右も使ってblock表示(段組))
            * マインドマップ (4方向よりも多く)
            * 樹形図
                * ロジックツリー (左から右へ)
                * 樹形図
    * 関係図(Network)
        * N-Triple
* `<form>`
    * `<input>`
        * `- []`: チェックボックス (`- [x]`)
        * `- ()`: ラジオボタン (`- (x)`)
        * `- [(placeholder)]`, `- [init text]`
            * type='': hidden, text, search, tel, url, email, password, datetime, date, month, week, time, datetime-local, number, range, color, checkbox, radio, file, submit, image, reset, button
            * (flag): autofocus, required, multiple
            * placeholder=''
            * pattern=''
            * min, max, step
            * autocomplete='on': `<datalist><optgroup><option value=''>`
    * `<textarea>`
    * `<keygen>`
    * `<output>`
    * `<progress>`
    * `<meter>`
* チャート、グラフ、ダイアグラム、マインドマップ、UML
    * markdownでやるべきではない?
        * 外部データを読み込んでやるべき?
    * https://qiita.com/ka215/items/a709665cb34c505ccf1f
* メタデータ
    * `<header>`, 
        * `<time>`
        * categoly, tag, 文書タイプ(成果報告、手順書まとめ,...)
        * 関連URL
            * 前提ページ
    * `<footer>`
        * 関連URL
            * 続きページ
* コンテンツ
    * `<audio>`
    * `<video>`

## kbd, samp の併用

HTML5|概要
-----|----
`<kbd>A</kbd>`|Aキー入力
`<kbd>A|B</kbd>`|AまたはBキー入力
`<kbd><kbd>Ctrl</kbd>+<kbd>A</kbd></kbd>`|Ctrl + A キー入力
`<kbd><samp>メニュー項目</samp></kbd>`|システムによって出力された何かを操作させるとき
`<samp><kbd>入力内容</kbd></samp>`|システムによって返された入力内容

AsciiDocでは以下。

```asciidoc
kbd:[Ctrl+T]
```

### キーボード入力方法

名前|en|説明
----|--|----
押す|press|同一のキーを押下してから離すまでの工程
押下する|down|キーを押下する
離す|up|押下しているキーを離す
順押し||複数のキーを順にpressする
長押し||一定時間downしつづける
溜め押し||一定時間downしたあとに離す
同時押し||2つ以上のキーを同時に押す
押下押し||あるキーをdown中に別のキーを押下する

* 格闘ゲームなどではキーを押下するタイミングによってコマンド入力する
* vimなどではモード切替によってキーバインディングを変更している

### markdownでどう書くか

#### 案1

markdown|例
--------|--
`{kbd *}`|`{kbd Ctrl+A}`, `{kbd.vim yy}`, {kbd.vim dD}`
`{time *}`|`<time datetime='2000-01-02 12:34:56.789+0900'>` https://www.w3.org/TR/html5/text-level-semantics.html#the-time-element
`{var *}`|
`{samp *}`|
`{kbd.samp *}`|
`\`\`\`samp`|`\`\`\``で終了。`<pre><samp>`を表す
`{cite *}`|`{cite 表示名}`
`{cite.a *}`|`{cite.a 表示名 URL title属性値`
`{ruby *}`|`{ruby 漢字|かん|じ}`

* 長所: 多様な要素に統一した表記で対応できる。
* 短所: プレーンテキストで表示したときに見づらい(markdownの特性が喪失する)

#### 案2

* `<kbd>*</kbd>`
    * `[*]`: a要素の表記と被る
    * `[[*]]`: 冗長。markdown-it-kbd式。
    * `{*}`: でんでんマークダウンの`<ruby>`と被る
    
#### 案9

AsciiDocにする。

https://asciidoclive.com/edit/scratch/1

markdownより冗長だが多機能。









## 複数行

`<li>`, `<td>`に複数行テキストや複数行のHTML要素を入れたい。

HTMLならできるが、Markdownでどう表現するか。`a`タグの属性値を外出しする記法が参考になりそう。

### a

```markdown
[some]について。

[some]: http://...
```

### li

#### inline bad

```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く
\`\`\`
some code 1.
some code 2.
\`\`\`
1. 実行する
```

順序の番号が途切れてしまう。

#### inline

```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く
+
\`\`\`
some code 1.
some code 2.
\`\`\`
1. 実行する
```

AsciiDocだと`+`で連結できる。

#### 外だし記法

a要素の外だし記法を参考に考えてみた。

```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く{1}
1. 実行する

{1}
    \`\`\`
    some code 1.
    some code 2.
    \`\`\`
```

##### 名前省略

表記された順序で定義する。

```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く{}
1. 実行する
1. 複数行の何か{}

{}
    \`\`\`
    some code 1.
    some code 2.
    \`\`\`
{}
    * item1
    * item2
```

##### ネストできない?

```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く{}
1. 実行する

{}
    \`\`\`
    some code 1.
    some code 2.
    \`\`\`
    {}
{}
    * item1
    * item2
```

非常にわかりづらい。


##### わかりやすくネストするなら？

どんな記法がいいか？


```markdown
# 手順

1. エディタを開く
1. 以下のようなコードを書く
    \`\`\`
    some code 1.
    some code 2.
    \`\`\`
    * item
        * item
    A|B
    -|-
    a|* B
      * BB
    A|* A
      * AA
1. 実行する

{}
    {}
{}
    * item1
    * item2
```

