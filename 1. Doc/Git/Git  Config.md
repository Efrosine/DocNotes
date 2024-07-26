## Setting git for the first time
----
Jalankan beberapa command berikut untuk menyiapkan git
> - [[#tes]]

1. git --version -> check versi dari git (memastikan git berjalan)
2. git config --global user.name
3. git config --global user.email -> mengatur data user
4. Atur path vs code pada global variable
5. git config --global core-editor "code --wait" -> menetapkan vscode sebagai editor bawaan
6. git config --global diff.tool "default-difftool"
7. git config --global difftool.default-difftool.cmd "code --wait --diff \$local \$remote" -> melihat perbedaan di code editor
8. git config --list -> melihat perubahan yang telah diperbuat

## Create git project
----
1. cd 'specific folder' -> tentukan folder untuk project
2. mkdir 'folder name' -> membuat folder baru untuk project git
3. git init -> membuat local repo 


### see more
- [[Git dasar]]
- [[Git What's git]]

![[tesacnsvas.canvas|tesacnsvas]]


