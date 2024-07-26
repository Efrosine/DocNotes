
1. Version Control
	-  Alat untuk merekam perubahan yang terjadi pasa suatu file
	- memungkinkan untuk rollback ke versi sebelumnya
2. Git
	- Distribute Version Control
	- Sistem yang menyimpan semua versi pada local maupun server
3. Repo
	- Project pada git 
	- Harus ada folder untuk repo
	- cd -> change directory
	- mkdir -> make directory
	- code . -> to run vs code in current folder
	- git init -> membuat local repo
	- git status -> melihat state status file
4. 3 state (section)
	- modified ( Directory ) -> tambah, edit, hapus tapi belum di simpan di repo
	- staged ( Staging Area ) -> ditandai untuk di simpan dalam repo
	- committed (Repository )-> tersimpan dalam repo
	- git add -> menambahkan file dari directory ke staging area
	- git commit -> menambahkan file dari staging area ke repo
5. Hash
	- snapshot -> rekaman semua perubahan yang terjadi
	- hash -> kunci (id) yang akan berubah setiap ada perubahan
	- head -> pointer ke hash(commit) yang terakhir
6. config
	- git --version -> memastikan git berjalan (melihat versi)
	- git config --globar user.name 
	- git config --global user.email -> mengatur data user
	- git config --global core-editor "code --wait" -> mengatur editor ke vs code 
	- git config --global diff.tool "default-difftool"
	- git config --global difftool.default-difftool.cmd "code --wait  --diff \$local \$remote"
	- 
1. keyword
	- git add . -> menbahkan semua file dari directory ke staging area
	- git add <file 1> <file 2> < file N > -> file tertentu ke staging area
	- git clean -f -> membatalkan penambahan file yang ada di working directory
	- git restore < nama file > -> membatalkan perubahan(hapus) file di working directory
	- git restore --staged < nama file > -> mengembalikan file dari stage index ke working directory
	- git log -> menampilkan history commit
	- git log --oneline -> menampilkan history commit dengan 1 baris saja
	- git log --oneline -- graph -> menampilkan hubungan antar branch(cabang)
	- git show < hash > -> menampilkan detail commit
	- git diff  -> menampilkan perubahan yang ada di working directory 
	- git diff < hash 1> < hash 2 > compare 2 commit
	-  git difftool < hash 1> < hash 2 > compare 2 commit menggunakan tool
	- git reset --mode < hash > -> mengembalikan pointer ke hash yang ditentukan
	> - --soft -> kembali ke bagian staging
	> - --mixed -> kembali ke bagian directory
	> - --hard -> kembali tanpa apapun
	
	- git commit --ament -m "coment"-> menambahkan file yang ada di staging index saat ini ke commit yang terakhir
	- git checkout hash --namafile -> mengambil perubahan di file tertentu pada commit tertentu dan menaruhnya di staging index
	- git checkout hash -> melihat keadaan pada commit tertentu
	- git revert < hash > -> membuat commit yang berlawanan dari commit yang ditentukan
	- git blame < nama file > -> melihat siapa yang membuat file
	- git config --global alias.< alias > < command > -> membuat command lebih pendek