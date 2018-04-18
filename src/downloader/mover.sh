# 指定ディレクトリにあるファイルを拡張子ごとに振り分ける
target=/tmp/work
#for file in `\find . -name '*.css'`; do
for file in `\find ${target} -maxdepth 1 \( -name \*.css -or -name \*.png -or -name \*.jpg -or -name \*.gif \)`; do
    filename=$(basename ${file})

    [ "${filename}" != 'highlight.min.js' ] && mv $file "/tmp/work/JS.require.20180418132812/src/downloader/highlight/styles/${filename}"
done

for file in `\find . -name '*.js'`; do
    filename=$(basename ${file})
    mv $file "/tmp/work/JS.require.20180418132812/src/downloader/highlight/languages/${filename}"
done
